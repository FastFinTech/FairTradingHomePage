import { CompetitionVisualization } from './CompetitionVisualization';

export function CompetitionSection() {
  return (
    <section id="competition" className="relative py-24 bg-gradient-to-b from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-12">
            Competition Platform
          </h2>
          
          {/* Two Text Areas Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
            {/* First Text Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Prop firms, educators, influencers: Create competitions, join with live accounts from any participating prop firm, 
                  and run custom rule sets. We'll code them up for you!
                </p>
              </div>
            </div>

            {/* Second Text Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Always-on leaderboards allow everybody to compete every day, categorized by experience, account size, 
                  prop firm, instrument, live/eval, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Platform Visualization */}
        <CompetitionVisualization />
      </div>
    </section>
  );
}
