import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "UBT Architecture",
      subtitle: "Structural Sovereignty",
      description: "Custom Unincorporated Business Trusts engineered for absolute privacy and multi-generational asset protection.",
      features: ["Complete Privacy", "Asset Protection", "Tax Optimization"]
    },
    {
      title: "Metals Collateralization",
      subtitle: "Liquidity Engineering",
      description: "Strategic credit lines via Apex/SWP bridges, transforming stagnant bullion into dynamic working capital.",
      features: ["Liquidity Access", "Gold/Silver Backing", "Competitive Rates"]
    },
    {
      title: "Infinite Banking",
      subtitle: "Wealth Multiplication",
      description: "Mastering the 'Dump and Redraw' methodology through Foresters Financial to become your own source of financing.",
      features: ["Tax-Free Growth", "Legacy Planning", "Private Financing"]
    },
    {
      title: "Sovereign Travel",
      subtitle: "Lifestyle Optimization",
      description: "Sophisticated trust-based credit systems designed to facilitate high-limit rewards and global luxury access.",
      features: ["First Class Access", "Global Benefits", "Trust-Based Credit"]
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-[#FDFCF0] overflow-hidden">
      <div className="container mx-auto px-6 relative">
        
        {/* Animated Background Element */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"
        />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">
            The Wealth Ecosystem
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#0A2463] mb-6 tracking-tight">
            Architectural <span className="italic">Solutions</span>
          </h2>
          <div className="h-[2px] w-20 bg-[#C5A059] mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-[1px] border-[#C5A059]/10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              className="group relative bg-white/40 p-10 border-[0.5px] border-[#C5A059]/20 flex flex-col cursor-default"
            >
              {/* Interaction Spotlight Overlay */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(197,160,89,0.05)_0%,_transparent_70%)]" />

              <div className="relative z-10">
                <div className="mb-12 overflow-hidden">
                  <motion.div 
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#C5A059] font-serif italic text-xl">0{index + 1}</span>
                    <div className="h-[1px] w-8 bg-[#C5A059]/30 group-hover:w-16 transition-all duration-500"></div>
                  </motion.div>
                </div>

                <h3 className="font-serif text-2xl text-[#0A2463] mb-2 group-hover:text-[#C5A059] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#708090] font-bold mb-6">
                  {service.subtitle}
                </p>
                
                <p className="font-sans text-[#708090] text-sm leading-relaxed mb-8 min-h-[80px]">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[12px] font-sans text-[#0A2463]/70 cursor-pointer"
                    >
                      <span className="text-[#C5A059] mr-2 text-[8px]">◆</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bottom Animated Bar */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-[#0A2463] w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-[#0A2463] text-white rounded-sm overflow-hidden"
          >
            <span className="relative z-10 tracking-[0.2em] font-bold text-xs">
              INITIALIZE CONSULTATION
            </span>
            <div className="absolute inset-0 bg-[#C5A059] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          </motion.button>
          
          <p className="mt-8 text-[#708090]/60 font-serif italic text-sm">
            Strictly confidential digital architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;