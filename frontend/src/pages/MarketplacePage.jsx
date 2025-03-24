import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const MarketplacePage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [coinBalance, setCoinBalance] = useState(750);

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
                <button className="bg-white/5 backdrop-blur-lg border border-white/10 text-white px-4 py-2 rounded-xl text-sm">All Items</button>
                <button className="hover:bg-white/5 text-white/60 px-4 py-2 rounded-xl text-sm">Home Decor</button>
                <button className="hover:bg-white/5 text-white/60 px-4 py-2 rounded-xl text-sm">Furniture</button>
                <button className="hover:bg-white/5 text-white/60 px-4 py-2 rounded-xl text-sm">Accessories</button>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search items..." 
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] w-full md:w-64" 
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute right-3 top-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#9d81ff]/20 transition duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img src="/api/placeholder/400/400" alt="Recycled Glass Vase" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium text-lg">Recycled Glass Vase</h3>
                    <div className="flex items-center gap-1 text-[#38ef7d] font-bold">
                      <span>125</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Beautiful vase handcrafted from recycled glass bottles.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <span>By</span>
                      <span className="text-white">GreenArtisan</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black text-sm font-bold px-3 py-1 rounded-lg transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300">Buy Now</button>
                  </div>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#9d81ff]/20 transition duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img src="/api/placeholder/400/400" alt="Upcycled Plant Stand" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium text-lg">Upcycled Plant Stand</h3>
                    <div className="flex items-center gap-1 text-[#38ef7d] font-bold">
                      <span>240</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Stylish plant stand made from recycled wood and metal.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <span>By</span>
                      <span className="text-white">EcoFurnish</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black text-sm font-bold px-3 py-1 rounded-lg transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300">Buy Now</button>
                  </div>
                </div>
              </div>
              
              {/* Product 3 */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#9d81ff]/20 transition duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img src="/api/placeholder/400/400" alt="Recycled Fabric Tote" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium text-lg">Recycled Fabric Tote</h3>
                    <div className="flex items-center gap-1 text-[#38ef7d] font-bold">
                      <span>85</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Durable tote bag made from recycled fabrics and materials.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <span>By</span>
                      <span className="text-white">ThreadRevive</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black text-sm font-bold px-3 py-1 rounded-lg transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300">Buy Now</button>
                  </div>
                </div>
              </div>
              
              {/* Product 4 */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#9d81ff]/20 transition duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img src="/api/placeholder/400/400" alt="Bottle Cap Art" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-medium text-lg">Bottle Cap Art</h3>
                    <div className="flex items-center gap-1 text-[#38ef7d] font-bold">
                      <span>175</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Creative wall art made from upcycled bottle caps.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <span>By</span>
                      <span className="text-white">CapCreations</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black text-sm font-bold px-3 py-1 rounded-lg transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 text-white">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-white/60">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-white/60">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-white/60">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sell Your Items Section */}
        {activeTab === 'sell' && (
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
              <h2 className="text-white text-2xl font-bold mb-6">List Your Upcycled Item</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="itemTitle" className="block text-white text-sm font-medium mb-2">Item Title</label>
                  <div className="relative group transition-all duration-300">
                    <input 
                      type="text" 
                      id="itemTitle" 
                      className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
                      placeholder="Enter item name"
                      required 
                    />
                    <label 
                      htmlFor="itemTitle" 
                      className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
                    >
                      Enter item name
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="itemPrice" className="block text-white text-sm font-medium mb-2">Price (EcoCoins)</label>
                  <div className="relative group transition-all duration-300">
                    <input 
                      type="number" 
                      id="itemPrice" 
                      min="1" 
                      className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
                      placeholder="Set your price in EcoCoins"
                      required 
                    />
                    <label 
                      htmlFor="itemPrice" 
                      className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
                    >
                      Set your price in EcoCoins
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="itemCategory" className="block text-white text-sm font-medium mb-2">Category</label>
                  <select 
                    id="itemCategory" 
                    className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300" 
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="home-decor">Home Decor</option>
                    <option value="furniture">Furniture</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Upload Images</label>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-white/60 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-white/60 mb-2">Drag and drop your images here, or</p>
                    <button type="button" className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black text-sm font-bold px-4 py-2 rounded-lg transform hover:scale-[1.01] active:scale-[0.98] transition-all duration-300">Browse Files</button>
                  </div>
                </div>
                
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplacePage;