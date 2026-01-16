import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-3 md:mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_lamko-b2b/artifacts/yhatja6r_20260115_1848_Image%20Generation_remix_01kf0gtfk4em2bqpashv737ctv.png" 
                alt="LAMKO" 
                className="h-10 md:h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4 max-w-md text-sm md:text-base">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">{companyInfo.location}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-orange-500 transition-colors duration-200 text-sm md:text-base break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">{companyInfo.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {currentYear} LAMKO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
