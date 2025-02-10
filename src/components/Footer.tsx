import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lovelace Auto Detailing</h3>
            <p className="text-gray-400">
              Expert Auto Detailing for the Discerning Vehicle Owner.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-yellow-500" />
                <a href="tel:267-356-1409" className="text-gray-400 hover:text-white transition-colors">
                  267-356-1409
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-yellow-500" />
                <a href="mailto:contact@lovelaceautodetailing.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@lovelaceautodetailing.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-yellow-500" />
                <span className="text-gray-400">Wilkes Barre/Philadelphia</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/lovelace.auto.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com/lovelace.auto.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Lovelace Auto Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
