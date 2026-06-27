import { Project, SkillGroup } from './types';

export const PROJECTS: Project[] = [
    {
        id: 'smart-helmet',
        title: 'Smart Helmet - IoT Emergency Accident Alert System',
        problem:
            'Road accidents often leave victims unable to call for help, delaying emergency response. A lightweight, low-cost system was needed to automatically detect potential accidents and notify emergency contacts.',
        solution:
            'Developed the ESP8266 firmware, hardware integration, and FastAPI backend for an IoT-based smart helmet that detects abnormal acceleration using an MPU6050 sensor, provides a cancellation window, and automatically sends emergency email alerts with live location and contact information.',
        impact:
            'Built a complete IoT-to-cloud workflow integrating embedded hardware, wireless communication, backend APIs, and a mobile application, demonstrating real-time emergency alert capabilities during a hackathon.',
        tech: [
            'ESP8266',
            'Arduino',
            'MPU6050',
            'FastAPI',
            'Python',
            'React Native',
            'Expo',
            'Firebase',
            'REST API',
            'IoT'
        ],
        lessons:
            'Reliable IoT systems require careful coordination between embedded devices, mobile apps, backend services, and network communication. Hardware reliability and graceful failure handling are just as important as software architecture.',
        imageUrl:
            '/SmartHelmet.jpg',
        githubUrl: 'https://github.com/IamVatsal/Smart_Helmet',
    },
    {
        id: 'nn-from-scratch',
        title: 'NanoNet - Neural Network From Scratch (NumPy Only)',
        problem:
            'High-level ML frameworks hide how backpropagation, gradient flow, and memory usage actually work, making it difficult to reason about performance and correctness.',
        solution:
            'Implemented a scalar-based automatic differentiation engine and built a small neural network framework on top of it, including forward/backward passes, activation functions, and optimizers.',
        impact: 'Gained a concrete understanding of computational graphs, gradient propagation, and why matrix operations dominate ML performance.',
        tech: ['Python', 'NumPy', 'Calculus', 'Linear Algebra'],
        lessons:
            'Most ML performance gains come from optimizing data layout and matrix operations, not from model architecture tweaks.',
        imageUrl:
            'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200&h=675',
        githubUrl: 'https://github.com/IamVatsal/NanoNet',
    },
    {
        id: 'rag-system',
        title: 'Grounded RAG System for Technical Knowledge',
        problem:
            'LLMs tend to hallucinate when answering technical or domain-specific questions without access to verified context.',
        solution:
            'Built a Retrieval-Augmented Generation pipeline using vector embeddings stored in Qdrant and query rewriting ensuring responses are grounded in retrieved documents.',
        impact: 'Improved answer reliability for technical queries by prioritizing retrieval quality over raw model capability.',
        tech: ['Next.js', 'TypeScript', 'Qdrant', 'LangChain', 'OpenAI'],
        lessons:
            'Good retrieval and clean data matter more than larger models for accuracy.',
        imageUrl: '/rag-system.png',
        githubUrl: 'https://github.com/IamVatsal/NanoBook',
    },
    {
        id: 'deaths-job',
        title: "Death's Job — 2D Game in Pygame",
        problem:
            'I wanted to build a small arcade-style game while staying close to the code, instead of relying on a full game engine with heavy abstractions.',
        solution:
            'Built a 2D arcade game in Python using Pygame, implementing my own game loop, physics updates, collision handling, and state management.',
        impact: 'The project helped me understand how real-time systems behave when timing, physics, and input handling are managed manually.',
        tech: ['Python', 'Pygame-CE', 'OOP', 'Game Physics'],
        lessons:
            'Simple games are a great way to learn real-time loops, state machines, and physics without the overhead of a full engine.',
        imageUrl:
            '/DeathJob.gif',
        githubUrl: 'https://github.com/IamVatsal/Deaths-Job',
    },
    {
        id: 'blog-app-nextjs',
        title: 'Blog App — Next.js 14 Full-Stack Platform',
        problem:
            'I wanted to build a modern blogging platform that goes beyond basic CRUD by leveraging Next.js 14’s Server Components and hybrid rendering architecture for performance and scalability.',
        solution:
            'Built a full-stack blog platform using Next.js 14 (App Router), MongoDB, and NextAuth with Google OAuth, implementing React Server Components for server-side rendering, client components for interactivity, pagination for scalability, and optimized database queries using Mongoose lean().',
        impact: 'The project helped me deeply understand hybrid rendering, authentication flows, server/client component boundaries, database optimization, and how modern full-stack React applications are architected for performance and SEO.',
        tech: [
            'Next.js 14',
            'React',
            'TypeScript',
            'MongoDB',
            'Mongoose',
            'NextAuth.js',
            'Google OAuth',
            'Tailwind CSS',
            'React Hook Form',
            'Markdown (MDEditor)',
        ],
        lessons:
            'Modern web apps require thoughtful separation between server and client logic, efficient database querying, authentication handling, and performance-first architecture decisions rather than just building features.',
        imageUrl:
            'https://raw.githubusercontent.com/IamVatsal/Blog_App_Nextjs/refs/heads/main/public/blog-app-screenshot.jpeg',
        githubUrl: 'https://github.com/IamVatsal/Blog_App_Nextjs',
        link: 'https://blog-app-nextjs-blush.vercel.app/',
    },
    {
        id: 'book-notes-webapp',
        title: 'Book Notes WebApp',
        problem:
            'I wanted a structured way to store and organize my reading notes instead of keeping scattered summaries across notebooks and random documents.',
        solution:
            'Built a full-stack web application using Node.js, Express, and PostgreSQL that allows users to add, edit, delete, categorize, search, and sort book notes, with authentication via Google OAuth and local strategy.',
        impact: 'The project strengthened my understanding of backend architecture, authentication systems, database design, and MVC structuring in real-world applications.',
        tech: [
            'HTML',
            'CSS',
            'JavaScript',
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'Bootstrap',
            'Passport.js',
            'Google OAuth',
            'EJS',
        ],
        lessons:
            'Building a full-stack CRUD application with authentication taught me how real-world systems handle user sessions, database relationships, secure auth flows, and clean project structuring.',
        imageUrl:
            'https://raw.githubusercontent.com/IamVatsal/Book-Notes-WebApp/main/Images/Index%20Page.jpeg',
        githubUrl: 'https://github.com/IamVatsal/Book-Notes-WebApp',
        link: 'https://book-notes-webapp.onrender.com/',
    },
];

