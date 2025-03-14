import { Code, Palette, Search, Users } from 'lucide-react';

const skills = {
  design: {
    icon: <Palette className="w-6 h-6" />,
    title: 'Design Tools',
    items: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
  },
  research: {
    icon: <Search className="w-6 h-6" />,
    title: 'Research Methods',
    items: ['User Interviews', 'Usability Testing', 'A/B Testing', 'Analytics']
  },
  technical: {
    icon: <Code className="w-6 h-6" />,
    title: 'Technical Skills',
    items: ['HTML5', 'CSS3', 'Angular', 'Responsive Design']
  },
  process: {
    icon: <Users className="w-6 h-6" />,
    title: 'Process',
    items: ['Agile', 'Sprint Planning', 'Stakeholder Management', 'Design Systems']
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([key, category]) => (
            <div key={key} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}