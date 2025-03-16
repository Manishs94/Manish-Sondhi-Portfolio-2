import { Award, MessageSquare, TrendingUp } from 'lucide-react';

const achievements = [
  {
    title: 'Increased User Engagement',
    description: 'Led the redesign of core banking features resulting in a 25% increase in daily active users',
    metric: '25%'
  },
  {
    title: 'Improved Task Completion',
    description: 'Optimized user flows reducing average task completion time by 40%',
    metric: '40%'
  },
  {
    title: 'Enhanced Customer Satisfaction',
    description: 'Implemented user-centered design processes leading to a 35% increase in NPS',
    metric: '35%'
  }
];

const testimonials = [
  {
    quote: "Their ability to transform complex requirements into intuitive designs has been invaluable to our success.",
    author: "Sarah Johnson",
    role: "Product Manager, Bank of America"
  },
  {
    quote: "A rare combination of design excellence and business acumen. Their work consistently exceeds expectations.",
    author: "Brant Nesbitt",
    role: "Director of UX, CYNC Software"
  }
];

export function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Professional Impact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-500" />
              Key Achievements
            </h3>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 font-bold text-xl px-4 py-2 rounded">
                    {achievement.metric}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-blue-500" />
              Client Testimonials
            </h3>
            
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            Process Improvements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Design System Implementation</h4>
              <p className="text-gray-600">Established a comprehensive design system reducing design-to-development time by 50%</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Research Integration</h4>
              <p className="text-gray-600">Implemented continuous user research program leading to data-driven design decisions</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Team Collaboration</h4>
              <p className="text-gray-600">Led cross-functional design sprints improving team alignment and project outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}