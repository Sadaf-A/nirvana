import React from 'react';

const FactsCard = () => {
  return (
    <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] w-full max-w-lg">
      <div className="h-56 bg-cover bg-center rounded-lg mb-6" style={{ backgroundImage: "url('/api/placeholder/400/320')" }}></div>
      
      <h3 className="text-[#9d81ff] text-xl font-bold mb-4">Kurt Would Be Proud</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="text-[#9d81ff] mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white text-sm">"It's better to burn out than to fade away" - but plastic takes 450 years to decompose. Recycle instead!</p>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="text-[#9d81ff] mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white text-sm">One recycled aluminum can saves enough energy to play "Smells Like Teen Spirit" on full volume 578 times.</p>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="text-[#9d81ff] mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white text-sm">Nirvana app users have collectively diverted over 2.4 million pounds of waste from landfills. That weighs more than 10,000 guitar amplifiers!</p>
        </div>
      </div>
    </div>
  );
};

export default FactsCard;
