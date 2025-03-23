import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_COHERE_API_KEY;

const MiniKurt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hey there! I\'m Mini Kurt, your eco-friendly guide. Ask me anything about sustainable living or how to recycle specific items.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    
    // Clear input field
    const userInput = input;
    setInput('');
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Call to Cohere API
      const response = await axios.post(
        'https://api.cohere.ai/v1/chat',
        {
          message: userInput,
          model: 'command',
          preamble: `You are Mini Kurt, an eco-friendly AI assistant for a sustainability app called Nirvana. 
                     Your personality is inspired by Kurt Cobain - a bit rebellious, passionate about the 
                     environment, and occasionally using grunge references. Keep your responses concise.
                     You specialize in helping users with recycling information, sustainable practices, 
                     and environmental facts. If asked about music, you can mention Nirvana song references
                     while connecting them back to sustainability.`,
          chat_history: messages.map(msg => ({
            role: msg.role === 'user' ? 'USER' : 'CHATBOT',
            message: msg.content
          }))
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Add bot response
      setMessages((prev) => [...prev, { 
        role: 'bot', 
        content: response.data.text || "Looks like I'm experiencing a grunge moment. Let's try again." 
      }]);
    } catch (error) {
      console.error('Error calling Cohere API:', error);
      setMessages((prev) => [...prev, { 
        role: 'bot', 
        content: "Sorry, I'm having a bit of an existential crisis right now. Try again in a moment." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 h-96 bg-[#181818] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#333] backdrop-blur-lg animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] p-4 flex items-center">
            <div className="w-10 h-10 bg-black rounded-full mr-3 flex items-center justify-center overflow-hidden">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <div>
              <h3 className="text-black font-bold text-lg">Mini Kurt</h3>
              <p className="text-black/70 text-xs">Your eco-friendly assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`rounded-2xl py-2 px-4 max-w-[80%] ${
                    msg.role === 'user' 
                    ? 'bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black rounded-tr-none' 
                    : 'bg-[#333] text-white rounded-tl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-[#333] rounded-2xl py-2 px-4 text-white rounded-tl-none">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-[#9d81ff] animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-[#65c3e8] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#38ef7d] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#333]">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about recycling..."
                className="flex-1 bg-[#222] rounded-l-lg p-3 text-white focus:outline-none placeholder-white/40 border border-[#333]"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-r-lg p-3 flex items-center justify-center"
                disabled={isLoading}
              >
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniKurt;