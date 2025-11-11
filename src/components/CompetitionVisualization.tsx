import { Filter, TrendingUp, Trophy, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function CompetitionVisualization() {
  const [selectedInstrument, setSelectedInstrument] = useState('NQ');

  const instruments = [
    { code: 'NQ', name: 'Nasdaq-100 E-mini', price: '26,625.50' },
    { code: 'ES', name: 'S&P 500 E-mini', price: '6,042.25' },
    { code: 'YM', name: 'Dow E-mini', price: '44,287.00' },
    { code: 'RTY', name: 'Russell 2000 E-mini', price: '2,341.80' },
    { code: 'CL', name: 'Crude Oil', price: '68.45' },
    { code: 'GC', name: 'Gold', price: '2,688.20' },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl" />
      <div className="relative bg-gradient-to-br from-[#0a1220]/90 to-[#071426]/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
        
        {/* Chart Section - Full Width */}
        <div>
          <div>
            <div className="p-6 border-b border-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-white flex items-center gap-2">
                  <TrendingUp size={20} className="text-blue-400" />
                  Influencer Cup — Live Positions
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">12 traders active</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Instrument Selector */}
            <div className="px-6 py-3 border-b border-white/5 flex items-center gap-3">
              <span className="text-xs text-gray-400">Instrument:</span>
              <div className="relative">
                <select
                  value={selectedInstrument}
                  onChange={(e) => setSelectedInstrument(e.target.value)}
                  className="appearance-none bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 pr-8 text-sm text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {instruments.map((instrument) => (
                    <option key={instrument.code} value={instrument.code} className="bg-[#0a1220] text-white">
                      {instrument.code} — {instrument.name}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs text-gray-400">Last:</span>
                <span className="text-sm text-white font-mono">
                  {instruments.find(i => i.code === selectedInstrument)?.price}
                </span>
                <span className="text-xs text-green-400">+0.85%</span>
              </div>
            </div>
            
            <div className="p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="400" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="chartBg" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#0a1220" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#071426" stopOpacity="1"/>
                  </linearGradient>
                </defs>

                <rect x="0" y="0" width="1000" height="400" fill="#07182a" />

                {/* Grid */}
                <g stroke="#163047" strokeOpacity="0.25" strokeWidth="1">
                  <line x1="30" y1="0" x2="30" y2="360" />
                  <line x1="85" y1="0" x2="85" y2="360" />
                  <line x1="140" y1="0" x2="140" y2="360" />
                  <line x1="195" y1="0" x2="195" y2="360" />
                  <line x1="250" y1="0" x2="250" y2="360" />
                  <line x1="305" y1="0" x2="305" y2="360" />
                  <line x1="360" y1="0" x2="360" y2="360" />
                  <line x1="415" y1="0" x2="415" y2="360" />
                  <line x1="470" y1="0" x2="470" y2="360" />
                  <line x1="525" y1="0" x2="525" y2="360" />
                  <line x1="580" y1="0" x2="580" y2="360" />
                  <line x1="635" y1="0" x2="635" y2="360" />
                  <line x1="690" y1="0" x2="690" y2="360" />
                  <line x1="745" y1="0" x2="745" y2="360" />
                  <line x1="800" y1="0" x2="800" y2="360" />
                  <line x1="855" y1="0" x2="855" y2="360" />
                  <line x1="910" y1="0" x2="910" y2="360" />
                  <line x1="965" y1="0" x2="965" y2="360" />
                  
                  <line x1="0" y1="60" x2="1000" y2="60" />
                  <line x1="0" y1="120" x2="1000" y2="120" />
                  <line x1="0" y1="180" x2="1000" y2="180" />
                  <line x1="0" y1="240" x2="1000" y2="240" />
                  <line x1="0" y1="300" x2="1000" y2="300" />
                  <line x1="0" y1="360" x2="1000" y2="360" />
                </g>

                {/* Candlesticks - 14 candles in uptrend */}
                <g className="candles">
                  {/* Candle 1 - Start low */}
                  <line x1="30" y1="280" x2="30" y2="320" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="24" y="294" width="12" height="18" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 2 */}
                  <line x1="85" y1="270" x2="85" y2="315" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="79" y="282" width="12" height="25" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 3 */}
                  <line x1="140" y1="260" x2="140" y2="295" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="134" y="272" width="12" height="16" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 4 */}
                  <line x1="195" y1="245" x2="195" y2="285" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="189" y="256" width="12" height="20" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 5 */}
                  <line x1="250" y1="235" x2="250" y2="270" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="244" y="246" width="12" height="18" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 6 */}
                  <line x1="305" y1="220" x2="305" y2="260" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="299" y="232" width="12" height="20" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 7 */}
                  <line x1="360" y1="210" x2="360" y2="245" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="354" y="222" width="12" height="16" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 8 */}
                  <line x1="415" y1="195" x2="415" y2="235" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="409" y="208" width="12" height="20" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 9 */}
                  <line x1="470" y1="180" x2="470" y2="220" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="464" y="192" width="12" height="20" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 10 */}
                  <line x1="525" y1="165" x2="525" y2="205" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="519" y="177" width="12" height="20" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 11 */}
                  <line x1="580" y1="155" x2="580" y2="190" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="574" y="166" width="12" height="18" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 12 */}
                  <line x1="635" y1="140" x2="635" y2="180" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="629" y="152" width="12" height="20" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 13 */}
                  <line x1="690" y1="125" x2="690" y2="165" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="684" y="137" width="12" height="20" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 14 - Peak */}
                  <line x1="745" y1="105" x2="745" y2="150" stroke="#86e1c6" strokeWidth="2" />
                  <rect x="739" y="117" width="12" height="26" fill="#86e1c6" stroke="#1b6b51" strokeOpacity="0.18" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 15 - Start of decline */}
                  <line x1="800" y1="120" x2="800" y2="160" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="794" y="132" width="12" height="22" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 16 - Declining */}
                  <line x1="855" y1="140" x2="855" y2="180" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="849" y="152" width="12" height="22" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 17 - Further down */}
                  <line x1="910" y1="155" x2="910" y2="195" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="904" y="167" width="12" height="22" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                  
                  {/* Candle 18 - Current position */}
                  <line x1="965" y1="165" x2="965" y2="205" stroke="#ffb7ad" strokeWidth="2" />
                  <rect x="959" y="177" width="12" height="22" fill="#ffb7ad" stroke="#8a3b30" strokeOpacity="0.12" strokeWidth="1" rx="2"/>
                </g>

                {/* Position markers */}
                {/* RocketScooter at the bottom of first candle wick */}
                <g transform="translate(30,320)">
                  <circle r="8" fill="#00b894" stroke="#fff" strokeWidth="2" />
                  <rect x="14" y="8" width="160" height="40" rx="6" fill="#0b1220" opacity="0.95"/>
                  <text x="20" y="26" fontFamily="Inter, Arial" fontSize="11" fill="#fff" fontWeight="600">RocketScooter</text>
                  <text x="20" y="40" fontFamily="Inter, Arial" fontSize="10">
                    <tspan fill="#9fb4c9">+1 MNQ </tspan>
                    <tspan fill="#86e1c6">$8,750</tspan>
                  </text>
                </g>

                {/* BDH's first short halfway - losing money */}
                <g transform="translate(415,195)">
                  <circle r="8" fill="#ff6b5b" stroke="#fff" strokeWidth="2" />
                  <rect x="14" y="8" width="170" height="40" rx="6" fill="#0b1220" opacity="0.95"/>
                  <text x="20" y="26" fontFamily="Inter, Arial" fontSize="11" fill="#fff" fontWeight="600">BDH (first short)</text>
                  <text x="20" y="40" fontFamily="Inter, Arial" fontSize="10">
                    <tspan fill="#9fb4c9">-150 NQ </tspan>
                    <tspan fill="#ff6b5b">($31,250)</tspan>
                  </text>
                </g>

                {/* BDH shorting huge at the highs - now with profit! */}
                <g transform="translate(745,105)">
                  <circle r="8" fill="#ff6b5b" stroke="#fff" strokeWidth="2" />
                  <rect x="-190" y="-48" width="180" height="40" rx="6" fill="#0b1220" opacity="0.95"/>
                  <text x="-184" y="-30" fontFamily="Inter, Arial" fontSize="11" fill="#fff" fontWeight="600">BDH (add-on short)</text>
                  <text x="-184" y="-16" fontFamily="Inter, Arial" fontSize="10">
                    <tspan fill="#9fb4c9">-250 NQ </tspan>
                    <tspan fill="#86e1c6">$62,500</tspan>
                  </text>
                </g>

                {/* Time labels */}
                <g fontFamily="Inter, Arial" fontSize="10" fill="#9fb4c9" opacity="0.8">
                  <text x="20" y="380">09:30</text>
                  <text x="130" y="380">10:00</text>
                  <text x="240" y="380">10:30</text>
                  <text x="350" y="380">11:00</text>
                  <text x="460" y="380">11:30</text>
                  <text x="570" y="380">12:00</text>
                  <text x="680" y="380">12:30</text>
                  <text x="790" y="380">13:00</text>
                  <text x="900" y="380">13:30</text>
                </g>

                {/* Price labels */}
                <g fontFamily="Inter, Arial" fontSize="10" fill="#9fb4c9" opacity="0.8">
                  <text x="960" y="65">26,750</text>
                  <text x="960" y="125">26,700</text>
                  <text x="960" y="185">26,650</text>
                  <text x="960" y="245">26,600</text>
                  <text x="960" y="305">26,550</text>
                  <text x="960" y="365">26,500</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Section: Join, Filters, Leaderboard */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-white/5">
          
          {/* Join Competition */}
          <div className="border-r border-white/5">
            <div className="p-6 bg-gradient-to-br from-blue-600/5 to-purple-600/5">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Users size={18} className="text-purple-400" />
                Join Competition
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Select Backend</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option>Tradovate</option>
                    <option>TopStep Trader</option>
                    <option>Apex Trader Funding</option>
                    <option>TradeDay</option>
                    <option>My Forex Funds</option>
                    <option>FTMO</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Account ID</label>
                  <input 
                    type="text" 
                    placeholder="Enter your account ID"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter password"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Nickname</label>
                  <input 
                    type="text" 
                    placeholder="Enter your nickname"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                  <Trophy size={16} />
                  Join Now
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="border-r border-white/5">
            <div className="p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Filter size={18} className="text-blue-400" />
                Leaderboard Filters
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Interval</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="bg-blue-600 text-white text-xs py-2 px-3 rounded-lg">Today</button>
                    <button className="bg-white/5 text-gray-400 text-xs py-2 px-3 rounded-lg hover:bg-white/10">Week</button>
                    <button className="bg-white/5 text-gray-400 text-xs py-2 px-3 rounded-lg hover:bg-white/10">Month</button>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Account Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option>All Types</option>
                    <option>Live</option>
                    <option>Sim-Funded</option>
                    <option>Eval</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Prop Firm</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option>All Firms</option>
                    <option>TopStep</option>
                    <option>Apex</option>
                    <option>TradeDay</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Team</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50">
                    <option>All Teams</option>
                    <option>Team Alpha</option>
                    <option>Team Beta</option>
                    <option>Solo Traders</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <div className="p-6">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Trophy size={18} className="text-yellow-400" />
                Leaderboard
              </h3>
              <div className="space-y-2">
                {/* Rank 1 */}
                <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-600/10 to-yellow-600/5 border border-yellow-600/20 rounded-lg">
                  <div className="text-yellow-400 font-bold text-lg">1</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">Matt Kohrs</div>
                    <div className="text-xs text-gray-400">TopStep • Live</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">$100,000</div>
                    <div className="text-xs text-gray-500">+200%</div>
                  </div>
                </div>

                {/* Rank 2 */}
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-300 font-bold text-lg">2</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">RocketScooter</div>
                    <div className="text-xs text-gray-400">My Funded Futures • Live</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">$12,450</div>
                    <div className="text-xs text-gray-500">+24.5%</div>
                  </div>
                </div>

                {/* Rank 3 */}
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-300 font-bold text-lg">3</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">ProTraderMike</div>
                    <div className="text-xs text-gray-400">Apex • Funded</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">$9,820</div>
                    <div className="text-xs text-gray-500">+19.6%</div>
                  </div>
                </div>

                {/* Rank 4 */}
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-gray-400 text-lg">4</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm truncate">QuickScalper</div>
                    <div className="text-xs text-gray-400">TopStep • Missing or broken</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">$7,650</div>
                    <div className="text-xs text-gray-500">+15.3%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
