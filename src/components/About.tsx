import { ExternalLink } from 'lucide-react';

export function About() {
  const certifications = [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      credentialId: "YFMCQB9B53QO",
      description: "Comprehensive certification in UX design principles, research methods, and design tools",
      verifyLink: "https://www.coursera.org/account/accomplishments/specialization/YFMCQB9B53QO",
      image: "/images/google-ux-certificate.png"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">About Me</h2>
          
          {/* Introduction */}
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-700">
              Senior UI/UX Designer with 7+ years of experience creating user-centered designs 
              that drive engagement and enhance usability. Specialized in translating complex 
              requirements into intuitive digital experiences across web and mobile platforms.
            </p>
          </div>

          {/* Education */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">Southern New Hampshire University</h4>
              <p className="text-gray-600">Bachelor's Degree in Information Technology</p>
              <p className="text-gray-500 mt-2 text-sm italic">
                Graduated with a great learning experience in Information Technology
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                      <p className="text-blue-600 mb-2 text-sm">{cert.issuer}</p>
                      <p className="text-gray-600 mb-2">{cert.description}</p>
                      <div className="flex items-center space-x-2 text-sm mb-2">
                        <span className="text-gray-500">Credential ID:</span>
                        <span className="font-mono text-gray-700">{cert.credentialId}</span>
                      </div>
                      <a 
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                    <img 
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-32 h-32 object-contain ml-4 rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
            <div className="space-y-8">
              {/* CYNC Software Role */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">🧩 Senior Product & UI/UX Designer</h4>
                  <span className="text-gray-500 text-sm px-3 py-1 bg-gray-100 rounded-full">Tampa,FL</span>
                </div>
                <p className="text-blue-600 mb-6">CYNC Software · Feb 2022 – Present</p>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  As the lead designer at CYNC Software, I've owned the end-to-end user experience for a suite of enterprise SaaS products in the commercial lending space. My work has focused on solving complex B2B workflows, improving usability across modules, and aligning design with product and business strategy.
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🔍 Role Highlights:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                      <li>Collaborated directly with the CEO, product managers, and developers to define product vision and prioritize features across modules such as Collateral, Exposure, Analytics, and Relationship Management.</li>
                      <li>Led user research and usability testing, applying journey mapping, surveys, and A/B testing to identify friction points and increase adoption.</li>
                      <li>Created interactive prototypes and wireframes using Adobe XD, translating research insights into scalable design solutions.</li>
                      <li>Built and maintained a modular design system, aligning UI components and brand standards across multiple product verticals.</li>
                      <li>Partnered with engineering to ensure seamless design-to-development handoff using Agile sprints and tools like Jira, Confluence, and Miro.</li>
                      <li>Ensured WCAG 2.2 accessibility compliance and responsive behavior across all devices.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">✅ Key Impact:</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🚀</span>
                        <p className="text-gray-700">20% increase in user engagement</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">⏱</span>
                        <p className="text-gray-700">25% reduction in onboarding friction</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🎯</span>
                        <p className="text-gray-700">30% improvement in usability scores</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🔁</span>
                        <p className="text-gray-700">10% faster dev cycles</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🛠 Tools & Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Adobe XD', 'Sketch', 'Google Analytics', 'Miro', 'Jira', 'Confluence', 'React', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'WCAG 2.2'].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank of America Role */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">💼 UI/UX Designer</h4>
                  <span className="text-gray-500 text-sm px-3 py-1 bg-gray-100 rounded-full">New York, NY</span>
                </div>
                <p className="text-blue-600 mb-6">Bank of America · Nov 2018 – Feb 2022</p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  At Bank of America, I helped redefine digital banking workflows for millions of users through improved mobile and desktop experiences. I contributed to key product initiatives by applying research-backed design, accessibility, and cross-functional collaboration.
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🔍 Role Highlights:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                      <li>Designed and launched the Bill Payment feature for the bank's mobile app, resulting in a 25% increase in adoption.</li>
                      <li>Created user personas and journey maps, translating customer feedback into actionable design improvements.</li>
                      <li>Conducted usability testing, A/B experiments, and heatmap analysis to optimize interface structure and navigation.</li>
                      <li>Delivered high-fidelity prototypes aligned with BofA's design system and partnered with front-end teams using Angular, TypeScript, HTML5, and CSS3.</li>
                      <li>Led accessibility testing to ensure compliance with WCAG standards and make banking more inclusive for all users.</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">✅ Key Impact:</h5>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">📈</span>
                        <p className="text-gray-700">15% increase in task completion</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🔻</span>
                        <p className="text-gray-700">10% reduction in drop-off rates</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">💡</span>
                        <p className="text-gray-700">20% lower redesign costs</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">♿</span>
                        <p className="text-gray-700">Full accessibility compliance</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🛠 Tools & Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Adobe XD', 'InVision', 'Sketch', 'Angular', 'TypeScript', 'Jira', 'Confluence', 'Google Analytics', 'Heatmaps', 'WCAG', 'User Research'].map((tool) => (
                        <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}