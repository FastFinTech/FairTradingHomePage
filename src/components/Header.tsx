import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import logo from 'figma:asset/58ece3ae699ed2a60521d02495cec62c28ec1e5b.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0e1a]/95 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="FairTrading" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection('backend')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Backend
            </button>
            <button onClick={() => scrollToSection('platform')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Platform
            </button>
            <button onClick={() => scrollToSection('trading-room')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Trading Room
            </button>
            <button onClick={() => scrollToSection('competition')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Competition
            </button>
            <button onClick={() => scrollToSection('prop-firms')} className="text-sm text-gray-300 hover:text-white transition-colors">
              For Prop Firms
            </button>
            <a
              href="https://github.com/YOUR_USERNAME/fairtrading"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              title="View on GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('backend')} className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                Backend
              </button>
              <button onClick={() => scrollToSection('platform')} className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                Platform
              </button>
              <button onClick={() => scrollToSection('trading-room')} className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                Trading Room
              </button>
              <button onClick={() => scrollToSection('competition')} className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                Competition
              </button>
              <button onClick={() => scrollToSection('prop-firms')} className="text-sm text-gray-300 hover:text-white transition-colors text-left">
                For Prop Firms
              </button>
              <a
                href="https://github.com/YOUR_USERNAME/fairtrading"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-left"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
