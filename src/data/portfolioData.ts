export interface Contact {
  name: string;
  title: string;
  location: string;
  email: string;
  mobile: string;
  portfolioUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  whatsappUrl: string;
}

export interface Summary {
  text: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  duration: string;
  bulletPoints: { title: string; desc: string }[];
}

export interface Project {
  title: string;
  category: 'enterprise' | 'open-source' | 'personal';
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  gpa: string;
  details: string[];
}

export interface Certification {
  title: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  longDesc: string;
}

export interface PortfolioData {
  contact: Contact;
  summary: Summary;
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  certifications: Certification[];
  languages: string[];
  services: Service[];
}

export const portfolioData: PortfolioData = {
  contact: {
    name: 'Suman Dey',
    title: 'Full Stack Developer',
    location: 'Murshidabad, West Bengal, India - 742405',
    email: 'sumandey8976@gmail.com',
    mobile: '+91 8944961893',
    portfolioUrl: 'https://sumandey7689.github.io/portfolio',
    linkedinUrl: 'https://www.linkedin.com/in/sumandey7689',
    githubUrl: 'https://github.com/Sumandey7689',
    facebookUrl: 'https://www.facebook.com/sumandey7689',
    instagramUrl: 'https://www.instagram.com/sumandey7689',
    whatsappUrl: 'https://wa.me/+918944961893',
  },
  summary: {
    text: 'Full Stack Developer with 3 years of experience specializing in backend architecture, Laravel, and custom application development. Proven expertise in building scalable RESTful APIs, database optimization, queuing systems, and production server deployments (AWS EC2, Nginx, Apache, Cloudflare). Experienced in automated workflows, CI/CD with GitHub Actions, and integrating AI services (OpenAI API, RAG, Embeddings, Vector Databases).',
    highlights: [
      '3+ years specializing in backend architecture and Laravel development',
      'Proven expertise building scalable RESTful APIs and database optimization',
      'Production deployment experience on AWS EC2, Nginx, Apache, Cloudflare',
      'AI integration experience with OpenAI API, RAG, Embeddings, and Vector Databases',
    ],
  },
  experience: [
    {
      company: 'Softhought',
      location: 'Kolkata, West Bengal, India',
      role: 'Backend Developer',
      duration: '12/2023 – Present',
      bulletPoints: [
        {
          title: 'Backend Architecture & APIs',
          desc: 'Architected and maintained scalable backend systems and RESTful APIs using Laravel and CodeIgniter for enterprise-grade applications.',
        },
        {
          title: 'Deployment & Infrastructure',
          desc: 'Managed end-to-end production deployments, web server configurations (Nginx, Apache), and cloud infrastructure setup on AWS EC2 and Cloudflare.',
        },
        {
          title: 'Queuing & Async Processing',
          desc: 'Streamlined asynchronous task processing and scheduled workflows using Queues, Redis, and Cron jobs to optimize application responsiveness.',
        },
        {
          title: 'CI/CD Automation',
          desc: 'Configured automated CI/CD deployment pipelines using GitHub Actions, accelerating feature delivery cycles and maintaining high availability.',
        },
        {
          title: 'Real-Time & Optimization',
          desc: 'Implemented real-time WebSockets and optimized complex MySQL query execution to deliver high-performance production solutions.',
        },
      ],
    },
  ],
  projects: [
    {
      title: 'Gainwell Loyalty Program',
      category: 'enterprise',
      description: 'Designed backend services and scalable MySQL database schemas for enterprise customer loyalty and rewards distribution. Implemented RESTful API endpoints and Redis caching mechanisms for secure transaction handling and real-time user tracking.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Redis'],
    },
    {
      title: 'Cooperative Loan Distribution Portal',
      category: 'enterprise',
      description: 'Developed financial workflow modules in CodeIgniter to automate loan application processing, verification, and fund disbursal. Engineered comprehensive audit logging, Role-Based Access Control (RBAC), and automated reporting modules.',
      techStack: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap'],
    },
    {
      title: 'Nephro Care Transplant Application',
      category: 'enterprise',
      description: 'Architected clinical tracking portal for patient data management, organ transplant matching, and medical record security. Implemented strict data privacy protocols, fine-grained access permissions, and automated notification workflows.',
      techStack: ['PHP', 'Laravel', 'REST APIs', 'MySQL', 'Bootstrap'],
    },
    {
      title: 'WMS (Warehouse Management System)',
      category: 'enterprise',
      description: 'Engineered inventory tracking system, stock movement workflows, and barcode scan processing pipelines for logistics operations. Optimized complex SQL queries and database indexing to maintain real-time inventory synchronization across multi-warehouse setups.',
      techStack: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'WebSockets'],
    },
    {
      title: 'Giftyo E-Commerce Platform',
      category: 'enterprise',
      description: 'Built scalable backend APIs, shopping cart workflows, payment gateway integrations, and order management features. Applied web server performance tuning and caching strategies to ensure reliable handling of peak retail traffic.',
      techStack: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'MySQL', 'HTML/CSS'],
    },
    {
      title: 'Automation Tool Package Manager',
      category: 'open-source',
      description: 'Developed a CLI automation tool package manager in PHP/Node.js to streamline local development workflows and environment bootstrapping.',
      techStack: ['PHP', 'Node.js', 'CLI', 'Git'],
      githubUrl: 'https://github.com/Sumandey7689',
    },
    {
      title: 'WhatsApp Automation Pipeline',
      category: 'open-source',
      description: 'Created an automated notification dispatch system leveraging Node.js, WebSockets, and asynchronous queue management.',
      techStack: ['Node.js', 'WebSockets', 'Queues', 'JavaScript'],
      githubUrl: 'https://github.com/Sumandey7689',
    },
    {
      title: 'Laravel Custom Package Manager',
      category: 'open-source',
      description: 'Built modular Laravel package utilities for reusable backend services, rapid boilerplate scaffolding, and API integration.',
      techStack: ['PHP', 'Laravel', 'Composer', 'Git'],
      githubUrl: 'https://github.com/Sumandey7689',
    },
  ],
  skills: [
    {
      category: 'Languages',
      skills: ['PHP', 'JavaScript', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL'],
    },
    {
      category: 'Backend & Frameworks',
      skills: [
        'Laravel',
        'CodeIgniter',
        'Node.js',
        'Express.js',
        'REST APIs',
        'WebSockets',
        'Queues & Redis',
        'Cron / Scheduler',
      ],
    },
    {
      category: 'Frontend & Web',
      skills: ['Responsive Design', 'Bootstrap', 'jQuery', 'AJAX', 'UX Principles'],
    },
    {
      category: 'Databases & Caching',
      skills: ['MySQL', 'Redis'],
    },
    {
      category: 'DevOps & Infrastructure',
      skills: ['AWS (EC2)', 'Cloudflare', 'Docker', 'Nginx', 'Apache', 'GitHub Actions', 'Git'],
    },
    {
      category: 'AI & Emerging Tech',
      skills: [
        'OpenAI API',
        'RAG (Retrieval-Augmented)',
        'Embeddings',
        'Vector Databases',
        'Whisper API',
        'Speech Diarization',
      ],
    },
  ],
  education: [
    {
      institution: 'Techno International Batanagar',
      location: 'Kolkata, West Bengal, India',
      degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
      duration: '2023 – 2026',
      gpa: '7.0 / 10',
      details: [
        'Developed proficiency in programming languages like Java, Python, and C++.',
        'Collaborated on real-world projects, applying software development methodologies and gaining hands-on experience with industry-standard tools.',
        'Actively participated in coding competitions, enhancing problem-solving skills and algorithmic understanding.',
        'Engaged in research activities to stay updated on the latest trends in computer science.',
      ],
    },
    {
      institution: 'Berhampore Polytechnic College (Diploma in Engineering)',
      location: 'West Bengal, India',
      degree: 'Diploma in Computer Science and Engineering',
      duration: '2021 – 2023 (Completed)',
      gpa: '8.6 / 10',
      details: [
        'Acquired hands-on experience in web development technologies such as HTML, CSS, JavaScript, and PHP.',
        'Studied computer algorithms, data structures, and software engineering principles.',
        'Practiced developing, testing, and deploying web applications in a team-based environment.',
        'Participated in various technical events and workshops, which enhanced problem-solving, debugging, and teamwork skills.',
      ],
    },
  ],
  certifications: [
    {
      title: 'IBM Internship Certification',
      year: '2024',
      description: 'Practical experience in cloud application development, backend APIs, and software automation solutions.',
    },
  ],
  languages: ['English', 'Hindi', 'Bengali (Full Professional Proficiency)'],
  services: [
    {
      id: 'web-dev',
      title: 'Web Development',
      icon: 'Code2',
      shortDesc: 'Custom full-stack web applications, secure RESTful APIs, and responsive frontend systems.',
      longDesc: 'As a full-stack developer, I specialize in building custom, high-performance web applications using robust backend technologies like Laravel and Node.js alongside clean, responsive frontends. I offer client-focused services including:\n\n• Scalable API Architecture & Integration\n• Custom Database Design and Query Optimization (MySQL)\n• Application caching & caching strategies (Redis)\n• Maintenance, performance tuning, and responsive optimization\n• Secure authorization workflows & RBAC systems\n\nI ensure the final product is secure, scalable, and responsive to satisfy both users and business goals.',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Designing',
      icon: 'Figma',
      shortDesc: 'User research, wireframing, high-fidelity prototyping, and modern responsive visual design.',
      longDesc: 'I create beautiful, functional designs that are simple to navigate and user-centric. My UI/UX services help you visualize the application structure and build cohesive branding:\n\n• Target User Research & User Flow mapping\n• Wireframing and layout planning\n• High-fidelity interactive prototyping in Figma\n• Brand styling, customized component systems, and design tokens\n• Direct transition from designs into clean, responsive web layouts\n\nI work closely with you to ensure the user interface represents your brand perfectly and delivers an optimal user experience.',
    },
    {
      id: 'android-dev',
      title: 'Android Development',
      icon: 'Smartphone',
      shortDesc: 'Native mobile app development for Android using Java, Firebase, and Material Design.',
      longDesc: 'I design and build tailored mobile applications for Android devices. Focusing on performance, modern UX design, and robust data integration:\n\n• Native Android App Development using Java & Android Studio\n• Application Design incorporating Material Design guidelines for a modern look\n• Real-time database integrations and cloud services using Firebase (Firestore, Cloud Messaging)\n• Serverless app functionality utilizing Firebase Cloud Functions\n• Comprehensive app testing, optimization, and bug fixing for high reliability\n\nI ensure each mobile application is fast, accessible, and provides a polished native experience.',
    },
  ],
};
