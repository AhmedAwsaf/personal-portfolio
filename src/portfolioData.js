/**
 * ============================================================================
 * AHMED AWSAF — PORTFOLIO CONTENT & MASTER DATA FILE
 * ============================================================================
 * 
 * This is the central source of truth for all content shown across the portfolio website.
 * You can edit any field, add new projects, update experiences, or modify text in this
 * single file, and all changes will automatically reflect across the entire site.
 * 
 * Images and CV documents are loaded from /content/ (copied from the content folder).
 */

export const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL & PROFILE INFORMATION
  // --------------------------------------------------------------------------
  personal: {
    fullName: "Ahmed Awsaf",
    preferredName: "Awsaf",
    role: "Operations Analyst, Growth Operations",
    currentCompany: "Commure Bangladesh (Augmedix)",
    companyDomain: "Healthcare AI & Revenue Benchmarking Operations",
    location: "Niketan, Dhaka, Bangladesh",
    email: "officialawsaf@gmail.com",
    phone: "+8801632663362",
    github: "https://github.com/AhmedAwsaf",
    linkedin: "https://www.linkedin.com/in/awsaf-ahmed/",
    cvUrl: "/content/CV___Remote.pdf",

    summary:
      "Software Engineer and Data Analyst with around 4 years of experience building production-grade APIs, data pipelines, and automated workflows. Proficient in Python and experienced applying it to AI quality assessment in a US health-tech environment, with a strong foundation in FastAPI, PostgreSQL, and cloud deployment. Driven to use technology for social good, eager to contribute to mission-led platforms that improve outcomes for vulnerable communities.",

    avatars: {
      portrait: "/content/images/profile/AhmedAwsaf.jpg",
      cartoon1: "/content/images/profile/CartoonAwsaf.png",
      cartoon2: "/content/images/profile/CartoonAwsaf2.png",
      icon: "/content/images/profile/CartoonAwsafIcon.png",
      iconSvg: "/content/images/profile/CartoonAwsafIcon.svg",
    },

    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Production Projects", value: "9+" },
      { label: "B.Sc. CGPA", value: "3.87" },
      { label: "Agnostic", value: "Language" },
    ],

    philosophy: [
      {
        title: "Technology for Social Impact",
        description:
          "Passionate about utilizing software, AI, and data science to improve outcomes for underserved communities, healthcare patients, and civic infrastructure.",
        icon: "HeartHandshake",
      },
      {
        title: "Data Integrity & Automation First",
        description:
          "Committed to eliminating tedious manual overhead by designing self-healing, automated verification loops and robust testing harnesses.",
        icon: "ShieldCheck",
      },
      {
        title: "Full-Stack Craftsmanship",
        description:
          "Deep appreciation for end-to-end design—from crafting fluid, responsive interfaces (Next.js, React, Tailwind CSS) to architecting low-latency server APIs (FastAPI, Express.js, PostgreSQL).",
        icon: "Layers",
      },
      {
        title: "Practical Applied Machine Learning",
        description:
          "Experienced in deploying state-of-the-art vision and sequence models (YOLO v11, Computer Vision, Digital Twin simulations) to solve physical and operational problems.",
        icon: "Cpu",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 2. WORK EXPERIENCE
  // --------------------------------------------------------------------------
  experience: [
    {
      id: "augmedix",
      company: "Commure Bangladesh (Augmedix)",
      role: "Operations Analyst, Growth Operations",
      period: "January 2026 – Present",
      location: "Tejgaon, Dhaka",
      domain: "Healthcare AI & Revenue Benchmarking Operations",
      type: "Full-time",
      featured: true,
      description:
        "Contributed to revenue benchmarking operations, developed automated reporting workflows and dashboards, and built AI quality-control systems evaluating clinical documentation.",
      responsibilities: [
        "Actively contributed to revenue benchmarking operations, supporting data analysis, benchmarking activities, and reporting processes.",
        "Developed automated reporting workflows and dashboards to support revenue benchmarking operations, streamlining data processing and reporting activities.",
        "Leveraged Python, SQL, and Selenium to automate repetitive operational tasks and improve reporting efficiency.",
        "Designed and developed automated AI quality-control workflows using Python, JavaScript, SQL, and OpenAI APIs to evaluate AI-generated clinical documentation.",
        "Established automated evaluation frameworks and quality metrics to identify inconsistencies in AI-generated clinical notes.",
        "Replaced manual clinical documentation review processes with automated quality-control workflows, reducing QA workload by 30%.",
      ],
      techStack: ["Python", "SQL", "Selenium", "JavaScript", "OpenAI APIs", "Workflow Automation", "Benchmarking Dashboards"],
    },
    {
      id: "masroors",
      company: "Masroors PLLC",
      role: "Full-Stack Developer (Remote)",
      period: "July 2023 – August 2025",
      location: "Chandler, AZ, USA (Remote)",
      domain: "Legal Technology, Case Management & Client Portal",
      type: "Remote Contract",
      website: "https://www.masroors.com/",
      featured: true,
      description:
        "US legal firm providing immigration and business law services. Engineered backend microservices, real-time client intake pipelines, and responsive portal front-ends.",
      responsibilities: [
        "Engineered robust REST APIs and microservices with Python (FastAPI) and PostgreSQL/NeonDB to manage dynamic legal case workflows and client intake.",
        "Designed custom SQL-based business intelligence and reporting queries ensuring consistent, real-time tracking across client filing statuses and document verifications.",
        "Built responsive, accessible front-ends using React and Next.js, boosting page speeds and optimizing document upload pipelines for non-technical clients.",
        "Implemented secure JWT-based role-based access control (RBAC), end-to-end data encryption for confidential client filings, and automated deployment pipelines.",
      ],
      techStack: ["Next.js", "React", "FastAPI", "Python", "PostgreSQL", "NeonDB", "Tailwind CSS", "Firebase"],
    },
    {
      id: "aaloc",
      company: "Aaloc Media Ltd.",
      role: "Project Lead",
      period: "2024 – 2025",
      location: "Mohammadpur, Dhaka, Bangladesh",
      domain: "Media, Operations & Enterprise Resource Planning (ERP)",
      type: "Lead",
      featured: false,
      description:
        "Led the architectural design and operational development of an in-house Enterprise Resource Planning (ERP) platform aimed at streamlining operational workflows, asset management, and project tracking.",
      responsibilities: [
        "Architected custom ERP modules connecting production asset tracking, human capital management, and billing.",
        "Managed cross-functional teams spanning software engineers, UI/UX designers, and business managers in Agile sprints.",
        "Formulated technical roadmaps and modernized operational infrastructure to eliminate departmental silos.",
      ],
      techStack: ["System Architecture", "Full-Stack Web", "Agile Management", "ERP"],
    },
    {
      id: "fpp",
      company: "FPP Consultancy",
      role: "Full-Stack Developer",
      period: "July 2022 – April 2023",
      location: "Niketan, Dhaka, Bangladesh",
      domain: "Educational Technology, Assessment & Intranet Infrastructure",
      type: "Contract",
      featured: false,
      description:
        "Architected and deployed an offline-capable, high-reliability examination management system engineered to execute securely over local area networks (LAN) without active internet connectivity.",
      responsibilities: [
        "Built an offline-capable examination engine using Node.js, MySQL, and vanilla JavaScript for high reliability over LAN environments.",
        "Configured and benchmarked MySQL database schemas to handle concurrent student submissions with zero data loss and sub-second transaction times.",
        "Authored clean vanilla JavaScript interfaces ensuring maximum compatibility with low-spec legacy client machines.",
      ],
      techStack: ["Node.js", "Express.js", "MySQL", "Vanilla JavaScript", "LAN Deployment"],
    },
    {
      id: "freelance",
      company: "Freelance / Contractual Developer",
      role: "Contractual Developer",
      period: "2021 – 2023",
      location: "Dhaka, Bangladesh",
      domain: "Intranet Infrastructure, Networking, Custom Web Apps",
      type: "Contract",
      featured: false,
      description:
        "Designed private intranet deployments with RAID storage, captive portal Wi-Fi authentication systems, and localized offline learning management modules.",
      responsibilities: [
        "Designed and provisioned localized server environments featuring RAID redundancy to guarantee continuous data availability.",
        "Configured captive portal authentication systems for managed Wi-Fi access in physical spaces.",
        "Built localized PC-based offline testing and learning management modules for students preparing for competitive examinations.",
      ],
      techStack: ["Linux Servers", "RAID Storage", "Captive Portals", "Python", "Node.js"],
    },
  ],

  // --------------------------------------------------------------------------
  // 3. RESEARCH & CAPSTONE THESIS
  // --------------------------------------------------------------------------
  research: {
    title: "Digital Twin Simulation for Traffic Infrastructure Management in Bangladesh",
    documentType: "B.Sc. Capstone Thesis",
    year: "2025",
    institution: "Department of Computer Science and Engineering, BRAC University",
    repository: "Ayesha Abed Library Institutional Repository, BRAC University",
    handleUrl: "http://hdl.handle.net/10361/26321",
    citation:
      "Awsaf, A., Hossain, S., Hassan, P. T., Ramiz, Z., & Ul Islam, M. A. (2025). Digital Twin Simulation for Traffic Infrastructure Management in Bangladesh. Ayesha Abed Library Repository, BRAC University.",
    image: "/content/images/research/Research1.png",

    abstract:
      "Urban traffic congestion in developing nations like Bangladesh presents unique, highly non-linear challenges that traditional lane-based simulation models fail to accurately capture. Due to irregular vehicle movement patterns, heterogeneous traffic composition (bicycles, rickshaws, auto-rickshaws, buses, and private cars sharing the same road space), and lane indiscipline, conventional western traffic models break down. This research formulates and implements a novel Digital Twin Simulation framework tailored specifically to the chaotic conditions of Bangladeshi traffic infrastructure. By coupling cutting-edge computer vision (YOLO v11) with the Unity physics and game engine, the system creates a live, high-fidelity virtual replica of physical intersections, enabling city planners and civil engineers to perform predictive simulation, bottleneck identification, and infrastructure stress-testing before breaking ground.",

    keyContributions: [
      "Heterogeneous Traffic Adaptation: Resolved the mismatch between standard homogeneous traffic models and non-lane-based traffic behaviors typical of South Asian cities.",
      "Computational Efficiency: Leveraged YOLO v11's optimized inference speeds to run tracking pipelines on standard hardware without requiring supercomputing clusters.",
      "Interactive Visual Feedback: Provided urban planners with an intuitive 3D representation alongside quantitative congestion analytics.",
      "Official Academic Archival: The research paper and full documentation are officially cataloged in the BRAC University institutional repository under permanent handle 10361/26321.",
    ],

    architecture: [
      {
        step: "1. Computer Vision Layer",
        tech: "YOLO v11, OpenCV, Python",
        detail:
          "Trained on custom Bangladeshi street datasets featuring localized vehicular classes (CNG three-wheelers, legunas, cycle rickshaws, non-standard buses). Utilized centroid tracking & Kalman filter state estimation for velocity vectors and headway distance.",
      },
      {
        step: "2. Digital Twin in Unity",
        tech: "Unity 3D Engine, C#",
        detail:
          "Built a 3D simulation environment in Unity recreating high-density Dhaka road intersections with realistic road textures, elevations, and collision boundaries, mirroring real-time agents.",
      },
      {
        step: "3. Scenario & Intervention Testing",
        tech: "WebSockets, REST API, Analytics",
        detail:
          "Tested dynamic traffic light timing adjustments based on real-time vehicle density, physical lane dividers separating motorized and non-motorized vehicles, and automated rerouting suggestions.",
      },
    ],

    coAuthors: [
      "Ahmed Awsaf (Author & Simulation Architect)",
      "S. Hossain",
      "P. T. Hassan",
      "Z. Ramiz",
      "M. A. Ul Islam",
    ],

    techStack: ["YOLO v11", "OpenCV", "Python", "Unity Engine", "C#", "WebSockets", "Pandas", "NumPy"],
  },

  // --------------------------------------------------------------------------
  // 4. EDUCATION
  // --------------------------------------------------------------------------
  education: [
    {
      institution: "BRAC University",
      degree: "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
      period: "August 2021 – September 2025",
      location: "Merul Badda, Dhaka, Bangladesh",
      cgpa: "3.87 / 4.00",
      honor: "Highest Distinction",
      highlights: [
        "Conferred Highest Distinction upon graduation in recognition of outstanding academic consistency.",
        "Thesis: Digital Twin Simulation for Traffic Infrastructure Management in Bangladesh (YOLO v11 + Unity).",
        "Key Coursework: Algorithms, Data Structures, Operating Systems, Database Systems, Computer Networks, Machine Learning, Artificial Intelligence, Software Engineering.",
      ],
    },
    {
      institution: "Scholastica",
      degree: "Cambridge International A Levels",
      period: "August 2019 – August 2021",
      location: "Uttara, Dhaka, Bangladesh",
      cgpa: "5.0 / 5.0",
      honor: "High Honors",
      highlights: [
        "Core Subjects: Mathematics, Physics, Chemistry.",
        "President, Scholastica Music Club (2019 – 2021): Led musical ensembles and organized inter-school events.",
        "Director, SCHOMUN (Scholastica Model United Nations, 2019 – 2021): Managed committee logistics and delegate debate proceedings.",
      ],
    },
    {
      institution: "Scholastica",
      degree: "Cambridge International O Levels",
      period: "August 2017 – August 2019",
      location: "Uttara, Dhaka, Bangladesh",
      cgpa: "5.0 / 5.0",
      honor: "High Honors",
      highlights: [
        "Best Performer Award (2019): Conferred by Scholastica as the Batch Topper across Cambridge O-Level candidates.",
        "The Daily Star Award (2019): Prestigious national academic award for outstanding, world-class results in Cambridge O-Level Examinations.",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 5. AWARDS & HONORS
  // --------------------------------------------------------------------------
  awards: [
    {
      year: "2025",
      title: "Highest Distinction",
      issuer: "BRAC University",
      category: "Academic Excellence",
      description:
        "Conferred upon graduation for achieving a cumulative GPA of 3.87 / 4.00 in B.Sc. in Computer Science & Engineering.",
    },
    {
      year: "2024",
      title: "Second Runner-Up",
      issuer: "BRACU IntraHacktive 1.0 Hackathon",
      category: "Mobile Application Development",
      description:
        "Awarded for designing and building BossClub, a collaborative Android networking application developed with Kotlin KTX and Jetpack Compose.",
    },
    {
      year: "2019",
      title: "The Daily Star Award",
      issuer: "The Daily Star & Cambridge Assessment",
      category: "National Academic Award",
      description:
        "Prestigious national honor recognizing outstanding top-percentile academic performance in Cambridge O-Level Examinations.",
    },
    {
      year: "2019",
      title: "Best Performer Award (Batch Topper)",
      issuer: "Scholastica",
      category: "Valedictorian / Batch Honor",
      description:
        "Conferred as the top academic performer across the entire graduating Cambridge O-Level cohort at Scholastica.",
    },
  ],

  // --------------------------------------------------------------------------
  // 6. TECHNICAL SKILLS & MATRIX
  // --------------------------------------------------------------------------
  skills: {
    languages: [
      { name: "Python", level: "Expert", useCase: "FastAPI, Django, Data Ops, Scraping, AI Testing, OpenGL" },
      { name: "Go (Golang)", level: "Advanced", useCase: "High-performance systems, Dynago REST engine, Wazero runtime, concurrency" },
      { name: "SQL", level: "Advanced", useCase: "PostgreSQL, MySQL, analytical queries, performance tuning" },
      { name: "JavaScript (ES6+)", level: "Advanced", useCase: "React, Node.js, Express, interactive UI & DOM" },
      { name: "TypeScript", level: "Advanced", useCase: "Type-safe React & Next.js web application architecture" },
      { name: "Kotlin", level: "Proficient", useCase: "Android apps with Jetpack Compose & Kotlin KTX" },
      { name: "C#", level: "Proficient", useCase: "Game mechanics, 3D physics, simulation in Unity" },
      { name: "Java", level: "Intermediate", useCase: "OOP systems, algorithmic implementations" },
      { name: "C++ / C", level: "Intermediate", useCase: "Data structures, memory management, algorithms" },
    ],
    frameworks: [
      { name: "Dynago Engine", category: "Backend" },
      { name: "Wazero (Wasm)", category: "Runtime" },
      { name: "FastAPI", category: "Backend" },
      { name: "Next.js", category: "Full-Stack" },
      { name: "React 19", category: "Frontend" },
      { name: "Node.js & Express.js", category: "Backend" },
      { name: "Django", category: "Backend" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Jetpack Compose", category: "Mobile" },
      { name: "Unity Engine", category: "Gaming" },
      { name: "Vite.js", category: "Tooling" },
      { name: "OpenGL", category: "Graphics" },
    ],
    databases: [
      { name: "PostgreSQL", desc: "Production-grade schemas, logical replication (CDC), json_build_object aggregation, connection pooling" },
      { name: "Redis", desc: "In-memory caching, TTL keys, pub/sub invalidation, high-throughput caching" },
      { name: "NeonDB", desc: "Serverless Postgres with instant branching & autoscaling" },
      { name: "MySQL", desc: "Transactional schemas, local network databases, query optimization" },
      { name: "MongoDB", desc: "NoSQL document store, dynamic schemaless JSON data modeling" },
      { name: "Firebase / Firestore", desc: "Real-time synchronization, serverless auth, client-side DB" },
    ],
    toolsAndDevOps: [
      "Google Cloud Platform (GCP)",
      "Docker & Docker Compose",
      "WebAssembly (Wazero)",
      "Git & GitHub",
      "Linux (Ubuntu/Debian)",
      "Playwright & Selenium",
      "BeautifulSoup",
      "YOLO v11 & OpenCV",
      "Android SDK",
      "Postman",
      "Figma",
    ],
  },

  // --------------------------------------------------------------------------
  // 7. COLLABORATORS & TEAMMATES
  // --------------------------------------------------------------------------
  collaborators: [
    {
      id: "zaima",
      name: "Zaima Mashiat",
      github: "https://github.com/zaimamashiat",
      projects: ["BossClub (Android Hackathon App)", "Fitness Matrix (MERN App)"],
    },
    {
      id: "alvee",
      name: "Abrar Jahin Alvee",
      github: "https://github.com/zaimamashiat",
      projects: ["BossClub (Android Hackathon App)"],
    },
    {
      id: "eqra",
      name: "Zarin Saiyara Eqra",
      github: "https://github.com/Eqrasyara",
      projects: ["CookBook (Full-Stack MERN Recipe App)"],
    },
    {
      id: "aboni",
      name: "Tayeba Rounak Aboni",
      github: "https://github.com/TayebaRounak",
      projects: ["CookBook (Full-Stack MERN Recipe App)"],
    },
    {
      id: "tasnu",
      name: "Tasnia Taslim Hossain",
      projects: ["Fitness Matrix (Health Tracking SaaS)"],
    },
    {
      id: "shafkat",
      name: "Shafkat Zahir",
      github: "https://github.com/SafkatZ",
      projects: ["Fitness Matrix (Health Tracking SaaS)"],
    },
  ],

  // --------------------------------------------------------------------------
  // 8. COMPLETE PROJECTS CATALOG (ALL 9 PROJECTS)
  // --------------------------------------------------------------------------
  projects: [

    {
      id: "bossclub",
      title: "BossClub",
      tagline: "Enterprise social networking and collaborative task coordination Android mobile application.",
      category: "Mobile & Android",
      year: "2024",
      status: "Hackathon Runner-Up",
      recognition: "🥉 Second Runner-Up at BRACU IntraHacktive 1.0 Hackathon",
      image: "/content/images/projects/BossClub/1.png",
      logo: "/content/images/projects/BossClub/LOGO.png",
      gallery: [
        "/content/images/projects/BossClub/1.png",
        "/content/images/projects/BossClub/2.png",
        "/content/images/projects/BossClub/3.png",
        "/content/images/projects/BossClub/4.png",
        "/content/images/projects/BossClub/5.png",
        "/content/images/projects/BossClub/6.png",
        "/content/images/projects/BossClub/7.png",
        "/content/images/projects/BossClub/8.png",
        "/content/images/projects/BossClub/9.png",
      ],
      video: "/content/images/projects/BossClub/10.mp4",
      description:
        "BossClub is an enterprise social networking and collaborative task management Android mobile application designed to connect professionals within an organization. Built during the IntraHacktive 1.0 hackathon, the app placed Second Runner-Up among stiff university competition. The platform eliminates departmental friction through a unified mobile interface that integrates direct peer messaging, team event scheduling, project milestones, and real-time task assignment.",
      highlights: [
        "Placed Second Runner-Up against competing university teams at IntraHacktive 1.0 Hackathon.",
        "Built with Kotlin KTX and Jetpack Compose following MVVM architecture and Unidirectional Data Flow (UDF).",
        "Interactive Kanban-style task tracking with status badges (To Do, In Progress, Review, Completed).",
        "Fluid declarative Compose transitions for modal sheets, drawer navigation, and item cards.",
      ],
      techStack: ["Kotlin KTX", "Jetpack Compose", "Android SDK", "Coroutines", "StateFlow", "MVVM", "Material Design 3"],
      collaborators: ["Ahmed Awsaf (Lead)", "Zaima Mashiat", "Abrar Jahin Alvee"],
      links: {
        github: "https://github.com/AhmedAwsaf/BossClub_IntraHacktive_T13",
      },
    },
    {
      id: "masroors-pllc",
      title: "MASROORS PLLC",
      tagline: "Commercial legal web platform and secure administrative dashboard for a US law firm.",
      category: "Full-Stack & Web",
      year: "2023 – 2025",
      status: "Live Production",
      recognition: "Production System (Chandler, AZ, USA)",
      image: "/content/images/projects/Masroors/1.png",
      logo: "/content/images/projects/Masroors/LOGO.png",
      gallery: [
        "/content/images/projects/Masroors/1.png",
        "/content/images/projects/Masroors/2.png",
        "/content/images/projects/Masroors/3.png",
        "/content/images/projects/Masroors/E1.PNG",
        "/content/images/projects/Masroors/E2.PNG",
        "/content/images/projects/Masroors/E3.PNG",
        "/content/images/projects/Masroors/E4.PNG",
        "/content/images/projects/Masroors/E5.PNG",
        "/content/images/projects/Masroors/E6.PNG",
        "/content/images/projects/Masroors/E7.PNG",
      ],
      description:
        "MASROORS PLLC is a full-featured commercial web portal and secure administrative dashboard developed for a United States-based law firm headquartered in Chandler, Arizona. The platform serves as the digital front door for prospective clients seeking legal consultation while providing internal paralegals and attorneys with a central command center to manage case workflows, client documentation, and scheduling.",
      highlights: [
        "Engineered RESTful microservices with FastAPI (Python) and PostgreSQL hosted on serverless NeonDB.",
        "Server-side rendered Next.js storefront for optimal search visibility (SEO) and sub-second load times.",
        "Automated SQL reporting queries summarizing case throughput, document reviews, and intake pipelines.",
        "Secure JWT authentication, Role-Based Access Control (RBAC), and document upload encryption.",
      ],
      techStack: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "NeonDB", "Tailwind CSS", "Firebase"],
      collaborators: ["Ahmed Awsaf (Full-Stack Developer)"],
      links: {
        demo: "https://www.masroors.com/",
      },
    },
    {
      id: "mortgame",
      title: "MortGame",
      tagline: "Fast-paced 2D action/arcade mobile game developed in Unity with custom C# physics.",
      category: "Graphics & Game Dev",
      year: "2024",
      status: "Released Prototype",
      recognition: "Solo Game Development Project",
      image: "/content/images/projects/MortGame/1.png",
      logo: "/content/images/projects/MortGame/LOGO.png",
      gallery: [
        "/content/images/projects/MortGame/2.gif",
        "/content/images/projects/MortGame/Animation.gif",
        "/content/images/projects/MortGame/1.png",
        "/content/images/projects/MortGame/3.png",
        "/content/images/projects/MortGame/4.png",
        "/content/images/projects/MortGame/5.png",
        "/content/images/projects/MortGame/6.png",
        "/content/images/projects/MortGame/7.png",
        "/content/images/projects/MortGame/8.png",
        "/content/images/projects/MortGame/9.png",
        "/content/images/projects/MortGame/10.png",
      ],
      video: "/content/images/projects/MortGame/Screenrecorder-2025-06-24-21-43-45-650.mp4",
      description:
        "MortGame is a fast-paced 2D action/arcade mobile game developed from the ground up utilizing the Unity Engine, C#, and the Android SDK. Designed specifically for touchscreen devices, MortGame challenges players through progressive obstacle courses requiring precise timing, dynamic physics interactions, and quick reflexes.",
      highlights: [
        "Complete lifecycle game development: concept, character sprites, 2D physics tuning, and Android compilation.",
        "Object pooling architecture for projectile and obstacle spawning to avoid garbage collection hitches on mobile.",
        "Dynamic mobile touch controls, velocity damping, gravitational shifts, and elastic bounce physics.",
        "Algorithmic progressive difficulty scaling with local binary serialization for high-score tracking.",
      ],
      techStack: ["Unity Engine", "C#", "Android SDK", "2D Physics", "Mecanim Animations", "Object Pooling"],
      collaborators: ["Ahmed Awsaf (Solo Developer)"],
      links: {
        github: "https://github.com/AhmedAwsaf/MortGAME",
      },
    },
    {
      id: "barobi-design",
      title: "Barobi Design",
      tagline: "Enterprise e-commerce and inventory platform handling 500+ SKUs on Google Cloud Platform.",
      category: "Full-Stack & Web",
      year: "2024",
      status: "Active Production",
      recognition: "Live Commercial Platform (Client: Barobi Design)",
      image: "/content/images/projects/BarobiDesign/1.jpg",
      logo: "/content/images/projects/BarobiDesign/logo.svg",
      gallery: [
        "/content/images/projects/BarobiDesign/1.jpg",
        "/content/images/projects/BarobiDesign/2.png",
        "/content/images/projects/BarobiDesign/3.png",
        "/content/images/projects/BarobiDesign/4.png",
        "/content/images/projects/BarobiDesign/5.png",
      ],
      description:
        "Barobi Design is an enterprise-grade, full-stack digital commerce and inventory management platform built to power a high-traffic live consumer storefront. Engineered to handle large catalog variations (over 500+ distinct SKUs) with concurrent cart checkouts, the system couples a blazing-fast server-rendered Next.js front-end with an optimized PostgreSQL transactional back-end deployed entirely on Google Cloud Platform (GCP).",
      highlights: [
        "Sub-100ms catalog search and category filtering across 500+ SKUs using normalized PostgreSQL indexing.",
        "ACID-compliant inventory reservation transactions to prevent overselling during flash sales.",
        "Automated administrative portal for warehouse staff to manage shipping invoices and inventory restocks.",
        "Cloud-native deployment on GCP (Cloud Run, Cloud SQL, Cloud Storage) maintaining high availability.",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "GCP", "Tailwind CSS"],
      collaborators: ["Ahmed Awsaf (Full-Stack Engineer)", "Client Sponsor: Mr. Raeq Alam (Director)"],
      links: {
        demo: "https://barobidesign.com.bd",
      },
    },
    {
      id: "cookbook",
      title: "CookBook",
      tagline: "Full-stack culinary sharing and recipe discovery application built with the MERN stack.",
      category: "Full-Stack & Web",
      year: "2023",
      status: "Live Web App",
      recognition: "Open Culinary Platform",
      image: "/content/images/projects/CookBOOK/1.png",
      logo: "/content/images/projects/CookBOOK/LOGO.PNG",
      gallery: [
        "/content/images/projects/CookBOOK/1.png",
        "/content/images/projects/CookBOOK/2.png",
        "/content/images/projects/CookBOOK/3.png",
        "/content/images/projects/CookBOOK/4.png",
        "/content/images/projects/CookBOOK/5.png",
      ],
      description:
        "CookBook is a full-stack recipe discovery and culinary sharing web application built using the modern MERN stack (MongoDB, Express.js, React.js, Node.js). It empowers home cooks and culinary enthusiasts to discover diverse cuisines, search dishes by ingredient availability, save favorites to personalized digital collections, and publish step-by-step culinary guides with rich photos and nutritional facts.",
      highlights: [
        "Intelligent multi-parameter recipe search filtering by cuisine, dietary needs, cook time, and ingredient list.",
        "Interactive recipe publisher with fractional measurement parsing and image uploads.",
        "Secure user authentication with bcrypt password encryption and JWT token storage.",
        "Mobile-first responsive interface designed for readability on kitchen counters.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "Vercel"],
      collaborators: ["Ahmed Awsaf (Full-Stack)", "Zarin Saiyara Eqra", "Tayeba Rounak Aboni"],
      links: {
        demo: "https://cookbook-bay-chi.vercel.app/",
        github: "https://github.com/AhmedAwsaf/CookBook",
      },
    },
    {
      id: "fitness-matrix",
      title: "Fitness Matrix",
      tagline: "Health and physical workout tracking SaaS turning exercise logs into visual analytics.",
      category: "Full-Stack & Web",
      year: "2023",
      status: "Live Web App",
      recognition: "MERN Stack SaaS Project",
      image: "/content/images/projects/FitnessMatrix/1.png",
      logo: "/content/images/projects/FitnessMatrix/LOGO.png",
      gallery: [
        "/content/images/projects/FitnessMatrix/1.png",
        "/content/images/projects/FitnessMatrix/2.png",
        "/content/images/projects/FitnessMatrix/3.png",
        "/content/images/projects/FitnessMatrix/4.png",
        "/content/images/projects/FitnessMatrix/5.png",
      ],
      description:
        "Fitness Matrix is a full-stack health and physical workout tracking web application designed to help users set fitness goals, record daily exercise routines, analyze caloric burn, and visualize overall body transformation over time. Developed with the MERN stack, Fitness Matrix turns workout logs into actionable visual analytics.",
      highlights: [
        "Rapid daily workout logging for exercise sets, repetitions, weights, and rest intervals.",
        "Interactive visual charts displaying strength progression, volume trends, and body metrics.",
        "Extensive exercise database categorized by target muscle groups and equipment.",
        "Gamified workout streak counter and goal adherence tracker.",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Data Visualization", "Tailwind CSS"],
      collaborators: ["Ahmed Awsaf (Lead)", "Zaima Mashiat", "Tasnia Taslim Hossain", "Shafkat Zahir"],
      links: {
        demo: "https://fitnessmatrix.vercel.app/",
        github: "https://github.com/AhmedAwsaf/Fitness_Matrix",
      },
    }, {
      id: "dynago",
      title: "Dynago",
      tagline: "Dynamic PostgreSQL REST API Engine compiling HTTP requests directly to single-query JSON with zero ORM boilerplate.",
      category: "Backend & Systems",
      year: "2024 – 2026",
      status: "Active Open-Source Engine",
      recognition: "⚡ High-Performance Go & WebAssembly Engine",
      image: "/content/images/projects/Dynago/1.svg",
      logo: "/content/images/projects/Dynago/LOGO.svg",
      gallery: [
        "/content/images/projects/Dynago/1.svg",
        "/content/images/projects/Dynago/2.svg",
        "/content/images/projects/Dynago/3.svg",
        "/content/images/projects/Dynago/4.svg",
        "/content/images/projects/Dynago/5.svg",
        "/content/images/projects/Dynago/6.svg",
      ],
      description:
        "Dynago is a high-performance, dynamic PostgreSQL REST API engine written in Go. It connects to any PostgreSQL database and instantly exposes fully dynamic, cached REST endpoints for every table with zero ORM, zero code generation, and zero boilerplate. Dynago introspects the database schema at startup, builds an in-memory graph of tables, columns, primary keys, and foreign keys, then compiles HTTP requests directly into optimized json_build_object SQL queries—streaming raw JSON bytes straight from PostgreSQL without unmarshaling overhead.",
      highlights: [
        "Single-Query JSON Compilation: Resolves nested relational queries in a single SQL query via json_build_object and json_agg, eliminating N+1 database roundtrips.",
        "Change Data Capture (CDC): PostgreSQL logical replication tap (WAL test_decoding) for deterministic cache invalidation and real-time Server-Sent Events (SSE).",
        "Polyglot WebAssembly (Wazero) Plugins: Sandboxed pre/post mutation hooks and custom virtual routes with sub-millisecond cold starts and host outbound HTTP capabilities.",
        "Zero-Dependency Embedded Web UI Dashboard: Interactive table catalog, dynamic payload generator, in-browser SQL query runner with CSV export, and Data Explorer.",
        "Production-Grade Security: JWT authentication, table-level Role-Based Access Control (RBAC), and granular Public/Private table visibility controls.",
      ],
      techStack: [
        "Go (Golang)",
        "PostgreSQL",
        "Redis",
        "WebAssembly (Wazero)",
        "Docker",
        "Docker Compose",
        "Server-Sent Events (SSE)",
        "JWT / RBAC",
        "Logical Replication (CDC)",
        "REST API Compiler"
      ],
      collaborators: ["Ahmed Awsaf (Author & Lead Systems Architect)"],
      links: {
        github: "https://github.com/dynago/dynago",
      },
    },
    {
      id: "musicpill",
      title: "MusicPill",
      tagline: "Personal audio streaming and catalog management web app built with Django and MySQL.",
      category: "Full-Stack & Web",
      year: "2023",
      status: "Open Source",
      recognition: "Relational Music Platform",
      image: "/content/images/projects/MusicPill/1.png",
      logo: "/content/images/projects/MusicPill/LOGO.png",
      gallery: [
        "/content/images/projects/MusicPill/1.png",
        "/content/images/projects/MusicPill/2.png",
        "/content/images/projects/MusicPill/3.png",
      ],
      description:
        "MusicPill is a personal music streaming and catalog management web application built with Python, the Django web framework, and a MySQL relational database. It provides music listeners with an organized personal audio library where they can curate tracks, create themed playlists, catalog artist discographies, and search their music collection with ease.",
      highlights: [
        "Engineered with Django's Model-View-Template (MVT) architecture and optimized Django ORM query sets.",
        "Normalized relational MySQL schema with foreign key constraints across Artists, Albums, Songs, and Playlists.",
        "Custom HTML5 continuous audio player with seek bar, volume control, shuffle, and repeat modes.",
        "Administrative console for managing track metadata, genres, album artwork, and artist biographies.",
      ],
      techStack: ["Python", "Django", "MySQL", "Django ORM", "HTML5 Audio API", "JavaScript", "CSS3"],
      collaborators: ["Ahmed Awsaf (Solo Developer)"],
      links: {
        github: "https://github.com/AhmedAwsaf/MusicPill",
      },
    },

    {
      id: "dx-ball",
      title: "DX Ball Game",
      tagline: "Retro arcade brick-breaker built from scratch in Python with direct OpenGL pipeline bindings.",
      category: "Graphics & Game Dev",
      year: "2023",
      status: "Graphics Showcase",
      recognition: "Computer Graphics from Scratch",
      image: "/content/images/projects/DX-BALL/1.png",
      gallery: [
        "/content/images/projects/DX-BALL/1.png",
        "/content/images/projects/DX-BALL/2.png",
      ],
      description:
        "DX Ball Game is a modern reimagining of the iconic retro arcade brick-breaker game, implemented in Python using direct OpenGL graphics pipeline bindings. Rather than relying on high-level pre-built commercial game engines, this project was built from scratch to demonstrate low-level computer graphics principles, rasterization, frame buffers, and vector mathematics for collision detection.",
      highlights: [
        "Directly programmed OpenGL primitive drawing routines (quads, circles, lines) for bricks, paddle, and particles.",
        "Custom 2D axis-aligned bounding box (AABB) and circle-to-box collision detection algorithms with reflection angle math.",
        "Tick-based game loops handling frame timing, score tracking, multi-ball mechanics, and game-over states.",
        "Custom color gradients and visual lighting effects recreating nostalgic arcade aesthetics.",
      ],
      techStack: ["Python", "PyOpenGL", "GLFW / GLUT", "Vector Mathematics", "2D Collision Physics"],
      collaborators: ["Ahmed Awsaf (Solo Developer)"],
      links: {
        github: "https://github.com/AhmedAwsaf",
      },
    },
  ],
};

// Export individual sections for modular use
export const personalInfo = portfolioData.personal;
export const experienceData = portfolioData.experience;
export const researchData = portfolioData.research;
export const educationData = portfolioData.education;
export const awardsData = portfolioData.awards;
export const skillsData = portfolioData.skills;
export const collaboratorsData = portfolioData.collaborators;
export const projects = portfolioData.projects;

export default portfolioData;
