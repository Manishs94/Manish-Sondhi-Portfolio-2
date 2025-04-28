import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CaseStudies } from './CaseStudies';
import { DesignProject } from './DesignProject';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'case-study', name: 'Case Studies' },
  { id: 'design', name: 'Design Projects' },
  // { id: 'development', name: 'Development' },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const renderSelectedCategory = () => {
    switch (selectedCategory) {
      case 'case-study':
        return <CaseStudies />;
      case 'design':
        return <DesignProject />;
      // case 'development':
      //   return <DevelopmentProject />;
      default:
        return (
          <>
            <CaseStudies />
            <DesignProject />
            {/* <DevelopmentProject /> */}
          </>
        );
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-medium mb-4">
            Portfolio
          </span> */}
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Exploring the intersection of design, technology, and user experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {renderSelectedCategory()}

      </motion.div>
    </section>
  );
}
