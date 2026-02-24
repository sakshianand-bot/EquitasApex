import { Link } from 'react-router-dom';

const ConsultationCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-midnight-navy via-slate-grey to-midnight-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-burnished-gold/20 px-4 py-2 rounded-full mb-6">
            <span className="font-sans text-sm text-burnished-gold uppercase tracking-wider">
              Exclusive Access
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Begin Your <span className="text-burnished-gold">Wealth Multiplication</span>
          </h2>
          
          <p className="font-sans text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation with our wealth architects. 
            Discover how to maximize the velocity of money with non-bank financing frameworks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-burnished-gold text-midnight-navy px-10 py-5 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Private Consultation
            </Link>
            <a 
              href="tel:+15555552739"
              className="text-white font-sans hover:text-burnished-gold transition-colors flex items-center gap-2"
            >
              <span className="text-burnished-gold">●</span>
              +1 555-APEX (2739)
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2 text-burnished-gold">●</div>
              <p className="font-sans text-sm text-gray-400">100% Confidential</p>
            </div>
            <div>
              <div className="text-3xl mb-2 text-burnished-gold">●</div>
              <p className="font-sans text-sm text-gray-400">24-Hour Response</p>
            </div>
            <div>
              <div className="text-3xl mb-2 text-burnished-gold">●</div>
              <p className="font-sans text-sm text-gray-400">VIP Concierge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
