import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-midnight-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-burnished-gold rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-midnight-navy rounded-sm flex items-center justify-center">
                  <span className="text-burnished-gold font-bold text-xs">A</span>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold">EQUITAS</h3>
                <p className="font-sans text-xs text-burnished-gold">CAPITAL APEX FIDUCIA</p>
              </div>
            </Link>
            <p className="font-sans text-sm text-gray-300">
              Sovereign Wealth Architecture for the sophisticated investor.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-burnished-gold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">UBT Architecture</Link></li>
              <li><Link to="/services" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">Metals Collateralization</Link></li>
              <li><Link to="/services" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">Infinite Banking</Link></li>
              <li><Link to="/services" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">Sovereign Travel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-burnished-gold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/portal" className="font-sans text-sm text-gray-300 hover:text-burnished-gold transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-burnished-gold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-gray-300">concierge@EquitasApex.com</li>
              <li className="font-sans text-sm text-gray-300">+1 555-APEX (2739)</li>
              <li className="font-sans text-sm text-gray-300">Las Vegas, NV</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-grey pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-sans text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 EQUITAS CAPITAL APEX FIDUCIA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-sans text-sm text-gray-400 hover:text-burnished-gold transition-colors">
                Privacy
              </a>
              <a href="#" className="font-sans text-sm text-gray-400 hover:text-burnished-gold transition-colors">
                Terms
              </a>
              <a href="#" className="font-sans text-sm text-gray-400 hover:text-burnished-gold transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
