import React from 'react';

const RecyclingGuide = () => {
  return (
    <div className="mb-10">
      <h2 className="text-white text-2xl font-bold mb-6">Waste Sorting Guide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blue Bin - Plastic */}
        <div className="bg-[#172119] rounded-xl p-6 border border-[#29382f]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">Blue Bin - Plastic</h3>
              <ul className="text-[#9eb7a9] space-y-1">
                <li>• Plastic bottles and containers</li>
                <li>• Plastic bags and wrappers</li>
                <li>• Plastic cups and utensils</li>
                <li>• Shampoo and detergent bottles</li>
              </ul>
              <p className="text-[#1fe06f] text-sm mt-3">✓ Clean and empty before recycling</p>
            </div>
          </div>
        </div>

        {/* Green Bin - Paper */}
        <div className="bg-[#172119] rounded-xl p-6 border border-[#29382f]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-2">Green Bin - Paper</h3>
              <ul className="text-[#9eb7a9] space-y-1">
                <li>• Newspapers and magazines</li>
                <li>• Paper bags and cartons</li>
                <li>• Office paper and envelopes</li>
                <li>• Books and notebooks</li>
              </ul>
              <p className="text-[#1fe06f] text-sm mt-3">✓ Keep dry and free from food contamination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingGuide;