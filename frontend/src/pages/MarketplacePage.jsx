import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import MiniKurt from '../components/Chatbot';
import axios from 'axios';

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../index.css';
// import MiniKurt from '../components/Chatbot';
// import axios from 'axios';

const MarketplacePage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [coinBalance, setCoinBalance] = useState(750);
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState("");
  const [myItems, setMyItems] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const bgColor = isDarkMode ? 'bg-[#121212]' : 'bg-gray-100';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const textColorMuted = isDarkMode ? 'text-white/60' : 'text-gray-600';
  const cardBg = isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-white border border-gray-200 shadow-sm';
  const inputBg = isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-white border border-gray-300';
  const buttonHover = isDarkMode ? 'hover:bg-white/5' : 'hover:bg-gray-100';
  const activeTabBorder = isDarkMode ? 'border-[#9d81ff]' : 'border-[#9d81ff]';
  const activeTabText = isDarkMode ? 'text-[#9d81ff]' : 'text-[#9d81ff]';

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleBuyItem = async (itemId) => {
    try {
      const response = await axios.post(
        `https://nirvana-454711.el.r.appspot.com/buy-item/${itemId}`, 
        {}, 
        { 
          headers: { 
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          } 
        }
      );
      alert(response.data.message);
      // Refresh balance after purchase
      const userResponse = await axios.get("https://nirvana-454711.el.r.appspot.com/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCoinBalance(userResponse.data.balance);
      fetchItems(); // Refresh items list
    } catch (error) {
      console.error('Purchase failed:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Failed to buy item');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!itemTitle || !itemPrice || !itemCategory) {
      alert("Please fill all required fields");
      return;
    }

    if (!files || files.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", itemTitle);
      formData.append("price", itemPrice);
      formData.append("category", itemCategory);

      // Append all files
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }

      const token = localStorage.getItem("token");
      if (!token) {
        alert("You need to be logged in to list items");
        return;
      }

      const response = await axios.post(
        "https://nirvana-454711.el.r.appspot.com/sell-item", 
        formData, 
        {
          headers: { 
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      console.log("Item listed successfully:", response.data);
      alert("Item listed successfully!");
      
      // Reset form
      setItemTitle("");
      setItemPrice("");
      setItemCategory("");
      setFiles([]);
      
      // Refresh my items list
      fetchMyItems();
    } catch (error) {
      console.error("Error listing item:", error);
      let errorMessage = "Failed to list item";
      
      if (error.response) {
        errorMessage = error.response.data.message || errorMessage;
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
        errorMessage = "No response from server";
      } else {
        console.error("Error:", error.message);
      }
      
      alert(errorMessage);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get('https://nirvana-454711.el.r.appspot.com/list-items', {
        params: {
          page,
          limit: 8,
          category,
          search,
        },
      });
      setItems(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchMyItems = async () => {
    try {
      const response = await axios.get(
        'https://nirvana-454711.el.r.appspot.com/selling-list',
        { 
          headers: { 
            "Authorization": `Bearer ${localStorage.getItem("token")}` 
          } 
        }
      );
      setMyItems(response.data);
    } catch (err) {
      console.error(err.response?.data?.message || 'Failed to fetch items');
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(
        `https://nirvana-454711.el.r.appspot.com/selling-list/${itemId}`, 
        {
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          } 
        }
      );
      setMyItems((prevItems) => prevItems.filter(item => item._id !== itemId));
      alert(response.data.message);
    } catch (err) {
      console.error(err.response?.data?.message || 'Failed to delete item');
      alert(err.response?.data?.message || 'Failed to delete item');
    }
  };

  useEffect(() => {
    fetchItems();
  }, [category, search, page]);

  useEffect(() => {
    if (activeTab === 'myItems') {
      fetchMyItems();
    }
  }, [activeTab]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found, redirecting to login...");
        return;
      }

      try {
        const response = await axios.get("https://nirvana-454711.el.r.appspot.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCoinBalance(response.data.balance);
        setUser(response.data); 
        setUserId(response.data._id);
      } catch (error) {
        console.error("Error fetching user:", error.response?.data || error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={`transition-colors duration-300 ${bgColor} min-h-screen`}>
      <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 mx-auto w-full relative">
          {/* Background effects */}
          {isDarkMode && (
            <>
              <div className="fixed -top-20 -left-20 w-64 h-64 rounded-full bg-[#9d81ff]/10 blur-3xl"></div>
              <div className="fixed -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#38ef7d]/10 blur-3xl"></div>
            </>
          )}
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 py-8">
            <div>
              <svg className="w-12 h-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40C15.163 40 8 32.837 8 24C8 15.163 15.163 8 24 8Z" fill="#9d81ff"/>
                <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 16C28.418 16 32 19.582 32 24C32 28.418 28.418 32 24 32C19.582 32 16 28.418 16 24C16 19.582 19.582 16 24 16Z" fill="#65c3e8"/>
                <path d="M24 20C21.791 20 20 21.791 20 24C20 26.209 21.791 28 24 28C26.209 28 28 26.209 28 24C28 21.791 26.209 20 24 20Z" fill="#38ef7d"/>
              </svg>
              <h1 className={`${textColor} text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] flex items-center`}>
                Bleach Market
                <span className="ml-2 text-xs bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-transparent bg-clip-text font-normal">UNPLUGGED</span>
              </h1>
              <p className={`${textColorMuted} text-base font-normal leading-normal`}>Buy and sell upcycled products made from recycled materials</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className={`${cardBg} p-2 rounded-full hover:shadow-md transition-all duration-300`}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-300">
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-indigo-600">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              {/* Chatbot Toggle */}
              <button 
                onClick={toggleChatbot} 
                className={`${cardBg} p-2 rounded-full hover:shadow-md transition-all duration-300`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${isDarkMode ? 'text-[#38ef7d]' : 'text-[#9d81ff]'}`}>
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                </svg>
              </button>
              
              {/* Coin Balance */}
              <div className={`flex items-center gap-3 ${cardBg} rounded-xl px-4 py-3`}>
                <div className="size-8 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-black">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                  </svg>
                </div>
                <div>
                  <p className={`${textColorMuted} text-xs`}>Your Balance</p>
                  <p className={`${textColor} text-lg font-bold`}>{coinBalance} Spirit Coins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className={`border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'} mb-8`}>
            <div className="flex">
              <button 
                onClick={() => setActiveTab('browse')}
                className={`px-4 py-3 text-sm font-medium ${activeTab === 'browse' ? `${activeTabText} border-b-2 ${activeTabBorder}` : `${textColor} ${buttonHover}`}`}
              >
                Browse Items
              </button>
              <button 
                onClick={() => setActiveTab('sell')}
                className={`px-4 py-3 text-sm font-medium ${activeTab === 'sell' ? `${activeTabText} border-b-2 ${activeTabBorder}` : `${textColor} ${buttonHover}`}`}
              >
                Sell Your Items
              </button>
              <button 
                onClick={() => setActiveTab('myItems')}
                className={`px-4 py-3 text-sm font-medium ${activeTab === 'myItems' ? `${activeTabText} border-b-2 ${activeTabBorder}` : `${textColor} ${buttonHover}`}`}
              >
                My Listings
              </button>
            </div>
          </div>

          {/* Browse Items Section */}
          {activeTab === 'browse' && (
            <div className="mb-12">
              {/* Filters */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  <button 
                    onClick={() => setCategory('')}
                    className={`${category === '' ? 
                      `${isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-[#9d81ff]/10 border border-[#9d81ff]/20'} ${textColor}` : 
                      `${textColorMuted} ${buttonHover}`} px-4 py-2 rounded-xl text-sm transition duration-300`}
                  >
                    All Items
                  </button>
                  <button 
                    onClick={() => setCategory('home-decor')}
                    className={`${category === 'home-decor' ? 
                      `${isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-[#9d81ff]/10 border border-[#9d81ff]/20'} ${textColor}` : 
                      `${textColorMuted} ${buttonHover}`} px-4 py-2 rounded-xl text-sm transition duration-300`}
                  >
                    Home Decor
                  </button>
                  <button 
                    onClick={() => setCategory('furniture')}
                    className={`${category === 'furniture' ? 
                      `${isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-[#9d81ff]/10 border border-[#9d81ff]/20'} ${textColor}` : 
                      `${textColorMuted} ${buttonHover}`} px-4 py-2 rounded-xl text-sm transition duration-300`}
                  >
                    Furniture
                  </button>
                  <button 
                    onClick={() => setCategory('accessories')}
                    className={`${category === 'accessories' ? 
                      `${isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-[#9d81ff]/10 border border-[#9d81ff]/20'} ${textColor}` : 
                      `${textColorMuted} ${buttonHover}`} px-4 py-2 rounded-xl text-sm transition duration-300`}
                  >
                    Accessories
                  </button>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search items..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`${inputBg} rounded-xl px-4 py-2 ${textColor} text-sm focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] w-full md:w-64 transition duration-300`} 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 absolute right-3 top-3 ${textColorMuted}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.length > 0 ? (
                  items.filter((item) => item.sellerId._id !== userId).map((item) => (
                    <div key={item._id} className={`${cardBg} rounded-xl overflow-hidden hover:shadow-lg ${isDarkMode ? 'hover:shadow-[#9d81ff]/20' : 'hover:shadow-[#9d81ff]/30'} transition duration-300 group`}>
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={item.imageUrls && item.imageUrls.length > 0 ? item.imageUrls[0] : 'https://via.placeholder.com/300'} 
                          alt={item.title} 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" 
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className={`${textColor} font-medium text-lg`}>{item.title}</h3>
                          <div className="flex items-center gap-1 text-[#38ef7d] font-bold">
                            <span>{item.price}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                            </svg>
                          </div>
                        </div>
                        {/* <p className={`${textColorMuted} text-sm mb-4`}>{item.description}</p> */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-1 text-xs ${textColorMuted}">
                            <span>By</span>
                            <span className={textColor}>{item.sellerId.firstName || 'Anonymous'}</span>
                          </div>
                          <button 
                            onClick={() => handleBuyItem(item._id)}
                            className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black text-sm font-bold px-3 py-1 rounded-lg transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className={`col-span-4 text-center py-12 ${cardBg} rounded-xl`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 mx-auto ${textColorMuted} mb-4 opacity-30`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className={`${textColor} text-xl font-bold mb-2`}>No items found</h3>
                    <p className={`${textColorMuted} mb-2`}>Try adjusting your search or filters</p>
                    <button 
                      onClick={() => {setSearch(''); setCategory('');}}
                      className="py-2 px-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-medium rounded-lg hover:shadow-lg transition-all duration-300 mt-2"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {items.length > 0 && totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button 
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                          page === pageNum ? 
                            `${isDarkMode ? 'bg-white/5 backdrop-blur-lg border border-white/10' : 'bg-[#9d81ff]/10 border border-[#9d81ff]/20'} ${textColor}` : 
                            `${buttonHover} ${textColorMuted}`
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Sell Your Items Section */}
          {activeTab === 'sell' && (
    <div className="mb-12">
      <div className={`${cardBg} rounded-xl p-6 md:p-8 max-w-3xl mx-auto transition duration-300`}>
        <h2 className={`${textColor} text-2xl font-bold mb-6`}>List Your Upcycled Item</h2>
        <p className={`${textColorMuted} mb-6 text-sm italic`}>"Come As You Are" and share your upcycled creations with the world</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title field */}
          <div>
            <label htmlFor="itemTitle" className={`block ${textColor} text-sm font-medium mb-2`}>Item Title</label>
            <input 
              type="text" 
              id="itemTitle" 
              value={itemTitle}
              onChange={(e) => setItemTitle(e.target.value)}
              className={`w-full ${inputBg} rounded-xl px-4 py-4 ${textColor} focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300`} 
              placeholder="Enter item name"
              required 
            />
          </div>
          
          {/* Price field */}
          <div>
            <label htmlFor="itemPrice" className={`block ${textColor} text-sm font-medium mb-2`}>Price (Spirit Coins)</label>
            <input 
              type="number" 
              id="itemPrice" 
              min="1" 
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className={`w-full ${inputBg} rounded-xl px-4 py-4 ${textColor} focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300`} 
              placeholder="Set your price in Spirit Coins"
              required 
            />
          </div>
          
          {/* Category field */}
          <div>
            <label htmlFor="itemCategory" className={`block ${textColor} text-sm font-medium mb-2`}>Category</label>
            <select 
              id="itemCategory" 
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className={`w-full ${inputBg} rounded-xl px-4 py-4 ${textColor} focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300`} 
              required
            >
              <option value="">Select a category</option>
              <option value="home-decor">Home Decor</option>
              <option value="furniture">Furniture</option>
              <option value="accessories">Accessories</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          {/* Image upload */}
          <div>
            <label className={`block ${textColor} text-sm font-medium mb-2`}>Upload Images</label>
            <div className={`border-2 border-dashed ${isDarkMode ? 'border-white/10' : 'border-gray-300'} rounded-xl p-8 text-center`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 mx-auto ${textColorMuted} mb-4`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className={`${textColorMuted} text-sm mb-2`}>
                <label htmlFor="file-upload" className={`${textColor} font-medium cursor-pointer hover:underline`}>
                  Click to upload
                </label>
                <input 
                  id="file-upload" 
                  type="file" 
                  multiple 
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
              </p>
              <p className={`text-xs ${textColorMuted}`}>Up to 5 images (JPEG, PNG, GIF)</p>
              {files.length > 0 && (
                <p className={`text-sm ${textColor} mt-2`}>{files.length} file(s) selected</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              List Item
            </button>
          </div>
        </form>
      </div>
    </div>
  )}


          {/* My Listings Section */}
          {activeTab === 'myItems' && (
            <div className="mb-12">
              <div className={`${cardBg} rounded-xl p-6 md:p-8 max-w-3xl mx-auto transition duration-300`}>
                <h2 className={`${textColor} text-2xl font-bold mb-6`}>My Listings</h2>
                <p className={`${textColorMuted} mb-6 text-sm italic`}>"All Apologies" for any items not sold yet. Keep the eco-spirit alive!</p>
                
                {myItems.length > 0 ? (
                  myItems.map((item) => (
                    <div key={item._id} className={`${cardBg} rounded-xl p-4 mb-4`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`${textColor} font-medium text-lg`}>{item.title}</h3>
                          <p className={`${textColorMuted} text-sm`}>
                            Listed on {new Date(item.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-[#38ef7d] font-bold">
                            <span>{item.price}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 inline-block ml-1">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                            </svg>
                          </div>
                          <button 
                            onClick={() => handleDelete(item._id)}
                            className="text-red-500 hover:text-red-600 transition duration-300"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      {item.images && item.images.length > 0 && (
                        <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                          {item.images.map((image, index) => (
                            <img 
                              key={index} 
                              src={image} 
                              alt={`${item.title} ${index + 1}`} 
                              className="h-20 w-20 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className={`text-center py-12 ${cardBg} rounded-xl`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 mx-auto ${textColorMuted} mb-4 opacity-30`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className={`${textColor} text-xl font-bold mb-2`}>No listings found</h3>
                    <p className={`${textColorMuted} mb-2`}>Start selling your upcycled items today!</p>
                    <button 
                      onClick={() => setActiveTab('sell')}
                      className="py-2 px-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-medium rounded-lg hover:shadow-lg transition-all duration-300 mt-2"
                    >
                      List an Item
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Chatbot */}
          {showChatbot && (
            <div className="fixed bottom-4 right-4 z-50">
              <MiniKurt />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;