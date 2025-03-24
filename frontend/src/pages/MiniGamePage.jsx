import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Star, Clock, Zap, Heart, Trash2, Droplet, Leaf } from 'lucide-react';

// Game Card Component for reusability
const GameCard = ({ title, description, instructions, benefits, iframeUrl, icon, color }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] w-full backdrop-blur-lg mb-8 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#9d81ff]/20">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <h2 className="text-white text-2xl font-bold leading-tight">{title}</h2>
        <button 
          onClick={() => setLiked(!liked)}
          className="ml-auto p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <Heart className={`w-5 h-5 ${liked ? 'text-pink-500 fill-pink-500' : 'text-white/40'}`} />
        </button>
      </div>
      
      <p className="text-white/70 text-base font-normal leading-normal mb-6">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-3 py-1 bg-[#9d81ff]/20 text-[#9d81ff] rounded-full text-xs flex items-center gap-1">
          <Users className="w-3 h-3" />
          {Math.floor(Math.random() * 100) + 400} playing
        </span>
        <span className="px-3 py-1 bg-[#38ef7d]/20 text-[#38ef7d] rounded-full text-xs flex items-center gap-1">
          <Star className="w-3 h-3" />
          {(Math.random() * 1 + 4).toFixed(1)} stars
        </span>
        <span className="px-3 py-1 bg-[#65c3e8]/20 text-[#65c3e8] rounded-full text-xs flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {Math.floor(Math.random() * 5) + 2} min
        </span>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-[#9d81ff] mb-6 hover:text-[#b5a0ff] transition-colors duration-300"
      >
        <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 animate-fadeIn">
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold leading-tight">How to Play</h3>
            <ul className="text-[#9eb7a9] space-y-2">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#38ef7d] font-bold">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-bold leading-tight">Benefits</h3>
            <ul className="text-[#9eb7a9] space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#38ef7d] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <div className="relative w-full overflow-hidden rounded-xl" style={{ height: "400px" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none"></div>
        <iframe 
          src={iframeUrl}
          className="w-full h-full" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-white text-xs z-20 flex items-center gap-1">
          <Zap className="w-3 h-3 text-[#38ef7d]" /> 
          {Math.floor(Math.random() * 500) + 500} eco-points
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-[#333] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#38ef7d] animate-pulse"></div>
          <p className="text-white/60 text-xs">Players online: {Math.floor(Math.random() * 1000) + 500}</p>
        </div>
        <button 
          className="py-2 px-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Play Full Screen
        </button>
      </div>
    </div>
  );
};

// Improved Nirvana quote component with visual enhancement
const NirvanaQuote = () => {
  const quotes = [
    "Come as you are, sort as you should.",
    "Here we are now, eco-tainers.",
    "Recycling is so refraining, yeah yeah.",
    "With the lights out, it's sustainable.",
    "Territorial pissings? No thanks, we're composting.",
    "I'm so happy, 'cause today I found my waste goes in a bin.",
    "Nevermind the landfill, here's recycling.",
    "All the trees we planted go into one basket.",
    "Oh well, whatever, never litter.",
    "A mulatto, an albino, a mosquito, my libido... all support going green."
  ];
  
  return (
    <div className="text-white/90 text-center italic mb-12 px-8 py-6 bg-gradient-to-r from-[#9d81ff]/20 to-[#38ef7d]/20 backdrop-blur-lg border border-white/10 rounded-xl relative overflow-hidden">
      <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#9d81ff]/20 blur-2xl"></div>
      <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[#38ef7d]/20 blur-2xl"></div>
      <div className="text-xl font-medium relative z-10">"{quotes[Math.floor(Math.random() * quotes.length)]}"</div>
      <div className="mt-2 text-sm text-white/60">— Kurt Cobain, Eco Advocate (in an alternate universe)</div>
    </div>
  );
};

// New Leaderboard Component
const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "EcoKurt", avatar: "K", score: 12450, badges: 8 },
    { rank: 2, name: "GreenDave", avatar: "D", score: 10980, badges: 7 },
    { rank: 3, name: "RecycleKrist", avatar: "K", score: 9870, badges: 6 },
    { rank: 4, name: "ComposterPat", avatar: "P", score: 8740, badges: 5 },
    { rank: 5, name: "ZeroWasteChad", avatar: "C", score: 7650, badges: 4 },
    { rank: 6, name: "EarthAngel", avatar: "E", score: 6540, badges: 4 },
    { rank: 7, name: "TreeHugger92", avatar: "T", score: 5430, badges: 3 },
  ];

  const [activeTab, setActiveTab] = useState("weekly");

  return (
    <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] w-full backdrop-blur-lg mb-12 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#9d81ff]/20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6 text-[#FFD700]" />
          <h2 className="text-white text-xl font-bold">Eco Champions</h2>
        </div>
        <div className="flex gap-2 bg-[#222] rounded-lg p-1">
          <button 
            className={`px-3 py-1 rounded-md text-sm transition-all ${activeTab === 'daily' ? 'bg-[#333] text-white' : 'text-white/50 hover:text-white'}`}
            onClick={() => setActiveTab('daily')}
          >
            Daily
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-sm transition-all ${activeTab === 'weekly' ? 'bg-[#333] text-white' : 'text-white/50 hover:text-white'}`}
            onClick={() => setActiveTab('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-sm transition-all ${activeTab === 'monthly' ? 'bg-[#333] text-white' : 'text-white/50 hover:text-white'}`}
            onClick={() => setActiveTab('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>

      {leaderboardData.map((player, index) => (
        <div key={index} className={`flex items-center gap-4 p-3 rounded-xl mb-2 ${index < 3 ? 'bg-gradient-to-r from-[#9d81ff]/10 to-[#38ef7d]/10' : 'hover:bg-white/5'} transition-colors`}>
          <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold 
            ${index === 0 ? 'bg-[#FFD700]/20 text-[#FFD700]' : 
              index === 1 ? 'bg-[#C0C0C0]/20 text-[#C0C0C0]' : 
                index === 2 ? 'bg-[#CD7F32]/20 text-[#CD7F32]' : 
                  'bg-[#333] text-white/70'}`}>
            {player.rank}
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
            ${index === 0 ? 'bg-gradient-to-br from-[#9d81ff] to-[#38ef7d]' : 
              index === 1 ? 'bg-gradient-to-br from-[#65c3e8] to-[#38ef7d]' : 
                index === 2 ? 'bg-gradient-to-br from-[#9d81ff] to-[#65c3e8]' : 
                  'bg-[#333]'}`}>
            {player.avatar}
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <span className="text-white font-medium">{player.name}</span>
              {index < 3 && (
                <svg className={`w-4 h-4 ml-1 ${index === 0 ? 'text-[#FFD700]' : index === 1 ? 'text-[#C0C0C0]' : 'text-[#CD7F32]'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <div className="flex">
                {[...Array(Math.min(player.badges, 5))].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] -ml-1 first:ml-0"></div>
                ))}
              </div>
              {player.badges > 5 && <span>+{player.badges - 5}</span>}
              <span>badges</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#38ef7d] font-bold">{player.score.toLocaleString()}</div>
            <div className="text-white/60 text-xs">eco-points</div>
          </div>
        </div>
      ))}

      <div className="mt-4 flex justify-center">
        <button className="text-[#9d81ff] text-sm hover:text-[#b5a0ff] transition-colors">
          View Full Leaderboard
        </button>
      </div>
    </div>
  );
};

// Featured Game Banner
const FeaturedGameBanner = () => {
  return (
    <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-12 group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#9d81ff]/70 to-[#38ef7d]/70 z-10"></div>
      <div className="absolute inset-0 bg-[url('/api/placeholder/1200/400')] bg-cover bg-center"></div>
      <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500"></div>
      
      <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
        <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 w-full md:max-w-md">
          <div className="mb-2 flex items-center gap-2">
            <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
            <span className="bg-[#38ef7d]/20 text-[#38ef7d] text-xs px-2 py-1 rounded flex items-center gap-1">
              <Zap className="w-3 h-3" /> 2X POINTS
            </span>
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">Nevermind The Pollution</h2>
          <p className="text-white/70 mb-4">Take on the challenge to clean up polluted waters and save marine life in this immersive eco-adventure.</p>
          <button className="py-2 px-4 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Eco Badge Component
const EcoBadges = () => {
  const badges = [
    { name: "Waste Warrior", icon: <Trash2 className="w-5 h-5" />, level: 3, progress: 75 },
    { name: "Water Protector", icon: <Droplet className="w-5 h-5" />, level: 2, progress: 40 },
    { name: "Green Thumb", icon: <Leaf className="w-5 h-5" />, level: 1, progress: 90 },
  ];
  
  return (
    <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] w-full backdrop-blur-lg mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-6 h-6 text-[#FFD700]" />
        <h2 className="text-white text-xl font-bold">Your Eco Badges</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="bg-[#222] rounded-xl p-4 border border-[#333]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9d81ff]/20 to-[#38ef7d]/20 flex items-center justify-center text-white">
                {badge.icon}
              </div>
              <div>
                <div className="text-white font-medium">{badge.name}</div>
                <div className="text-[#9d81ff] text-xs">Level {badge.level}</div>
              </div>
            </div>
            <div className="w-full bg-[#333] rounded-full h-2 mb-1">
              <div 
                className="bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] h-2 rounded-full" 
                style={{ width: `${badge.progress}%` }}
              ></div>
            </div>
            <div className="text-white/60 text-xs text-right">{badge.progress}% to Level {badge.level + 1}</div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-[#9d81ff] border border-[#9d81ff]/30 rounded-xl hover:bg-[#9d81ff]/10 transition-colors duration-300">
        View All Badges
      </button>
    </div>
  );
};

// Main Component
const MiniGamePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const games = [
    {
      title: "Polly Waste Sorter",
      description: "Sort trash like you sort your feelings. Drop different types of waste into the correct recycling bins to earn points and save the environment.",
      instructions: [
        "Identify the waste item that appears on screen.",
        "Select the correct bin (Blue, Yellow, Green, Grey)",
        "Earn points for correct answers and learn why items belong in specific bins",
        "Race against the clock to improve your eco-awareness score!"
      ],
      benefits: [
        "Learn proper recycling practices in a fun, interactive way",
        "Understand the environmental impact of proper waste sorting",
        "Compete with friends and family to improve recycling habits",
        "Earn eco-points that can be redeemed for rewards in the Nirvana app"
      ],
      iframeUrl: "https://sdgsgames.com/games/juego_Reciclaje/home.html",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd"></path>
          <path d="M6 12A2 2 0 018 10h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z"></path>
        </svg>
      ),
      color: "bg-gradient-to-br from-[#9d81ff] to-[#65c3e8]",
      category: "Recycling"
    },
    {
      title: "Come As You Are Memory",
      description: "Match card pairs while learning about the Sustainable Development Goals! Test your memory while making an impact.",
      instructions: [
        "Flip two cards at a time to find matching pairs.",
        "Pay close attention and remember card positions.",
        "Complete the game in the shortest time possible.",
        "Race against the clock to improve your eco-awareness score!"
      ],
      benefits: [
        "Learn about sustainable development in a fun, interactive way",
        "Improve memory and cognitive skills",
        "Compete with friends and family to improve sustainable habits",
        "Earn eco-points that can be redeemed for rewards in the Nirvana app"
      ],
      iframeUrl: "https://sdgsgames.com/games/memory/memory1/index.html",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
        </svg>
      ),
      color: "bg-gradient-to-br from-[#38ef7d] to-[#65c3e8]",
      category: "Sustainability"
    },
    {
      title: "Heart-Shaped Forest",
      description: "Keep our forests clean! Explore different levels and pick up trash to protect nature and wildlife.",
      instructions: [
        "Explore different difficulty levels for a challenge.",
        "Click on the rubbish bags to collect them.",
        "Keep the forest clean and complete the task.",
        "Race against the clock to improve your eco-awareness score!"
      ],
      benefits: [
        "Raises environmental awareness and responsibility",
        "Improves hand-eye coordination and reflexes",
        "Encourages a sense of teamwork and nature conservation",
        "Earn eco-points that can be redeemed for rewards in the Nirvana app"
      ],
      iframeUrl: "https://sdgsgames.com/games/limpia_el_bosque/index.html",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      ),
      color: "bg-gradient-to-br from-[#9d81ff] to-[#38ef7d]",
      category: "Climate"
    }
    // {
    //   title: "In Bloom Garden",
    //   description: "Plant and grow your own virtual garden while learning about sustainable agriculture and plant care techniques.",
    //   instructions: [
    //     "Select different seeds to plant in your garden plot",
    //     "Learn proper watering and care techniques for each plant type",
    //     "Harvest your crops when they're ready and trade for new seeds",
    //     "Defend your garden from pests using eco-friendly methods"
    //   ],
    //   benefits: [
    //     "Learn about sustainable gardening and agriculture practices",
    //     "Understand plant life cycles and growing requirements",
    //     "Discover the importance of biodiversity in ecosystems",
    //     "Earn eco-points that can be redeemed for rewards in the Nirvana app"
    //   ],
    //   iframeUrl: "https://sgdsfarmgame.com/farm",
    //   icon: (
    //     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //       <path fillRule="evenodd" d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.992 6.992 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
    //     </svg>
    //   ),
    //   color: "bg-gradient-to-br from-[#65c3e8] to-[#38ef7d]",
    //   category: "Gardening"
    // }
  ];

  const categories = ["All", "Recycling", "Sustainability", "Climate", "Gardening"];

  const filteredGames = activeCategory === "All" 
    ? games 
    : games.filter(game => game.category === activeCategory);

  // Simulate loading user stats 
  const [userStats, setUserStats] = useState(null);
  
  useEffect(() => {
    // Simulate API call to get user stats
    const loadStats = () => {
      setTimeout(() => {
        setUserStats({
          ecoPoints: 7845,
          gamesPlayed: 23,
          badges: 5,
          ranking: 42
        });
      }, 1000);
    };
    
    loadStats();
  }, []);

  return (
    <div className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5 bg-gradient-to-br from-[#121212] to-[#1a1a22] min-h-screen">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <div className="pt-12 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Eco-Games</h1>
          <p className="text-white/70">Play fun and educational games to learn about sustainability, recycling, and environmental conservation. Earn eco-points, unlock badges, and climb the leaderboard!</p>
        </div>

        {/* User Stats Section */}
        {userStats ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-[#181818] rounded-2xl p-4 border border-[#333]">
              <div className="text-white/60 text-sm">Eco Points</div>
              <div className="text-[#38ef7d] text-2xl font-bold">{userStats.ecoPoints.toLocaleString()}</div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-4 border border-[#333]">
              <div className="text-white/60 text-sm">Games Played</div>
              <div className="text-[#9d81ff] text-2xl font-bold">{userStats.gamesPlayed}</div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-4 border border-[#333]">
              <div className="text-white/60 text-sm">Badges Earned</div>
              <div className="text-[#65c3e8] text-2xl font-bold">{userStats.badges}</div>
            </div>
            <div className="bg-[#181818] rounded-2xl p-4 border border-[#333]">
              <div className="text-white/60 text-sm">Global Ranking</div>
              <div className="text-[#FFD700] text-2xl font-bold">#{userStats.ranking}</div>
            </div>
          </div>
        ) : (
          <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] mb-12">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-[#333] rounded w-3/4"></div>
                <div className="h-4 bg-[#333] rounded"></div>
                <div className="h-4 bg-[#333] rounded w-5/6"></div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Game Banner */}
        <FeaturedGameBanner />

        {/* Nirvana Quote */}
        <NirvanaQuote />

        {/* Game Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black"
                  : "bg-[#222] text-white/70 hover:bg-[#333] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Game Cards */}
        <div className="grid grid-cols-1 gap-8">
          {filteredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        {/* Leaderboard Section */}
        <Leaderboard />

        {/* Eco Badges Section */}
        <EcoBadges />
      </div>
    </div>
  );
};

export default MiniGamePage;