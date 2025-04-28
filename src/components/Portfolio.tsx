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
    rootMargin: '50px 0px',
  });

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
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
    <section id="portfolio" className="py-10 md:py-20 bg-white dark:bg-gray-900 min-h-screen">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 md:px-6"
        style={{ opacity: inView ? 1 : 0 }} // Fallback for mobile
      >
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Exploring the intersection of design, technology, and user experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 md:px-5 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
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
