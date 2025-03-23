import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-black py-6 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main content in a more compact layout */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Logo and tagline */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                    fill="#9d81ff"
                  ></path>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold">Nirvana</h2>
            </div>
            <p className="text-gray-400 text-xs">Something in the way we recycle</p>
            
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-gray-500 hover:text-[#9d81ff]">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9d81ff]">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9d81ff]">
                <Facebook size={16} />
              </a>
            </div>
          </div>
          
          {/* Quick links in a more compact arrangement */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm">
            <div>
              <h3 className="text-white font-medium text-sm mb-2">Recycle</h3>
              <ul className="space-y-1">
                <li><Link to="#" className="text-gray-400 hover:text-[#9d81ff] text-xs">Waste Types</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#9d81ff] text-xs">Collection</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium text-sm mb-2">Redeem</h3>
              <ul className="space-y-1">
                <li><Link to="#" className="text-gray-400 hover:text-[#9d81ff] text-xs">Rewards</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#9d81ff] text-xs">Partners</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium text-sm mb-2">About</h3>
              <ul className="space-y-1">
                <li><Link to="#" className="text-gray-400 hover:text-[#9d81ff] text-xs">Our Mission</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-[#9d81ff] text-xs">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom credits - much more compact */}
        <div className="mt-6 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-gray-500 text-xs">
            <div>
              In memory of Kurt Cobain (Heart-Shaped Box Division)
            </div>
            
            <div className="flex gap-4">
              <Link to="#" className="text-gray-500 hover:text-[#9d81ff] text-xs">Privacy</Link>
              <Link to="#" className="text-gray-500 hover:text-[#9d81ff] text-xs">Terms</Link>
              <Link to="#" className="text-gray-500 hover:text-[#9d81ff] text-xs">Cookies</Link>
            </div>
          </div>
          
          <div className="text-center mt-3 text-xs text-gray-600">
            © 2025 Nirvana: Recycle, Redeem, Reincarnate!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;