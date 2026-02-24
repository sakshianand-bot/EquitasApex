import React from 'react';

const TrustIndicators = () => {
  const partners = [
    { name: "Private Financing Partners", abbr: "PFP" },
    { name: "Capital Recycling Advisors", abbr: "CRA" },
    { name: "Strategic Distribution Trust", abbr: "SDT" },
    { name: "Global Vault Solutions", abbr: "GVS" },
    { name: "Wealth Protection Exchange", abbr: "WPX" },
    { name: "Fiduciary Alliance", abbr: "FA" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        {/* Section Header with Decorative Lines */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-slate-200 hidden sm:block"></div>
          <p className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-[0.3em]">
            Institutional Grade Partnerships
          </p>
          <div className="h-px w-12 bg-slate-200 hidden sm:block"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Logo Placeholder / Icon */}
              <div className="relative mb-4 flex items-center justify-center">
                {/* Decorative background bloom on hover */}
                <div className="absolute inset-0 bg-burnished-gold/0 group-hover:bg-burnished-gold/5 rounded-full blur-xl transition-all duration-500" />
                
                <div className="relative w-20 h-12 flex items-center justify-center border-b-2 border-transparent group-hover:border-burnished-gold/30 transition-all">
                  <span className="font-serif text-2xl font-black tracking-tighter text-midnight-navy/40 group-hover:text-midnight-navy transition-colors">
                    {partner.abbr}
                  </span>
                </div>
              </div>

              {/* Partner Name */}
              <span className="font-sans text-[10px] md:text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors uppercase tracking-wider text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;