import {
  Project,
  ExperienceItem,
  SkillGroup,
  CommunityItem,
  ImpactMetric,
  Certification,
} from "../types/portfolio"

export const PERSONAL_INFO = {
  name: "Om Songire",
  initials: "OS",
  title: "Generative AI & LLM Applications · AI/ML · Developer Community",
  tagline: "I build AI systems — and help the communities around them grow.",
  location: "Nashik, Maharashtra, India",
  bioSummary:
    "Computer Engineering undergraduate dedicated to building reliable Generative AI systems, context-grounded RAG architectures, and production DevOps pipelines. Bridging the gap between cutting-edge AI research and dependable software, while actively empowering the next generation of engineers through technical community leadership.",
  githubUrl: "https://github.com/Omsongire23",
  linkedinUrl: "https://www.linkedin.com/in/omsongire/",
  email: "omsongire23@gmail.com",
  resumePath: "/resume.pdf",
  backupResumePath: "/assets/Om_Songire_Resume.pdf",
  availability: "Available for AI Engineering & DevOps Opportunities",
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "workshops",
    metric: "6+",
    label: "Technical Events & Workshops",
    description:
      "Led and organized hands-on developer workshops covering Generative AI, Machine Learning, and Cloud foundations.",
    badge: "Speaker & Organizer",
  },
  {
    id: "students",
    metric: "1,000+",
    label: "Students & Developers Reached",
    description:
      "Empowered student engineers across Maharashtra through collaborative bootcamps, code-alongs, and tech meetups.",
    badge: "Ecosystem Impact",
  },
  {
    id: "communities",
    metric: "3",
    label: "Tech Communities Led",
    description:
      "Active leadership roles across GDG Nashik, ML Nashik, and Grafana & Friends Mumbai developer circles.",
    badge: "Community Leadership",
  },
  {
    id: "ai-projects",
    metric: "4+",
    label: "Engineered AI & DevOps Systems",
    description:
      "Developed end-to-end architectures spanning RAG copilots, test automation agents, and forensic vision tools.",
    badge: "Production Systems",
  },
]

