import { Project, ExperienceItem, SkillRow, FieldNote, PhilosophyItem } from './types';

export const USER_INFO = {
  name: 'Vatsal',
  brandName: 'vatsal.live',
  role: 'Software Engineer',
  tagline: 'open to interesting problems',
  headlineLine1: 'I build systems',
  headlineLine2: 'I can explain.',
  bio: "I'm Vatsal — a software engineer exploring the seam between fundamentals and modern tooling. From embedded alerts to grounded AI, I like projects that make the invisible visible.",
  email: 'vatsalpatel0609@gmail.com',
  githubUrl: 'https://github.com/IamVatsal',
  siteUrl: 'https://vatsal.live',
  location: 'Himatnagar, Gujarat, India',
  signalFocus: 'Web · AI · Systems',
  signalAvailability: 'Himatnagar → Anywhere',
  quickTools: [
    { label: 'Py', full: 'Python' },
    { label: 'TS', full: 'TypeScript' },
    { label: 'C', full: 'C / C++' },
    { label: 'React', full: 'React & Next.js' },
    { label: 'FastAPI', full: 'FastAPI' },
    { label: 'SQL', full: 'PostgreSQL' },
    { label: 'Docker', full: 'Docker' }
  ]
};

export const EDUCATION = {
      id: 'btech',
      institution: 'Ganpat University',
      degree: 'Bachelor of Engineering in Computer Engineering',
      period: '2024 – 2028',
      focus: 'Systems Programming, Data Structures, Operating Systems, Machine Learning'
};

export const RESUME_ITEMS = {
  education: [
    {
      id: 'btech',
      institution: 'Gujarat Technological University',
      degree: 'Bachelor of Engineering in Computer Engineering',
      period: '2023 – 2027',
      focus: 'Systems Programming, Data Structures, Operating Systems, Machine Learning'
    }
  ],
  experience: [
    {
      id: 'internship',
      company: 'Tech Company',
      role: 'Software Engineering Intern',
      period: 'Summer 2024',
      location: 'Remote',
      description: 'Worked on developing and maintaining web applications using React and Node.js.'
    }
  ]
};

