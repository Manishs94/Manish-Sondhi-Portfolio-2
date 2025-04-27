import React from 'react';
import { ArrowUpRight, LineChart, Users, Zap, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

export interface DesignProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  link: string;
  metrics?: { icon: JSX.Element; value: string; label: string }[];
  process?: string;
  problem?: string;
  solution?: string;
  features: string[];
  githubLink?: string;
  demoLink?: string;
  isInternalRoute?: boolean;
  routePath?: string;
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'CSS Animations Gallery',
    description: 'A curated collection of interaction design patterns and micro-animations, focusing on user engagement and visual feedback',
    image: '/images/Animations.jpg',
    category: 'Interaction Design',
    tools: ['Figma', 'Principle', 'Framer', 'After Effects'],
    link: '/animations',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '40%', label: 'Engagement Increase' },
      { icon: <LineChart className="w-5 h-5" />, value: '25%', label: 'User Satisfaction' }
    ],
    problem: 'Limited user engagement due to static animations and lack of interactive feedback',
    process: 'Researched animation principles, created prototypes, and conducted usability testing',
    solution: 'Implemented intuitive animations with responsive interactions and performance optimization',
    features: [
      'Interactive animation examples',
      'Custom CSS transitions',
      'Responsive design',
      'Performance optimized'
    ],
  },
  {
    id: 2,
    title: 'Kanban Board',
    description: 'A user-centered task management interface with focus on workflow optimization and visual hierarchy',
    image: '/images/KanbanFire.jpg',
    category: 'UX Design',
    tools: ['Figma', 'Maze', 'Miro', 'ProtoPie'],
    link: '/kanban',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '45%', label: 'Task Completion' },
      { icon: <LineChart className="w-5 h-5" />, value: '30%', label: 'Workflow Efficiency' }
    ],
    problem: 'Complex task management leading to reduced productivity and user frustration',
    process: 'Analyzed user workflows, created wireframes, and iteratively tested prototypes',
    solution: 'Developed an intuitive drag-and-drop interface with clear visual hierarchy',
    features: [
      'Drag and drop interface',
      'Real-time updates',
      'Task management',
      'Board customization'
    ],
  },
  {
    id: 3,
    title: 'Hulu Redesign',
    description: 'A modern, responsive redesign of the Hulu streaming platform interface',
    image: '/images/Hulu-Design.png',
    category: 'UI/UX Design',
    tools: ['React', 'Tailwind CSS', 'Responsive Design'],
    link: '/design/hulu',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '35%', label: 'User Engagement' },
      { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Conversion Rate' }
    ],
    problem: 'Outdated interface leading to poor user engagement',
    process: 'Conducted user research and created interactive prototypes',
    solution: 'Modern, responsive interface with improved navigation',
    features: [
      'Personalized recommendations',
      'Advanced search filters',
      'Watchlist management',
      'Cross-device synchronization'
    ],
  },
  {
    id: 4,
    title: 'Split Landing Page',
    description: 'A modern split-screen landing page featuring bold visuals and clear calls-to-action.',
    image: '/images/Split-Landing-Page.jpg', // Ensure this image exists in your images folder
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '/design/split',
    problem: 'Ineffective landing page conversion and unclear user journey',
    process: 'Analyzed user behavior, conducted A/B testing, and refined visual hierarchy',
    solution: 'Created a split-screen design that improved conversion rates and user engagement',
    features: [
      'Dynamic content transitions',
      'Responsive split layout',
      'Optimized image loading',
      'Interactive hover states'
    ],
  },
  {
    id: 5,
    title: 'Expanding Cards Gallery',
    description: 'An interactive image gallery with smooth expanding animations and responsive design.',
    image: '/images/expanding-cards.jpg', // Add this image to your public/images folder
    category: 'Interactive Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: '/design/expanding-cards',
    problem: 'Traditional gallery layouts limiting content exploration and user interaction',
    process: 'Explored innovative interaction patterns and tested with target users',
    solution: 'Designed an expanding card system that enhances content discovery',
    features: [
      'Smooth expansion animations',
      'Touch-friendly interface',
      'Dynamic content loading',
      'Keyboard accessibility'
    ],
  },
  {
    id: 6,
    title: 'Rotating Navigation',
    description: 'An innovative navigation interface featuring smooth rotating animations and unique user interactions.',
    image: '/images/rotating-nav-animation.jpg',
    category: 'Interactive Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: '/design/rotating-nav',
    problem: 'Conventional navigation patterns causing reduced user engagement',
    process: 'Experimented with novel navigation concepts and validated through user testing',
    solution: 'Implemented a unique rotating navigation that improved site exploration',
    features: [
      'Innovative menu transitions',
      'Seamless page navigation',
      'Custom animation timing',
      'Mobile-first design'
    ],
  },
  {
    id: 7,
    title: 'Progress Steps',
    description: 'An intuitive progress indicator with interactive step navigation and smooth transitions.',
    image: '/images/3D-Boxes-background.jpg',
    category: 'Interactive Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: '/design/progress-steps',
    problem: 'Unclear progress indication in multi-step processes',
    process: 'Studied user behavior in form completion and tested various progress indicators',
    solution: 'Created an intuitive step system with clear visual feedback and transitions',
    features: [
      'Interactive step indicators',
      'Progress persistence',
      'Form validation',
      'Animated transitions'
    ],
  },
  {
    id: 8,
    title: 'Budget Planner',
    description: 'A dynamic budget planner application with search and filtering capabilities',
    image: '/images/Budget-Planner.jpg',
    category: 'Application Design',
    tools: ['React', 'JavaScript', 'CSS', 'Netlify'],
    link: '/recipe',
    githubLink: 'https://github.com/yourusername/recipe-book',
    demoLink: 'https://61f0efec215e813c8ff08265--hardcore-roentgen-8b2667.netlify.app/',
    features: [
      'Budget planner',
      'Search functionality',
      'Responsive design',
      'Category filtering'
    ],
    isInternalRoute: true,
    routePath: '/recipe',
    problem: 'Complex financial management and lack of intuitive categorization',
    process: 'Conducted user research on financial planning habits and tested various UI patterns',
    solution: 'Created a streamlined interface with clear categorization and visual feedback'
  },
  {
    id: 9,
    title: 'Video Game Database',
    description: 'A comprehensive video game database with search and filtering capabilities',
    image: '/images/Ng-Video-Game.jpg',
    category: 'Database Interface Design',
    tools: ['Angular', 'TypeScript', 'Firebase', 'RapidAPI'],
    link: '/video-games',
    githubLink: 'https://github.com/yourusername/video-game-db',
    demoLink: 'https://ng-video-game-db.web.app/',
    features: [
      'Game search functionality',
      'Detailed game information',
      'Rating system',
      'Responsive design'
    ],
    isInternalRoute: true,
    routePath: '/video-games',
    problem: 'Information overload and poor content organization',
    process: 'Analyzed user search patterns and information hierarchy needs',
    solution: 'Implemented an intuitive search and filter system with clear visual hierarchy'
  },
  {
    id: 10,
    title: 'Todo Application',
    description: 'A feature-rich todo application with real-time updates and persistent storage',
    image: '/images/React-todo.png',
    category: 'Productivity Design',
    tools: ['React', 'TypeScript', 'Netlify', 'CSS'],
    link: '/todo',
    githubLink: 'https://github.com/yourusername/todo-app',
    demoLink: 'https://todo-cda1b8.netlify.app/',
    features: [
      'Task management',
      'Real-time updates',
      'Persistent storage',
      'Responsive design'
    ],
    isInternalRoute: true,
    routePath: '/todo',
    problem: 'Task management complexity and poor user engagement',
    process: 'Studied user productivity patterns and task management workflows',
    solution: 'Designed a clean, focused interface with clear task hierarchy'
  },
  {
    id: 11,
    title: 'Twitter Clone',
    description: 'A full-featured Twitter clone with real-time updates and social interactions',
    image: '/images/Twitter.jpg',
    category: 'Social Media Design',
    tools: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
    link: '/twitter',
    githubLink: 'https://github.com/yourusername/twitter-clone',
    demoLink: 'https://twitter-clone-83a92.firebaseapp.com/',
    features: [
      'Real-time feed updates',
      'User authentication',
      'Tweet functionality',
      'Responsive design'
    ],
    isInternalRoute: true,
    routePath: '/twitter',
    problem: 'Complex social interactions and information overload',
    process: 'Analyzed social media interaction patterns and user engagement metrics',
    solution: 'Created a streamlined interface focusing on core social features'
  }
];

export function DesignProject() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Design Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 space-y-4"
                  >
                    {project.problem && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Problem</h4>
                        <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
                      </div>
                    )}
                    {project.process && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Process</h4>
                        <p className="text-gray-600 dark:text-gray-300">{project.process}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Solution</h4>
                        <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
                      </div>
                    )}

                    {project.features && (
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Key Features</h4>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {metric.icon}
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{metric.value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {project.githubLink && (
                  <div className="flex gap-4 mb-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(project.link);
                  }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View Project
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}