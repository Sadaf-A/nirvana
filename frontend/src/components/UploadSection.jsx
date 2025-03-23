import React from 'react';

const UploadSection = ({ onFileUpload, imagePreview }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-2xl font-bold leading-tight flex items-center gap-2">
        <svg className="w-6 h-6 text-[#1fe06f]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Upload Your Waste Image
      </h2>
      <p className="text-[#9eb7a9] text-sm">Take a clear photo of your waste item against a plain background for the best results.</p>

      <div className="mt-4 border-2 border-dashed border-[#29382f] rounded-xl p-8 flex flex-col items-center justify-center bg-[#111714] hover:bg-[#131a16] transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1fe06f]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <svg className="w-16 h-16 text-[#1fe06f]/80 mb-4 group-hover:text-[#1fe06f] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
        <p className="text-white text-center mb-4">Drag and drop your image here</p>
        <p className="text-[#9eb7a9] text-sm text-center mb-4">— or —</p>
        <button className="flex cursor-pointer items-center justify-center rounded-xl h-10 px-6 bg-gradient-to-r from-[#1fe06f] to-[#18b85a] text-[#111714] text-sm font-bold shadow-md shadow-[#1fe06f]/20 hover:shadow-lg hover:shadow-[#1fe06f]/30 transition-all duration-300 group-hover:scale-105" onClick={() => document.getElementById('file-upload').click()}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span>Browse Files</span>
        </button>
        <input type="file" className="hidden" id="file-upload" accept="image/*" onChange={handleFileChange} />
        <p className="text-[#9eb7a9] text-xs mt-4">Supported formats: JPG, PNG, WEBP (Max 10MB)</p>
      </div>

      {/* Image Preview Section */}
      {imagePreview && (
        <div className="mt-4" id="image-preview-container">
          <h3 className="text-white text-sm font-medium mb-2">Image Preview</h3>
          <div className="bg-[#111714] rounded-lg p-2 flex justify-center">
            <img id="image-preview" className="max-h-48 rounded" src={imagePreview} alt="Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;