import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#121212]/90 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4ZM16 8C20.418 8 24 11.582 24 16C24 20.418 20.418 24 16 24C11.582 24 8 20.418 8 16C8 11.582 11.582 8 16 8Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9d81ff"/>
                <stop offset="1" stopColor="#38ef7d"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-white text-xl font-bold leading-tight">Nirvana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/wastesort" isActive={isActive('/wastesort')}>
            Nevermind Waste
          </NavLink>
          <NavLink to="/marketplace" isActive={isActive('/marketplace')}>
            Bleach Market
          </NavLink>
          <NavLink to="/minigame" isActive={isActive('/minigame')}>
            In Bloom & Learn
          </NavLink>
          <NavLink to="/login" isActive={isActive('/login')}>
            Lithium Login
          </NavLink>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <Link 
            to="/signup" 
            className="inline-flex h-10 px-6 items-center justify-center bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Come As You Are
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden z-10 group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center w-6 h-6 space-y-1.5 overflow-hidden">
            <span className={`block h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-[#121212]/95 backdrop-blur-lg flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
          <div className="flex flex-col items-center space-y-6 p-8 w-full max-w-sm">
            <MobileNavLink to="/wastesort" onClick={() => setIsMenuOpen(false)} isActive={isActive('/wastesort')}>
              Nevermind Waste
            </MobileNavLink>
            <MobileNavLink to="/marketplace" onClick={() => setIsMenuOpen(false)} isActive={isActive('/marketplace')}>
              Bleach Market
            </MobileNavLink>
            <MobileNavLink to="/minigame" onClick={() => setIsMenuOpen(false)} isActive={isActive('/minigame')}>
              In Bloom & Learn
            </MobileNavLink>
            <MobileNavLink to="/login" onClick={() => setIsMenuOpen(false)} isActive={isActive('/login')}>
              Lithium Login
            </MobileNavLink>
            
            <div className="pt-6 w-full">
              <Link 
                to="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full py-4 px-6 items-center justify-center bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300"
              >
                Join Nirvana
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ children, to, isActive }) => {
  return (
    <Link 
      to={to} 
      className={`relative text-sm font-medium px-2 py-1 transition-all duration-300 ${
        isActive 
          ? 'text-white' 
          : 'text-white/70 hover:text-white'
      }`}
    >
      {children}
      <span 
        className={`absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] transform transition-transform duration-300 rounded-full ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></span>
    </Link>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ children, to, onClick, isActive }) => {
  return (
    <Link 
      to={to} 
      onClick={onClick}
      className={`w-full text-center text-xl font-medium py-3 border-b border-white/10 transition-all duration-300 ${
        isActive 
          ? 'text-[#9d81ff]' 
          : 'text-white/80 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;