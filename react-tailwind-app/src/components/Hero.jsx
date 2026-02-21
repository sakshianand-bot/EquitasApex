import React from 'react';
import heroImage from '../assets/nastuh-abootalebi-ZtC4_rPCRXA-unsplash.webp';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#FDFCF0] overflow-hidden flex items-center pt-20">
      {/* Visual Background Element - Right Side */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/3 md:h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF0] via-[#FDFCF0]/80 to-transparent z-10 md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF0] via-transparent to-transparent z-10 hidden md:block" />
        <img 
          src={heroImage} 
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        {/* Subtle Navy Overlay to make it feel premium */}
        <div className="absolute inset-0 bg-midnight-navy/10 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          {/* Decorative Tag */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-midnight-navy/40" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-midnight-navy/60">
              Institutional Frameworks
            </span>
          </div>

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-light text-midnight-navy leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Sovereign Wealth <br />
            <span className="font-serif italic font-medium opacity-90">Architecture</span>
          </h1>
          
          <p className="text-slate-grey text-base md:text-lg lg:text-xl max-w-lg mb-12 md:mb-16 leading-relaxed border-l-2 border-midnight-navy/20 pl-4 md:pl-6">
            Transforming stagnant hard assets into dynamic, liquid wealth through 
            <span className="text-midnight-navy font-semibold"> private, asset-backed banking systems.</span>
          </p>

          {/* Bottom Info Grid - Elevated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 bg-white/50 backdrop-blur-sm shadow-xl shadow-midnight-navy/5">
            <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-white transition-colors group">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 mb-2 md:mb-4 block">01 / When</span>
              <h4 className="text-base md:text-lg font-bold text-midnight-navy mb-1 md:mb-2">Immediate</h4>
              <p className="text-xs md:text-sm text-slate-grey leading-relaxed">Strategic liquidity and structural deployment available on demand.</p>
            </div>
            
            <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-gray-100 hover:bg-white transition-colors group">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 mb-2 md:mb-4 block">02 / Where</span>
              <h4 className="text-base md:text-lg font-bold text-midnight-navy mb-1 md:mb-2">Global</h4>
              <p className="text-xs md:text-sm text-slate-grey leading-relaxed">Secure, private jurisdictions tailored for sovereign protection.</p>
            </div>

            <div className="p-4 md:p-8 hover:bg-white transition-colors group">
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-midnight-navy/40 mb-2 md:mb-4 block">03 / What</span>
              <h4 className="text-base md:text-lg font-bold text-midnight-navy mb-1 md:mb-2">Framework</h4>
              <p className="text-xs md:text-sm text-slate-grey leading-relaxed">Advanced UBT, SWP, and IB frameworks for the modern era.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Geometric Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-midnight-navy via-slate-400 to-transparent opacity-20" />
    </section>
  );
};

export default Hero;