import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#roles' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Organizations', href: '#for-organizations' },
    { name: 'Analytics', href: '#dashboard' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" aria-label="CiviSence Home" className="flex items-center gap-2 focus:outline-hidden focus:ring-2 focus:ring-primary rounded-lg">
            <div className="text-primary">
              <Logo className="w-10 h-10" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">CiviSence</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors font-medium text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/50 rounded-md px-2 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://civisence.web.app/login" 
              className="text-gray-700 hover:text-primary font-medium text-sm px-4 py-2 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary/50"
            >
              Login
            </a>
            <a 
              href="https://civisence.web.app/register" 
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary/30 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Get Started Free
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-hidden focus:ring-2 focus:ring-primary rounded-lg p-1.5"
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
            className="md:hidden glass border-t mt-3 overflow-hidden"
          >
            <ul className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a 
                  href="https://civisence.web.app/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 text-center"
                >
                  Login
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://civisence.web.app/register" 
                  className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium flex justify-center items-center gap-2 transition-colors shadow-md"
                >
                  Get Started Free
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
