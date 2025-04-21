import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, LineChart, Clock, Target, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Metric {
  icon: JSX.Element;
  value: string;
  label: string;
}

interface ProjectOverview {
  challenge: string;
  solution: string;
  impact: string;
}

interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics: Metric[];
  tools: string[];
  link: string;
  overview: ProjectOverview;
  team: string[];
  timeline: string;
  role: string;
  keyFeatures: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Bank of America Mobile Bill Payment',
    subtitle: 'Enhancing Digital Banking Experience',
    description: 'Bank of America, serving over 68 million customers, introduced a new Bill Pay feature in 2022. This feature allows users to handle payments for utilities, cable, phone services, and more through electronic transactions, available as early as the next working day.',
    image: '/images/Bank Of America Bill Payment.png',
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '68M+', label: 'Active Users' },
      { icon: <LineChart className="w-5 h-5" />, value: '40%', label: 'Reduced Drop-offs' },
      { icon: <Clock className="w-5 h-5" />, value: '25%', label: 'Process Improvement' },
      { icon: <Target className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' }
    ],
    tools: ['Figma', 'Analytics', 'User Testing', 'Protopie'],
    link: 'https://boa-billpay-redesign-fewkgfd.gamma.site/',
    overview: {
      challenge: 'Users expressed dissatisfaction with the Bill Pay feature, facing complexities in payment scheduling, limited flexibility, and confusion in tracking payment history.',
      solution: 'Implemented a streamlined UI with enhanced scheduling flexibility, real-time notifications, and improved payment history tracking.',
      impact: 'Achieved significant improvements in user satisfaction, adoption rates, and reduced support tickets related to bill payments.'
    },
    team: [
      'Product Designer (Lead)',
      'UX Research Team (4)',
      'Lead Designer'
    ],
    timeline: '2022 - Present',
    role: 'Lead Product Designer',
    keyFeatures: [
      'Streamlined payment scheduling',
      'Enhanced payment history tracking',
      'Real-time notifications',
      'Flexible payment management'
    ]
  },
  {
    id: 2,
    title: 'CYNC Loan Origination System',
    subtitle: 'Streamlining Commercial Lending',
    description: 'Redesigned the loan origination system for Cync, focusing on automating and simplifying the commercial lending process while ensuring regulatory compliance and improving user experience for both lenders and borrowers.',
    image: '/images/CYNC Dashboard Image.png',
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '45%', label: 'Faster Processing' },
      { icon: <LineChart className="w-5 h-5" />, value: '60%', label: 'Reduced Manual Work' },
      { icon: <Clock className="w-5 h-5" />, value: '35%', label: 'Time Savings' },
      { icon: <Target className="w-5 h-5" />, value: '50%', label: 'Error Reduction' }
    ],
    tools: ['Adobe XD', 'Jira', 'Miro', 'Protopie', 'UserTesting', 'Confluence'],
    link: 'https://cync-loan-origination-e8jwns9.gamma.site/',
    overview: {
      challenge: 'Complex loan origination process with multiple manual touchpoints, leading to delays, errors, and poor user experience for both lenders and borrowers.',
      solution: 'Implemented a streamlined, automated workflow with intelligent document processing, real-time status tracking, and integrated compliance checks.',
      impact: 'Significantly reduced loan processing time, improved accuracy, and enhanced user satisfaction for both internal teams and clients.'
    },
    team: [
      'Product Designer (Lead)',
      'Business Analysts (2)',
      'Development Team (6)',
      'QA Engineers (2)'
    ],
    timeline: '2023 - Present',
    role: 'Lead UX/UI Designer',
    keyFeatures: [
      'Automated document processing',
      'Real-time application tracking',
      'Integrated compliance checks',
      'Smart workflow automation',
      'Digital signature integration'
    ]
  },
  {
    id: 3,
    title: 'CYNC Advanced Analytics',
    subtitle: 'Accessible Banking Solutions',
    description: 'Creating a seamless banking experience across web and mobile platforms with accessibility in mind',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' },
      { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Task Completion' },
      { icon: <Clock className="w-5 h-5" />, value: '30%', label: 'Time Savings' },
      { icon: <Target className="w-5 h-5" />, value: '40%', label: 'Accuracy Improvement' }
    ],
    tools: ['Adobe XD', 'Miro', 'WCAG 2.1', 'Protopie', 'Confluence'],
    link: 'https://uiux-case-study-enhancin-zkm1u63.gamma.site/',
    overview: {
      challenge: 'Inconsistent experience across platforms and poor accessibility compliance',
      solution: 'Unified design system with strong accessibility focus and improved analytics',
      impact: 'Improved user satisfaction and full WCAG 2.1 compliance'
    },
    team: ['Lead Designer', 'Accessibility Expert', 'Analytics Team (2)'],
    timeline: '2021 - 2022',
    role: 'Lead Designer',
    keyFeatures: [
      'Cross-platform consistency',
      'WCAG 2.1 compliance',
      'Unified design system',
      'Advanced analytics dashboard'
    ]
  },
  {
    id: 4,
    title: 'UI/UX Design Process',
    subtitle: 'End-to-End Design Methodology',
    description: 'A comprehensive look at the UI/UX design process from research to implementation',
    image: '/images/uiux-process.jpg',
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '40%', label: 'User Engagement' },
      { icon: <LineChart className="w-5 h-5" />, value: '50%', label: 'Process Efficiency' },
      { icon: <Clock className="w-5 h-5" />, value: '35%', label: 'Time to Market' },
      { icon: <Target className="w-5 h-5" />, value: '45%', label: 'Success Rate' }
    ],
    tools: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    link: 'https://uiux-case-study-agobpmr.gamma.site/',
    overview: {
      challenge: 'Complex design processes leading to inefficient workflows and inconsistent outputs',
      solution: 'Standardized design methodology with clear frameworks and tooling',
      impact: 'Improved team efficiency and consistent high-quality deliverables'
    },
    team: ['UX Lead', 'UI Designer', 'Research Team'],
    timeline: '2023',
    role: 'UX Lead',
    keyFeatures: [
      'Research Framework',
      'Design System',
      'Process Documentation',
      'Quality Metrics'
    ]
  }
];

export function CaseStudies() {
  const navigate = useNavigate();
  const [selectedStudy, setSelectedStudy] = React.useState<number | null>(null);
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

  const handleViewCaseStudy = (study: CaseStudy) => {
    if (study.id === 1) {
      navigate('/case-studies/bank-of-america');
    } else if (study.id === 2) {
      navigate('/case-studies/cync-loan-origination');
    } else if (study.id === 3) {
      navigate('/case-studies/cync-advanced-analytics');
    } else if (study.id === 4) {
      navigate('/case-studies/uiux-process');
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              onClick={() => setSelectedStudy(selectedStudy === study.id ? null : study.id)}
            >
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {study.subtitle}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{study.description}</p>

                {selectedStudy === study.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 space-y-4"
                  >
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300">{study.overview.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300">{study.overview.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Impact</h4>
                      <p className="text-gray-600 dark:text-gray-300">{study.overview.impact}</p>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                    >
                      {metric.icon}
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">{metric.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{metric.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tools.map((tool, index) => (
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
                  onClick={() => handleViewCaseStudy(study)}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  View Case Study
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