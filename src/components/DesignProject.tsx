import React from 'react';
import { ArrowUpRight, LineChart, Users, Zap } from 'lucide-react';
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
}

const designProjects: DesignProject[] = [
  {
    id: 1,
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
    solution: 'Modern, responsive interface with improved navigation'
  },
  {
    id: 2,
    title: 'Split Landing Page',
    description: 'A modern split-screen landing page featuring bold visuals and clear calls-to-action.',
    image: '/images/Split-Landing-Page.jpg', // Ensure this image exists in your images folder
    category: 'Web Design',
    tools: ['HTML', 'CSS', 'JavaScript'],
    link: '/design/split'
  },
  {
    id: 3,
    title: 'Expanding Cards Gallery',
    description: 'An interactive image gallery with smooth expanding animations and responsive design.',
    image: '/images/expanding-cards.jpg', // Add this image to your public/images folder
    category: 'Interactive Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: '/design/expanding-cards'
  },
  {
    id: 4,
    title: 'Rotating Navigation',
    description: 'An innovative navigation interface featuring smooth rotating animations and unique user interactions.',
    image: '/images/rotating-nav-animation.jpg',
    category: 'Interactive Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: '/design/rotating-nav'
  },
  {
    id: 5,
    title: 'Progress Steps',
    description: 'An intuitive progress indicator with interactive step navigation and smooth transitions.',
    image: '/images/3D-Boxes-background.jpg',
    category: 'Interactive Design',
    tools: ['HTML', 'CSS', 'JavaScript', 'Animations'],
    link: '/design/progress-steps'
  }
  // Add more design projects here if needed
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

                {selectedProject === project.id && project.problem && (
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
                    {/* ...similar sections for process and solution... */}
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