export const MARQUEE_ITEMS = [
  'FIRST PRINCIPLES',
  'REAL SYSTEMS',
  'OPEN SOURCE',
  'CRAFT & RIGOR',
  'EMBEDDED TO CLOUD',
  'ZERO SLOP',
  'DETERMINISTIC LOOPS',
  'VERIFIABLE AI'
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-helmet',
    number: '01',
    title: 'Smart Helmet — IoT Emergency Accident Alert System',
    tagline: 'HARDWARE / CLOUD',
    summary: 'A complete IoT-to-cloud workflow that detects abnormal acceleration, gives riders a cancellation window, and sends emergency email alerts with live location.',
    category: 'hardware',
    tech: ['ESP8266', 'Arduino', 'MPU6050', 'FastAPI', 'Python', 'React Native', 'Firebase'],
    problem: 'Two-wheeler accidents in remote corridors often go unnoticed, delaying vital emergency response. A false alarm could desensitize first responders, making accuracy and an abort mechanism essential.',
    solution: 'Engineered an embedded microcontroller sensor helmet using ESP8266 and MPU-6050 accelerometer/gyroscope. Developed a threshold-based sudden impact detection algorithm paired with an audible buzzer 15-second grace period. If uncancelled, coordinates and incident telemetry are pushed to a FastAPI cloud service that dispatches real-time alerts.',
    architecture: 'MPU6050 Sensor → ESP8266 Threshold Trigger → Local Audio Countdown → FastAPI Backend → Firebase Realtime DB → Email / SMS Gateway',
    keyTakeaway: 'Reliable embedded hardware requires handling brownout protection, accelerometer noise filtering, and edge state verification before cloud ingress.',
    githubUrl: 'https://github.com/IamVatsal/Smart_Helmet',
    liveUrl: '#',
    isPrivate: true
  },
  {
    id: 'nanonet',
    number: '02',
    title: 'NanoNet — Neural Network From Scratch',
    tagline: 'FUNDAMENTALS / ML',
    summary: 'A fully functional multi-layer neural network framework built entirely from scratch using only Python and NumPy.',
    category: 'ai',
    tech: ['Python', 'NumPy', 'Calculus', 'Linear Algebra', 'Gradient Descent', 'Forward & Backward Pass'],
    problem: 'Mainstream ML frameworks like PyTorch and TensorFlow abstract away the core computational graph, making it difficult for engineers to trace backpropagation at the scalar and topological level.',
    solution: 'Built an explicit computational graph engine from scratch. Implemented reverse-mode automatic differentiation on scalar nodes with support for chain-rule gradient accumulation, multi-layer perceptron (MLP) layers, ReLU/Tanh activations, and mean-squared-error & cross-entropy loss optimizations.',
    architecture: 'Value Node Primitive → Directed Acyclic Graph (DAG) Construction → Reverse Topological Sort → Backward Pass Gradient Propagation → SGD Optimizer',
    keyTakeaway: 'Deep learning is fundamentally an optimization problem solved by topologically ordering a DAG. Understanding scalar backprop demystifies gradient clipping and vanishing gradients.',
    githubUrl: 'https://github.com/IamVatsal/NanoNet',
    liveUrl: '#',
    isPrivate: true
  },
  {
    id: 'grounded-rag',
    number: '03',
    title: 'Grounded RAG System for Technical Knowledge',
    tagline: 'AI / RETRIEVAL',
    summary: 'A retrieval-augmented generation pipeline using vector embeddings, Qdrant, and query rewriting to prioritize grounded technical answers.',
    category: 'ai',
    tech: ['Next.js', 'TypeScript', 'Qdrant', 'LangChain', 'OpenAI'],
    problem: 'Generic LLMs hallucinate critical API versions, edge-case system parameters, and architecture dependencies when asked nuanced technical engineering questions.',
    solution: 'Designed an end-to-end verifiable RAG system. Integrated query intent decomposition, hybrid sparse-dense vector retrieval using Qdrant, document chunk hierarchical chunking, and strict attribution matching to output verifiable citations with high precision.',
    architecture: 'User Query → Sub-Query Rewrite → Dense Vector Ingestion (Qdrant) → Cross-Encoder Re-Ranking → Attributed Context Synthesis',
    keyTakeaway: 'In technical AI assistants, retrieval precision and chunk boundary preservation are far more important than raw model size.',
    githubUrl: 'https://github.com/IamVatsal/NanoBook',
    liveUrl: '#',
    isPrivate: true
  },
  {
    id: 'deaths-job',
    number: '04',
    title: "Death's Job — 2D Game in Pygame",
    tagline: 'REAL-TIME / PLAY',
    summary: 'A close-to-the-code arcade game with a hand-rolled loop, physics updates, collision handling, and state management.',
    category: 'systems',
    tech: ['Python', 'Pygame-CE', 'OOP', 'Game Physics'],
    problem: 'Modern high-level game engines conceal frame timing, delta-time physics integration, and explicit memory buffer flips behind graphical user interfaces.',
    solution: 'Programmed an arcade title from first principles. Implemented a deterministic 60 FPS update-render loop, Axis-Aligned Bounding Box (AABB) collision checks and procedural level wave spawning.',
    architecture: 'Game Loop Delta Timing → Input Polling → Entity State Updates → Spatial Collision Hash → Double-Buffered Canvas Blitting',
    keyTakeaway: 'Managing deterministic state loops and memory allocation teaches vital discipline for systems engineering and real-time audio/graphics.',
    githubUrl: 'https://github.com/IamVatsal/Deaths-Job',
    liveUrl: '#',
    isPrivate: true
  },
  {
    id: 'blog-app',
    number: '05',
    title: 'Blog App — Next.js 14 Full-Stack Platform',
    tagline: 'WEB / FULL STACK',
    summary: 'A hybrid-rendered blogging platform with Server Components, MongoDB, NextAuth Google OAuth, pagination, and performance-minded queries.',
    category: 'web',
    tech: ['Next.js 14', 'React', 'TypeScript', 'MongoDB', 'NextAuth.js', 'Tailwind'],
    problem: 'Modern content platforms often suffer from slow First Contentful Paint (FCP) and heavy client-side JavaScript payloads due to over-reliance on client fetching.',
    solution: 'Architected a performant editorial publishing engine leveraging React Server Components, server actions for mutations, NextAuth authentication flow, MongoDB indexed aggregation queries, and dynamic SEO tag generation.',
    architecture: 'Next.js App Router (RSC) → Edge Middleware → MongoDB Atlas / Mongoose → Server Actions Validation → CDN Cache Invalidation',
    keyTakeaway: 'Server components eliminate entire waterfalls of client-side requests, yielding near-instant render times and zero hydration penalty.',
    githubUrl: 'https://github.com/IamVatsal/Blog_App_Nextjs',
    liveUrl: 'https://blog-app-nextjs-blush.vercel.app/',
    isPrivate: false
  },
  {
    id: 'book-notes',
    number: '06',
    title: 'Book Notes WebApp',
    tagline: 'WEB / PRODUCT',
    summary: 'A full-stack notes app for adding, editing, categorizing, searching, and sorting reading notes with Google OAuth and local auth.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'PostgreSQL', 'Passport.js', 'Express', 'EJS'],
    problem: 'Active readers need a streamlined digital workbench to capture book quotes, key lessons, and rating chronologies without sluggish SaaS bloat.',
    solution: 'Constructed a relational full-stack application featuring normalized PostgreSQL tables, parameterized SQL queries, Passport.js session auth with Google OAuth 2.0 integration, and responsive live filtering.',
    architecture: 'Responsive UI Client → Node.js / Express Routing → Passport Session Middleware → PostgreSQL Relational Tables (Books & Notes)',
    keyTakeaway: 'Relational integrity and index optimization in PostgreSQL provide immediate speed and consistency advantages over unstructured document stores for relational data.',
    githubUrl: 'https://github.com/IamVatsal/Book-Notes-WebApp',
    liveUrl: 'https://book-notes-webapp.onrender.com/',
    isPrivate: false
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'aaoji-shopy',
    role: 'Software Engineer Intern',
    company: 'AAOJI SHOPY PVT LTD',
    type: 'Internship',
    period: 'May 2026 - Jun 2026',
    duration: '2 mos',
    location: 'Himatnagar, Gujarat, India',
    locationType: 'On-site',
    bullets: [
      'Improved the company’s website UI by refining layouts and enhancing user experience across key visitor flows.',
      'Maintained and updated website content, ensuring continuous functionality, zero layout shift, and consistency across pages.',
      'Fixed minor UI issues and collaborated actively with the team to implement production design improvements.'
    ],
    skills: ['UI/UX Refinement', 'Responsive Layouts', 'Frontend Optimization', 'Website Maintenance', 'Team Collaboration']
  }
];

