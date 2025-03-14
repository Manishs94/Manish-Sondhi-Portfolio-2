import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, LineChart, Users, Zap, Clock, Target, Users2 } from 'lucide-react';

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
    title: 'Bank of America Mobile Bill Payment Redesign',
    subtitle: 'Enhancing Digital Banking Experience',
    description: 'Bank of America, serving over 68 million customers, introduced a new Bill Pay feature in 2022. This feature allows users to handle payments for utilities, cable, phone services, and more through electronic transactions, available as early as the next working day.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    metrics: [
      { icon: <Users2 className="w-5 h-5" />, value: '68M+', label: 'Active Users' },
      { icon: <LineChart className="w-5 h-5" />, value: '40%', label: 'Reduced Drop-offs' },
      { icon: <Clock className="w-5 h-5" />, value: '25%', label: 'Process Improvement' },
      { icon: <Target className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' }
    ],
    tools: ['Figma', 'Adobe XD', 'Analytics', 'User Testing', 'Protopie'],
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
    title: 'CYNC Software Platform Optimization',
    subtitle: 'Financial Software Enhancement',
    description: 'Simplifying complex financial software through user-centered design and iterative improvements',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '20%', label: 'Engagement Increase' },
      { icon: <Zap className="w-5 h-5" />, value: '30%', label: 'Improved Usability' }
    ],
    tools: ['Figma', 'Protopie', 'UserTesting'],
    link: '#',
    overview: {
      challenge: 'Complex financial software interface leading to user frustration',
      solution: 'Simplified UI with improved navigation and workflow',
      impact: 'Increased user engagement and satisfaction'
    },
    team: ['UX Designer', 'Developer'],
    timeline: '2021 - 2022',
    role: 'UX Designer',
    keyFeatures: [
      'Simplified navigation',
      'Improved workflows',
      'Enhanced UI'
    ]
  },
  {
    id: 3,
    title: 'Cross-Platform Banking Experience',
    subtitle: 'Accessible Banking Solutions',
    description: 'Creating a seamless banking experience across web and mobile platforms with accessibility in mind',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=1000',
    metrics: [
      { icon: <Users className="w-5 h-5" />, value: '35%', label: 'User Satisfaction' },
      { icon: <LineChart className="w-5 h-5" />, value: '45%', label: 'Task Completion' }
    ],
    tools: ['Sketch', 'InVision', 'WCAG 2.1'],
    link: '#',
    overview: {
      challenge: 'Inconsistent experience across platforms',
      solution: 'Unified design system with accessibility focus',
      impact: 'Improved user satisfaction and accessibility compliance'
    },
    team: ['Lead Designer', 'Accessibility Expert'],
    timeline: '2021',
    role: 'Lead Designer',
    keyFeatures: [
      'Cross-platform consistency',
      'WCAG 2.1 compliance',
      'Unified design system'
    ]
  }
];

export function CaseStudies() {
  const navigate = useNavigate();

  const handleViewCaseStudy = (study: CaseStudy) => {
    if (study.id === 1) {
      navigate('/case-studies/bank-of-america');
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-blue-600">
                  {study.subtitle}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {metric.icon}
                      <div>
                        <div className="font-bold text-gray-900">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleViewCaseStudy(study)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}