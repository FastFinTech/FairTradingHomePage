import { useState, useEffect } from 'react';
import { Github, Star } from 'lucide-react';

export function FloatingGitHub() {
  const [stars, setStars] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after user scrolls down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch GitHub stars (replace with your actual repo)
    // For now, showing a placeholder - you'll update with your repo name
    const fetchStars = async () => {
      try {
        // Replace 'username/repo' with your actual GitHub repo
        const response = await fetch('https://api.github.com/repos/microsoft/vscode');
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error('Failed to fetch GitHub stars:', error);
      }
    };
    fetchStars();
  }, []);

  return (
    <a
      href="https://github.com/YOUR_USERNAME/fairtrading"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 group transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Button */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-xl flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
          <Github size={20} />
          <div className="flex flex-col items-start">
            <span className="text-xs opacity-90">Star on</span>
            <span className="font-semibold">GitHub</span>
          </div>
          {stars && (
            <div className="flex items-center gap-1 ml-2 px-2 py-1 bg-white/20 rounded-lg">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-semibold">
                {stars > 1000 ? `${(stars / 1000).toFixed(1)}k` : stars}
              </span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
