import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="flex flex-col w-full md:w-1/2 max-w-md">
      <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] mb-6">
        Welcome Back to Nirvana
      </h1>
      <p className="text-[#a9a9a9] text-base mb-8">
        Log in to track your recycling progress, redeem your Teen Spirit points, and continue making a positive impact on our planet.
      </p>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
          <input 
            type="email" 
            id="email" 
            className="bg-[#181818] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9d81ff]" 
            placeholder="your@email.com"
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="text-white text-sm font-medium">Password</label>
            <Link to="#" className="text-[#9d81ff] text-sm">Forgot password?</Link>
          </div>
          <input 
            type="password" 
            id="password" 
            className="bg-[#181818] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#9d81ff]" 
            placeholder="••••••••"
          />
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <input type="checkbox" id="remember" className="rounded border-[#333] bg-[#181818] text-[#9d81ff] focus:ring-[#9d81ff]"/>
          <label htmlFor="remember" className="text-[#a9a9a9] text-sm">Remember me for 30 days</label>
        </div>
        
        <button 
          type="submit" 
          className="flex cursor-pointer items-center justify-center h-12 px-6 mt-4 bg-[#9d81ff] text-[#111111] text-base font-bold rounded-xl"
        >
          Come As You Are
        </button>
        
        <div className="flex items-center gap-4 my-2">
          <div className="h-px bg-[#333] flex-1"></div>
          <span className="text-[#a9a9a9] text-sm">or continue with</span>
          <div className="h-px bg-[#333] flex-1"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 h-12 px-6 bg-[#181818] border border-[#333] text-white text-sm font-medium rounded-xl"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button 
            type="button" 
            className="flex items-center justify-center gap-2 h-12 px-6 bg-[#181818] border border-[#333] text-white text-sm font-medium rounded-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.216-.02-.217-.03-.01-.06-.01-.14-.01-.22 0-.95.43-1.99 1.03-2.68.59-.67 1.73-1.3 2.86-1.37.11.01.21.03.21.05.01.04.01.09.01.17zm4.98 15.07c-.03.59-.45 1.92-.98 2.78-.52.84-1.39 1.93-2.56 1.93-1.23 0-1.77-.79-3.26-.79-1.51 0-2.07.77-3.3.77-1.15 0-2.13-1.06-2.65-1.91-1.22-1.88-1.78-4.64-.74-6.68.53-1.01 1.52-1.77 2.58-1.77 1.04 0 1.96.76 2.91.76.96 0 1.77-.8 3.01-.8 1.08 0 2.17.67 2.7 1.84-.07.04-1.62.9-1.6 2.8.03 2.07 1.98 2.79 2.01 2.81-.02.08-.35 1.09-.92 2.16z"/>
            </svg>
            Apple
          </button>
        </div>
      </form>
      
      <p className="text-[#a9a9a9] text-sm text-center mt-8">
        Don't have an account? 
        <Link to="/signup" className="text-[#9d81ff] font-medium ml-1">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginForm;