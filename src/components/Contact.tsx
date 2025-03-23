import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="flex flex-col items-center space-y-6">
            <a
              href="mailto:ManishSondhi94@gamil.com"
              className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/manish-sondhi-2b3bb2217/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-600 hover:text-gray-900 rounded-full transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Manishs94"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-gray-600 hover:text-gray-900 rounded-full transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Download Resume</h3>
              <p className="text-gray-600 mb-6">
                Get a detailed overview of my experience and capabilities
              </p>
              <a
                href="https://drive.google.com/file/d/1f3OGLuVOEfvChp8s0fX9hyZVBWj12FLM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Download CV
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}