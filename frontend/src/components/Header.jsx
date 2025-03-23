import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#333] px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <Logo />
        <Link to="/" className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Nirvana</Link>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-white text-sm font-medium leading-normal text-[#9d81ff] hover:text-[#c4b0ff]" to="/wastesort">Nevermind Waste</Link>
          <Link className="text-white text-sm font-medium leading-normal text-[#9d81ff] hover:text-[#c4b0ff]" to="/marketplace">Bleach Market</Link>
          <Link className="text-white text-sm font-medium leading-normal text-[#9d81ff] hover:text-[#c4b0ff]" to="/minigame">In Bloom & Learn</Link>
          <Link className="text-white text-sm font-medium leading-normal text-[#9d81ff] border-b-2 border-[#9d81ff] pb-1" to="/login">Lithium Login</Link>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#9d81ff] text-[#111111] text-sm font-bold leading-normal tracking-[0.015em]">
          <Link to="/signup"><span className="truncate">Come As You Are</span></Link>
        </button>
      </div>
    </header>
  );
};

export default Header;