export const SKILL_ROWS: SkillRow[] = [
  {
    category: 'Languages',
    skills: ['C', 'Python', 'TypeScript', 'Java', 'C++', 'SQL']
  },
  {
    category: 'Web & Backend',
    skills: ['Next.js', 'React', 'Node.js', 'Express', 'FastAPI']
  },
  {
    category: 'AI & Machine Learning',
    skills: ['Neural Networks', 'NumPy', 'RAG', 'Vector Search', 'LLM APIs']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'MySQL', 'Qdrant']
  },
  {
    category: 'Systems & Infrastructure',
    skills: ['Linux', 'Docker', 'Git', 'REST API Design', 'Embedded Systems']
  },
  {
    category: 'Systems Concepts',
    skills: ['Game Loops', 'Physics Simulation', 'State Machines', 'Collision Detection', 'Real-Time Systems']
  }
];

export const FIELD_NOTES: FieldNote[] = [
  {
    id: 'technical-rag',
    number: '01',
    type: 'EXPLAINER',
    readTime: '01 MIN READ',
    featured: true,
    title: 'Why retrieval quality beats model size in technical RAG',
    excerpt: 'A field guide to query rewriting, vector search, and making AI answers earn their confidence.',
    tags: ['RAG', 'Vector Search', 'Evaluation'],
    content: [
      'In high-stakes technical domains, an LLM hallucination is not an amusing quirk — it is a production incident waiting to happen. The reflex reaction is often to throw a bigger model at the problem.',
      'However, empirical evaluations show that 85% of technical QA failures in RAG pipelines stem from context corruption: either missing context, irrelevant distraction chunks, or lost chunk boundaries.',
      'By decomposing user queries into explicit vector filters, utilizing hybrid sparse-dense retrieval, and enforcing strict attribution cross-referencing, smaller models reliably outperform monolithic ones at a fraction of the latency.'
    ]
  },
  {
    id: 'iot-sensor-inbox',
    number: '02',
    type: 'BUILD LOG',
    readTime: '01 MIN READ',
    featured: false,
    title: 'Shipping an IoT alert from sensor to inbox',
    excerpt: 'What changes when your backend depends on a tiny board, a moving helmet, and an unreliable network.',
    tags: ['IoT', 'Embedded C++', 'Fault Tolerance'],
    content: [
      'When your sensor is mounted to a moving helmet in transit, traditional network guarantees evaporate. Sockets drop, voltage drops over battery drain, and false accelerations from potholes threaten credibility.',
      'This build log documents our hardware debounce logic, a 15-second audible grace period to eliminate false positives, and the store-and-forward telemetry protocol designed for the ESP8266.',
      'The result: a resilient system that alerts emergency contacts within 4 seconds of a verified crash.'
    ]
  },
  {
    id: 'neural-net-scratch',
    number: '03',
    type: 'FUNDAMENTALS',
    readTime: '01 MIN READ',
    featured: false,
    title: 'The small joy of writing a neural net from scratch',
    excerpt: 'Gradients stop feeling magical when you follow them one scalar at a time.',
    tags: ['NumPy', 'Autograd', 'Calculus'],
    content: [
      'PyTorch has made deep learning accessible, but it has also turned backpropagation into a mystical black box for many emerging practitioners.',
      'Building NanoNet forced me to inspect every node in the expression graph. You realize that automatic differentiation is just a topological sort over a directed acyclic graph, computing local partial derivatives and accumulating gradients.',
      'There is profound clarity when you watch an MLP learn XOR with nothing more than raw Python scalars and 150 lines of clean code.'
    ]
  }
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    number: '01',
    title: 'Fundamentals First',
    content: 'Frameworks change quickly. Core concepts like algorithms, memory, and data flow do not. I focus on understanding the fundamentals so tools become interchangeable.'
  },
  {
    number: '02',
    title: 'Abstractions Leak',
    content: "Frameworks are useful, but understanding what's happening underneath makes debugging, optimization, and design decisions much easier."
  },
  {
    number: '03',
    title: 'Active Construction',
    content: 'Learners are not empty vessels; they build new understanding by connecting prior experience with fresh information.'
  }
];
