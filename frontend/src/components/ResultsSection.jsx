import React from 'react';

const ResultsSection = ({ results, loading, error }) => {
  return (
    <div className="flex flex-col gap-4" id="result-container">
      <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-2">
        <svg className="w-6 h-6 text-[#1fe06f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Analysis Results
      </h2>

      {loading && <p className="text-[#9eb7a9] text-sm">Analyzing image...</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {results && (
        <div className="bg-gradient-to-br from-[#1a3a27] to-[#183220] rounded-xl p-6 mb-4 border border-[#29382f]/50 shadow-inner">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#1fe06f]/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#1fe06f]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold">Analysis Complete</h3>
          </div>
          <div className="bg-[#111714]/50 p-4 rounded-lg mb-4">
            <p className="text-white">{results}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsSection;