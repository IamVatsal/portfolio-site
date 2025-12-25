
import { Project, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nn-from-scratch',
    title: 'NanoNet - Neural Network From Scratch (NumPy Only)',
    problem: 'High-level ML frameworks hide how backpropagation, gradient flow, and memory usage actually work, making it difficult to reason about performance and correctness.',
    solution: 'Implemented a scalar-based automatic differentiation engine and built a small neural network framework on top of it, including forward/backward passes, activation functions, and optimizers.',
    impact: 'Gained a concrete understanding of computational graphs, gradient propagation, and why matrix operations dominate ML performance.',
    tech: ['Python', 'NumPy', 'Calculus', 'Linear Algebra'],
    lessons: 'Most ML performance gains come from optimizing data layout and matrix operations, not from model architecture tweaks.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200&h=675',
    githubUrl: 'https://github.com/IamVatsal/NanoNet'
  },
  {
    id: 'rag-system',
    title: 'Grounded RAG System for Technical Knowledge',
    problem: 'LLMs tend to hallucinate when answering technical or domain-specific questions without access to verified context.',
    solution: 'Built a Retrieval-Augmented Generation pipeline using vector embeddings stored in PostgreSQL (pgvector), ensuring responses are grounded in retrieved documents.',
    impact: 'Improved answer reliability for technical queries by prioritizing retrieval quality over raw model capability.',
    tech: ['Next.js', 'TypeScript', 'Qdrant', 'LangChain', 'OpenAI'],
    lessons: 'Good retrieval and clean data matter more than larger models for accuracy.',
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
    impact:
      'The project helped me understand how real-time systems behave when timing, physics, and input handling are managed manually.',
    tech: ['Python', 'Pygame-CE', 'OOP', 'Game Physics'],
    lessons:
      'Simple games are a great way to learn real-time loops, state machines, and physics without the overhead of a full engine.',
    imageUrl: 'https://github.com/user-attachments/assets/dacf298d-1135-41b5-8e59-7bb4df63ec72',
    githubUrl: 'https://github.com/IamVatsal/Deaths-Job'
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['C', 'Python', 'TypeScript', 'C++', 'SQL']
  },
  {
    category: 'Web & Backend',
    skills: ['Next.js', 'React', 'Node.js', 'Express', 'Tailwind']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'MySQL', 'Qdrant Vector DBs']
  },
  {
    category: 'Systems & Tools',
    skills: ['Linux/Unix', 'Docker', 'Git', 'Embedded Systems']
  },
  {
    category: 'Interactive Systems',
    skills: [
      'Game Loops',
      'Physics Simulation',
      'State Machines',
      'Collision Detection',
      'Real-Time Systems'
    ]
  }
];

export const PHILOSOPHY = [
  {
    title: 'Fundamentals First',
    content: 'Frameworks change quickly. Core concepts like algorithms, memory, and data flow do not. I focus on understanding the fundamentals so tools become interchangeable.'
  },
  {
    title: 'Abstractions Leak',
    content: 'Reliable systems require knowing what happens underneath the abstraction. I prefer understanding how things work internally rather than treating libraries as black boxes.'
  },
  {
    title: 'Build to Understand',
    content: "Reimplementing systems from scratch exposes edge cases, trade-offs, and constraints that tutorials often hide."
  }
];
