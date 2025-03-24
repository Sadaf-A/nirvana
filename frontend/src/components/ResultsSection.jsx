import React from 'react';

const ResultsSection = ({ results, loading, error }) => {
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

      {results && (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 relative overflow-hidden">
          {/* Gradient accent in the background */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-r from-[#9d81ff]/20 to-[#38ef7d]/20 blur-xl"></div>
          
          <div className="flex items-center gap-3 mb-6 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9d81ff]/30 to-[#38ef7d]/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-white text-lg font-bold">Analysis Complete</h3>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 mb-4 relative">
            <div className="space-y-4">
              {typeof results === 'string' ? (
                <p className="text-white leading-relaxed">{results}</p>
              ) : (
                <>
                  {results.type && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm w-24">Material:</span>
                      <span className="text-white font-medium">{results.type}</span>
                    </div>
                  )}
                  {results.category && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm w-24">Category:</span>
                      <span className="text-white font-medium">{results.category}</span>
                    </div>
                  )}
                  {results.recyclable !== undefined && (
                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm w-24">Recyclable:</span>
                      <span className={`font-medium ${results.recyclable ? 'text-[#38ef7d]' : 'text-red-400'}`}>
                        {results.recyclable ? 'Yes' : 'No'}
                      </span>
                    </div>
                  )}
                  {results.disposal && (
                    <div className="flex items-start gap-2">
                      <span className="text-white/60 text-sm w-24 mt-1">Disposal:</span>
                      <div className="text-white">{results.disposal}</div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#38ef7d] animate-pulse"></div>
              <p className="text-white/60 text-xs">+10 pts added to your recycling score</p>
            </div>
            
            <button className="py-2 px-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-lg text-black text-sm font-bold hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.02]">
              Next Item
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;