import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import MiniKurt from '../components/Chatbot';
import axios from 'axios';

const MarketplacePage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [coinBalance, setCoinBalance] = useState(750);
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemTitle, setItemTitle] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [files, setFiles] = useState([]);
  
    var isDarkMode = true;

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
      const response = await axios.post(`https://nirvana-454711.el.r.appspot.com/buy-item/${itemId}`, {}, { headers: { "Authorization": `Bearer ${localStorage.getItem("token")}`,} 
    });
  
      alert(response.data.message);
    } catch (error) {
      console.error('Purchase failed:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Failed to buy item');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataObj = new FormData();
      formDataObj.append("title", itemTitle);
      formDataObj.append("price", itemPrice);
      formDataObj.append("category", itemCategory);
  
      for (let i = 0; i < files.length; i++) {
        formDataObj.append("images", files[i]);
      }
  
      const response = await axios.post("https://nirvana-454711.el.r.appspot.com/sell-item", formDataObj, {
        headers: { "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
         },
      });

      console.log("Item listed successfully:", response.data);
      alert("Item listed successfully!");
    } catch (error) {
      console.error("Error listing item:", error.response?.data || error.message);
      alert("Failed to list item.");
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
      console.log(response.data)
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchMyItems = async () => {
    try {
      const response = await axios.get('https://nirvana-454711.el.r.appspot.com/selling-list',{ headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` } }) ;
      setMyItems(response.data);
    } catch (err) {
      console.error(err.response?.data?.message || 'Failed to fetch items');
    } finally {
    }
  };

  const handleDelete = async (itemId) => {
    try {
        console.log(itemId);
        const response = await axios.delete(`https://nirvana-454711.el.r.appspot.com/selling-list/${itemId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } 
        });
        console.log(response)
        setMyItems((prevItems) => prevItems.filter(item => item._id !== itemId));

        console.log(response.data.message);
    } catch (err) {
        console.error(err.response?.data?.message || 'Failed to delete item');
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

        console.log(response.data);
        setCoinBalance(response.data.balance)
        setUser(response.data); 
      } catch (error) {
        console.error("Error fetching user:", error.response?.data || error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5 bg-[#121212] min-h-screen">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 mx-auto w-full">
        {/* Background effects */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#9d81ff]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#38ef7d]/10 blur-3xl"></div>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 py-8">
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Marketplace</h1>
            <p className="text-white/60 text-base font-normal leading-normal">Buy and sell upcycled products made from recycled materials</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3">
            <div className="size-8 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-black">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
            </div>
            <div>
              <p className="text-white/60 text-xs">Your Balance</p>
              <p className="text-white text-lg font-bold">{coinBalance} EcoCoins</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-white/10 mb-8">
          <div className="flex">
            <button 
              onClick={() => setActiveTab('browse')}
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'browse' ? 'text-[#9d81ff] border-b-2 border-[#9d81ff]' : 'text-white hover:text-[#9d81ff]'}`}
            >
              Browse Items
            </button>
            <button 
              onClick={() => setActiveTab('sell')}
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'sell' ? 'text-[#9d81ff] border-b-2 border-[#9d81ff]' : 'text-white hover:text-[#9d81ff]'}`}
            >
              Sell Your Items
            </button>
            <button 
              onClick={() => setActiveTab('myItems')}
              className={`px-4 py-3 text-sm font-medium ${activeTab === 'myItems' ? 'text-[#9d81ff] border-b-2 border-[#9d81ff]' : 'text-white hover:text-[#9d81ff]'}`}
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
              {["All Items", "Home Decor", "Furniture", "Accessories"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-xl text-sm ${
                    category === cat ? "bg-white/5 border-white/10 text-white" : "hover:bg-white/5 text-white/60"
                  }`}
                  onClick={() => setCategory(cat === "All Items" ? "" : cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] w-full md:w-64"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#9d81ff]/20 transition duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.imageUrls[0] || "/api/placeholder/400/400"}
                    alt={item.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    <div className="flex items-center gap-1 text-[#38ef7d] font-bold">
                      <span>{item.price}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <span>By</span>
                      <span className="text-white">{item.sellerId.firstName}</span>
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
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                    page === index + 1
                      ? "bg-white/5 border-white/10 text-white"
                      : "hover:bg-white/5 text-white/60"
                  }`}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Sell Your Items Section */}
        {activeTab === 'sell' && (
              <div className="mb-12">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-6">List Your Upcycled Item</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Item Title */}
          <div>
            <label htmlFor="itemTitle" className="block text-white text-sm font-medium mb-2">
              Item Title
            </label>
            <input
              type="text"
              id="itemTitle"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#9d81ff] focus:ring-[#9d81ff] transition-all duration-300"
              placeholder="Enter item name"
              value={itemTitle}
              onChange={(e) => setItemTitle(e.target.value)}
              required
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="itemPrice" className="block text-white text-sm font-medium mb-2">
              Price (EcoCoins)
            </label>
            <input
              type="number"
              id="itemPrice"
              min="1"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#9d81ff] focus:ring-[#9d81ff] transition-all duration-300"
              placeholder="Set your price in EcoCoins"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="itemCategory" className="block text-white text-sm font-medium mb-2">
              Category
            </label>
            <select
              id="itemCategory"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#9d81ff] focus:ring-[#9d81ff] transition-all duration-300"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="home-decor">Home Decor</option>
              <option value="furniture">Furniture</option>
              <option value="accessories">Accessories</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">Upload Images</label>
            <input type="file" multiple onChange={handleFileChange} className="text-white" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]"
          >
            List Item
          </button>
        </form>
      </div>
    </div>
        )}

        {/* My Listings Section */}
        {activeTab === 'myItems' && (
        <div className="mb-12">
          {myItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {myItems.map((item) => (
                <div key={item._id} className={`${cardBg} rounded-xl p-4 mb-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`${textColor} font-medium text-lg`}>{item.name}</h3>
                      <p className={`${textColorMuted} text-sm`}>Listed {new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-[#38ef7d] font-bold">
                        <span>{item.price}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 inline-block ml-1">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                        </svg>
                      </div>
                      <button 
                        className="text-red-500 hover:text-red-600 transition duration-300"
                        onClick={() => handleDelete(item._id)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
              <h3 className="text-white text-xl font-bold mb-2">No Items Listed Yet</h3>
              <p className="text-white/60 mb-6">You haven't listed any items for sale yet</p>
              <button 
                onClick={() => setActiveTab('sell')}
                className="py-3 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]"
              >
                Create Your First Listing
              </button>
            </div>
          )}
        </div>
      )}
      </div>

    </div>
  );
};

export default MarketplacePage;
