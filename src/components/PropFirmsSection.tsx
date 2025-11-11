import { Eye, Activity, Rocket, TrendingUp } from 'lucide-react';
import { PropFirmControlPanel } from './PropFirmControlPanel';

export function PropFirmsSection() {
  return (
    <section id="prop-firms" className="relative py-24 bg-[#0a0e1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Prop Firms — Tools for Growth & Fairness
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Invent new account types, create new trading rule sets, attract more traders by working with us to innovate first. 
            We'll give you all that plus modern monitoring and risk-management features, and deliver transparency that builds trust with traders.
          </p>
          <p className="text-2xl text-white mt-6">
            <strong>Oh, and before we forget to mention</strong> — we're half the price you're paying now!
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative inline-block max-w-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-lg blur" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/30 rounded-lg px-8 py-4">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-2xl leading-none mt-1">*</span>
                  <p className="text-base text-gray-300 italic leading-relaxed">
                    We load-test 10 million order events per minute every morning. 
                    You know, just to make sure we won't embarrass you during market open.{' '}
                    <span className="text-gray-400">(Unlike... well, you know who.)</span>
                  </p>
                  <span className="text-gray-500 text-xl leading-none ml-2 mt-1" title="wink wink">😉</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <Eye size={24} className="text-blue-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">Open Source, Transparent</h3>
              <p className="text-gray-300 leading-relaxed">
                Our code is open: Prop firms can show traders the system is fair and auditable — an advantage in this market where trust is EVERYTHING.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Activity size={24} className="text-purple-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">Live API & Metrics</h3>
              <p className="text-gray-300 leading-relaxed">
                Access live updating data on your exposure, trader performance, risk rules, and more. Need a custom live data view? We'll add it.
              </p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <Rocket size={24} className="text-green-400" />
              </div>
              <h3 className="text-2xl text-white mb-4">Monetize & Innovate</h3>
              <p className="text-gray-300 leading-relaxed">
                Design subscription models, develop marketplaces and competitive products — our platform is built to innovate for new revenue streams.
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Feature */}
        <div className="max-w-6xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <TrendingUp size={24} className="text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white mb-2">Live Trading Environment</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Pass selected traders through to live exchange environment. Optionally hedge your exposure to SIM-funded traders by allowing us to build positions for you in your own live accounts.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span>Real-time trader promotion from SIM to live accounts</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span>Automated hedging to manage firm exposure</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                      <span>Live position mirroring in your brokerage accounts</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl blur-xl" />
                  <div className="relative">
                    <PropFirmControlPanel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
