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
              Senior UI/UX Designer with 6+ years of experience creating user-centered designs 
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
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">Senior UI/UX Designer</h4>
                <p className="text-blue-600 mb-4">Cync Software • February 2022 - Present</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Led UX strategy for critical features, driving 20% increase in engagement</li>
                  <li>Improved usability by 30% through human-centered design approach</li>
                  <li>Increased user satisfaction by 15% using data-driven decisions</li>
                  <li>Reduced feature development cycles by 10% through effective cross-functional collaboration</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900">UI/UX Designer</h4>
                <p className="text-blue-600 mb-4">Bank of America • November 2018 - February 2022</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Increased mobile app Bill Payment feature adoption by 25%</li>
                  <li>Improved task completion rates by 15% through user research</li>
                  <li>Enhanced cross-platform usability metrics by 15%</li>
                  <li>Reduced user drop-off by 10% through data-driven improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}