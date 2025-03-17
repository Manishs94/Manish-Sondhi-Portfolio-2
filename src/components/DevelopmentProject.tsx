import { ArrowUpRight, Github } from 'lucide-react';

export interface DevelopmentProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  features: string[];
}

const developmentProjects: DevelopmentProject[] = [
  {
    id: 1,
    title: 'React Component Library',
    description: 'A collection of reusable React components built with TypeScript and Tailwind CSS',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
    githubLink: '#',
    demoLink: '#',
    features: ['Fully typed components', 'Responsive design', 'Accessibility compliant']
  },
  // Add more development projects here
];

export function DevelopmentProject() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Development Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
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
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
                <a
                  href={project.demoLink}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Live Demo
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}