export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: 'Software Engineering' | 'AI Applications' | 'Business Automation' | 'Other';
  image: string;
  projectUrl?: string;
  githubUrl?: string;
  isPlaceholder: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  isCurrent: boolean;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  category: 'Artificial Intelligence' | 'Business Automation' | 'Software Engineering' | 'Technology' | 'Practical AI';
  publishDate: string;
  coverImage: string;
  content: string;
  isPlaceholder: boolean;
}

export interface Skill {
  name: string;
  category: string;
}

// ─── EXPERIENCE DATA ───────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: 'zilmoney-se',
    company: 'Zil Money',
    role: 'Software Engineer',
    type: 'Full-time',
    startDate: 'July 2025',
    endDate: 'Present',
    description: 'Working as a Software Engineer, contributing to the development and engineering of software solutions.',
    highlights: [
      'Software development and engineering',
      'Building scalable application solutions',
    ],
    isCurrent: true,
  },
  {
    id: 'edapt-ai-educator',
    company: 'Edapt',
    role: 'AI Educator / AI Trainer',
    type: 'Part-time',
    startDate: 'October 2024',
    endDate: 'July 2026',
    description: 'Conducting AI training sessions and mentoring students in prompt engineering, generative AI and practical AI applications.',
    highlights: [
      'Mentored 120+ students in prompt engineering and AI education',
      'Conducted online AI training sessions',
      'Contributed to IITM Pravartak-certified course offerings through Edapt',
      'Trained business owners to understand and practically apply AI',
      'Taught generative AI, prompt engineering and AI-powered workflows',
    ],
    isCurrent: true,
  },
  {
    id: 'edapt-senior-flutter',
    company: 'Edapt',
    role: 'Senior Flutter Developer',
    type: 'Full-time',
    startDate: 'August 2023',
    endDate: 'June 2025',
    description: 'Led Flutter development efforts, architecting and building cross-platform applications with a focus on quality and user experience.',
    highlights: [
      'Led Flutter application development',
      'Application architecture and code quality',
      'Cross-platform mobile application delivery',
    ],
    isCurrent: false,
  },
  {
    id: 'daxads-flutter',
    company: 'Dax Ads',
    role: 'Flutter Developer',
    type: 'Full-time',
    startDate: 'October 2022',
    endDate: 'August 2023',
    description: 'Developed Flutter applications, contributing to mobile development projects and delivering cross-platform solutions.',
    highlights: [
      'Flutter mobile application development',
      'Cross-platform development',
      'Application delivery and maintenance',
    ],
    isCurrent: false,
  },
  {
    id: 'edapt-flutter',
    company: 'Edapt',
    role: 'Flutter Developer',
    type: 'Full-time',
    startDate: 'June 2022',
    endDate: 'December 2022',
    description: 'Started professional career as a Flutter Developer, building mobile applications and gaining experience in cross-platform development.',
    highlights: [
      'Mobile application development with Flutter',
      'Learning and applying best practices',
      'Contributing to team projects',
    ],
    isCurrent: false,
  },
];

// ─── PROJECTS DATA (Placeholder – Replace with real projects) ──────────────────

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Title Here',
    description: 'A brief description of your project. Replace this with the details of an actual project you have worked on.',
    problem: 'Describe the problem this project aimed to solve.',
    solution: 'Describe how your solution addressed the problem.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    category: 'Software Engineering',
    image: '/images/project-placeholder.svg',
    isPlaceholder: true,
  },
  {
    id: 'project-2',
    title: 'AI Training Platform',
    description: 'A placeholder for an AI-related project. Replace with details of an actual project.',
    problem: 'Describe the challenge or need.',
    solution: 'Describe your approach and implementation.',
    technologies: ['AI', 'Prompt Engineering', 'Education'],
    category: 'AI Applications',
    image: '/images/project-placeholder.svg',
    isPlaceholder: true,
  },
  {
    id: 'project-3',
    title: 'Business Automation Solution',
    description: 'A placeholder for a business automation project. Replace with real project details.',
    problem: 'Describe the business workflow challenge.',
    solution: 'Describe how automation improved the process.',
    technologies: ['Automation', 'AI', 'Workflow Design'],
    category: 'Business Automation',
    image: '/images/project-placeholder.svg',
    isPlaceholder: true,
  },
];

// ─── ARTICLES DATA (Placeholder – Replace with real articles) ──────────────────

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Understanding Prompt Engineering: A Practical Guide',
    description: 'An introductory guide to prompt engineering and how it can be applied to improve productivity with AI tools.',
    category: 'Artificial Intelligence',
    publishDate: '2026-01-15',
    coverImage: '/images/article-placeholder.svg',
    content: 'Article content will go here. Replace this placeholder with your actual article.',
    isPlaceholder: true,
  },
  {
    id: 'article-2',
    title: 'How Business Owners Can Start Using AI Today',
    description: 'A practical overview of how business owners can begin integrating AI into their daily operations without a technical background.',
    category: 'Practical AI',
    publishDate: '2026-02-20',
    coverImage: '/images/article-placeholder.svg',
    content: 'Article content will go here. Replace this placeholder with your actual article.',
    isPlaceholder: true,
  },
  {
    id: 'article-3',
    title: 'Building Scalable Flutter Applications',
    description: 'Key considerations and architectural patterns for building scalable, maintainable Flutter applications.',
    category: 'Software Engineering',
    publishDate: '2026-03-10',
    coverImage: '/images/article-placeholder.svg',
    content: 'Article content will go here. Replace this placeholder with your actual article.',
    isPlaceholder: true,
  },
];

// ─── EXPERTISE AREAS ────────────────────────────────────────────────────────────

export const expertiseAreas = {
  softwareEngineering: {
    title: 'Software Engineering',
    tagline: 'Building practical, scalable and user-focused software applications.',
    skills: [
      'Flutter Development',
      'Dart',
      'Firebase',
      'API Integration',
      'Application Architecture',
      'Database Integration',
      'Responsive Applications',
      'Business Software Solutions',
    ],
  },
  aiEducation: {
    title: 'AI Education & Training',
    tagline: 'Helping individuals and business owners understand and apply AI in practical situations.',
    skills: [
      'Generative AI',
      'Prompt Engineering',
      'AI Tools for Business',
      'AI-Powered Workflows',
      'AI Productivity',
      'Business Use Cases',
      'Online AI Training',
      'Student Mentoring',
    ],
  },
  forwardDeployment: {
    title: 'Forward Deployment & Business Automation',
    tagline: 'Bridging the gap between business operations and technology implementation.',
    skills: [
      'Business Workflow Analysis',
      'Identifying Operational Challenges',
      'Automation Opportunities',
      'AI Implementation',
      'Business Process Improvement',
      'Software Solution Planning',
      'AI-Powered Business Systems',
    ],
  },
};

// ─── AI EDUCATION TOPICS ────────────────────────────────────────────────────────

export const aiEducationTopics = [
  'Introduction to Generative AI',
  'Prompt Engineering',
  'AI Tools for Business',
  'AI-Powered Business Workflows',
  'Practical Automation',
  'AI Productivity',
  'Building Software Using AI Tools',
];

// ─── NAV LINKS ──────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

// ─── SOCIAL LINKS ───────────────────────────────────────────────────────────────

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/sajad-k-957739216/',
  edapt: 'https://edapt.me/',
};
