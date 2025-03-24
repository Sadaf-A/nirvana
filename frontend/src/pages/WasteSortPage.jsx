import React, { useState } from 'react';
import UploadSection from '../components/UploadSection';
import ResultsSection from '../components/ResultsSection';
import RecyclingGuide from '../components/RecyclingGuide';
import CreativeReuse from '../components/CreativeReuse';
import OrganizationsSection from '../components/OrganizationsSection';
import Header from '../components/Header';
const VITE_APP_GEMINI_API_KEY = import.meta.env.VITE_APP_GEMINI_API_KEY;

const WasteSortPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle file upload
  const handleFileUpload = async (file) => {
    if (!file) {
      setError('No file selected');
      return;
    }
    // Validate file size and type
    if (file.size > 10 * 1024 * 1024) {
      setError('File is too large. Please upload an image smaller than 10MB.');
      return;
    }
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPG, PNG, or WEBP).');
      return;
    }

    // Set loading state
    setLoading(true);
    setError(null);

    try {
      // Convert file to base64
      const base64Image = await fileToBase64(file);

      // Call Gemini API
      const response = await analyzeImage(base64Image);

      // Process and set results
      setResults(response);
      setImagePreview(URL.createObjectURL(file));
    } catch (err) {
      setError('Error analyzing image. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  // Call Gemini API
  const analyzeImage = async (base64Image) => {
    const apiKey = VITE_APP_GEMINI_API_KEY; // Correct way
    const apiUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: "You are a waste classification expert with a Kurt Cobain-inspired attitude. Analyze this image and identify the type of waste material. Provide the waste type, category (recyclable, non-recyclable, organic), and disposal instructions. Include a Nirvana lyric reference if possible.",
              },
              {
                inline_data: {
                  mime_type: "image/jpeg",
                  data: base64Image,
                },
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze image.');
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#121212] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />

      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex flex-1 justify-center py-8 bg-[#121212] min-h-screen">
          <div className="layout-content-container flex flex-col max-w-[1080px] flex-1">
            {/* Page Title Section */}
            <div className="flex flex-col gap-5 mb-10 text-center relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#9d81ff]/10 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#38ef7d]/10 blur-3xl"></div>
              
              {/* Icon */}
              <div className="mx-auto w-16 h-16 mb-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8C21 6.93913 20.5786 5.92172 19.8284 5.17157C19.0783 4.42143 18.0609 4 17 4H7C5.93913 4 4.92172 4.42143 4.17157 5.17157C3.42143 5.92172 3 6.93913 3 8V16C3 17.0609 3.42143 18.0783 4.17157 18.8284C4.92172 19.5786 5.93913 20 7 20H17C18.0609 20 19.0783 19.5786 19.8284 18.8284C20.5786 18.0783 21 17.0609 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 10V14M16 10V14M8 10V14M8 7V4M16 7V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">
                In Bloom: Smart Waste Sorting
              </h1>
              <p className="text-white/60 max-w-2xl mx-auto">
                "All the flowers of tomorrow are in the seeds of today." Upload an image of your waste item and our AI will identify whether it's recyclable and guide you to the proper disposal method.
              </p>
              <p className="text-white/40 text-sm italic max-w-2xl mx-auto mt-2">
                As Kurt would say, "It's better to burn out than fade away" - but plastic takes 450 years to decompose. Recycle it instead!
              </p>
            </div>

            {/* Upload and Results Sections */}
            <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 mb-8 border border-[#333] backdrop-blur-lg relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9d81ff]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#38ef7d]/10 rounded-full blur-2xl"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <UploadSection onFileUpload={handleFileUpload} imagePreview={imagePreview} />
                <ResultsSection results={results} loading={loading} error={error} />
              </div>
            </div>

            {/* Recycling Quote Section - New */}
            <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 mb-8 border border-[#333] backdrop-blur-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6L6 7M6 7L3 16M6 7L12 5M12 5L18 7M12 5V10M18 7L21 6M18 7V16M18 16L21 18M18 16L12 18M12 18L6 16M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <blockquote className="text-white/80 italic text-lg md:text-xl">
                  "Just because you're paranoid doesn't mean they aren't after you." The state of our planet isn't just anxiety - it's real. But by properly sorting our waste, we can make a difference. One recycled can, bottle, or cardboard box at a time.
                  <footer className="text-white/40 text-sm mt-2">— Inspired by Kurt Cobain</footer>
                </blockquote>
              </div>
            </div>

            {/* Recycling Guide Section */}
            <RecyclingGuide />

            {/* Creative Reuse Section */}
            <CreativeReuse />

            {/* Organizations Section */}
            <OrganizationsSection />
            
            {/* Footer Inspired Section - New */}
            <div className="bg-[#181818] rounded-2xl p-6 sm:p-8 mt-8 border border-[#333] backdrop-blur-lg text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] bg-clip-text text-transparent">
                Nevermind the Waste
              </h3>
              <p className="text-white/60 max-w-2xl mx-auto">
                Just like Kurt changed music, you can change the world. One small act of recycling at a time.
              </p>
              <button className="mt-6 py-3 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300">
                Come As You Are, Leave It Better
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteSortPage;