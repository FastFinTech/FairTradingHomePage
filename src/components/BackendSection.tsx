import { Zap, DollarSign, Layers, Code } from "lucide-react";

export function BackendSection() {
  return (
    <section
      id="backend"
      className="relative py-24 bg-[#0a0e1a]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Data Feed & Exchange Simulator
          </h2>
          <p className="text-xl text-gray-300">
            Reliable and fast. Our exchange simulator replaces
            brittle legacy systems (Tradovate Rithmic and
            ProjectX) and gives you scale and stability you can
            trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} className="text-blue-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Performance & Reliability
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We built our test harness before writing our
                first line of code and now process more than 10
                million trading events per minute. We built
                scalable and reliable from day 1 to fix the
                industry problems.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <DollarSign
                  size={24}
                  className="text-green-400"
                />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Lower Cost
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We charge 50% less per user account to prop
                firms: Savings can be passed on to traders.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Layers size={24} className="text-purple-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Platform Compatibility
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Traders, keep your favourite trading platform if you
                wish. Our backend works with TradingView,
                Quantower, Bookmap, Jigsaw, Sierra and more.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                <Code size={24} className="text-orange-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Custom Code
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Prop firms - work with us to innovate and BLOW
                UP this industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}