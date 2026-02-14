const GlobalReach = () => {
  const jurisdictions = [
    { name: "United States", type: "Headquarters", highlight: "Nevada" },
    { name: "Cayman Islands", type: "Offshore", highlight: "Private Banking" },
    { name: "Switzerland", type: "Vault Storage", highlight: "Gold Depository" },
    { name: "Singapore", type: "Asia Pacific", highlight: "Regional Hub" },
    { name: "Wyoming", type: "Domestic", highlight: "UBT Friendly" },
    { name: "Dubai", type: "Middle East", highlight: "Wealth Hub" }
  ];

  return (
    /* Added a subtle top-to-bottom gradient to the section bg */
    <section className="py-20 bg-gradient-to-b from-white via-off-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-midnight-navy mb-4">
            Global <span className="text-burnished-gold">Reach</span>
          </h2>
          <p className="font-sans text-slate-grey max-w-2xl mx-auto">
            Strategic presence across key financial jurisdictions to serve sovereign clients worldwide
          </p>
        </div>

        {/* World Map Visualization - Added Radial Gradient and subtle glow */}
        <div className="relative bg-midnight-navy rounded-2xl p-8 md:p-12 mb-12 overflow-hidden shadow-2xl">
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-midnight-navy to-midnight-navy" />
          
          {/* Abstract world map dots */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-burnished-gold rounded-full animate-pulse" />
            <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-burnished-gold rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-burnished-gold rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-burnished-gold rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-burnished-gold rounded-full animate-pulse" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-burnished-gold rounded-full animate-pulse" style={{animationDelay: '0.3s'}} />
            
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="25" y1="25" x2="50" y2="50" stroke="#C5A059" strokeWidth="0.1" opacity="0.4" />
              <line x1="50" y1="50" x2="75" y2="25" stroke="#C5A059" strokeWidth="0.1" opacity="0.4" />
              <line x1="33" y1="33" x2="66" y2="33" stroke="#C5A059" strokeWidth="0.1" opacity="0.4" />
              <line x1="25" y1="50" x2="75" y2="50" stroke="#C5A059" strokeWidth="0.1" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10 text-center">
            <p className="font-serif text-2xl text-gray-200 mb-2">Serving Clients Across</p>
            <p className="font-serif text-5xl md:text-7xl font-bold text-burnished-gold drop-shadow-md">6+ Jurisdictions</p>
            <p className="font-sans text-gray-400 mt-4 tracking-wide">From Nevada to Singapore, your wealth has no borders</p>
          </div>
        </div>

        {/* Jurisdiction Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jurisdictions.map((jurisdiction, index) => (
            <div 
              key={index}
              /* Added a very slight hover lift and background tint */
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-burnished-gold"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-xs text-slate-grey uppercase tracking-wider">{jurisdiction.type}</span>
                <span className="text-burnished-gold/60 text-xs">◆</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-midnight-navy">{jurisdiction.name}</h3>
              <p className="font-sans text-sm text-slate-grey">{jurisdiction.highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;