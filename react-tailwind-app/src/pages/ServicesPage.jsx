import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "Private Financing Framework",
      description: "Specially structured, high-cash-value permanent vehicles to create a private reserve with tax-deferred growth and immediate liquidity.",
      icon: "◆",
      features: [
        "Complete Privacy Protection",
        "Tax-Deferred Growth",
        "Immediate Liquidity Access",
        "Institutional Grade Protection",
        "Multi-Generational Wealth Transfer"
      ],
      details: "Our private financing framework uses specially designed permanent vehicles to create your personal reserve. This allows for tax-deferred growth while maintaining immediate liquidity, giving you the foundation for wealth multiplication."
    },
    {
      title: "Capital Recycling",
      description: "Contribution and leverage model to fund assets, build immediate equity, and redeploy capital without interrupting compound growth.",
      icon: "◆",
      features: [
        "Equity Leverage Strategies",
        "Continuous Growth Maintenance",
        "Strategic Capital Deployment",
        "Non-Interruptive Compounding",
        "Liquidity Optimization"
      ],
      details: "Through our capital recycling model, you fund assets to build immediate equity, then leverage that equity as collateral. This allows you to deploy capital into external opportunities without interrupting the compounding growth of your original principal."
    },
    {
      title: "Strategic Distribution",
      description: "Structured withdrawal and loan strategies creating tax-free income streams for accessible global wealth protection.",
      icon: "◆",
      features: [
        "Tax-Free Income Streams",
        "Global Wealth Access",
        "Structured Withdrawal Plans",
        "Loan Strategy Implementation",
        "Wealth Preservation Systems"
      ],
      details: "Our strategic distribution framework implements structured withdrawal and loan strategies to create tax-efficient cash flow. This ensures your wealth remains accessible and protected across global jurisdictions while maintaining growth."
    },
    {
      title: "Sovereign Protection",
      description: "Become the bank within your own ecosystem using non-bank financing with institutional-grade protection and global mobility.",
      icon: "◆",
      features: [
        "Sovereign Status Achievement",
        "Private Banking Systems",
        "Global Jurisdiction Access",
        "Institutional Grade Security",
        "Complete Financial Autonomy"
      ],
      details: "Achieve complete sovereignty by becoming the bank within your own ecosystem. Our non-bank financing frameworks provide institutional-grade protection while enabling global mobility and complete financial autonomy."
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
            Comprehensive wealth multiplication frameworks designed for the sophisticated investor seeking sovereign protection through non-bank financing and institutional-grade protection.
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
            Ready to Begin Your <span className="text-burnished-gold">Wealth Multiplication</span>?
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a private consultation to discuss your unique wealth multiplication framework needs.
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