export const PROJECTS: Project[] = [
  {
    id: "veriq",
    title: "VERIQ",
    tagline: "Compliance Readiness & Audit-Workflow Automation Platform",
    category: "Generative AI",
    statusBadge: "AI & Enterprise Automation",
    iconType: "shield-check",
    problem:
      "Preparing for enterprise compliance audits (such as ISO standards and SOC 2) is notoriously arduous. Compliance teams drown in unstructured PDF documents, manual evidence correlation, and time-consuming clause cross-checking.",
    solution:
      "VERIQ automates compliance readiness by combining document parsing, high-dimensional vector search, and LLM reasoning. It maps unstructured audit documentation against standard frameworks, performs automated evidence validation, and flags discrepancies with verifiable page citations.",
    architecture:
      "FastAPI microservices pipeline coupled with ChromaDB vector indexing. Leverages LangChain orchestration for retrieval verification and a responsive React frontend styled with Tailwind CSS.",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "ChromaDB",
      "LangChain",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Semantic cross-referencing of enterprise evidence against regulatory audit clauses",
      "Context-grounded citations preventing hallucinations during audit validation",
      "Automated readiness scoring and evidence gap analysis dashboards",
      "High-throughput document chunking and vector storage with ChromaDB",
    ],
    githubUrl: "https://github.com/Omsongire23/VERIQ",
    featured: true,
  },
  {
    id: "appex",
    title: "APPEX AI Test Framework",
    tagline: "Autonomous Playwright QA & Self-Healing Test Automation",
    category: "Automation & QA",
    statusBadge: "Agentic Test Automation",
    iconType: "bot",
    problem:
      "Traditional End-to-End browser test automation suites suffer from high maintenance overhead. Subtle DOM structural modifications and dynamic CSS selectors cause fragile test suites to fail repeatedly in CI/CD pipelines.",
    solution:
      "APPEX is an intelligent QA automation framework that synthesizes resilient Playwright test workflows directly from user stories and acceptance criteria. It introduces self-healing selector routines that dynamically inspect DOM mutations during test execution to recover broken element bindings.",
    architecture:
      "Built on Python and Playwright with an agentic LLM layer for selector fallback resolution, orchestrated via PyTest and fully integrated into GitHub Actions CI workflows.",
    tags: [
      "Python",
      "Playwright",
      "LLM Agents",
      "PyTest",
      "GitHub Actions",
      "CI/CD",
    ],
    keyFeatures: [
      "Automated Playwright script generation from declarative natural language test cases",
      "Runtime self-healing DOM selector fallback engine mitigating brittle CSS breakage",
      "Dynamic synthetic test data synthesis tailored to edge-case verification",
      "Seamless headless CI/CD integration with artifact tracing and video recording",
    ],
    githubUrl: "https://github.com/Omsongire23",
    featured: true,
  },
  {
    id: "edutech-assistant",
    title: "EdutechAssistant",
    tagline: "Context-Aware RAG Educational Tutor with Verified Citations",
    category: "Generative AI",
    statusBadge: "Retrieval-Augmented GenAI",
    iconType: "graduation",
    problem:
      "Standard conversational AI models often deliver speculative answers or complete hallucinations when students ask deep questions about specialized course syllabi and academic textbooks.",
    solution:
      "EdutechAssistant enforces strict textbook grounding using Retrieval-Augmented Generation (RAG). Queries are semantically matched against a verified educational corpus, providing multi-turn conversational tutoring accompanied by source chapter citations and adaptive practice questions.",
    architecture:
      "Google Gemini API for contextual answer generation, LangChain for memory and retrieval management, and FAISS for dense vector similarity search over educational materials.",
    tags: [
      "Python",
      "Google Gemini API",
      "LangChain",
      "FAISS",
      "Streamlit",
      "Vector Search",
    ],
    keyFeatures: [
      "Strictly grounded textbook Q&A with verifiable chapter and paragraph source citations",
      "Context-aware conversational memory supporting continuous follow-up clarification",
      "Dynamic quiz generation calibrated to student comprehension levels",
      "Sub-second vector retrieval over large textbook indices with FAISS",
    ],
    githubUrl: "https://github.com/Omsongire23",
    featured: true,
  },
  {
    id: "digiton",
    title: "Digiton",
    tagline: "Digital Forensic Analysis & Image Tampering Detection",
    category: "Computer Vision",
    statusBadge: "Computer Vision & Forensics",
    iconType: "scan",
    problem:
      "Digital images are increasingly subjected to malicious manipulation, photo splicing, and synthetic forgery, complicating media verification and cyber investigation.",
    solution:
      "Digiton provides automated forensic analysis of digital images. It employs Error Level Analysis (ELA) to expose compression rate discrepancies, analyzes EXIF metadata integrity, and detects localized pixel noise anomalies that indicate spliced or manipulated regions.",
    architecture:
      "Python backend powered by OpenCV for image processing transformations, scikit-learn and NumPy for pixel variance statistical computation, exposed via FastAPI services.",
    tags: [
      "Python",
      "OpenCV",
      "scikit-learn",
      "NumPy",
      "FastAPI",
      "Image Forensics",
    ],
    keyFeatures: [
      "Error Level Analysis (ELA) heatmaps spotlighting resaved and spliced image regions",
      "EXIF metadata parsing and tampering anomaly detection",
      "Pixel intensity variance and gradient magnitude consistency evaluation",
      "FastAPI endpoints for batch image inspection and report generation",
    ],
    githubUrl: "https://github.com/Omsongire23",
    featured: false,
  },
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "deboistech",
    role: "DevOps Intern",
    organization: "Deboistech IT Solutions",
    period: "June 2026 – September 2026",
    type: "Internship",
    location: "Remote",
    statusBadge: "Cloud & Infrastructure",
    summary:
      "Engineered automated cloud infrastructure and deployment workflows, managed containerized microservices, and applied feature engineering on telemetry data to improve system reliability.",
    achievements: [
      "Designed and maintained automated CI/CD pipelines using GitHub Actions and Jenkins, reducing manual deployment turnaround time.",
      "Managed Docker containerization and orchestrated deployment manifests for Kubernetes clusters on AWS infrastructure (EC2, S3).",
      "Performed feature engineering on system telemetry and monitoring metrics to identify operational anomalies and resource bottlenecks.",
      "Automated routine Linux system administration and maintenance workflows through robust Bash shell scripts.",
    ],
    technologies: [
      "CI/CD",
      "Linux",
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "AWS",
      "Feature Engineering",
    ],
  },
  {
    id: "edunet",
    role: "Machine Learning Intern",
    organization: "Edunet Foundation (IBM SkillsBuild)",
    period: "January 2025 – March 2025",
    type: "Internship",
    location: "Remote",
    statusBadge: "AI & Data Science",
    summary:
      "Developed predictive machine learning pipelines, conducted exploratory data analysis, and automated model evaluation for structured real-world data problems.",
    achievements: [
      "Trained and evaluated supervised machine learning models using Python, scikit-learn, Pandas, and NumPy for predictive benchmarks.",
      "Conducted rigorous exploratory data analysis (EDA), handling data normalization, missing values, and feature selection.",
      "Automated evaluation pipelines calculating precision, recall, F1-scores, and cross-validation metrics across datasets.",
      "Documented model behaviors and generated data visualization dashboards to communicate empirical outcomes.",
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "genai",
    title: "Generative AI and LLM Applications",
    description:
      "Retrieval-augmented systems, context engineering, and language model integration",
    skills: [
      {
        name: "Google Gemini API",
        category: "Generative AI",
        level: "Advanced",
        usageContext: "Used in EdutechAssistant for context reasoning",
      },
      {
        name: "RAG Architecture",
        category: "Generative AI",
        level: "Advanced",
        usageContext: "Core architecture for document-grounded copilots",
      },
      {
        name: "LangChain",
        category: "Generative AI",
        level: "Advanced",
        usageContext: "Chains, document loaders, and memory management",
      },
      {
        name: "ChromaDB",
        category: "Generative AI",
        level: "Advanced",
        usageContext: "Vector store for VERIQ audit document chunks",
      },
      {
        name: "FAISS",
        category: "Generative AI",
        level: "Proficient" as any,
        usageContext: "Dense similarity vector indexing in EdutechAssistant",
      },
      {
        name: "Sentence Transformers",
        category: "Generative AI",
        level: "Advanced",
        usageContext: "Dense text embeddings for semantic search",
      },
      {
        name: "Prompt Engineering",
        category: "Generative AI",
        level: "Core",
        usageContext: "System instructions, few-shot prompting, JSON schemas",
      },
    ],
  },
  {
    id: "prog",
    title: "Programming and Development",
    description: "Core languages and foundational engineering toolchains",
    skills: [
      {
        name: "Python",
        category: "Programming",
        level: "Core",
        usageContext:
          "Primary language for AI/ML, backend, and automation scripts",
      },
      {
        name: "SQL",
        category: "Programming",
        level: "Advanced",
        usageContext: "Relational data querying, indexing, and schema design",
      },
      {
        name: "JavaScript / TypeScript",
        category: "Programming",
        level: "Advanced",
        usageContext: "Full-stack UI and frontend application development",
      },
      {
        name: "Linux / Bash",
        category: "Programming",
        level: "Core",
        usageContext: "System administration, process monitoring, automation",
      },
      {
        name: "Git & GitHub",
        category: "Programming",
        level: "Core",
        usageContext:
          "Version control, branch protection, collaborative workflows",
      },
      {
        name: "C++",
        category: "Programming",
        level: "Familiar",
        usageContext: "Data structures, algorithms, and systems fundamentals",
      },
    ],
  },
  {
    id: "aiml",
    title: "AI/ML and Data",
    description:
      "Statistical modeling, computer vision, and structured data engineering",
    skills: [
      {
        name: "scikit-learn",
        category: "AI/ML",
        level: "Advanced",
        usageContext:
          "Classification, regression, and model evaluation pipelines",
      },
      {
        name: "Pandas",
        category: "AI/ML",
        level: "Core",
        usageContext:
          "Data wrangling, feature engineering, and exploratory data analysis",
      },
      {
        name: "NumPy",
        category: "AI/ML",
        level: "Core",
        usageContext:
          "Vectorized mathematical operations and matrix manipulations",
      },
      {
        name: "OpenCV",
        category: "AI/ML",
        level: "Advanced",
        usageContext:
          "Image transformations, Error Level Analysis, pixel matrices",
      },
      {
        name: "Feature Engineering",
        category: "AI/ML",
        level: "Advanced",
        usageContext: "Telemetry signals and tabular data transformations",
      },
      {
        name: "Data Preprocessing",
        category: "AI/ML",
        level: "Core",
        usageContext:
          "Imputation, scaling, categorical encoding, outlier handling",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend and Integration",
    description:
      "High-performance microservices, API architecture, and web integration",
    skills: [
      {
        name: "FastAPI",
        category: "Backend",
        level: "Advanced",
        usageContext:
          "High-speed asynchronous Python REST APIs for AI backends",
      },
      {
        name: "RESTful API Design",
        category: "Backend",
        level: "Core",
        usageContext: "Resource-oriented architecture, status codes, OpenAPI",
      },
      {
        name: "React",
        category: "Backend",
        level: "Advanced",
        usageContext: "Dynamic component architectures and state management",
      },
      {
        name: "Node.js",
        category: "Backend",
        level: "Familiar",
        usageContext: "Tooling runtimes and service scripting",
      },
      {
        name: "Firebase",
        category: "Backend",
        level: "Familiar",
        usageContext: "Authentication, real-time database, and cloud storage",
      },
      {
        name: "Tailwind CSS",
        category: "Backend",
        level: "Core",
        usageContext:
          "Modern responsive utility-first styling and theme systems",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps, Cloud, and Automation",
    description:
      "Container orchestration, CI/CD pipelines, and cloud infrastructure",
    skills: [
      {
        name: "Docker",
        category: "DevOps",
        level: "Advanced",
        usageContext: "Multi-stage container builds and microservice isolation",
      },
      {
        name: "Kubernetes",
        category: "DevOps",
        level: "Proficient" as any,
        usageContext: "Cluster orchestration, deployments, service discovery",
      },
      {
        name: "GitHub Actions",
        category: "DevOps",
        level: "Advanced",
        usageContext: "Continuous integration, automated testing, and releases",
      },
      {
        name: "Jenkins",
        category: "DevOps",
        level: "Proficient" as any,
        usageContext: "Automated build pipelines and deployment automation",
      },
      {
        name: "AWS (EC2, S3)",
        category: "DevOps",
        level: "Proficient" as any,
        usageContext: "Cloud compute provisioning, IAM, and object storage",
      },
      {
        name: "Linux Administration",
        category: "DevOps",
        level: "Core",
        usageContext: "Server hardening, daemon management, cron automation",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools and Frameworks",
    description:
      "Testing suites, developer environments, and productivity toolchains",
    skills: [
      {
        name: "Playwright",
        category: "Tools",
        level: "Advanced",
        usageContext:
          "Automated browser QA and agentic test execution in APPEX",
      },
      {
        name: "PyTest",
        category: "Tools",
        level: "Advanced",
        usageContext:
          "Unit testing, fixture management, parameterized assertions",
      },
      {
        name: "Postman",
        category: "Tools",
        level: "Core",
        usageContext: "API testing, collection runs, and documentation",
      },
      {
        name: "VS Code",
        category: "Tools",
        level: "Core",
        usageContext:
          "Primary IDE with integrated debugging and remote containers",
      },
      {
        name: "Vite",
        category: "Tools",
        level: "Advanced",
        usageContext: "Modern lightning-fast frontend bundling and hot reload",
      },
    ],
  },
  {
    id: "learning",
    title: "Currently Learning",
    description:
      "Active exploration areas in modern AI systems and cloud observability",
    skills: [
      {
        name: "Multi-Agent Frameworks (LangGraph & CrewAI)",
        category: "Learning",
        level: "Active Study",
        usageContext:
          "Autonomous collaborative agent loops and state graph workflows",
      },
      {
        name: "Cloud Observability (Grafana & Prometheus)",
        category: "Learning",
        level: "Active Study",
        usageContext:
          "Distributed metrics gathering and live telemetry dashboards",
      },
      {
        name: "LLM Fine-Tuning & Quantization (LoRA / GGUF)",
        category: "Learning",
        level: "Active Study",
        usageContext:
          "Resource-efficient parameter tuning and local edge inference",
      },
    ],
  },
]

export const COMMUNITY_ROLES: CommunityItem[] = [
  {
    id: "gdg-nashik",
    role: "Core Team Member",
    organization: "GDG Nashik (Google Developer Groups)",
    scope: "Nashik Tech Ecosystem",
    period: "Active",
    description:
      "Actively involved in organizing major developer gatherings including DevFest Nashik, Google I/O Extended, and hands-on GenAI workshops. Facilitating technical talks, speaker coordination, and fostering connections among local software professionals and students.",
    impactHeadline:
      "Organized flagship DevFest gatherings and practical AI technical sessions.",
    initiatives: [
      "Helped organize DevFest Nashik, drawing hundreds of engineering students and industry pros",
      "Facilitated hands-on workshops on Google Cloud, Gemini APIs, and modern web architectures",
      "Mentored first-time attendees in tech community engagement and hackathons",
    ],
    tags: ["DevFest", "Google Cloud", "GenAI", "Community Organizing"],
  },
  {
    id: "ml-nashik",
    role: "Campus Lead",
    organization: "ML Nashik",
    scope: "Student Developer Chapter",
    period: "Active",
    description:
      "Leading the campus machine learning chapter to demystify artificial intelligence for undergraduates. Conducting introductory to intermediate workshops on Python, data science fundamentals, and real-world ML workflows.",
    impactHeadline:
      "Conducted hands-on ML workshops reaching hundreds of student developers.",
    initiatives: [
      "Conducted interactive coding bootcamps on scikit-learn, Pandas, and exploratory data analysis",
      "Guided student study groups exploring Generative AI and open-source models",
      "Hosted collaborative project-building sessions bridging academic theory with practical code",
    ],
    tags: [
      "Machine Learning",
      "Campus Leadership",
      "Python Bootcamps",
      "Student Mentorship",
    ],
  },
  {
    id: "grafana-mumbai",
    role: "Co-organizer",
    organization: "Grafana & Friends Mumbai",
    scope: "Mumbai & Regional Chapters",
    period: "Active",
    description:
      "Assisting in organizing meetups dedicated to modern observability, cloud metrics, log aggregation, and Prometheus / Grafana stacks. Connecting DevOps practitioners and system engineers.",
    impactHeadline:
      "Co-hosting meetups focused on modern cloud observability and telemetry.",
    initiatives: [
      "Assisted in community logistics and venue coordination for Mumbai observability meetups",
      "Facilitated discussions on production telemetry pipelines, metrics collection, and alerting",
      "Expanded community reach across student developers interested in DevOps infrastructure",
    ],
    tags: ["Grafana", "Prometheus", "Cloud Observability", "DevOps Meetups"],
  },
]

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
  institution: "Computer Engineering Department",
  location: "Nashik, Maharashtra, India",
  graduation: "Expected 2026",
  status: "Undergraduate",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems & Linux",
    "Machine Learning & Artificial Intelligence",
    "Computer Networks & Distributed Systems",
    "Cloud Computing & DevOps",
  ],
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ibm-edunet",
    title: "AI & Data Science Professional Certification",
    issuer: "Edunet Foundation & IBM SkillsBuild",
    period: "2025",
    verificationBadge: "Verified Credential",
    skillsCovered: [
      "Supervised Machine Learning",
      "Data Cleaning & Preprocessing",
      "Model Evaluation",
      "Python for AI",
    ],
  },
  {
    id: "aws-cloud",
    title: "Cloud Foundations & Infrastructure Training",
    issuer: "AWS Academy / Cloud Curriculum",
    period: "2024 - 2025",
    verificationBadge: "Coursework Verified",
    skillsCovered: [
      "AWS EC2 & S3",
      "Cloud Architecture Principles",
      "IAM & Security",
      "Scalable Systems",
    ],
  },
  {
    id: "genai-mastery",
    title: "Generative AI & LLM Applications Specialist",
    issuer: "Developer Community & Tech Initiatives",
    period: "2024 - 2025",
    verificationBadge: "Practical Mastery",
    skillsCovered: [
      "Retrieval-Augmented Generation (RAG)",
      "Vector Stores (ChromaDB, FAISS)",
      "Prompt Engineering",
      "LangChain",
    ],
  },
]