export const SKILLS: SkillGroup[] = [
    {
        category: 'Languages',
        skills: ['C', 'Python', 'TypeScript', 'Java', 'C++', 'SQL'],
    },
    {
        category: 'Web & Backend',
        skills: ['Next.js', 'React', 'Node.js', 'Express', 'FastAPI'],
    },
    {
        category: 'AI & Machine Learning',
        skills: [
            'Neural Networks',
            'NumPy',
            'RAG',
            'Vector Search',
            'LLM APIs',
        ],
    },
    {
        category: 'Databases',
        skills: [
            'PostgreSQL',
            'MongoDB',
            'SQLite',
            'MySQL',
            'Qdrant',
        ],
    },
    {
        category: 'Systems & Infrastructure',
        skills: ['Linux', 'Docker', 'Git', 'REST API Design','Embedded Systems'],
    },
    {
        category: 'Systems Concepts',
        skills: [
            'Game Loops',
            'Physics Simulation',
            'State Machines',
            'Collision Detection',
            'Real-Time Systems',
        ],
    },
];

export const PHILOSOPHY = [
    {
        title: 'Fundamentals First',
        content:
            'Frameworks change quickly. Core concepts like algorithms, memory, and data flow do not. I focus on understanding the fundamentals so tools become interchangeable.',
    },
    {
        title: 'Abstractions Leak',
        content:
            'Frameworks are useful, but understanding what\'s happening underneath makes debugging, optimization, and design decisions much easier.',
    },
    {
        title: 'Build to Understand',
        content:
            'Reimplementing systems from scratch exposes edge cases, trade-offs, and constraints that tutorials often hide.',
    },
];
