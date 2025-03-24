import React from 'react';

const OrganizationsSection = () => {
  // Updated organizations data
  const organizations = [
    {
      id: 1,
      name: "Sahaas Zero Waste",
      categories: ["Glass", "Plastic", "Electronic"],
      image: "https://lh3.googleusercontent.com/p/AF1QipNCyF4KhnbsbYyOoKT_AfwnI8bB8gbuYPf-edlS=s1360-w1360-h1020",
      url: "https://saahaszerowaste.com/about-us/#mission-vision"
    },
    {
      id: 2,
      name: "Recycle India",
      categories: ["Plastic", "Electronic", "Bio"],
      image: "https://recycleindiafoundation.com/images/04.jpg",
      url: "https://recycleindiafoundation.com/"
    },
    {
      id: 3,
      name: "Banyan Nation",
      categories: ["Plastic", "Resins"],
      image: "https://www.banyannation.com/wp-content/uploads/2024/12/Life-at-Banyan_3.jpg",
      url: "https://www.banyannation.com/"
    },
    {
      id: 4,
      name: "reCharkha",
      categories: ["Plastic", "Wrappers"],
      image: "https://www.recharkha.org/cdn/shop/files/New_website_web_banner_1080x1000_1800_x_800_px_8.png?v=1737809125&width=3000",
      url: "https://www.recharkha.org/pages/donate-plastic"
    }
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-white text-2xl font-black leading-tight tracking-tight">
          Explore Organizations
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 relative overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-white text-xl font-bold mb-3">Connect with Organizations Making a Difference</h3>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover organizations that accept donations for creative reuse or environmental causes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {organizations.map(org => (
            <div key={org.id} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-[#9d81ff]/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#9d81ff]/10">
              <div className="h-40 bg-cover bg-center relative">
                <img 
                  src={org.image} 
                  alt={org.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
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

        <div className="flex justify-center mt-6">
          <a href="https://www.vogue.in/culture-and-living/content/recycle-reuse-indian-organisations-recycling-sustainable-eco-friendly-practices" className="inline-block">
            <button className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]">
              <span>Explore More Organizations</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsSection;