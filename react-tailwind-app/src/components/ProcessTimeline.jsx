import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Strategic Audit",
    description: "A comprehensive analysis of your current assets and privacy vulnerabilities. We identify specific legal and financial gaps in your path to sovereignty.",
    icon: "circle"
  },
  {
    number: "02",
    title: "Structure",
    subtitle: "Architectural Design",
    description: "Designing bespoke UBT frameworks and metals collateralization bridges. We engineer impenetrable walls of your private estate.",
    icon: "square"
  },
  {
    number: "03",
    title: "Implementation",
    subtitle: "Active Deployment",
    description: "Executing trust formation and credit line establishment. We move your wealth from traditional exposure to Tangible Asset Protection.",
    icon: "triangle"
  },
  {
    number: "04",
    title: "Sovereignty",
    subtitle: "Continuous Optimization",
    description: "Achieve total autonomy with ongoing advisory. Complete control over your legacy, liquidity, and global financial footprint.",
    icon: "diamond"
  }
];

const ProcessTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#FDFCF0] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header - Centered & Minimal */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A059] font-sans tracking-[0.4em] uppercase text-[10px] font-bold mb-4"
          >
            The Methodology
          </motion.p>
          <h2 className="text-[#0A2463] text-5xl md:text-6xl font-serif tracking-tight">
            Strategic <span className="italic">Evolution</span>
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Track */}
          <div className="flex justify-between items-center max-w-5xl mx-auto mb-16 relative">
            {/* The Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#0A2463]/10 -translate-y-1/2 z-0" />
            
            {/* The Active Progress Fill */}
            <motion.div 
              className="absolute top-1/2 left-0 h-[2px] bg-[#C5A059] -translate-y-1/2 z-0"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeIndex / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="relative z-10 group"
              >
                <motion.div 
                  animate={{ 
                    scale: activeIndex === idx ? 1.2 : 1,
                    backgroundColor: activeIndex === idx ? "#0A2463" : "#FDFCF0",
                    borderColor: activeIndex === idx ? "#C5A059" : "#708090"
                  }}
                  className={`w-12 h-12 rounded-full border-[1px] flex items-center justify-center transition-colors duration-300 shadow-sm`}
                >
                  <span className={`font-serif text-sm ${activeIndex === idx ? 'text-[#C5A059]' : 'text-[#708090]'}`}>
                    {step.number}
                  </span>
                </motion.div>
                
                <motion.span 
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest font-bold transition-opacity duration-300 ${activeIndex === idx ? 'opacity-100 text-[#0A2463]' : 'opacity-0'}`}
                >
                  {step.title}
                </motion.span>
              </button>
            ))}
          </div>

          {/* Main Content Stage */}
          <div className="max-w-6xl mx-auto border-[1px] border-[#C5A059]/20 bg-white/50 backdrop-blur-sm rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="flex flex-col md:flex-row items-center gap-12 p-12 md:p-20"
              >
                {/* Visual Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-[1px] border-dashed border-[#C5A059]/30 rounded-full scale-150"
                    />
                    <div className="text-9xl filter drop-shadow-xl relative z-10">
                      {steps[activeIndex].icon === "circle" && (
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-24 h-24 bg-[#C5A059] rounded-full"
                        />
                      )}
                      {steps[activeIndex].icon === "square" && (
                        <motion.div 
                          animate={{ rotate: [0, 90, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-24 h-24 bg-[#0A2463] rounded-lg"
                        />
                      )}
                      {steps[activeIndex].icon === "triangle" && (
                        <motion.div 
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="w-0 h-0 border-l-[48px] border-r-[48px] border-b-[96px] border-l-transparent border-r-transparent border-b-[#C5A059]"
                        />
                      )}
                      {steps[activeIndex].icon === "diamond" && (
                        <motion.div 
                          animate={{ rotate: [0, 45, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                          className="w-24 h-24 bg-[#0A2463] transform rotate-45"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-[#C5A059] font-bold text-xs uppercase tracking-[.3em] mb-2">
                      Phase {steps[activeIndex].number} — {steps[activeIndex].subtitle}
                    </p>
                    <h3 className="text-[#0A2463] font-serif text-4xl md:text-5xl mb-6">
                      {steps[activeIndex].title}
                    </h3>
                    <p className="text-[#708090] text-lg leading-relaxed font-sans mb-8">
                      {steps[activeIndex].description}
                    </p>
                    
                    <button className="group flex items-center gap-4 text-[#0A2463] font-bold text-xs tracking-widest uppercase">
                      <span>Inquire about this phase</span>
                      <div className="h-[1px] w-8 bg-[#C5A059] group-hover:w-16 transition-all duration-300" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-[#708090]/50 font-serif italic text-sm">
            Transitioning typically requires 45-60 days for full structural integrity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;