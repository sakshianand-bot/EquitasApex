const FeaturedIn = () => {
  const publications = [
    { name: "Wealth Management Magazine", highlight: "Featured Expert" },
    { name: "Private Banking Quarterly", highlight: "Thought Leader" },
    { name: "Precious Metals Review", highlight: "Contributor" },
    { name: "Offshore Finance Today", highlight: "Authority Profile" },
    { name: "Family Office Insights", highlight: "Strategy Expert" }
  ];

  return (
    <section className="py-16 bg-midnight-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-white mb-2">
            Recognized <span className="text-burnished-gold">Expertise</span>
          </h2>
          <p className="font-sans text-gray-400">Featured insights and authority recognition</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {publications.map((pub, index) => (
            <div 
              key={index} 
              className="bg-slate-grey/20 p-6 rounded-lg text-center hover:bg-slate-grey/30 transition-colors"
            >
              <div className="w-12 h-12 bg-burnished-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-burnished-gold font-serif text-lg font-bold">
                  {pub.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="font-serif text-sm font-semibold text-white mb-1">{pub.name}</h3>
              <span className="font-sans text-xs text-burnished-gold">{pub.highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
