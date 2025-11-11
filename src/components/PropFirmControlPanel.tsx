export function PropFirmControlPanel() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Browser Window Frame */}
      <rect x="20" y="20" width="560" height="360" rx="12" fill="url(#bg-gradient)" fillOpacity="0.15" />
      <rect x="20" y="20" width="560" height="360" rx="12" stroke="url(#border-gradient)" strokeWidth="1.5" />
      
      {/* Browser Top Bar */}
      <rect x="20" y="20" width="560" height="36" rx="12" fill="rgba(255,255,255,0.05)" />
      <line x1="20" y1="56" x2="580" y2="56" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      
      {/* Browser Dots */}
      <circle cx="40" cy="38" r="5" fill="#FF5F57" />
      <circle cx="60" cy="38" r="5" fill="#FFBD2E" />
      <circle cx="80" cy="38" r="5" fill="#28CA42" />
      
      {/* URL Bar */}
      <rect x="110" y="30" width="360" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <text x="120" y="41" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">propfirm.fairtrading.io/control-panel</text>
      
      {/* Main Content Area */}
      <g transform="translate(40, 76)">
        {/* Header */}
        <text x="0" y="20" fill="white" fontSize="16" fontFamily="system-ui, -apple-system, sans-serif">Live Trading Control Panel</text>
        
        {/* Stats Cards Row */}
        <g transform="translate(0, 40)">
          {/* Card 1 - Active Traders */}
          <rect x="0" y="0" width="250" height="80" rx="8" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
          <text x="12" y="20" fill="rgba(147, 197, 253, 0.8)" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">Active SIM Traders</text>
          <text x="12" y="48" fill="white" fontSize="24" fontFamily="system-ui, -apple-system, sans-serif">247</text>
          <text x="12" y="66" fill="rgba(34, 197, 94, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">↑ 12% this week</text>
          
          {/* Card 2 - Live Accounts */}
          <rect x="270" y="0" width="250" height="80" rx="8" fill="rgba(249, 115, 22, 0.1)" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1.5" />
          <text x="282" y="20" fill="rgba(251, 191, 36, 0.8)" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">Live Accounts</text>
          <text x="282" y="48" fill="white" fontSize="24" fontFamily="system-ui, -apple-system, sans-serif">38</text>
          <text x="282" y="66" fill="rgba(34, 197, 94, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">↑ 5 passed evals</text>
        </g>
        
        {/* Total Exposure Table */}
        <g transform="translate(0, 140)">
          <rect x="0" y="0" width="520" height="155" rx="8" fill="rgba(168, 85, 247, 0.05)" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" />
          
          {/* Table Header */}
          <text x="12" y="20" fill="rgba(192, 132, 252, 0.8)" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">Total Sim-funded exposure (selected traders)</text>
          
          <g transform="translate(0, 30)">
            <text x="12" y="12" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">INSTRUMENT</text>
            <text x="120" y="12" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">DIRECTION</text>
            <text x="230" y="12" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">CONTRACTS</text>
            <text x="340" y="12" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">NOTIONAL</text>
            <text x="440" y="12" fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">HEDGE</text>
            
            <line x1="12" y1="20" x2="508" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            
            {/* Row 1 - NQZ25 */}
            <text x="12" y="40" fill="white" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">NQZ25</text>
            <rect x="120" y="30" width="50" height="16" rx="4" fill="rgba(239, 68, 68, 0.2)" />
            <text x="128" y="41" fill="rgba(239, 68, 68, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Short</text>
            <text x="230" y="40" fill="white" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">500</text>
            <text x="340" y="40" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">$10.2M</text>
            <text x="440" y="40" fill="rgba(34, 197, 94, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Active</text>
            
            {/* Row 2 - ESZ25 */}
            <text x="12" y="68" fill="white" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">ESZ25</text>
            <rect x="120" y="58" width="50" height="16" rx="4" fill="rgba(34, 197, 94, 0.2)" />
            <text x="128" y="69" fill="rgba(34, 197, 94, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Long</text>
            <text x="230" y="68" fill="white" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">3854</text>
            <text x="340" y="68" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">$19.3M</text>
            <text x="440" y="68" fill="rgba(34, 197, 94, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Active</text>
            
            {/* Row 3 - RTYH25 */}
            <text x="12" y="96" fill="white" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">RTYH25</text>
            <rect x="120" y="86" width="50" height="16" rx="4" fill="rgba(34, 197, 94, 0.2)" />
            <text x="128" y="97" fill="rgba(34, 197, 94, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Long</text>
            <text x="230" y="96" fill="white" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">1240</text>
            <text x="340" y="96" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">$6.2M</text>
            <text x="440" y="96" fill="rgba(251, 191, 36, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Partial</text>
            
            {/* Row 4 - CLZ25 */}
            <text x="12" y="124" fill="white" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif">CLZ25</text>
            <rect x="120" y="114" width="50" height="16" rx="4" fill="rgba(239, 68, 68, 0.2)" />
            <text x="128" y="125" fill="rgba(239, 68, 68, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">Short</text>
            <text x="230" y="124" fill="white" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">285</text>
            <text x="340" y="124" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="system-ui, -apple-system, sans-serif">$2.1M</text>
            <text x="440" y="124" fill="rgba(148, 163, 184, 1)" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif">None</text>
          </g>
        </g>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
