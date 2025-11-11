import { Github } from 'lucide-react';
import logo from 'figma:asset/58ece3ae699ed2a60521d02495cec62c28ec1e5b.png';

export function Footer() {
  return (
    <footer className="relative bg-[#05070f] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <img src={logo} alt="FairTrading" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">Open-source prop futures trading ecosystem</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fair Trading First LLC. Built by traders, for traders.
          </p>
        </div>
      </div>
    </footer>
  );
}
