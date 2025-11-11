import { Camera, Sparkles, ShieldCheck, MessageSquare, Users } from 'lucide-react';

export function TradingRoomSection() {
  const features = [
    {
      icon: Camera,
      title: 'Clippets & Notes',
      description: 'Capture screenshots and clips from your stream, add voice or typed notes, and build a notarized diary of trading decisions and teachable moments. Latecomers can arrive, get your trading plan updates, and view the important teachable moments of your trading day in a compact blow-by-blow summary. You can prove your planning in advance with this history.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Specialized Action Buttons',
      description: 'Keep chat clean and focused on trading. Create special action buttons to run giveaways, collect contact info, or get viewer reactions. Chat stays clean but community activity (like responses to your questions) gets bubbled into view in just the right way.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Trading Proof',
      description: 'Link your prop firm and broker accounts so your community can view proof instantly through our verified summary of your performance.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Summaries',
      description: 'Streamers: Never miss a good comment or question in the noise - let our AI agent read the chat and provide you with instant easy key summaries of exactly what you need to know to interact with chat. Audience: AI summaries keep you updated on community talk in just a glance.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Closed Groups',
      description: 'Create exclusive trading rooms for your premium members with advanced features and private interactions. Setup permissions from your system to our API, or use our billing system entirely.',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="trading-room" className="relative py-24 bg-[#0a0e1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Trading Room — Stream, Teach, Trade
          </h2>
          <p className="text-xl text-gray-300">
            Stream as you normally do in youtube, but gather here. Embed your stream, engage your audience, 
            and augment your content with trading-first tools.
          </p>
        </div>

        {/* Trading Room Visualization */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl" />
          <div className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-4 lg:p-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" className="w-full h-auto">
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0a1220" />
                  <stop offset="100%" stopColor="#071426" />
                </linearGradient>
                <linearGradient id="streamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="1200" height="700" fill="url(#bgGradient)" rx="12" />

              {/* Main Content Area - Stream Video */}
              <g transform="translate(20, 20)">
                <rect width="750" height="500" rx="8" fill="url(#streamGradient)" stroke="#3b82f6" strokeWidth="2" opacity="0.9" />
                
                {/* Video Content - Trading Chart Mockup */}
                <g transform="translate(30, 30)">
                  {/* Chart Background */}
                  <rect width="690" height="380" rx="4" fill="#0f172a" />
                  
                  {/* Chart Grid */}
                  <g stroke="#1e293b" strokeWidth="1" opacity="0.3">
                    <line x1="0" y1="95" x2="690" y2="95" />
                    <line x1="0" y1="190" x2="690" y2="190" />
                    <line x1="0" y1="285" x2="690" y2="285" />
                    <line x1="138" y1="0" x2="138" y2="380" />
                    <line x1="276" y1="0" x2="276" y2="380" />
                    <line x1="414" y1="0" x2="414" y2="380" />
                    <line x1="552" y1="0" x2="552" y2="380" />
                  </g>
                  
                  {/* Price Line */}
                  <polyline
                    points="20,200 80,180 140,210 200,160 260,140 320,150 380,120 440,100 500,110 560,80 620,90 670,70"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Fill under line */}
                  <path
                    d="M20,200 L80,180 L140,210 L200,160 L260,140 L320,150 L380,120 L440,100 L500,110 L560,80 L620,90 L670,70 L670,380 L20,380 Z"
                    fill="url(#chartGradient)"
                  />
                </g>

                {/* Stream Controls Overlay */}
                <g transform="translate(30, 420)">
                  <rect width="690" height="50" rx="6" fill="#0f172a" opacity="0.9" />
                  
                  {/* Viewer Count */}
                  <circle cx="25" cy="25" r="8" fill="#ef4444" />
                  <text x="45" y="30" fill="#e2e8f0" fontSize="14" fontFamily="Inter, sans-serif">🔴 LIVE</text>
                  <text x="130" y="30" fill="#94a3b8" fontSize="14" fontFamily="Inter, sans-serif">1,247 viewers</text>
                  
                  {/* Verified Badge */}
                  <g transform="translate(280, 15)">
                    <circle r="10" fill="#10b981" />
                    <text x="0" y="5" fill="#ffffff" fontSize="14" textAnchor="middle" fontWeight="bold">✓</text>
                  </g>
                  <text x="305" y="30" fill="#10b981" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">Verified Trader</text>
                  
                  {/* Performance Badge */}
                  <rect x="450" y="12" width="100" height="26" rx="13" fill="#3b82f6" opacity="0.2" />
                  <text x="500" y="30" fill="#60a5fa" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">+12.5% Today</text>
                </g>

                {/* Clippet Capture Button */}
                <g transform="translate(650, 40)">
                  <rect width="60" height="60" rx="12" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                  <circle cx="30" cy="30" r="12" fill="#3b82f6" />
                  <circle cx="30" cy="30" r="8" fill="#ffffff" />
                  <text x="30" y="85" fill="#60a5fa" fontSize="11" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">Clip</text>
                </g>
              </g>

              {/* Right Sidebar - Chat & Features */}
              <g transform="translate(790, 20)">
                <rect width="390" height="660" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="2" opacity="0.9" />
                
                {/* Chat Header */}
                <rect width="390" height="50" rx="8" fill="#1e293b" />
                <text x="20" y="32" fill="#e2e8f0" fontSize="16" fontFamily="Inter, sans-serif" fontWeight="600">Community Chat</text>
                
                {/* AI Summary Badge */}
                <g transform="translate(250, 15)">
                  <rect width="120" height="26" rx="13" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="1" />
                  <text x="60" y="18" fill="#fbbf24" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">✨ AI Summary</text>
                </g>

                {/* AI Summary Panel */}
                <g transform="translate(15, 65)">
                  <rect width="360" height="80" rx="6" fill="#422006" opacity="0.3" stroke="#f59e0b" strokeWidth="1" />
                  <text x="15" y="20" fill="#fbbf24" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Key Highlights:</text>
                  <text x="15" y="38" fill="#fde68a" fontSize="11" fontFamily="Inter, sans-serif">• 5 viewers asking about entry strategy</text>
                  <text x="15" y="53" fill="#fde68a" fontSize="11" fontFamily="Inter, sans-serif">• Popular question: "Stop loss placement?"</text>
                  <text x="15" y="68" fill="#fde68a" fontSize="11" fontFamily="Inter, sans-serif">• 12 reactions to last trade explanation</text>
                </g>

                {/* Chat Messages */}
                <g transform="translate(15, 160)">
                  {/* Message 1 */}
                  <g>
                    <circle cx="15" cy="10" r="10" fill="#6366f1" />
                    <text x="35" y="12" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">TraderMike</text>
                    <text x="35" y="27" fill="#e2e8f0" fontSize="12" fontFamily="Inter, sans-serif">Great entry! What's your target?</text>
                  </g>

                  {/* Message 2 */}
                  <g transform="translate(0, 45)">
                    <circle cx="15" cy="10" r="10" fill="#ec4899" />
                    <text x="35" y="12" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">SarahTrades</text>
                    <text x="35" y="27" fill="#e2e8f0" fontSize="12" fontFamily="Inter, sans-serif">Thanks for the clippet earlier 👍</text>
                  </g>

                  {/* Message 3 */}
                  <g transform="translate(0, 90)">
                    <circle cx="15" cy="10" r="10" fill="#10b981" />
                    <text x="35" y="12" fill="#94a3b8" fontSize="11" fontFamily="Inter, sans-serif">ProTrader99</text>
                    <text x="35" y="27" fill="#e2e8f0" fontSize="12" fontFamily="Inter, sans-serif">Love this platform!</text>
                  </g>
                </g>

                {/* Action Buttons */}
                <g transform="translate(15, 390)">
                  <text x="0" y="0" fill="#94a3b8" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">Quick Actions</text>
                  
                  {/* Button 1 */}
                  <g transform="translate(0, 15)">
                    <rect width="360" height="40" rx="8" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1" />
                    <text x="180" y="25" fill="#60a5fa" fontSize="13" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">🎁 Enter Giveaway</text>
                  </g>

                  {/* Button 2 */}
                  <g transform="translate(0, 60)">
                    <rect width="360" height="40" rx="8" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="1" />
                    <text x="180" y="25" fill="#a78bfa" fontSize="13" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">👍 React to Trade</text>
                  </g>

                  {/* Button 3 */}
                  <g transform="translate(0, 105)">
                    <rect width="360" height="40" rx="8" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="1" />
                    <text x="180" y="25" fill="#34d399" fontSize="13" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">📊 View Stats</text>
                  </g>
                </g>

                {/* Premium Badge */}
                <g transform="translate(15, 600)">
                  <rect width="360" height="45" rx="8" fill="#7c3aed" opacity="0.2" stroke="#7c3aed" strokeWidth="2" />
                  <text x="180" y="28" fill="#c4b5fd" fontSize="13" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="600">👑 Premium Members Room Available</text>
                </g>
              </g>

              {/* Clippets Diary (Bottom) */}
              <g transform="translate(20, 540)">
                <text x="0" y="0" fill="#94a3b8" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">Trading Diary - Recent Clippets</text>
                
                {/* Diary Entry 1 */}
                <g transform="translate(0, 20)">
                  <rect width="750" height="70" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="1" opacity="0.8" />
                  
                  {/* Timestamp bar */}
                  <rect width="4" height="70" rx="2" fill="#3b82f6" />
                  
                  {/* Embedded thumbnail */}
                  <rect x="15" y="10" width="90" height="50" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
                  <text x="60" y="38" fill="#3b82f6" fontSize="20" fontFamily="Inter, sans-serif" textAnchor="middle">📸</text>
                  
                  {/* Entry content */}
                  <text x="120" y="20" fill="#60a5fa" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">10:24 AM - Entry Signal Spotted</text>
                  <text x="120" y="38" fill="#e2e8f0" fontSize="11" fontFamily="Inter, sans-serif">Bullish divergence on RSI. Entering long at 18,450.</text>
                  <text x="120" y="52" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">Target: 18,520 | Stop: 18,420</text>
                  
                  {/* Metadata */}
                  <g transform="translate(650, 25)">
                    <text x="0" y="0" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">👁️ 247</text>
                    <text x="0" y="15" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">💬 12</text>
                  </g>
                </g>

                {/* Diary Entry 2 */}
                <g transform="translate(0, 100)">
                  <rect width="750" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1" opacity="0.8" />
                  
                  {/* Timestamp bar */}
                  <rect width="4" height="70" rx="2" fill="#10b981" />
                  
                  {/* Embedded video icon */}
                  <rect x="15" y="10" width="90" height="50" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
                  <text x="60" y="38" fill="#10b981" fontSize="20" fontFamily="Inter, sans-serif" textAnchor="middle">🎥</text>
                  
                  {/* Entry content */}
                  <text x="120" y="20" fill="#34d399" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="600">11:15 AM - Exit Trade (WINNER)</text>
                  <text x="120" y="38" fill="#e2e8f0" fontSize="11" fontFamily="Inter, sans-serif">Hit target at 18,520. +70 points. Great risk/reward setup!</text>
                  <text x="120" y="52" fill="#94a3b8" fontSize="10" fontFamily="Inter, sans-serif">P&L: +$1,400 | Duration: 51 min</text>
                  
                  {/* Metadata */}
                  <g transform="translate(650, 25)">
                    <text x="0" y="0" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">👁️ 892</text>
                    <text x="0" y="15" fill="#64748b" fontSize="10" fontFamily="Inter, sans-serif">🔥 45</text>
                  </g>
                </g>
              </g>
            </svg>

            {/* Overlay with feature callouts */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/50 to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-8 pointer-events-none">
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                  <span className="text-sm text-blue-200">Live Streaming</span>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full">
                  <span className="text-sm text-purple-200">Community Engagement</span>
                </div>
                <div className="px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                  <span className="text-sm text-green-200">Verified Proof</span>
                </div>
                <div className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full">
                  <span className="text-sm text-orange-200">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`} />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} opacity-20 rounded-xl flex items-center justify-center mb-6`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl text-white mb-4">{feature.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
