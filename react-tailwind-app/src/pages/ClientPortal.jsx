import { useState } from 'react';
import { Link } from 'react-router-dom';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // This is a demo - in production, this would validate credentials
    alert('Client Portal access requires verified credentials. Please contact concierge@EquitasApex.com for account setup.');
  };

  return (
    <div className="min-h-screen bg-off-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-midnight-navy to-slate-grey text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-burnished-gold rounded flex items-center justify-center">
              <div className="w-10 h-10 bg-midnight-navy rounded-sm flex items-center justify-center">
                <span className="text-burnished-gold font-bold text-2xl">A</span>
              </div>
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-burnished-gold">Portal</span>
          </h1>
          <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto">
            Exclusive access for EQUITAS wealth multiplication framework clients. 
            Secure, private, and confidential.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-midnight-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-burnished-gold text-2xl">●</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-midnight-navy">
                  Secure Access
                </h2>
                <p className="font-sans text-slate-grey mt-2">
                  Enter your credentials to access your private dashboard
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Client Email *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                    placeholder="client@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block font-sans text-sm font-medium text-slate-grey mb-2">
                    Password *
                  </label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 border border-slate-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-burnished-gold focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center font-sans text-slate-grey">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="font-sans text-midnight-navy hover:text-burnished-gold transition-colors">
                    Forgot password?
                  </a>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-midnight-navy text-burnished-gold py-4 rounded font-semibold hover:bg-slate-grey transition-colors"
                >
                  Access Portal
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-sans text-sm text-slate-grey text-center">
                  Don't have an account?{' '}
                  <Link to="/contact" className="text-midnight-navy font-semibold hover:text-burnished-gold transition-colors">
                    Contact our concierge
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 bg-midnight-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Portal <span className="text-burnished-gold">Features</span>
            </h2>
            <p className="font-sans text-gray-300 max-w-2xl mx-auto">
              Exclusive tools and resources available to wealth multiplication framework clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '◆', title: 'Framework Dashboard', desc: 'Real-time wealth multiplication performance and velocity metrics' },
              { icon: '◆', title: 'Document Vault', desc: 'Secure access to framework documents and contracts' },
              { icon: '◆', title: 'Private Messaging', desc: 'Direct encrypted communication with your framework advisor' },
              { icon: '◆', title: 'Strategy Scheduler', desc: 'Book framework consultations and multiplication sessions' }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-grey/20 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-burnished-gold mb-2">{feature.title}</h3>
                <p className="font-sans text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16 bg-off-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-burnished-gold">
            <h3 className="font-serif text-xl font-bold text-midnight-navy mb-4">
              Security & Privacy Notice
            </h3>
            <div className="font-sans text-slate-grey space-y-3">
              <p>
                The EQUITAS Wealth Multiplication Portal employs institutional-grade security and multi-factor authentication 
                to ensure your framework data remains strictly confidential.
              </p>
              <p>
                All portal access is logged and monitored for security purposes. Unauthorized access attempts 
                are prosecuted to the fullest extent of the law under sovereign protection protocols.
              </p>
              <p className="text-sm">
                For account assistance, contact: <strong>concierge@EquitasApex.com</strong> or call <strong>+1 555-APEX (2739)</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientPortal;
