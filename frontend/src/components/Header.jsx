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
      items: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' }
      ]
    },
    {
      name: 'Services',
      hasDropdown: true,
      items: [
        { name: 'Materials R&D Services', path: '/services/materials-rd' },
        { name: 'Specialty Materials Production', path: '/services/production' },
        { name: 'Integrated Materials Solutions', path: '/services/integrated' }
      ]
    },
    {
      name: 'Industries',
      hasDropdown: true,
      items: [
        { name: 'Semiconductor', path: '/industries/semiconductor' },
        { name: 'Display', path: '/industries/display' },
        { name: 'Specialty Chemicals', path: '/industries/specialty-chemicals' },
        { name: 'Personal Care Actives', path: '/industries/personal-care' }
      ]
    },
    {
      name: 'Capabilities',
      hasDropdown: true,
      items: [
        { name: 'Reactions', path: '/capabilities/reactions' },
        { name: 'Facility and Infrastructure', path: '/capabilities/facility' },
        { name: 'R&D', path: '/capabilities/rd' },
        { name: 'Purifications Technologies', path: '/capabilities/purifications' }
      ]
    },
    {
      name: 'Platform/Brands',
      hasDropdown: true,
      items: [
        { name: 'LUMORA', path: '/brands/lumora' }
      ]
    },
    { name: 'Get in Touch', path: '/get-in-touch', hasDropdown: false }
  ];

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-orange-600">LAM</span>
              <span className="text-teal-600">KO</span>
            </div>
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
                  <button
                    className="flex items-center space-x-1 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200 w-full"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.items.map((subItem) => (
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
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
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
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 pt-2 pb-4 space-y-1">
            {navigationStructure.map((item) => (
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className={`block px-4 py-2 rounded-md text-sm ${
                            isActive(subItem.path)
                              ? 'text-orange-600 bg-orange-50'
                              : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.name}
                        </Link>
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
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
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

