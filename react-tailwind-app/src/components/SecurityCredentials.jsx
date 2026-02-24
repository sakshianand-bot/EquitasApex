const SecurityCredentials = () => {
  const credentials = [
    {
      icon: "●",
      title: "INSTITUTIONAL-GRADE SECURITY",
      description: "Bank-grade protection for all wealth multiplication framework data and communications"
    },
    {
      icon: "●",
      title: "FIDUCIARY CERTIFIED",
      description: "Legally bound to act in your best interest for wealth sovereignty"
    },
    {
      icon: "●",
      title: "PRIVATE CLIENT ONLY",
      description: "By referral or application - exclusive wealth multiplication membership"
    },
    {
      icon: "✓",
      title: "GLOBAL COMPLIANCE",
      description: "Multi-jurisdictional oversight for international wealth protection"
    }
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-grey/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-midnight-navy mb-2">
            Security & <span className="text-burnished-gold">Trust</span>
          </h2>
          <p className="font-sans text-slate-grey">Institutional-grade protection for your wealth multiplication frameworks</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((cred, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-burnished-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{cred.icon}</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-midnight-navy mb-1">{cred.title}</h3>
                <p className="font-sans text-sm text-slate-grey">{cred.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-midnight-navy/5 px-6 py-3 rounded-full">
            <span className="text-green-500">●</span>
            <span className="font-sans text-sm text-midnight-navy">All systems operational</span>
            <span className="text-slate-grey">|</span>
            <span className="font-sans text-sm text-slate-grey">Last audit: February 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCredentials;
