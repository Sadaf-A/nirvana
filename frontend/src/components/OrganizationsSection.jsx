import React from 'react';

const OrganizationsSection = () => {
  return (
    <div className="mb-10">
      <h2 className="text-white text-2xl font-bold mb-6">Explore Organizations</h2>
      <div className="bg-[#172119] rounded-xl p-6 border border-[#29382f]">
        <div className="text-center mb-6">
          <h3 className="text-white text-xl font-bold mb-2">Connect with Organizations Making a Difference</h3>
          <p className="text-[#9eb7a9] max-w-2xl mx-auto">
            Discover organizations that accept donations for creative reuse or environmental causes.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Placeholder Organization Cards */}
          <div className="organization-card bg-[#111714] rounded-lg overflow-hidden">
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://saahaszerowaste.com/wp-content/uploads/2024/02/Circular-Impact-Report-2023.webp')" }}></div>
            <div className="p-3">
              <h4 className="text-white font-bold mb-1">Sahaas</h4>
              <p className="text-[#9eb7a9] text-xs mb-2">Glass, Plastic, Electronic</p>
              <a href="https://saahaszerowaste.com/about-us/#mission-vision">
                <button className="w-full text-xs bg-[#1fe06f] text-[#111714] px-2 py-1 rounded-lg font-bold">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <a href="https://www.vogue.in/culture-and-living/content/recycle-reuse-indian-organisations-recycling-sustainable-eco-friendly-practices">
            <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-[#1fe06f] text-[#111714] text-sm font-bold">
              <span>Explore More Organizations</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrganizationsSection;