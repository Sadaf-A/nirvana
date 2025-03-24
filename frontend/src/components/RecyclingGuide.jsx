import React from 'react';

const RecyclingGuide = () => {
  const wasteCategories = [
    {
      name: "Blue Bin - Recyclables",
      color: "#3b82f6",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
        </svg>
      ),
      items: [
        "Plastic bottles and containers",
        "Plastic bags and wrappers",
        "Plastic cups and utensils",
        "Clean aluminum cans",
        "Metal containers and foil"
      ],
      tip: "Clean and empty before recycling"
    },
    {
      name: "Green Bin - Paper",
      color: "#22c55e",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      ),
      items: [
        "Newspapers and magazines",
        "Paper bags and cartons",
        "Office paper and envelopes",
        "Books and notebooks",
        "Cardboard boxes (flattened)"
      ],
      tip: "Keep dry and free from food contamination"
    },
    {
      name: "Brown Bin - Organic Waste",
      color: "#b45309",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      items: [
        "Food scraps and leftovers",
        "Coffee grounds and tea bags",
        "Yard waste and plant trimmings",
        "Soiled paper towels and napkins",
        "Biodegradable packaging"
      ],
      tip: "No plastic bags, even if labeled biodegradable"
    },
    {
      name: "Black Bin - Non-Recyclable",
      color: "#4b5563",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
      ),
      items: [
        "Styrofoam and foam packaging",
        "Certain plastic films and wrappers",
        "Used tissues and diapers",
        "Broken ceramic and glassware",
        "Mixed material items"
      ],
      tip: "Try to minimize waste in this category"
    },
    {
      name: "Red Bin - Hazardous Waste",
      color: "#ef4444",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      ),
      items: [
        "Batteries and electronics",
        "Paint and solvents",
        "Cleaning products",
        "Pesticides and fertilizers",
        "Medical waste and sharps"
      ],
      tip: "Requires special disposal at designated facilities"
    },
    {
      name: "Yellow Bin - Glass",
      color: "#eab308",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      items: [
        "Glass bottles and jars",
        "Glass food containers",
        "Glass beverage containers",
        "Clear, green and brown glass",
        "Glass cosmetic containers"
      ],
      tip: "Rinse thoroughly and remove caps or lids"
    }
  ];

  return (
    <div className="mb-10">
      <div className="mb-8">
        <h2 className="text-white text-3xl font-black leading-tight tracking-tight mb-2 flex items-center gap-2">
          <svg className="w-7 h-7 text-[#38ef7d]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
          Waste Sorting Guide
        </h2>
        <p className="text-white/60 text-lg">
          Proper waste sorting is crucial for effective recycling. Use this guide to know what goes where.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wasteCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 group"
          >
            <div className="h-2" style={{ backgroundColor: category.color }}></div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold mb-3">{category.name}</h3>
                  <ul className="text-white/60 space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#38ef7d] text-xs mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-[#38ef7d] text-sm font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {category.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-[#9d81ff]/10 to-[#38ef7d]/10 rounded-xl backdrop-blur-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-1">Did you know?</h3>
            <p className="text-white/60">Properly sorted waste can reduce landfill usage by up to 75%. Every item correctly sorted contributes to a cleaner planet and earns you extra Nirvana points!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingGuide;