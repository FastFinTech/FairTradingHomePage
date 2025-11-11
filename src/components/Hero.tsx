import { ArrowRight, Code2, TrendingUp, Users } from 'lucide-react';
import logo from 'figma:asset/58ece3ae699ed2a60521d02495cec62c28ec1e5b.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1729] to-[#1a1035]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="mb-6">
              <img src={logo} alt="FairTrading" className="h-16 w-auto" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">Open Source Prop Futures Trading Ecosystem</span>
            </div>

            <h2 className="text-5xl lg:text-6xl text-white leading-tight">
              Built by traders.<br />
              Built for traders.<br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Built to be fair.
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              FairTrading is a prop futures trading ecosystem that's open-source, high-performance, and developer-first to be trader-first. 
              Smarter tooling and transparent systems mean <strong className="text-white">traders and prop firms both win.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('backend')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Features
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Request Early Access
              </button>
            </div>
          </div>

          {/* Right Column - Feature Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl text-white">Why FairTrading?</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center">
                    <Code2 size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-200">Open source — inspect the stack, build trust with your traders.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-lg flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-200">50% lower account costs for prop firms, savings passed to traders.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-200">Build your audience in our live stream trading rooms, competitions and community engagement features.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500/20 to-pink-500/10 rounded-lg flex items-center justify-center">
                    <Code2 size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-gray-200">Integrate your tools in our trading platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  );
}
