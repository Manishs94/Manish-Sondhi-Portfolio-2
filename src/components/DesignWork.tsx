import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DesignProject {
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
    title: 'Hulu Redesign Project',
    description: 'A modern, responsive redesign of the Hulu streaming platform interface',
    image: '/images/Hulu-Design.png',
    category: 'UI/UX Design',
    tools: ['React', 'Tailwind CSS', 'Responsive Design'],
    link: '/design/hulu'
  },
  // Add more design projects here
];

export function DesignWork() {
  const navigate = useNavigate();

  const handleViewProject = (project: DesignProject) => {
    if (project.link === '/design/hulu') {
      navigate(project.link);
    } else {
      window.open(project.link, '_blank');
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
                <div className="mb-2 text-sm font-medium text-blue-600">
                  {project.category}
                </div>
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