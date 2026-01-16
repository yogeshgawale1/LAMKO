import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navigationStructure = [
    {
      name: 'Company',
      hasDropdown: true,
      mainPath: '/',
      items: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'CEO Message', path: '/ceo-message' },
        { name: 'Organisation Chart', path: '/organisation-chart' }
      ]
    },
    {
      name: 'Services',
      hasDropdown: true,
      mainPath: '/services',
      items: [
        { name: 'Integrated Materials Solutions (CRDMO)', path: '/services/integrated' },
        { name: 'Specialty Materials Production (CMO)', path: '/services/production' }
      ]
    },
    {
      name: 'Industries',
      hasDropdown: true,
      mainPath: '/industries',
      items: [
        { name: 'Display', path: '/industries/display' },
        { name: 'Semiconductor Materials', path: '/industries/semiconductor' },
        { name: 'Personal Care Actives', path: '/industries/personal-care' }
      ]
    },
    {
      name: 'Capabilities',
      hasDropdown: true,
      mainPath: '/capabilities',
      items: [
        { name: 'Research and Development', path: '/capabilities/rd' },
        { name: 'Purification Technologies', path: '/capabilities/purifications' },
        { name: 'Facility and Infrastructure', path: '/capabilities/facility' },
        { name: 'Production Plants', path: '/capabilities/production-plants' }
      ]
    },
    {
      name: 'Platform/Brands',
      hasDropdown: true,
      mainPath: '/brands',
      items: [
        { name: 'LUMORA', path: 'https://lumorachemicals.com/', external: true }
      ]
    }
  ];

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_lamko-b2b/artifacts/yhatja6r_20260115_1848_Image%20Generation_remix_01kf0gtfk4em2bqpashv737ctv.png" 
              alt="LAMKO" 
              className="h-11 md:h-13 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationStructure.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center">
                    {/* Main tab link */}
                    <Link
                      to={item.mainPath || '#'}
                      className="px-3 py-2 rounded-l-md text-sm font-medium text-gray-200 hover:text-orange-400 hover:bg-gray-800 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    {/* Dropdown indicator */}
                    <button
                      className="px-1 py-2 rounded-r-md text-sm font-medium text-gray-200 hover:text-orange-400 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.items.map((subItem) => (
                        subItem.external ? (
                          <a
                            key={subItem.path}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 text-sm ${
                              isActive(subItem.path)
                                ? 'text-orange-600 bg-orange-50'
                                : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                            } transition-colors duration-200`}
                            onClick={() => setOpenDropdown(null)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-200 hover:text-orange-400 hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/get-in-touch">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-200 hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800">
          <nav className="px-4 pt-2 pb-4 space-y-1">
            {navigationStructure.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-200 hover:text-orange-400 hover:bg-gray-800"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        subItem.external ? (
                          <a
                            key={subItem.path}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-md text-sm text-gray-300 hover:text-orange-400 hover:bg-gray-800"
                          >
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className={`block px-4 py-2 rounded-md text-sm ${
                              isActive(subItem.path)
                                ? 'text-orange-400 bg-gray-800'
                                : 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'text-orange-400 bg-gray-800'
                      : 'text-gray-200 hover:text-orange-400 hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link to="/get-in-touch" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

