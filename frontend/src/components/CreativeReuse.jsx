import React from 'react';

const CreativeReuse = () => {
  const projects = [
    {
      id: 1,
      title: "Hanging Bottle Planters",
      image: "https://irepo.primecp.com/2016/05/281606/Plastic-Bottle-Hanging-Planters_Large500_ID-1665889.jpg?v=1665889",
      link: "https://www.favecrafts.com/Green-Crafting/Plastic-Bottle-Hanging-Planters",
      material: "Plastic Bottles"
    },
    {
      id: 2,
      title: "Luminous Glow Jars",
      image: "https://www.lightbulbs.com/assets/blog/62/1.jpg",
      link: "https://www.lightbulbs.com/blog/how-to-make-diy-glow-jar",
      material: "Glass Jars"
    }
  ];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-6 h-6 text-[#38ef7d]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.5L10.5 2V4.68622L7.62229 2.80199L8.02166 5.45493L4.5 4.75V7.25L8.02166 6.54507L7.62229 9.19801L10.5 7.31378V10H7.81378L9.69801 12.8777L7.04507 12.4783L7.75 16H5.25L5.95493 12.4783L3.30199 12.8777L5.18622 10H2.5L4 11.5L2.5 13H5.18622L3.30199 15.1223L5.95493 15.5217L5.25 19H7.75L7.04507 15.5217L9.69801 15.1223L7.81378 13H10.5V15.6862L7.62229 17.5699L8.02166 20.2229L4.5 19.5V22L8.02166 21.2949L7.62229 23.948L10.5 22.0638V24.5L12 23L13.5 24.5V22.0638L16.3777 23.948L15.9783 21.2949L19.5 22V19.5L15.9783 20.2229L16.3777 17.5699L13.5 15.6862V13H16.1862L18.0702 15.1223L20.7231 15.5217L20.0181 19H22.5181L21.8132 15.5217L24.4661 15.1223L22.5819 13H25.5L24 11.5L25.5 10H22.5819L24.4661 7.87766L21.8132 7.47829L22.5181 4H20.0181L20.7231 7.47829L18.0702 7.87766L16.1862 10H13.5V7.31378L16.3777 9.19801L15.9783 6.54507L19.5 7.25V4.75L15.9783 5.45493L16.3777 2.80199L13.5 4.68622V2L12 3.5Z" fill="currentColor"/>
        </svg>
        <h2 className="text-white text-2xl font-black leading-tight tracking-tight">
          Best Out of Waste
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:shadow-xl hover:shadow-[#38ef7d]/5 transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="text-[#38ef7d] text-xl font-bold">Turn Waste Into Treasures</h3>
            <p className="text-white/60">
              Don't just recycle - upcycle! Transform your waste items into useful 
              and beautiful creations that reduce your environmental footprint.
            </p>

            <div className="space-y-4 mt-2">
              <div className="flex items-start gap-3 group">
                <div className="text-[#38ef7d] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-white text-sm">Get personalized DIY project ideas based on your recycling habits and available materials</p>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="text-[#38ef7d] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-white text-sm">Follow step-by-step upcycling guides with video tutorials and community tips</p>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="text-[#38ef7d] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-white text-sm">Earn additional points and badges for completing upcycling challenges</p>
              </div>
            </div>

            <button 
              className="mt-4 py-3 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] self-start"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
                </svg>
                <span>Explore DIY Projects</span>
              </div>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {projects.map(project => (
              <a 
                href={project.link} 
                key={project.id}
                className="block rounded-lg overflow-hidden relative group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#38ef7d]/20"
              >
                <div className="relative aspect-square">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h4 className="text-white font-bold text-sm mb-1">{project.title}</h4>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#38ef7d]"></div>
                      <p className="text-white/80 text-xs">{project.material}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#38ef7d]/30 rounded-lg transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#38ef7d] animate-pulse"></div>
              <p className="text-white/60 text-xs">3,428 DIY projects completed by our community this month</p>
            </div>
            <a href="#" className="text-[#9d81ff] text-sm hover:text-[#b5a0ff] transition-colors duration-300">View Gallery</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeReuse;