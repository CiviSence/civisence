import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home',          to: '/'             },
    { name: 'Features',      to: '/features'     },
    { name: 'Organizations', to: '/organizations' },
    { name: 'FAQ',           to: '/faq'          },
    { name: 'Contact',       to: '/contact'      },
  ];

  const isActive = (to) => pathname === to;

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <nav aria-label="Main Navigation" className=" px-4 py-2 sm:px-6 lg:px-8 glass bg-transparent}">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            aria-label="CiviSence Home"
            className="flex items-center gap-2 focus:outline-none  rounded-lg"
          >
            <div className="text-primary">
              <Logo className="w-10 h-10" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">CiviSence</span>
          </Link>

          {/* Desktop Nav */}
          <ul className={`hidden lg:flex items-center space-x-1 lg:space-x-2 px-4 rounded-2xl transition-all ${isScrolled ? 'glasss py-4 shadow-sm' : 'bg-transparent py-5'}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    isActive(link.to)
                      ? 'text-primary bg-primary/8'
                      : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/login"
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive('/login')
                  ? 'text-primary'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1.5"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t mt-3 overflow-hidden"
          >
            <ul className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none ${
                      isActive(link.to)
                        ? 'text-primary bg-primary/8'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-100">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 text-center"
                >
                  Login
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  to="/signup"
                  className="block w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium text-center transition-colors shadow-md"
                >
                  Get Started Free
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
