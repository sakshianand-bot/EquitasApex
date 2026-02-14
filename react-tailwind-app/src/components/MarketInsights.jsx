import { Link } from 'react-router-dom';

const MarketInsights = () => {
  const insights = [
    {
      title: "Gold & Silver: The Coming Bull Run",
      excerpt: "Analysis of precious metals market dynamics and why HNW investors are increasing allocations.",
      date: "Jan 15, 2026",
      category: "Precious Metals",
      readTime: "5 min read"
    },
    {
      title: "UBT Structures: Privacy in 2026",
      excerpt: "How modern Unincorporated Business Trusts provide asset protection in an increasingly transparent world.",
      date: "Jan 10, 2026",
      category: "Trust Architecture",
      readTime: "8 min read"
    },
    {
      title: "The 'Dump & Redraw' Strategy Explained",
      excerpt: "A deep dive into infinite banking and how to leverage participating whole life policies.",
      date: "Jan 5, 2026",
      category: "Infinite Banking",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-midnight-navy mb-4">
              Market <span className="text-burnished-gold">Insights</span>
            </h2>
            <p className="font-sans text-slate-grey">Strategic intelligence for sovereign wealth builders</p>
          </div>
          <Link to="/contact" className="mt-4 md:mt-0 font-sans text-midnight-navy hover:text-burnished-gold transition-colors">
            View All Insights →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <article 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs text-burnished-gold uppercase tracking-wider">
                  {insight.category}
                </span>
                <span className="font-sans text-xs text-slate-grey">{insight.readTime}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-midnight-navy mb-3 group-hover:text-burnished-gold transition-colors">
                {insight.title}
              </h3>
              <p className="font-sans text-slate-grey mb-4">{insight.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="font-sans text-sm text-slate-grey">{insight.date}</span>
                <span className="font-sans text-sm text-midnight-navy group-hover:text-burnished-gold transition-colors">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
