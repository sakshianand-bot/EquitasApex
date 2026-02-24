import { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the Private Financing Framework?",
      answer: "Our Private Financing Framework uses specially structured, high-cash-value permanent vehicles to create a private reserve. This allows for tax-deferred growth while maintaining immediate liquidity, giving you the foundation for wealth multiplication with institutional-grade protection."
    },
    {
      question: "How does Capital Recycling work?",
      answer: "Capital Recycling uses a contribution and leverage model to fund assets, build immediate equity, and redeploy capital without interrupting compound growth. You leverage equity as collateral to deploy capital into external opportunities while maintaining the growth of your original principal."
    },
    {
      question: "What is Strategic Distribution?",
      answer: "Strategic Distribution implements structured withdrawal and loan strategies to create tax-efficient cash flow. This ensures your wealth remains accessible and protected across global jurisdictions while maintaining growth, essentially creating a 'private pension' from your investment framework."
    },
    {
      question: "How does Sovereign Protection work?",
      answer: "Sovereign Protection enables you to become the bank within your own ecosystem using non-bank financing frameworks. This provides institutional-grade protection while enabling global mobility and complete financial autonomy across multiple jurisdictions."
    },
    {
      question: "What minimum assets are required?",
      answer: "Our wealth multiplication frameworks are designed for high-net-worth individuals. Private Financing typically requires $100K+ in initial capital. Complete framework implementation is tailored to clients with $500K+ in investable assets or annual income."
    },
    {
      question: "How long does the setup process take?",
      answer: "Discovery and consultation: 1-2 weeks. Framework design: 2-4 weeks. Implementation including vehicle setup, credit line establishment, and distribution strategies: 4-8 weeks. Most clients achieve full wealth multiplication framework within 3 months."
    }
  ];

  return (
    <section className="py-20 bg-midnight-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-burnished-gold">Questions</span>
          </h2>
          <p className="font-sans text-gray-400">Common inquiries about wealth multiplication frameworks</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-grey/20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-grey/30 transition-colors"
              >
                <span className="font-serif text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <span className={`text-burnished-gold text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="font-sans text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
