"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExamplesOpen, setIsExamplesOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsExamplesOpen(false);
  }, [pathname]);
  
  const isActive = (path: string) => pathname === path;
  const isExamplePage = pathname.includes('-example');
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Telehealth', path: '/telehealth' },
    { label: 'Blog', path: '/blog' },
    { label: 'Insurance', path: '/insurance' },
    { label: 'Contact', path: '/contact' },
  ];

  const exampleItems = [
    { label: 'Typography', path: '/typography-example' },
    { label: 'Form Components', path: '/form-example' },
    { label: 'Layout Components', path: '/layout-example' },
  ];
  
  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMenuOpen) setIsMenuOpen(false);
        if (isExamplesOpen) setIsExamplesOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen, isExamplesOpen]);
  
  // Handle click outside to close examples dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isExamplesOpen && !target.closest('#examples-dropdown') && !target.closest('#examples-button')) {
        setIsExamplesOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isExamplesOpen]);
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);
  
  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            aria-label="My Miami Doctor - Home"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-navy">
              My<span className="text-primary">Miami</span>Doctor
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav aria-label="Main Navigation" className="flex space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-body text-base transition-colors duration-200 py-2 relative ${
                    isActive(item.path) 
                      ? 'text-primary font-semibold' 
                      : 'text-navy hover:text-primary focus:text-primary'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
              
              {/* Examples Dropdown */}
              <div className="relative" id="examples-dropdown">
                <button
                  id="examples-button"
                  onClick={() => setIsExamplesOpen(!isExamplesOpen)}
                  className={`font-body text-base transition-colors duration-200 py-2 flex items-center space-x-1 ${
                    isExamplePage 
                      ? 'text-primary font-semibold' 
                      : 'text-navy hover:text-primary focus:text-primary'
                  }`}
                >
                  <span>Examples</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 transition-transform ${isExamplesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isExamplePage && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </button>
                
                {isExamplesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  >
                    {exampleItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className={`block px-4 py-2 text-sm ${
                          isActive(item.path) 
                            ? 'text-primary font-semibold bg-gray-50' 
                            : 'text-navy hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <button 
                className="flex items-center px-3 py-1.5 text-sm text-navy border border-gray-200 rounded-full transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Switch to Russian language"
              >
                <span className="mr-1">🇷🇺</span>
                <span>RU</span>
              </button>
              
              {/* Patient Portal Button */}
              <Link 
                href="/patient-portal" 
                className="btn btn-secondary"
              >
                Patient Portal
              </Link>
              
              {/* Appointment Button */}
              <Link 
                href="/appointment" 
                className="btn btn-primary ml-2"
              >
                Book Appointment
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Language Selector (Mobile) */}
            <button 
              className="flex items-center px-2 py-1 text-sm text-navy border border-gray-200 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Switch to Russian language"
            >
              <span className="mr-1">🇷🇺</span>
              <span>RU</span>
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-navy rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Only rendered when open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-navy/95 z-40 md:hidden">
          <div className="flex flex-col h-full pt-20 px-6 pb-6">
            <nav aria-label="Mobile Navigation" className="flex-1">
              <ul className="flex flex-col space-y-5 mb-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`font-body text-xl py-2 block transition-colors ${
                        isActive(item.path) 
                          ? 'text-primary font-semibold' 
                          : 'text-white hover:text-primary focus:text-primary'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                
                {/* Examples Section (Mobile) */}
                <li>
                  <button
                    onClick={() => setIsExamplesOpen(!isExamplesOpen)}
                    className={`font-body text-xl py-2 w-full text-left flex items-center justify-between transition-colors ${
                      isExamplePage 
                        ? 'text-primary font-semibold' 
                        : 'text-white hover:text-primary focus:text-primary'
                    }`}
                  >
                    <span>Examples</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 transition-transform ${isExamplesOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isExamplesOpen && (
                    <ul className="pl-4 mt-2 space-y-2 border-l border-white/20">
                      {exampleItems.map((item) => (
                        <li key={item.path}>
                          <Link
                            href={item.path}
                            className={`font-body text-lg py-1 block transition-colors ${
                              isActive(item.path) 
                                ? 'text-primary font-semibold' 
                                : 'text-white/90 hover:text-primary focus:text-primary'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
              
              <Link 
                href="/patient-portal" 
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Patient Portal
              </Link>
              
              <Link 
                href="/appointment" 
                className="btn btn-secondary w-full text-center mt-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </nav>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2 text-white rounded-full hover:bg-navy-light focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}; 