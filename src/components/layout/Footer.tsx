import React from 'react';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    QuickLinks: ['About Us', 'Features', 'Pricing', 'Resources', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold">FoodChain Verify</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing food traceability with a seamless platform that ensures safety, compliance, and transparency from farm to retail.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FoodChain Verify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;