import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "EQUITAS transformed my understanding of wealth preservation. The UBT structure they designed has given me privacy I never thought possible.",
      client: "Private Client",
      location: "Nevada",
      service: "UBT Architecture"
    },
    {
      quote: "The metals collateralization strategy unlocked liquidity in my gold holdings without selling. A true game-changer for portfolio flexibility.",
      client: "HNW Investor",
      location: "Texas",
      service: "Metals Collateralization"
    },
    {
      quote: "Finally, a team that understands sovereign wealth. Their infinite banking education has multiplied my family's generational wealth.",
      client: "Family Office",
      location: "Wyoming",
      service: "Infinite Banking"
    }
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-midnight-navy mb-4">
            Client <span className="text-burnished-gold">Testimonials</span>
          </h2>
          <p className="font-sans text-slate-grey">Confidential insights from our distinguished clientele</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-midnight-navy to-slate-grey p-12 rounded-lg text-white">
            <div className="text-6xl text-burnished-gold font-serif mb-6">"</div>
            <p className="font-sans text-xl leading-relaxed mb-8">
              {testimonials[current].quote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-lg font-semibold text-burnished-gold">
                  {testimonials[current].client}
                </p>
                <p className="font-sans text-sm text-gray-400">
                  {testimonials[current].location} • {testimonials[current].service}
                </p>
              </div>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === current ? 'bg-burnished-gold' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
