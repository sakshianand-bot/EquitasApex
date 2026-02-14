import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "UBT Architecture",
      description: "Structuring Unincorporated Business Trusts for maximum privacy and asset protection. Our trust architecture creates an impenetrable legal fortress around your wealth, ensuring complete confidentiality and protection from frivolous litigation.",
      icon: "◆",
      features: [
        "Complete Privacy Protection",
        "Asset Protection from Creditors",
        "Tax Optimization Strategies",
        "Estate Planning Integration",
        "Multi-Generational Wealth Transfer"
      ],
      details: "Our UBT structures are designed for high-net-worth individuals who require the highest level of privacy. Unlike traditional corporations, Unincorporated Business Trusts operate in complete confidentiality while maintaining full legal compliance."
    },
    {
      title: "Metals Collateralization",
      description: "Engineering credit lines via the Apex/SWP bridge to unlock your precious metals wealth without selling your hard assets.",
      icon: "◆",
      features: [
        "Liquidity Access Without Selling",
        "Gold & Silver Backing",
        "Competitive Interest Rates",
        "Apex/SWP Bridge Integration",
        "Retain Metal Ownership"
      ],
      details: "Transform your stagnant precious metals into dynamic, liquid wealth. Through our proprietary Apex/SWP bridge, we engineer credit lines backed by your gold and silver holdings, allowing you to access capital while maintaining ownership of your hard assets."
    },
    {
      title: "Infinite Banking Education",
      description: "Master the 'Dump and Redraw' strategy via Foresters Financial for wealth multiplication through properly structured whole life insurance policies.",
      icon: "◆",
      features: [
        "Wealth Multiplication Strategies",
        "Tax-Free Growth Mechanisms",
        "Legacy Planning Solutions",
        "Foresters Financial Integration",
        "Private Family Banking Systems"
      ],
      details: "Learn to become your own banker through the Infinite Banking Concept. We teach you the sophisticated 'Dump and Redraw' strategy using Foresters Financial's participating whole life insurance policies, creating a private banking system that grows tax-free and serves as a legacy wealth transfer vehicle."
    },
    {
      title: "Sovereign Travel Consulting",
      description: "Maximize high-limit rewards via trust-based credit systems for luxury travel including first-class access and global benefits.",
      icon: "◆",
      features: [
        "First Class & Private Jet Access",
        "Reward Optimization Strategies",
        "Global Travel Benefits",
        "Trust-Based Credit Systems",
        "Concierge Travel Services"
      ],
      details: "Experience the world as a sovereign should. Our travel consulting maximizes high-limit credit rewards through trust-based systems, granting you access to first-class lounges, private aviation, and exclusive travel experiences while building your credit profile."
    }
  ];

  return (
    <div className="min-h-screen bg-off-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-navy to-slate-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-burnished-gold">Services</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive wealth architecture solutions designed for the sophisticated investor seeking financial sovereignty through privacy, security, and mobility.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-midnight-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="font-sans text-lg text-slate-grey mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="font-sans text-slate-grey mb-8">
                    {service.details}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-midnight-navy text-burnished-gold px-8 py-4 rounded font-semibold hover:bg-slate-grey transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                </div>
                <div className={`bg-white p-8 rounded-lg shadow-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-6">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center font-sans text-slate-grey">
                        <span className="text-burnished-gold mr-3 text-xl">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-midnight-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your <span className="text-burnished-gold">Sovereign Journey</span>?
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a private consultation to discuss your unique wealth architecture needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-burnished-gold text-midnight-navy px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Schedule Private Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
