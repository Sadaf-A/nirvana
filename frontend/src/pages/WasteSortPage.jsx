import React from 'react';

const WasteSortPage = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
      <div className="max-w-[960px] w-full">
        <h1 className="text-white text-4xl font-black mb-6">Nevermind Waste Sorting</h1>
        <p className="text-[#a9a9a9] text-xl mb-10">
          Find out where your trash belongs. "All Apologies" to the landfill - we're doing things differently.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WasteCategory 
            title="Lithium Recycling" 
            description="Batteries and electronics that need special handling."
            color="bg-[#9d81ff]"
          />
          <WasteCategory 
            title="Heart-Shaped Compost" 
            description="Food waste and organic materials for composting."
            color="bg-[#7ced73]"
          />
          <WasteCategory 
            title="Territorial Plastics" 
            description="Different types of plastics and their recycling codes."
            color="bg-[#ff6b6b]"
          />
        </div>
        
        <div className="mt-10 p-6 bg-[#181818] rounded-xl border border-[#333]">
          <h2 className="text-white text-2xl font-bold mb-4">Smells Like Clean Spirit Quiz</h2>
          <p className="text-[#a9a9a9] mb-6">Test your knowledge about proper waste sorting and earn Teen Spirit points!</p>
          <button className="bg-[#9d81ff] text-[#111111] px-6 py-3 rounded-lg font-bold">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

const WasteCategory = ({ title, description, color }) => {
  return (
    <div className={`p-6 rounded-xl ${color} text-[#111111]`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="font-medium">{description}</p>
      <button className="mt-4 bg-[#111111] text-white px-4 py-2 rounded-lg text-sm font-medium">Learn More</button>
    </div>
  );
};

export default WasteSortPage;