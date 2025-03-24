import React from 'react';

const OrganizationsSection = () => {
  // Sample organizations data
  const organizations = [
    {
      id: 1,
      name: "Sahaas Zero Waste",
      categories: ["Glass", "Plastic", "Electronic"],
      image: "https://saahaszerowaste.com/wp-content/uploads/2024/02/Circular-Impact-Report-2023.webp",
      url: "https://saahaszerowaste.com/about-us/#mission-vision"
    },
    {
      id: 2,
      name: "EcoSoul",
      categories: ["Paper", "Organic", "Textile"],
      image: "/api/placeholder/400/320",
      url: "#"
    },
    {
      id: 3,
      name: "GreenCycle",
      categories: ["Metal", "Plastic", "Battery"],
      image: "/api/placeholder/400/320",
      url: "#"
    },
    {
      id: 4,
      name: "ReEarth",
      categories: ["E-waste", "Hazardous", "Paper"],
      image: "/api/placeholder/400/320",
      url: "#"
    }
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-6">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10H3M16 2V6M8 2V6M9 14L11 16L15.5 11.5M5 8H19C20.1046 8 21 8.89543 21 10V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V10C3 8.89543 3.89543 8 5 8Z" 
            stroke="#9d81ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <h2 className="text-white text-2xl font-black leading-tight tracking-tight">
          Explore Organizations
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#9d81ff]/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#38ef7d]/10 blur-3xl"></div>
        
        <div className="text-center mb-8 relative z-10">
          <h3 className="text-white text-xl font-bold mb-3">Connect with Organizations Making a Difference</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover organizations that accept donations for creative reuse or environmental causes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8 relative z-10">
          {organizations.map(org => (
            <div key={org.id} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-[#9d81ff]/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9d81ff]/10">
              <div className="h-40 bg-cover bg-center relative overflow-hidden">
                <img 
                  src={org.image} 
                  alt={org.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-4">
                <h4 className="text-white font-bold mb-2 group-hover:text-[#9d81ff] transition-colors duration-300">{org.name}</h4>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {org.categories.map((category, idx) => (
                    <span key={idx} className="text-[10px] bg-white/10 text-white/80 px-2 py-0.5 rounded-full">{category}</span>
                  ))}
                </div>
                
                <a href={org.url} className="block">
                  <button className="w-full bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black px-3 py-2 rounded-lg font-bold text-sm hover:shadow-md hover:shadow-[#9d81ff]/20 transition-all duration-300 transform group-hover:scale-[1.01]">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 relative z-10">
          <a href="https://www.vogue.in/culture-and-living/content/recycle-reuse-indian-organisations-recycling-sustainable-eco-friendly-practices" className="inline-block">
            <button className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L20 15M20 15L15 20M20 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11C4 9.93913 4.42143 8.92172 5.17157 8.17157C5.92172 7.42143 6.93913 7 8 7H9" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Explore More Organizations</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsSection;