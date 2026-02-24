const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-midnight-navy mb-4">
            Private Consultation
          </h2>
          <p className="font-sans text-xl text-slate-grey max-w-3xl mx-auto">
            Begin your wealth multiplication journey with a confidential consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="bg-midnight-navy text-white p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold text-burnished-gold mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-sans font-semibold text-burnished-gold mb-2">Email</h4>
                <p className="font-sans text-gray-300">concierge@EquitasApex.com</p>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-burnished-gold mb-2">Phone</h4>
                <p className="font-sans text-gray-300">+1 555-APEX (2739)</p>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-burnished-gold mb-2">Office</h4>
                <p className="font-sans text-gray-300">
                  1050 E FLAMINGO ROAD S 107 STE<br />
                  Las Vegas, NV 89119
                </p>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-burnished-gold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-burnished-gold text-midnight-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    <span className="text-sm font-bold">in</span>
                  </a>
                  <a href="#" className="bg-burnished-gold text-midnight-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    <span className="text-sm font-bold">X</span>
                  </a>
                  <a href="#" className="bg-burnished-gold text-midnight-navy w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                    <span className="text-sm font-bold">YT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-serif text-2xl font-semibold text-midnight-navy mb-6">
              Schedule Consultation
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent">
                  <option value="">Select a service</option>
                  <option value="private">Private Financing Framework</option>
                  <option value="capital">Capital Recycling</option>
                  <option value="distribution">Strategic Distribution</option>
                  <option value="sovereign">Sovereign Protection</option>
                  <option value="comprehensive">Comprehensive Framework</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                  Message
                </label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                  placeholder="Tell us about your wealth multiplication goals..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-midnight-navy text-burnished-gold py-4 rounded font-semibold hover:bg-slate-grey transition-colors"
              >
                Request Private Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
