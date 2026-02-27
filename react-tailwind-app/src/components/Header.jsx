import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={`bg-midnight-navy text-white fixed w-full top-0 z-50 shadow-lg transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-burnished-gold rounded flex items-center justify-center">
              <div className="w-8 h-8 bg-midnight-navy rounded-sm flex items-center justify-center">
                <span className="text-burnished-gold font-bold text-lg">A</span>
              </div>
            </div>
            <div>
              <h1 className="font-serif text-xl font-semibold">EQUITAS</h1>
              <p className="font-sans text-xs text-burnished-gold">CAPITAL APEX FIDUCIA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-burnished-gold transition-colors">Home</Link>
            <Link to="/services" className="hover:text-burnished-gold transition-colors">Services</Link>
            <Link to="/about" className="hover:text-burnished-gold transition-colors">About</Link>
            <Link to="/contact" className="hover:text-burnished-gold transition-colors">Contact</Link>
            <Link to="/portal" className="bg-burnished-gold text-midnight-navy px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
              Client Portal
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-grey">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-burnished-gold transition-colors">Home</Link>
              <Link to="/services" className="hover:text-burnished-gold transition-colors">Services</Link>
              <Link to="/about" className="hover:text-burnished-gold transition-colors">About</Link>
              <Link to="/contact" className="hover:text-burnished-gold transition-colors">Contact</Link>
              <Link to="/portal" className="bg-burnished-gold text-midnight-navy px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors text-center">
                Client Portal
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
