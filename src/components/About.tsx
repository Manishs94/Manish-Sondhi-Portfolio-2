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
          <div className="container mx-auto px-4 sm:px-6 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a Product and UI/UX Designer with 7 years of experience designing user-centered digital solutions that not only delight users but also drive measurable business outcomes. My work spans across fintech, SaaS, and enterprise platforms, with a focus on solving real-world problems through thoughtful design, usability, and strategy.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                At the core of my design philosophy is a deep understanding of user behavior, stakeholder goals, and technical constraints. I approach every project by aligning product vision with user needs—starting from research and ideation, through wireframes and high-fidelity UI, to developer-ready handoffs and post-launch iteration.
              </p>

              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">I specialize in:</h4>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 flex-shrink-0">▹</span>
                    <span className="text-gray-700">Turning complex workflows into intuitive interfaces—whether it's a loan origination system, an admin dashboard, or a schema-based form builder</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 flex-shrink-0">▹</span>
                    <span className="text-gray-700">Design systems that ensure consistency and scalability across web and mobile platforms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 flex-shrink-0">▹</span>
                    <span className="text-gray-700">Collaborative design processes, working closely with product managers, developers, and cross-functional teams in Agile environments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-600 flex-shrink-0">▹</span>
                    <span className="text-gray-700">Using tools like Figma, Adobe XD, and Protopie, along with platforms like Jira, Confluence, and Miro for smooth end-to-end delivery</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                I believe great design is part empathy, part logic, and part craft. My goal is always to create experiences that are seamless, accessible, and scalable—balancing visual clarity with functional depth.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-50 p-4 sm:p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900">Southern New Hampshire University</h4>
              <p className="text-gray-600">Bachelor's Degree in Information Technology</p>
              <p className="text-gray-500 mt-2 text-sm italic">
                Graduated with a great learning experience in Information Technology
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 p-4 sm:p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="grid grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className="flex-1 mb-4 sm:mb-0">
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
                      className="w-full sm:w-32 h-32 object-contain sm:ml-4 rounded-lg shadow-sm"
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
                  <span className="text-gray-500 text-sm px-3 py-1 bg-gray-100 rounded-full">Tampa, FL</span>
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

              {/* Innovative Design Studio Role */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900">🎨 Junior UI/UX Designer</h4>
                  <span className="text-gray-500 text-sm px-3 py-1 bg-gray-100 rounded-full">Freelance</span>
                </div>
                <p className="text-blue-600 mb-6">Innovative Design Studio · Jan 2018 – Nov 2018</p>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  I worked on multiple early-stage projects, contributing to research, UX flows, and UI visuals under the guidance of senior designers. 
                  This role gave me foundational hands-on experience in applying human-centered design principles to real client problems.
                </p>

                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🔍 Entry-Level UX Contributions:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                      <li>Created low-fidelity wireframes and prototypes for startup and nonprofit clients</li>
                      <li>Supported research through user interviews, surveys, and usability documentation</li>
                      <li>Collaborated in brainstorming sessions to shape product direction and features</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🎨 UI & Visual Work:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                      <li>Built UI assets and interactive prototypes using Sketch and Illustrator</li>
                      <li>Focused on mobile-first responsive design and visual hierarchy</li>
                      <li>Developed mini style guides and icon sets for client handoffs</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">🛠 Tools & Methods:</h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Sketch',
                        'Adobe Illustrator',
                        'Photoshop',
                        'User Surveys',
                        'Heuristic Evaluation',
                        'Wireframing',
                        'Agile Collaboration'
                      ].map((tool) => (
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