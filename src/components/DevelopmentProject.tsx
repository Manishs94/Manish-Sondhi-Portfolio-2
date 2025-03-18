import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface DevelopmentProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  features: string[];
  isInternalRoute?: boolean;
  routePath?: string;
  image: string; // Add this line
}

const developmentProjects: DevelopmentProject[] = [
  {
    id: 1,
    title: 'CSS Animations Gallery',
    description: 'An interactive gallery showcasing various CSS animations and transitions',
    technologies: ['React', 'CSS', 'Framer Motion', 'TypeScript'],
    githubLink: 'https://github.com/yourusername/animations-project',
    demoLink: 'https://animations-a7d93.web.app/',
    features: [
      'Interactive animation examples',
      'Custom CSS transitions',
      'Responsive design',
      'Performance optimized'
    ],
    isInternalRoute: true,
    routePath: '/animations',
    image: '/images/Animations.jpg' // Add your image path
  },
  {
    id: 2,
    title: 'Kanban Board',
    description: 'A dynamic Kanban board application for task management and workflow organization',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/kanban-project',
    demoLink: 'https://kanban-fire-be71d.web.app/',
    features: [
      'Drag and drop interface',
      'Real-time updates',
      'Task management',
      'Board customization'
    ],
    isInternalRoute: true,
    routePath: '/kanban',
    image: '/images/KanbanFire.jpg'
  },
  {
    id: 3,
    title: 'Budget Planner',
    description: 'A dynamic budget planner application with search and filtering capabilities',
    technologies: ['React', 'JavaScript', 'CSS', 'Netlify'],
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
    image: '/images/Budget-Planner.jpg'
  },
  {
    id: 4,
    title: 'Video Game Database',
    description: 'A comprehensive video game database with search and filtering capabilities',
    technologies: ['Angular', 'TypeScript', 'Firebase', 'RapidAPI'],
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
    image: '/images/Ng-Video-Game.jpg'
  },
  {
    id: 5,
    title: 'Todo Application',
    description: 'A feature-rich todo application with real-time updates and persistent storage',
    technologies: ['React', 'TypeScript', 'Netlify', 'CSS'],
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
    image: '/images/React-todo.png'
  },
  {
    id: 6,
    title: 'Twitter Clone',
    description: 'A full-featured Twitter clone with real-time updates and social interactions',
    technologies: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
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
    image: '/images/Twitter.jpg'
  }
];

export function DevelopmentProject() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Development Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="list-disc list-inside mb-6 text-gray-600">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
                {project.isInternalRoute ? (
                  <Link
                    to={project.routePath!}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                ) : (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}