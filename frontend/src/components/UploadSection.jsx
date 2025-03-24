import React, { useState, useRef } from 'react';

const UploadSection = ({ onFileUpload, imagePreview }) => {
  const [cameraActive, setCameraActive] = useState(false);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const streamRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access camera. Please check permissions or try uploading a photo instead.");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        const file = new File([blob], "camera-capture.jpg", { type: "image/jpeg" });
        onFileUpload(file);
        stopCamera();
      }, 'image/jpeg', 0.95);
    }
  };

  const handleUploadClick = () => {
    // Toggle between camera and file upload if camera is already active
    if (cameraActive) {
      stopCamera();
    } else if (imagePreview) {
      // If there's already an image preview, give option to replace
      showUploadOptions();
    } else {
      showUploadOptions();
    }
  };

  const showUploadOptions = () => {
    // Show a custom popup or use a simple browser dialog
    const useCamera = window.confirm("Would you like to use your camera? Click 'OK' for camera or 'Cancel' to upload a file.");
    
    if (useCamera) {
      startCamera();
    } else {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16L8.586 11.414C9.367 10.633 10.632 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.632 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.104 20 20 19.104 20 18V6C20 4.896 19.104 4 18 4H6C4.896 4 4 4.896 4 6V18C4 19.104 4.896 20 6 20Z" 
              stroke="#38ef7d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h2 className="text-white text-2xl font-black leading-tight tracking-tight">
            Upload Your Waste Image
          </h2>
        </div>
        <p className="text-white/60 text-sm">
          Take a clear photo of your waste item against a plain background for best results
        </p>
      </div>

      {cameraActive ? (
        <div className="border-2 border-white/10 rounded-xl overflow-hidden bg-black flex flex-col">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className="w-full h-64 object-cover"
          ></video>
          
          <div className="p-4 flex justify-between bg-white/5 backdrop-blur-lg">
            <button 
              onClick={stopCamera}
              className="py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
            >
              Cancel
            </button>
            
            <button 
              onClick={capturePhoto}
              className="py-2 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Capture</span>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div 
          className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center bg-white/5 backdrop-blur-lg hover:bg-white/8 transition-all duration-300 group relative overflow-hidden cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleUploadClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#9d81ff]/5 to-[#38ef7d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <svg className="w-16 h-16 text-[#38ef7d]/80 mb-4 group-hover:text-[#38ef7d] transition-colors duration-300" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 16C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8C7.03609 8 7.07212 8.00041 7.10806 8.00122C7.56045 5.67078 9.58606 4 12 4C14.4139 4 16.4396 5.67078 16.8919 8.00122C16.9279 8.00041 16.9639 8 17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16M15 13L12 10M12 10L9 13M12 10V20" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <p className="text-white text-center mb-3">Drag and drop your image here</p>
          <p className="text-white/60 text-sm text-center mb-4">— or —</p>
          
          <div className="flex gap-3">
            <button 
              type="button" 
              className="py-3 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Take Photo</span>
              </div>
            </button>
            
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current.click();
              }}
              className="py-3 px-6 bg-white/10 text-white rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
                <span>Upload File</span>
              </div>
            </button>
          </div>
          
          <input 
            type="file" 
            className="hidden" 
            ref={fileInputRef}
            id="file-upload" 
            accept="image/*" 
            onChange={handleFileChange} 
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-white/60 text-xs mt-4">Supported formats: JPG, PNG, WEBP (Max 10MB)</p>
        </div>
      )}
      
      {/* Image Preview Section */}
      {imagePreview && !cameraActive && (
        <div className="mt-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
          <h3 className="text-white text-sm font-medium mb-3">Image Preview</h3>
          <div className="flex justify-center">
            <div className="relative group">
              <img 
                id="image-preview" 
                className="max-h-48 rounded-lg object-contain group-hover:scale-[1.01] transition-transform duration-300" 
                src={imagePreview} 
                alt="Waste item preview" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#9d81ff]/10 to-[#38ef7d]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleUploadClick();
              }} 
              className="text-white/60 text-xs hover:text-[#9d81ff] transition-colors duration-300 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
              </svg>
              Replace image
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onFileUpload(null);
              }} 
              className="text-white/60 text-xs hover:text-[#38ef7d] transition-colors duration-300 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Remove image
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;