import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">Manish Sondhi's Portfolio</a>
            <p className="text-gray-400 mt-2 max-w-md">
              Building innovative web solutions with modern technologies and clean design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#portfolio" className="text-gray-400 hover:text-portfolio-accent transition-colors">Portfolio</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-portfolio-accent transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-portfolio-accent transition-colors">Skills</a></li>
                <li><a href="#impact" className="text-gray-400 hover:text-portfolio-accent transition-colors">Professional Impact</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-portfolio-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/Manishs94" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/manish-sondhi-2b3bb2217/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-accent transition-colors">LinkedIn</a></li>
                <li><a href="mailto:Manishsondhi94@gmail.com" className="text-gray-400 hover:text-portfolio-accent transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Manish Sondhi. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="p-3 bg-gray-800 rounded-full hover:bg-portfolio-accent hover:text-white transition-colors text-gray-400"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
