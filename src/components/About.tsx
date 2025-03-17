import { ExternalLink } from 'lucide-react';

export function About() {
  const certifications = [
    {
      title: "Build Dynamic User Interfaces (UI) for Websites",
      issuer: "Google",
      credentialId: "EFM10I04ZF5C",
      description: "Certified in building dynamic and responsive user interfaces for websites",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/EFM10I04ZF5C?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      issuer: "Google",
      credentialId: "B029MRSE563C",
      description: "Certified in creating effective wireframes and low-fidelity prototypes",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/B029MRSE563C"
    },
    {
      title: "Conduct UX Research and Test Early Concepts",
      issuer: "Google",
      credentialId: "ZW3Z06WLTYRI",
      description: "Certified in UX research methodologies and early concept testing",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/ZW3Z06WLTYRI"
    },
    {
      title: "Create High-Fidelity Designs and Prototypes in Figma",
      issuer: "Google",
      credentialId: "579DDV46FZSQ",
      description: "Certified in creating detailed designs and interactive prototypes using Figma",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/579DDV46FZSQ"
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google",
      credentialId: "QCNEJE9DC9NE",
      description: "Certified in fundamental principles of UX design",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/QCNEJE9DC9NE"
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      issuer: "Google",
      credentialId: "HJ4O7LZ3HCRN",
      description: "Certified in core UX design process phases",
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/HJ4O7LZ3HCRN"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                      <p className="text-blue-600 mb-2 text-sm">{cert.issuer}</p>
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
                        Verify Certificate
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                    {/* <img 
                      src="/images/google-logo.png" 
                      alt="Google" 
                      className="w-8 h-8 object-contain ml-4"
                    /> */}
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