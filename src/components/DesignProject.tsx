import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export interface DesignProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  link: string;
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'Hulu Redesign',
    description: 'A modern, responsive redesign of the Hulu streaming platform interface',
    image: '/images/Hulu-Design.png',
    category: 'UI/UX Design',
    tools: ['React', 'Tailwind CSS', 'Responsive Design'],
    link: '/design/hulu'
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

  const handleViewProject = (project: DesignProject) => {
    if (project.id === 1) {
      navigate('/design/hulu');
    } else if (project.id === 2) {
      navigate('/design/split');
    } else if (project.id === 3) {
      navigate('/design/expanding-cards');
    } else if (project.id === 4) {
      navigate('/design/rotating-nav');
    } else if (project.id === 5) {
      navigate('/design/progress-steps');
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Design Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm font-medium text-blue-600">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleViewProject(project)}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View Project
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