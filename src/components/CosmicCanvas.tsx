import React, { useEffect, useRef } from "react"

interface CosmicCanvasProps {
  reducedMotion?: boolean
}

export const CosmicCanvas: React.FC<CosmicCanvasProps> = ({
  reducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number y: number active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Generate stars
    const starCount = reducedMotion ? 40 : 130
    interface Star {
      x: number
      y: number
      radius: number
      alpha: number
      alphaChange: number
      color: string
      baseX: number
      baseY: number
    }

    const colors = ["#ffffff", "#bae6fd", "#38bdf8", "#a5f3fc", "#fef08a"]

    const stars: Star[] = Array.from({ length: starCount }, () => {
      const x = Math.random() * width
      const y = Math.random() * height
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        radius: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        alphaChange:
          (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    })

    // Shooting star manager
    interface ShootingStar {
      x: number
      y: number
      length: number
      speed: number
      angle: number
      alpha: number
      active: boolean
    }

    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      alpha: 0,
      active: false,
    }

    let lastShootingStarTime = Date.now()

    const resetShootingStar = () => {
      shootingStar = {
        x: Math.random() * (width * 0.7),
        y: Math.random() * (height * 0.35),
        length: Math.random() * 80 + 60,
        speed: Math.random() * 12 + 10,
        angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
        alpha: 1,
        active: true,
      }
      lastShootingStarTime = Date.now()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]

        if (!reducedMotion) {
          star.alpha += star.alphaChange
          if (star.alpha <= 0.15) {
            star.alpha = 0.15
            star.alphaChange = Math.abs(star.alphaChange)
          } else if (star.alpha >= 0.95) {
            star.alpha = 0.95
            star.alphaChange = -Math.abs(star.alphaChange)
          }

          // Gentle subtle mouse repulsion/gravity
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - star.x
            const dy = mouseRef.current.y - star.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 100) {
              const angle = Math.atan2(dy, dx)
              const force = (100 - dist) * 0.02
              star.x -= Math.cos(angle) * force
              star.y -= Math.sin(angle) * force
            } else {
              star.x += (star.baseX - star.x) * 0.02
              star.y += (star.baseY - star.y) * 0.02
            }
          }
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.alpha
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0
        ctx.shadowColor = star.color
        ctx.fill()
      }

      // Shooting stars
      if (!reducedMotion) {
        const now = Date.now()
        if (
          !shootingStar.active &&
          now - lastShootingStarTime > 7000 + Math.random() * 4000
        ) {
          resetShootingStar()
        }

        if (shootingStar.active) {
          ctx.save()
          ctx.beginPath()
          const tailX =
            shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length
          const tailY =
            shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length

          const grad = ctx.createLinearGradient(
            tailX,
            tailY,
            shootingStar.x,
            shootingStar.y,
          )
          grad.addColorStop(0, "rgba(255, 255, 255, 0)")
          grad.addColorStop(0.7, "rgba(56, 189, 248, 0.4)")
          grad.addColorStop(1, "rgba(255, 255, 255, 0.95)")

          ctx.strokeStyle = grad
          ctx.lineWidth = 1.8
          ctx.moveTo(tailX, tailY)
          ctx.lineTo(shootingStar.x, shootingStar.y)
          ctx.stroke()
          ctx.restore()

          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
          shootingStar.alpha -= 0.012

          if (
            shootingStar.x > width ||
            shootingStar.y > height ||
            shootingStar.alpha <= 0
          ) {
            shootingStar.active = false
          }
        }
      }

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [reducedMotion])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Underlying Cosmic Space Artwork from Reference */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-screen scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('/assets/backgrounds/space-cosmic-bg.png'), url('/assets/backgrounds/space-cosmic-bg.jpg')`,
          backgroundPosition: "center 20%",
        }}
      />

      {/* Atmospheric Space Gradients */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#060b1e]/65 to-[#040714]/95" />

      {/* Upper Deep Indigo / Midnight wash */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[#030612]/90 via-[#060b24]/50 to-transparent" />

      {/* Lower Basalt Horizon subtle glow matching reference magma / crystal colors */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#040714] via-[#050b20]/80 to-transparent" />

      {/* Cyan crystal aura in bottom left */}
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Warm magma glow in bottom right */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-amber-500/8 blur-[130px] pointer-events-none" />

      {/* Electric blue celestial ring glow in center top */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/6 blur-[140px] pointer-events-none" />

      {/* Twinkling starfield canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
