import { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is an Unincorporated Business Trust (UBT)?",
      answer: "A UBT is a common law trust structure that provides complete privacy and asset protection without public registration. Unlike corporations or LLCs, UBTs operate through private contracts, keeping your financial affairs confidential while maintaining full legal compliance."
    },
    {
      question: "How does metals collateralization work?",
      answer: "Through our Apex/SWP bridge, your physical gold and silver holdings in secure vaults serve as collateral for credit lines. You retain ownership of your metals while accessing liquidity—typically 70-90% of metal value—without triggering taxable events from selling."
    },
    {
      question: "What is the 'Dump and Redraw' strategy?",
      answer: "This infinite banking technique involves overfunding a participating whole life insurance policy, then borrowing against the cash value (dump), using the capital for investments, and repaying the loan (redraw). The policy continues growing dividends on the full amount regardless of loans."
    },
    {
      question: "Is my privacy legally protected?",
      answer: "Absolutely. Our structures comply with all U.S. and international regulations while maximizing privacy through common law trust principles. UBTs aren't registered with any government database, and attorney-client privilege protects our consultations."
    },
    {
      question: "What minimum assets are required?",
      answer: "Our services are designed for high-net-worth individuals. Metals collateralization typically requires $100K+ in precious metals. UBT structures and infinite banking setups are tailored to clients with $500K+ in investable assets or annual income."
    },
    {
      question: "How long does the setup process take?",
      answer: "Discovery and consultation: 1-2 weeks. Trust structure design: 2-4 weeks. Implementation including vault setup, credit line establishment, and policy underwriting: 4-8 weeks. Most clients achieve full sovereignty within 3 months."
    }
  ];

  return (
    <section className="py-20 bg-midnight-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-burnished-gold">Questions</span>
          </h2>
          <p className="font-sans text-gray-400">Common inquiries about sovereign wealth architecture</p>
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
