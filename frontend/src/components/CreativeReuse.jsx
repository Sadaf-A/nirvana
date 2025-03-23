import React from 'react';

const CreativeReuse = () => {
  return (
    <div className="mb-10">
      <h2 className="text-white text-2xl font-bold mb-6">Best Out of Waste</h2>
      <div className="bg-gradient-to-r from-[#172119] to-[#1a3a27] rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold">Turn Waste Into Treasures</h3>
            <p className="text-[#9eb7a9]">
              Don't just recycle - upcycle! Transform your waste items into useful and beautiful creations.
            </p>
            <ul className="text-white space-y-3 mt-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#1fe06f] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Get personalized DIY project ideas</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#1fe06f] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Follow step-by-step upcycling guides</span>
              </li>
            </ul>
            <a href="https://www.buzzfeed.com/peggy/diy-projects">
              <button className="flex cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-[#1fe06f] text-[#111714] text-base font-bold mt-2 w-full md:w-auto">
                <span>Explore DIY Projects</span>
              </button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder Images */}
            <div className="image-container rounded-lg overflow-hidden">
              <a href="https://www.favecrafts.com/Green-Crafting/Plastic-Bottle-Hanging-Planters">
                <img src="https://irepo.primecp.com/2016/05/281606/Plastic-Bottle-Hanging-Planters_Large500_ID-1665889.jpg?v=1665889" alt="Plastic bottle planters" className="w-full h-full object-cover aspect-square" />
              </a>
            </div>
            <div className="image-container rounded-lg overflow-hidden">
              <a href="https://www.lightbulbs.com/blog/how-to-make-diy-glow-jar">
                <img src="https://www.lightbulbs.com/assets/blog/62/1.jpg" alt="Glass jar lights" className="w-full h-full object-cover aspect-square" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeReuse;