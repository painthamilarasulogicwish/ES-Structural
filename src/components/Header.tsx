import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/esslogo.png"
              alt="ES Structural Consultant"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? 'h-10' : 'h-14'
              } group-hover:scale-105`}
            />
            <div className="flex flex-col">
              <span className={`text-primary-blue font-heading font-semibold leading-tight transition-all duration-300 ${
                scrolled ? 'text-base' : 'text-lg'
              }`}>
                ES Structural
              </span>
              <span className="text-steel-grey text-xs">Consultant</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'text-primary-blue'
                    : 'text-primary-text hover:text-primary-blue'
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent-green transition-all duration-300 ${
                    isActive(link.path)
                      ? 'w-3/4'
                      : 'w-0 group-hover:w-3/4'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-accent-green text-primary-text font-semibold rounded-md hover:bg-opacity-90 hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-primary-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-primary-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 animate-fade-in">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all hover:translate-x-2 ${
                  isActive(link.path)
                    ? 'text-primary-blue bg-light-bg shadow-sm'
                    : 'text-primary-text hover:text-primary-blue hover:bg-light-bg'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 bg-accent-green text-primary-text font-semibold rounded-lg text-center hover:bg-opacity-90 hover:shadow-lg transition-all mt-4"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
