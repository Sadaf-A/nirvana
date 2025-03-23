import React from 'react';
import { Link } from 'react-router-dom';
import MiniKurt from '../components/Chatbot';
import kurtImage from "../assets/kurt.jpeg";

const HomePage = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans">
      {/* Background effects */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#9d81ff]/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#38ef7d]/10 blur-3xl"></div>
      
      {/* Main Content */}
      <div className="px-10 md:px-20 lg:px-40 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="flex-1">
            <div className="w-16 h-16 mb-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent leading-tight">
              Nevermind The Waste, <br/>Here's Nirvana
            </h1>
            <p className="text-lg text-white/60 mb-8 max-w-xl">
              Join our community of eco-conscious rebels transforming the planet one recycled item at a time. 
              Our AI-powered waste identification will help you break free from environmental waste.
            </p>
            <div className="flex gap-4">
              <button className="py-4 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]">
                Start Recycling
              </button>
              <button className="py-4 px-6 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-2 mt-8">
              <div className="w-3 h-3 rounded-full bg-[#38ef7d] animate-pulse"></div>
              <p className="text-white/60 text-sm">5,234 people recycling right now</p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] backdrop-blur-lg">
              <div className="h-64 bg-cover bg-center rounded-lg mb-6 overflow-hidden group">
                <img 
                  src={kurtImage} 
                  alt="Nirvana recycling impact"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-[#9d81ff] text-xl font-bold mb-4">Come As You Are, Leave No Trace</h3>
              <p className="text-white/60 mb-4">
                Embrace the spirit of change with our revolutionary approach to waste management and recycling.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="text-[#9d81ff] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="text-white text-sm">Our users have saved the equivalent energy of 12,000 vinyl record presses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-12 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: 'scan', 
                title: 'Scan & Identify', 
                description: 'Use our AI to identify any item and learn how to properly recycle it.' 
              },
              { 
                icon: 'location', 
                title: 'Find Recycling Centers', 
                description: 'Locate the nearest centers that accept your specific waste type.' 
              },
              { 
                icon: 'points', 
                title: 'Earn Green Points', 
                description: 'Get rewarded for each item you recycle through our platform.' 
              },
              { 
                icon: 'community', 
                title: 'Join The Movement', 
                description: 'Connect with fellow eco-conscious individuals in your area.' 
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#181818] rounded-2xl p-6 border border-[#333] backdrop-blur-lg group hover:border-[#9d81ff]/40 transition-all duration-300">
                <div className="w-12 h-12 mb-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {item.icon === 'scan' && <path d="M7 3H5C3.89543 3 3 3.89543 3 5V7M17 3H19C20.1046 3 21 3.89543 21 5V7M3 17V19C3 20.1046 3.89543 21 5 21H7M21 17V19C21 20.1046 20.1046 21 19 21H17M7 12L12 7M12 7L17 12M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
                    {item.icon === 'location' && <path d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5304 21.4851 12 21.4851C11.4696 21.4851 10.961 21.2746 10.586 20.9L6.343 16.657C4.22422 14.5385 4.22422 11.1617 6.343 9.04302C8.46177 6.92433 11.8385 6.92433 13.9571 9.04302C16.0758 11.1617 16.0758 14.5385 13.957 16.657H17.657ZM12 12C11.2044 12 10.4413 11.6839 9.87868 11.1213C9.31607 10.5587 9 9.79565 9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6C12.7956 6 13.5587 6.31607 14.1213 6.87868C14.6839 7.44129 15 8.20435 15 9C15 9.79565 14.6839 10.5587 14.1213 11.1213C13.5587 11.6839 12.7956 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
                    {item.icon === 'points' && <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
                    {item.icon === 'community' && <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM5 10C5 11.1046 4.10457 12 3 12C1.89543 12 1 11.1046 1 10C1 8.89543 1.89543 8 3 8C4.10457 8 5 8.89543 5 10ZM23 10C23 11.1046 22.1046 12 21 12C19.8954 12 19 11.1046 19 10C19 8.89543 19.8954 8 21 8C22.1046 8 23 8.89543 23 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-black mb-12 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181818] rounded-2xl p-8 border border-[#333] backdrop-blur-lg text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">2.7M</div>
              <p className="text-white/60">Pounds of waste diverted from landfills</p>
            </div>
            <div className="bg-[#181818] rounded-2xl p-8 border border-[#333] backdrop-blur-lg text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">45K</div>
              <p className="text-white/60">Active community members worldwide</p>
            </div>
            <div className="bg-[#181818] rounded-2xl p-8 border border-[#333] backdrop-blur-lg text-center">
              <div className="text-5xl font-black mb-2 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">98%</div>
              <p className="text-white/60">Waste properly sorted and recycled</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-24 bg-gradient-to-r from-[#9d81ff]/10 to-[#38ef7d]/10 rounded-2xl p-12 backdrop-blur-lg border border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">
                Lithium For A Better Planet
              </h2>
              <p className="text-white/60 max-w-xl">
                Let's create a world where recycling becomes second nature. Join thousands of eco-conscious rebels making a difference today.
              </p>
            </div>
            <div>
              <button className="py-4 px-8 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]">
                Join The Movement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Component */}
      <MiniKurt />
    </div>
  );
};

export default HomePage;