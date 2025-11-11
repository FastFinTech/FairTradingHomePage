import { Package, BarChart3, Plug } from "lucide-react";

export function PlatformSection() {
  return (
    <section
      id="platform"
      className="relative py-24 bg-gradient-to-b from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Trading Platform — Developer-First
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            The most developer-friendly platform in the world
            makes it the most trader-friendly platform in the
            world.
          </p>
          <p className="text-lg text-gray-400">
            Traders, You get the best of both TradingView and
            NinjaTrader, without the problems. Trade in-browser
            or on Windows. Need a full-powered language to build
            indicators and addons like NinjaTrader does? We got
            you. Need the entire suite of community indicators
            like TradingView? We got you there too.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Package
                  size={24}
                  className="text-purple-400"
                />
              </div>
              <h3 className="text-2xl text-white mb-4">
                Extend & Publish
              </h3>
              <div className="space-y-3 text-gray-300 mb-6">
                <p>
                  Developers: Publish indicators, addons, datafeed/broker adapters, or
                  entire UIs to our package feed and see them
                  propagate to users automatically.
                </p>
                <p>
                  Keep source code private if you wish and
                  choose your billing model.
                </p>
                <p>
                  Or, release your packages free for all and enjoy
                  the content-creator payout system based on
                  user-hours just like a youtube content creator
                  would!
                </p>
              </div>

              {/* Package Manager UI Visualization */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className="w-full h-auto">
                  <defs>
                    <linearGradient id="packageBg" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  {/* Window Background */}
                  <rect width="600" height="400" fill="url(#packageBg)" />

                  {/* Header Bar */}
                  <rect width="600" height="50" fill="#0f172a" />
                  <text x="20" y="32" fill="#e2e8f0" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="600">Package Manager</text>
                  
                  {/* Window Controls */}
                  <g transform="translate(550, 20)">
                    <circle cx="0" cy="0" r="6" fill="#64748b" opacity="0.5" />
                    <circle cx="20" cy="0" r="6" fill="#64748b" opacity="0.5" />
                    <circle cx="40" cy="0" r="6" fill="#64748b" opacity="0.5" />
                  </g>

                  {/* Search Bar */}
                  <g transform="translate(20, 70)">
                    <rect width="560" height="40" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                    <text x="15" y="26" fill="#94a3b8" fontSize="14" fontFamily="Inter, sans-serif">🔍 Search packages...</text>
                    
                    {/* Category Filters */}
                    <g transform="translate(0, 55)">
                      <rect width="90" height="28" rx="14" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="1" />
                      <text x="45" y="18" fill="#60a5fa" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">All</text>
                      
                      <rect x="100" width="90" height="28" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                      <text x="145" y="18" fill="#94a3b8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">Indicators</text>
                      
                      <rect x="200" width="90" height="28" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                      <text x="245" y="18" fill="#94a3b8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">Strategies</text>
                      
                      <rect x="300" width="90" height="28" rx="14" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                      <text x="345" y="18" fill="#94a3b8" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle">UI Themes</text>
                    </g>
                  </g>

                  {/* Package List */}
                  <g transform="translate(20, 200)">
                    {/* Package 1 - Popular */}
                    <g>
                      <rect width="560" height="70" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
                      
                      {/* Icon */}
                      <rect x="15" y="15" width="40" height="40" rx="8" fill="#8b5cf6" opacity="0.2" />
                      <text x="35" y="42" fill="#a78bfa" fontSize="20" fontFamily="Inter, sans-serif" textAnchor="middle">📊</text>
                      
                      {/* Package Info */}
                      <text x="70" y="28" fill="#e2e8f0" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">Advanced Volume Profile</text>
                      <text x="70" y="45" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">by TradingTools Pro • 45k users</text>
                      
                      {/* Tags */}
                      <g transform="translate(70, 48)">
                        <rect width="50" height="16" rx="8" fill="#10b981" opacity="0.2" />
                        <text x="25" y="11" fill="#34d399" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">POPULAR</text>
                      </g>
                      
                      {/* Price/Install Button */}
                      <g transform="translate(450, 20)">
                        <rect width="90" height="30" rx="8" fill="#8b5cf6" />
                        <text x="45" y="20" fill="#ffffff" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">Install</text>
                      </g>
                      
                      {/* Rating */}
                      <text x="400" y="28" fill="#fbbf24" fontSize="12" fontFamily="Inter, sans-serif">★★★★★</text>
                      <text x="400" y="45" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">4.9 (2.1k)</text>
                    </g>

                    {/* Package 2 - Paid */}
                    <g transform="translate(0, 80)">
                      <rect width="560" height="70" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                      
                      {/* Icon */}
                      <rect x="15" y="15" width="40" height="40" rx="8" fill="#3b82f6" opacity="0.2" />
                      <text x="35" y="42" fill="#60a5fa" fontSize="20" fontFamily="Inter, sans-serif" textAnchor="middle">🎯</text>
                      
                      {/* Package Info */}
                      <text x="70" y="28" fill="#e2e8f0" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">Smart Order Flow Suite</text>
                      <text x="70" y="45" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">by FlowMaster • 12k users</text>
                      
                      {/* Tags */}
                      <g transform="translate(70, 48)">
                        <rect width="40" height="16" rx="8" fill="#f59e0b" opacity="0.2" />
                        <text x="20" y="11" fill="#fbbf24" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">PAID</text>
                      </g>
                      
                      {/* Price/Install Button */}
                      <g transform="translate(440, 20)">
                        <text x="0" y="12" fill="#60a5fa" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">$29.99</text>
                        <rect y="16" width="100" height="30" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
                        <text x="50" y="36" fill="#60a5fa" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">Buy</text>
                      </g>
                      
                      {/* Rating */}
                      <text x="400" y="28" fill="#fbbf24" fontSize="12" fontFamily="Inter, sans-serif">★★★★☆</text>
                      <text x="400" y="45" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">4.6 (847)</text>
                    </g>

                    {/* Package 3 - Installed */}
                    <g transform="translate(0, 160)">
                      <rect width="560" height="70" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                      
                      {/* Icon */}
                      <rect x="15" y="15" width="40" height="40" rx="8" fill="#10b981" opacity="0.2" />
                      <text x="35" y="42" fill="#34d399" fontSize="20" fontFamily="Inter, sans-serif" textAnchor="middle">⚡</text>
                      
                      {/* Package Info */}
                      <text x="70" y="28" fill="#e2e8f0" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">Lightning Fast Execution</text>
                      <text x="70" y="45" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">by SpeedTraders • 8.2k users</text>
                      
                      {/* Tags */}
                      <g transform="translate(70, 48)">
                        <rect width="50" height="16" rx="8" fill="#10b981" opacity="0.2" />
                        <text x="25" y="11" fill="#34d399" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">FREE</text>
                      </g>
                      
                      {/* Installed Button */}
                      <g transform="translate(450, 20)">
                        <rect width="90" height="30" rx="8" fill="#10b981" opacity="0.2" stroke="#10b981" strokeWidth="1" />
                        <text x="45" y="20" fill="#34d399" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">✓ Installed</text>
                      </g>
                      
                      {/* Rating */}
                      <text x="400" y="28" fill="#fbbf24" fontSize="12" fontFamily="Inter, sans-serif">★★★★★</text>
                      <text x="400" y="45" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">4.8 (1.5k)</text>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3
                    size={24}
                    className="text-green-400"
                  />
                </div>
                <h3 className="text-xl text-white mb-3">
                  Developers
                </h3>
                <p className="text-gray-300">
                  The FairTrading platform has the most
                  developer-friendly platform core in the world, period.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Plug size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl text-white mb-3">
                  Compatibility
                </h3>
                <p className="text-gray-300">
                  Connects to all prop firms and brokers as well
                  as our own backend!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20" />
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl text-white mb-6">
              Here's what's different
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The most developer-friendly core platform code
                in the world makes it easy to build and
                innovate.
              </p>
              <p>
                Anybody can build any kind of UI — Windows, Mac,
                Linux or Web, and any user can run multiple UI's
                at the same time, making this platform the{" "}
                <strong className="text-white">
                  most developer friendly
                </strong>{" "}
                and most extensible platform in the world. We
                have removed ALL limitations to what you can
                build, and ALL opinions about what UI framework
                you should use.
              </p>
              <p>
                This trading platform runs on your own computer
                OR on our servers, it's up to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}