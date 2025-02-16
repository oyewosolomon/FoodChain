import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight,
  Database, // Icon for the logo
} from 'lucide-react';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items based on Quick Links
  const navItems = [
    { title: 'About Us', href: '#about' },
    { title: 'Solutions', href: '#solutions' },
    { title: 'Features', href: '#features' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Resources', href: '#resources' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Database className={`w-8 h-8 ${isScrolled ? 'text-green-600' : 'text-gray-700'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-700'}`}>
              FoodChain
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className={`${
                  isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-gray-700 hover:text-green-600'
                } transition-colors`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a 
            href="#get-started" 
            className="hidden md:flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white rounded-b-2xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href} 
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {item.title}
                  </a>
                ))}
                <div className="p-4">
                  <a 
                    href="#get-started" 
                    className="w-full px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;