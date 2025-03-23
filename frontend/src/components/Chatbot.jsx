import React, { useState } from 'react';

const MiniKurt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    setInput('');

    // Simulate bot response (replace with Cohere API call)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', content: `You said: "${input}"` }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      >
        <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-96 h-[500px] bg-[#181818] rounded-2xl border border-[#333] shadow-2xl flex flex-col mt-4">
          {/* Header */}
          <div className="p-4 border-b border-[#333]">
            <h2 className="text-lg font-bold">Mini Kurt</h2>
            <p className="text-sm text-white/60">Your eco-friendly assistant</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black' : 'bg-[#333] text-white'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#333]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-[#333] rounded-lg p-2 text-white focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black p-2 rounded-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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