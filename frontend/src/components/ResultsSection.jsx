import React from 'react';

const ResultsSection = ({ results, loading, error }) => {
  // Waste type definitions with icons, colors, and disposal instructions
  const wasteTypes = {
    // Food and organic items
    'apple': { 
      type: 'organic',
      category: 'organic',
      binName: 'Brown Bin',
      disposal: 'Place in brown organic waste bin for composting.'
    },
    'banana': { 
      type: 'organic',
      category: 'organic',
      binName: 'Brown Bin',
      disposal: 'Place in brown organic waste bin for composting.'
    },
    'carrot': { 
      type: 'organic',
      category: 'organic',
      binName: 'Brown Bin',
      disposal: 'Place in brown organic waste bin for composting.'
    },
    'food scraps': { 
      type: 'organic',
      category: 'organic',
      binName: 'Brown Bin',
      disposal: 'Place in brown organic waste bin for composting.'
    },
    'vegetables': { 
      type: 'organic',
      category: 'organic',
      binName: 'Brown Bin',
      disposal: 'Place in brown organic waste bin for composting.'
    },
    'fruits': { 
      type: 'organic',
      category: 'organic',
      binName: 'Brown Bin',
      disposal: 'Place in brown organic waste bin for composting.'
    },
    
    // Paper products
    'newspaper': { 
      type: 'paper',
      category: 'recyclable',
      binName: 'Green Bin',
      disposal: 'Place in green paper recycling bin.' 
    },
    'cardboard': { 
      type: 'paper',
      category: 'recyclable',
      binName: 'Green Bin',
      disposal: 'Break down and place in green paper recycling bin.'
    },
    'magazine': { 
      type: 'paper',
      category: 'recyclable',
      binName: 'Green Bin',
      disposal: 'Place in green paper recycling bin.'
    },
    'office paper': { 
      type: 'paper',
      category: 'recyclable',
      binName: 'Green Bin',
      disposal: 'Place in green paper recycling bin.'
    },
    
    // Plastic items
    'plastic bottle': { 
      type: 'plastic',
      category: 'recyclable',
      binName: 'Blue Bin',
      disposal: 'Rinse and place in blue recycling bin.'
    },
    'plastic bag': { 
      type: 'plastic',
      category: 'recyclable',
      binName: 'Blue Bin',
      disposal: 'Bundle with other bags and place in blue bin.'
    },
    'plastic container': { 
      type: 'plastic',
      category: 'recyclable',
      binName: 'Blue Bin',
      disposal: 'Rinse and place in blue recycling bin.'
    },
    
    // Glass items
    'glass bottle': { 
      type: 'glass',
      category: 'recyclable',
      binName: 'Yellow Bin',
      disposal: 'Rinse and place in yellow glass recycling bin.'
    },
    'glass jar': { 
      type: 'glass',
      category: 'recyclable',
      binName: 'Yellow Bin',
      disposal: 'Rinse and place in yellow glass recycling bin.'
    },
    
    // Metal items
    'aluminum can': { 
      type: 'metal',
      category: 'recyclable',
      binName: 'Blue Bin',
      disposal: 'Rinse and place in blue recycling bin.'
    },
    'tin can': { 
      type: 'metal',
      category: 'recyclable',
      binName: 'Blue Bin',
      disposal: 'Rinse and place in blue recycling bin.'
    },
    'metal': { 
      type: 'metal',
      category: 'recyclable',
      binName: 'Blue Bin',
      disposal: 'Place in blue recycling bin.'
    },
    
    // Electronic waste
    'battery': { 
      type: 'electronic',
      category: 'hazardous',
      binName: 'Red Bin',
      disposal: 'Take to designated hazardous waste collection.'
    },
    'phone': { 
      type: 'electronic',
      category: 'hazardous',
      binName: 'Red Bin',
      disposal: 'Take to electronics recycling center.'
    },
    'computer': { 
      type: 'electronic',
      category: 'hazardous',
      binName: 'Red Bin',
      disposal: 'Take to electronics recycling center.'
    },
    
    // Hazardous waste
    'paint': { 
      type: 'hazardous',
      category: 'hazardous',
      binName: 'Red Bin',
      disposal: 'Take to hazardous waste collection facility.'
    },
    'medicine': { 
      type: 'hazardous',
      category: 'hazardous',
      binName: 'Red Bin',
      disposal: 'Return to pharmacy for proper disposal.'
    },
    'chemicals': { 
      type: 'hazardous',
      category: 'hazardous',
      binName: 'Red Bin',
      disposal: 'Take to hazardous waste collection facility.'
    },
    
    // Non-recyclable
    'styrofoam': { 
      type: 'non-recyclable',
      category: 'non-recyclable',
      binName: 'Black Bin',
      disposal: 'Place in black general waste bin.'
    },
    'diaper': { 
      type: 'non-recyclable',
      category: 'non-recyclable',
      binName: 'Black Bin',
      disposal: 'Place in black general waste bin.'
    },
    'plastic film': { 
      type: 'non-recyclable',
      category: 'non-recyclable',
      binName: 'Black Bin',
      disposal: 'Place in black general waste bin.'
    }
  };

  // Helper function to determine icon and color based on waste type
  const getWasteTypeInfo = (type) => {
    const typeMap = {
      'plastic': { 
        icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
        color: '#3B82F6', // Blue
        gradient: 'from-blue-500/20 to-blue-400/10'
      },
      'paper': { 
        icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
        color: '#60A5FA', // Light blue
        gradient: 'from-blue-400/20 to-indigo-400/10'
      },
      'glass': { 
        icon: 'M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 8v2m0 0v2m0-2h6m-6 0H6M6 7h12M6 7v12a2 2 0 002 2h8a2 2 0 002-2V7',
        color: '#34D399', // Green
        gradient: 'from-emerald-500/20 to-teal-400/10'
      },
      'metal': { 
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10',
        color: '#6B7280', // Gray
        gradient: 'from-gray-500/20 to-gray-400/10'
      },
      'organic': { 
        icon: 'M5 11a5 5 0 0110 0v3a5 5 0 01-10 0v-3zM5 11c0 1.1-1.045 2-2 2a2 2 0 104 0M15 11a5 5 0 0110 0v3a5 5 0 01-10 0v-3zM15 11c0 1.1 1.045 2 2 2a2 2 0 104 0',
        color: '#A3E635', // Lime
        gradient: 'from-lime-500/20 to-green-400/10'
      },
      'hazardous': { 
        icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
        color: '#EF4444', // Red
        gradient: 'from-red-500/20 to-orange-400/10'
      },
      'electronic': { 
        icon: 'M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4',
        color: '#F59E0B', // Amber
        gradient: 'from-amber-500/20 to-yellow-400/10'
      },
      'textile': { 
        icon: 'M17 14V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v9m4 0h-4m4 0h4m-11 0v1a2 2 0 002 2h2a2 2 0 002-2v-1m-4 0V5a2 2 0 012-2h1a2 2 0 012 2v9',
        color: '#EC4899', // Pink
        gradient: 'from-pink-500/20 to-purple-400/10'
      },
      'non-recyclable': {
        icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
        color: '#6B7280', // Gray
        gradient: 'from-gray-500/20 to-slate-400/10'
      }
    };
    
    // Default if type not found
    return typeMap[type?.toLowerCase()] || { 
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      color: '#8B5CF6', // Purple (default)
      gradient: 'from-purple-500/20 to-indigo-400/10'
    };
  };

  // Helper function to determine bin color and icon
  const getBinInfo = (category) => {
    const binMap = {
      'recyclable': { 
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        color: '#10B981', // Emerald
        name: 'Recycling',
        gradient: 'from-emerald-500/20 to-teal-400/10'
      },
      'non-recyclable': { 
        icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
        color: '#6B7280', // Gray
        name: 'Trash',
        gradient: 'from-gray-500/20 to-slate-400/10'
      },
      'organic': { 
        icon: 'M5 12H3l2-3m0 0l2 3m-2-3v9M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
        color: '#65A30D', // Lime
        name: 'Compost',
        gradient: 'from-lime-500/20 to-green-400/10'
      },
      'hazardous': { 
        icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
        color: '#DC2626', // Red
        name: 'Hazardous',
        gradient: 'from-red-500/20 to-orange-400/10'
      },
      'special': { 
        icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        color: '#F59E0B', // Amber
        name: 'Special',
        gradient: 'from-amber-500/20 to-yellow-400/10'
      }
    };
    
    // Default if category not found
    return binMap[category?.toLowerCase()] || { 
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      color: '#8B5CF6', // Purple (default)
      name: 'General',
      gradient: 'from-purple-500/20 to-indigo-400/10'
    };
  };

  // Function to get bin color based on bin name
  const getBinColor = (binName) => {
    const binColorMap = {
      'Blue Bin': '#3b82f6',
      'Green Bin': '#22c55e',
      'Brown Bin': '#b45309',
      'Black Bin': '#4b5563',
      'Red Bin': '#ef4444',
      'Yellow Bin': '#eab308'
    };
    
    return binColorMap[binName] || '#8B5CF6';
  };

  // Identify the waste type from the input
  const identifyWaste = (input) => {
    if (!input) return null;
    
    // Convert input to lowercase for case-insensitive matching
    const lowerInput = input.toLowerCase();
    
    // Try to find a direct match in our waste types
    for (const [key, value] of Object.entries(wasteTypes)) {
      if (lowerInput.includes(key)) {
        return {
          name: key.charAt(0).toUpperCase() + key.slice(1),
          type: value.type,
          category: value.category,
          binName: value.binName,
          recyclable: value.category === 'recyclable',
          disposal: value.disposal
        };
      }
    }
    
    // Handle unknown waste types
    return {
      name: "Unknown Item",
      type: "non-recyclable",
      category: "non-recyclable",
      binName: "Black Bin",
      recyclable: false,
      disposal: "When in doubt, place in general waste bin."
    };
  };

  // Identify waste from results
  const identifiedWaste = typeof results === 'string' ? identifyWaste(results) : results;
  
  // Get styling info
  const wasteInfo = identifiedWaste ? getWasteTypeInfo(identifiedWaste.type) : null;
  const binInfo = identifiedWaste ? getBinInfo(identifiedWaste.category) : null;
  const binColor = identifiedWaste ? getBinColor(identifiedWaste.binName) : null;

  return (
    <div className="flex flex-col gap-5">
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5"
              stroke="#38ef7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-white text-2xl font-black leading-tight tracking-tight">
            Analysis Results
          </h2>
        </div>
        <p className="text-white/60 text-sm">
          Our AI has analyzed your waste item and determined how to properly dispose of it
        </p>
      </div>

      {loading && (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center">
          <div className="flex justify-center items-center mb-4">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="w-16 h-16 border-4 border-white/10 rounded-full"></div>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="w-16 h-16 border-4 border-t-[#9d81ff] border-r-[#65c3e8] border-b-[#38ef7d] border-l-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
          <p className="text-white text-center mb-2">Analyzing your waste item</p>
          <p className="text-white/60 text-sm text-center">This may take a few seconds...</p>
        </div>
      )}

      {error && (
        <div className="bg-white/5 backdrop-blur-lg border border-red-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold">Analysis Error</h3>
          </div>
          <div className="bg-white/5 backdrop-blur-lg p-4 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="py-2 px-4 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
              Try Again
            </button>
          </div>
        </div>
      )}

      {identifiedWaste && (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 relative overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#9d81ff]/10 to-[#38ef7d]/5 animate-gradient-shift"></div>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#9d81ff]/15 to-transparent blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-[#38ef7d]/15 to-transparent blur-xl"></div>
          
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9d81ff]/30 to-[#38ef7d]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold">Analysis Complete</h3>
          </div>
          
          {/* Material Type Card */}
          <div className="mb-4">
            <p className="text-white/70 text-sm mb-1 ml-1">Material Type</p>
            <div className="relative bg-gradient-to-r from-black/40 to-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${wasteInfo?.gradient} opacity-30`}></div>
              <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke={wasteInfo?.color} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={wasteInfo?.icon}></path>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-white text-2xl font-bold capitalize">{identifiedWaste.name}</h4>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={`py-1 px-3 rounded-full text-xs font-medium flex items-center gap-1`} 
                        style={{ backgroundColor: `${identifiedWaste.recyclable ? '#10B981' : '#6B7280'}25` }}>
                    <span className={`w-2 h-2 rounded-full ${identifiedWaste.recyclable ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                    <span className={identifiedWaste.recyclable ? 'text-green-400' : 'text-gray-400'}>
                      {identifiedWaste.recyclable ? 'Recyclable' : 'Non-Recyclable'}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Disposal Method Card */}
          <div className="mb-4">
            <p className="text-white/70 text-sm mb-1 ml-1">Disposal Method</p>
            <div className="relative bg-gradient-to-r from-black/40 to-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 overflow-hidden group hover:border-white/20 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${binInfo?.gradient} opacity-30`}></div>
              
              {/* Bin indicator circle */}
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full" style={{ backgroundColor: binColor }}></div>
              
              <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke={binInfo?.color} xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={binInfo?.icon}></path>
                </svg>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-white text-2xl font-bold capitalize">
                  {identifiedWaste.binName}
                </h4>
                
                <div className="mt-3">
                  <p className="text-white/90">{identifiedWaste.disposal}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#38ef7d] animate-pulse"></div>
              <p className="text-white/60 text-xs">+10 pts added to your recycling score</p>
            </div>
            
            <button className="py-2 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-lg text-black text-sm font-bold hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.02]">
              Next Item
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;