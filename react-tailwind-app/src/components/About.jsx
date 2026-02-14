import React from 'react';

const About = () => {
  return (
    /* Changed bg to a linear gradient from slate-50 to midnight-navy */
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-midnight-navy overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="relative">
              {/* Darker text for the light background area */}
              <span className="text-burnished-gold font-mono text-sm tracking-widest uppercase mb-4 block">
                Establishment & Strategy
              </span>
              <h2 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-slate-900">
                Financial 
                <span className="block text-burnished-gold italic">Sovereignty</span>
              </h2>
              {/* Decorative underline */}
              <div className="h-1 w-24 bg-burnished-gold mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="group">
                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-burnished-gold mb-4">
                  Our Mission
                </h3>
                {/* Text transitions to lighter gray as background darkens */}
                <p className="font-sans text-slate-700 leading-relaxed text-lg border-l border-burnished-gold/30 pl-6">
                  To empower individuals with the architecture of financial sovereignty by transforming stagnant hard assets into dynamic, liquid wealth.
                </p>
              </div>

              <div className="group">
                <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-burnished-gold mb-4">
                  Our Vision
                </h3>
                <p className="font-sans text-slate-700 leading-relaxed text-lg border-l border-burnished-gold/30 pl-6">
                  To lead the global transition toward private, asset-backed banking systems that prioritize privacy, security, and mobility.
                </p>
              </div>
            </div>

            {/* Principles: Glassmorphism adjusted for the transition area */}
            <div className="bg-white/40 backdrop-blur-md border border-white/20 shadow-xl p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-burnished-gold/10 rounded-full blur-2xl"></div>
              <h4 className="font-sans text-sm font-bold text-midnight-navy uppercase tracking-widest mb-8 text-center">
                Core Principles
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "Privacy First", 
                  "Asset Security", 
                  "Global Mobility", 
                  "Wealth Preservation"
                ].map((principle) => (
                  <div key={principle} className="flex flex-col items-center space-y-3 text-center">
                    <span className="text-burnished-gold text-xl">◆</span>
                    <span className="font-sans text-xs font-bold tracking-wide uppercase text-slate-800">
                      {principle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats (Deep Dark Section) */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative z-10 space-y-6">
              {[
                { label: "Assets Under Architecture", value: "$10B+" },
                { label: "High-Net-Worth Clients", value: "500+" },
                { label: "Years of Experience", value: "15+" }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 rounded-xl border border-white/10 bg-midnight-navy/80 backdrop-blur-lg shadow-2xl transform transition-transform hover:-translate-y-1 ${
                    idx === 1 ? 'lg:translate-x-12' : '' 
                  }`}
                >
                  <div className="text-5xl font-serif font-bold text-burnished-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm tracking-widest uppercase text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-burnished-gold/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-burnished-gold/20 rounded-full blur-2xl -z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;