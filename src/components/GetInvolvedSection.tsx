import { Code2, Heart, Users, Zap, Github, MessageSquare, DollarSign } from 'lucide-react';

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="relative py-20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1729]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <Heart size={16} className="text-pink-400" fill="currentColor" />
            <span className="text-sm text-gray-300">Join the Movement</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Get Involved with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              FairTrading
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're a developer, trader, or investor — there's a place for you in building the future of prop trading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* For Developers */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity" />
            <div className="relative bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Code2 size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl text-white mb-3">For Developers</h3>
              <p className="text-gray-400 mb-6">
                Contribute to open-source fintech. Build features, fix bugs, or create integrations.
              </p>
              <div className="space-y-3 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-blue-400 flex-shrink-0" />
                  <span>React, TypeScript, Rust</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-blue-400 flex-shrink-0" />
                  <span>MIT Licensed & Open Source</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-blue-400 flex-shrink-0" />
                  <span>Active community support</span>
                </div>
              </div>
              <a
                href="https://github.com/YOUR_USERNAME/fairtrading"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* For the Community */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity" />
            <div className="relative bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl text-white mb-3">Join the Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with traders, share strategies, and help shape the roadmap.
              </p>
              <div className="space-y-3 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-purple-400 flex-shrink-0" />
                  <span>Active Discord community</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-purple-400 flex-shrink-0" />
                  <span>Live trading rooms & events</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-purple-400 flex-shrink-0" />
                  <span>Direct feedback to developers</span>
                </div>
              </div>
              <a
                href="https://discord.gg/fB4pHcQe"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                Join Discord
              </a>
            </div>
          </div>

          {/* For Investors/Sponsors */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity" />
            <div className="relative bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <DollarSign size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl text-white mb-3">Support Development</h3>
              <p className="text-gray-400 mb-6">
                Accelerate innovation. Sponsor features, fund development, or partner with us.
              </p>
              <div className="space-y-3 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-green-400 flex-shrink-0" />
                  <span>Shape the product roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-green-400 flex-shrink-0" />
                  <span>Sponsor specific features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-green-400 flex-shrink-0" />
                  <span>Enterprise partnership opportunities</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Focus on the contact form after scroll
                    setTimeout(() => {
                      const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
                      if (nameInput) nameInput.focus();
                    }, 800);
                  }
                }}
                className="block w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center rounded-xl hover:shadow-xl hover:shadow-green-500/50 transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl text-white mb-2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Open
                  </span>
                </div>
                <p className="text-sm text-gray-400">100% Open Source</p>
              </div>
              <div>
                <div className="text-3xl text-white mb-2">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    MIT
                  </span>
                </div>
                <p className="text-sm text-gray-400">Permissive License</p>
              </div>
              <div>
                <div className="text-3xl text-white mb-2">
                  <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-400">Growing Community</p>
              </div>
              <div>
                <div className="text-3xl text-white mb-2">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Fair
                  </span>
                </div>
                <p className="text-sm text-gray-400">Trader-First Focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
