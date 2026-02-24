import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { value: "$10B+", label: "Assets Under Framework" },
    { value: "500+", label: "High-Net-Worth Clients" },
    { value: "15+", label: "Years of Experience" },
    { value: "98%", label: "Client Retention Rate" }
  ];

  const principles = [
    { title: "Private Reserve", description: "Your financial foundation through specially structured vehicles with tax-deferred growth." },
    { title: "Capital Recycling", description: "Leverage equity while maintaining compound growth of your original principal." },
    { title: "Strategic Distribution", description: "Tax-efficient income streams creating accessible global wealth protection." },
    { title: "Sovereign Protection", description: "Become the bank within your own ecosystem with institutional-grade protection." }
  ];

  return (
    <div className="min-h-screen bg-off-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-navy to-slate-grey text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-burnished-gold">EQUITAS</span>
            </h1>
            <p className="font-sans text-xl text-gray-300 leading-relaxed">
              EQUITAS CAPITAL APEX FIDUCIA represents the pinnacle of sovereign wealth consulting, 
              where traditional fiduciary excellence meets modern privacy architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-midnight-navy text-white p-12 rounded-lg">
              <div className="text-burnished-gold text-4xl mb-6">◆</div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-burnished-gold">Our Mission</h2>
              <p className="font-sans text-lg text-gray-300 leading-relaxed">
                To empower individuals with wealth multiplication frameworks that maximize the velocity of money while maintaining institutional-grade protection. We provide the tools, structures, 
                and strategies necessary for true financial independence in an increasingly centralized world.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-12 rounded-lg shadow-lg border-l-4 border-burnished-gold">
              <div className="text-midnight-navy text-4xl mb-6">◆</div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-midnight-navy">Our Vision</h2>
              <p className="font-sans text-lg text-slate-grey leading-relaxed">
                To lead the global transition toward non-bank financing frameworks that enable sovereign wealth multiplication and protection. We envision a world where sovereign protection is accessible 
                to those who seek true independence from traditional banking constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-midnight-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-burnished-gold mb-2">{stat.value}</div>
                <div className="font-sans text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-midnight-navy mb-4">
              Core Principles
            </h2>
            <p className="font-sans text-xl text-slate-grey max-w-3xl mx-auto">
              The foundation of our wealth multiplication frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-burnished-gold mb-4">0{index + 1}</div>
                <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-3">{principle.title}</h3>
                <p className="font-sans text-sm text-slate-grey">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-midnight-navy mb-8 text-center">
              The <span className="text-burnished-gold">EQUITAS</span> Story
            </h2>
            <div className="space-y-6 font-sans text-lg text-slate-grey leading-relaxed">
              <p>
                Founded on the principle that true wealth extends beyond mere accumulation, EQUITAS CAPITAL APEX FIDUCIA 
                emerged from the recognition that high-net-worth individuals require sophisticated structures that match 
                the complexity of their financial lives.
              </p>
              <p>
                Our name reflects our philosophy: "Equitas" represents equity and fairness in all dealings, while 
                "Apex" signifies our commitment to reaching the pinnacle of wealth multiplication frameworks. "Fiducia" — the Latin 
                root of fiduciary — reminds us daily of our sacred trust to act in our clients' best interests.
              </p>
              <p>
                We specialize in the intersection of wealth multiplication frameworks and modern liquidity strategies. Through 
                our proprietary private financing vehicles, capital recycling programs, and strategic distribution education, we 
                empower our clients to achieve sovereign protection — true independence from traditional banking systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-midnight-navy to-slate-grey text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Begin Your <span className="text-burnished-gold">Wealth Multiplication</span>
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our wealth multiplication frameworks can transform your financial future.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-burnished-gold text-midnight-navy px-8 py-4 rounded font-semibold hover:bg-yellow-500 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
