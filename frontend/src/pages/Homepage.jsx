import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Smooth fade-in effect for content
    setIsVisible(true);
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById('howItWorks').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-[#111714] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className={`flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/94dad476-7900-44af-828a-d58cc5af7c41.png")'}}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Come As You Are, Leave No Trace
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Taking the guesswork out of waste sorting. We make eco-friendly disposal effortless, ensuring a cleaner future - Nevermind the mess.
                    </h2>
                  </div>
                  <button
                    onClick={scrollToHowItWorks}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1fe06f] text-[#111714] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Smells Like Curiosity</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div id="howItWorks" className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  How Nirvana Works
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                  Nirvana makes recycling effortless. Scan, sort, and let us handle the rest. In bloom, we'll build a waste-free world together!
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/af3c558f-36e0-45f8-9005-e905297ce2da.png")'}}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Lithium Scan</p>
                    <p className="text-[#9eb7a9] text-sm font-normal leading-normal">Use our app to identify the best way to recycle your waste.</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/a4acdc6c-1001-4d87-9e64-9b900328581d.png")'}}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Heart-Shaped Recycling</p>
                    <p className="text-[#9eb7a9] text-sm font-normal leading-normal">We connect you to the best recycling partners near you.</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/9861cb32-737d-46e8-a291-3f79e2650ba3.png")'}}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Territorial Reuse</p>
                    <p className="text-[#9eb7a9] text-sm font-normal leading-normal">Turn waste into valuable, upcycled products that last forever.</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/559c0340-3b38-4f3a-a437-416e5b9d19a2.png")'}}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Stay Away & Learn</p>
                    <p className="text-[#9eb7a9] text-sm font-normal leading-normal">Enjoy mini-games while learning about sustainability!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chatbot Component */}
      <Chatbot />
      
      <Footer />
    </div>
  );
};

// Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      content: '👋 Hi there! I\'m your Nirvana assistant. How can I help you with recycling today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newMessages = [
      ...messages,
      { role: 'user', content: inputMessage }
    ];
    
    setMessages(newMessages);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate API response
    setTimeout(() => {
      let botResponse = "I'm here to help with your recycling questions. Remember, it's better to burn out than to fade away when it comes to waste management!";
      
      if (inputMessage.toLowerCase().includes('plastic')) {
        botResponse = "Plastic often goes in the blue bin, but check your local recycling guidelines. Some plastics are like Nirvana songs - they need special handling!";
      } else if (inputMessage.toLowerCase().includes('paper')) {
        botResponse = "Paper is usually recyclable in the paper bin, just like the pages of Kurt's journals. Keep it clean and dry for best results!";
      } else if (inputMessage.toLowerCase().includes('glass')) {
        botResponse = "Glass is infinitely recyclable! It's the Endless, Nameless hero of recycling. Rinse it out and place in your glass recycling bin.";
      }
      
      setMessages([...newMessages, { role: 'bot', content: botResponse }]);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1fe06f] text-[#111714] shadow-lg hover:bg-[#19c761] transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c6.5-1 9-6.5 9-11 0-3-2-4-4-4-4 0-5 6-5 6s-1-6-5-6c-2 0-4 1-4 4 0 4.5 2.5 10 9 11z"/>
          <path d="M12 22V15"/>
        </svg>
      </button>
      
      {/* Chat Window */}
      <div className={`flex flex-col w-96 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between bg-[#111714] px-6 py-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-[#1fe06f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c6.5-1 9-6.5 9-11 0-3-2-4-4-4-4 0-5 6-5 6s-1-6-5-6c-2 0-4 1-4 4 0 4.5 2.5 10 9 11z"/>
              <path d="M12 22V15"/>
            </svg>
            <span className="text-white font-bold text-lg">Nirvana Assistant</span>
          </div>
          <button 
            onClick={toggleChat}
            className="text-white hover:text-[#1fe06f] p-1 rounded-full hover:bg-[#29382f] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 p-5 overflow-y-auto bg-gray-50 space-y-4">
          <div className="flex flex-col space-y-4">
            {messages.map((message, index) => (
              message.role === 'bot' ? (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="size-8 bg-[#111714] rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1fe06f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c6.5-1 9-6.5 9-11 0-3-2-4-4-4-4 0-5 6-5 6s-1-6-5-6c-2 0-4 1-4 4 0 4.5 2.5 10 9 11z"/>
                        <path d="M12 22V15"/>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm border border-gray-100">
                    <p className="text-gray-800">{message.content}</p>
                  </div>
                </div>
              ) : (
                <div key={index} className="flex items-start justify-end">
                  <div className="bg-[#1fe06f] p-4 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm">
                    <p className="text-[#111714]">{message.content}</p>
                  </div>
                </div>
              )
            ))}
            
            {isLoading && (
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="size-8 bg-[#111714] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1fe06f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22c6.5-1 9-6.5 9-11 0-3-2-4-4-4-4 0-5 6-5 6s-1-6-5-6c-2 0-4 1-4 4 0 4.5 2.5 10 9 11z"/>
                      <path d="M12 22V15"/>
                    </svg>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <div className="flex space-x-2">
                    <div className="size-2 bg-[#1fe06f] rounded-full animate-bounce opacity-75"></div>
                    <div className="size-2 bg-[#1fe06f] rounded-full animate-bounce opacity-75" style={{animationDelay: '0.2s'}}></div>
                    <div className="size-2 bg-[#1fe06f] rounded-full animate-bounce opacity-75" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Chat Input */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="flex items-center rounded-full border border-gray-300 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#1fe06f] focus-within:border-transparent">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 outline-none text-gray-700 border-none px-4 py-2"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={handleSendMessage}
              className="bg-[#1fe06f] text-[#111714] p-2 rounded-full font-medium hover:bg-[#19c761] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"/>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;