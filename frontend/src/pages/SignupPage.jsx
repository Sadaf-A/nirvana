import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import kurtImage from "../assets/kurt-2.jpeg";
import axios from 'axios';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://nirvana-454711.el.r.appspot.com/signup", {firstName, lastName, email, password}, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex flex-col w-full md:w-1/2 max-w-md">
      <div className="mb-8">
        <svg className="w-12 h-12 mb-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40C15.163 40 8 32.837 8 24C8 15.163 15.163 8 24 8Z" fill="#9d81ff"/>
          <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 16C28.418 16 32 19.582 32 24C32 28.418 28.418 32 24 32C19.582 32 16 28.418 16 24C16 19.582 19.582 16 24 16Z" fill="#65c3e8"/>
          <path d="M24 20C21.791 20 20 21.791 20 24C20 26.209 21.791 28 24 28C26.209 28 28 26.209 28 24C28 21.791 26.209 20 24 20Z" fill="#38ef7d"/>
        </svg>
        <h1 className="text-white text-4xl font-black leading-tight tracking-tight mb-2">
          Join Nirvana
        </h1>
        <p className="text-white/60 text-lg mb-2">
          Create your account today
        </p>
        <p className="text-white/60 text-sm mb-6">
          Start your journey to a cleaner planet
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <div className="relative group transition-all duration-300 w-1/2">
              <input 
                type="text" 
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
                placeholder="First Name"
                required
              />
              <label 
                htmlFor="firstName" 
                className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
              >
                First Name
              </label>
            </div>
            
            <div className="relative group transition-all duration-300 w-1/2">
              <input 
                type="text" 
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
                placeholder="Last Name"
                required
              />
              <label 
                htmlFor="lastName" 
                className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
              >
                Last Name
              </label>
            </div>
          </div>
          
          <div className="relative group transition-all duration-300">
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
              placeholder="Email"
              required
            />
            <label 
              htmlFor="email" 
              className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
            >
              Email
            </label>
          </div>
          
          <div className="relative group transition-all duration-300">
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
              placeholder="Password"
              required
            />
            <label 
              htmlFor="password" 
              className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
            >
              Password
            </label>
          </div>
          
          <div className="relative group transition-all duration-300">
            <input 
              type="password" 
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#9d81ff] focus:ring-1 focus:ring-[#9d81ff] transition-all duration-300 placeholder-transparent peer" 
              placeholder="Confirm Password"
              required
            />
            <label 
              htmlFor="confirmPassword" 
              className="absolute left-4 -top-2.5 px-1 text-sm text-white/60 bg-[#121212] peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#9d81ff] transition-all duration-200"
            >
              Confirm Password
            </label>
          </div>
          
          <p className="text-white/60 text-xs mt-1">
            Must be at least 8 characters with a mix of letters, numbers and symbols
          </p>
        </div>
        
        <div className="flex items-start gap-3 mt-1">
          <div className="relative">
            <input 
              type="checkbox" 
              id="terms" 
              checked={termsAgreed}
              onChange={() => setTermsAgreed(!termsAgreed)}
              className="sr-only"
            />
            <div 
              onClick={() => setTermsAgreed(!termsAgreed)}
              className={`w-5 h-5 rounded ${termsAgreed ? 'bg-gradient-to-r from-[#9d81ff] to-[#38ef7d]' : 'bg-white/10'} cursor-pointer transition-colors duration-300 flex items-center justify-center`}
            >
              {termsAgreed && (
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              )}
            </div>
          </div>
          <label htmlFor="terms" className="text-white/60 text-sm cursor-pointer">
            I agree to the <Link to="#" className="text-[#9d81ff] hover:text-[#b5a0ff] transition-colors duration-300">Terms of Service</Link> and <Link to="#" className="text-[#9d81ff] hover:text-[#b5a0ff] transition-colors duration-300">Privacy Policy</Link>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="mt-6 py-4 px-6 bg-gradient-to-r from-[#9d81ff] to-[#38ef7d] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#9d81ff]/20 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Create Account
        </button>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-white/40 text-sm px-2">or continue with</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>
        
        <div className="flex gap-3">
          <button 
            type="button" 
            className="flex items-center justify-center gap-3 py-2 px-3 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300 w-1/2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          
          <button 
            type="button" 
            className="flex items-center justify-center gap-3 py-2 px-3 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300 w-1/2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.216-.02-.217-.03-.01-.06-.01-.14-.01-.22 0-.95.43-1.99 1.03-2.68.59-.67 1.73-1.3 2.86-1.37.11.01.21.03.21.05.01.04.01.09.01.17zm4.98 15.07c-.03.59-.45 1.92-.98 2.78-.52.84-1.39 1.93-2.56 1.93-1.23 0-1.77-.79-3.26-.79-1.51 0-2.07.77-3.3.77-1.15 0-2.13-1.06-2.65-1.91-1.22-1.88-1.78-4.64-.74-6.68.53-1.01 1.52-1.77 2.58-1.77 1.04 0 1.96.76 2.91.76.96 0 1.77-.8 3.01-.8 1.08 0 2.17.67 2.7 1.84-.07.04-1.62.9-1.6 2.8.03 2.07 1.98 2.79 2.01 2.81-.02.08-.35 1.09-.92 2.16z"/>
            </svg>
            Apple
          </button>
        </div>
      </form>
      
      <p className="text-white/60 text-center mt-8">
        Already have an account? 
        <Link to="/login" className="text-[#9d81ff] font-medium ml-1 hover:text-[#b5a0ff] transition-colors duration-300">Welcome Back</Link>
      </p>
    </div>
  );
};

// Benefits card component
const BenefitsCard = () => {
  return (
    <div className="bg-[#181818] rounded-2xl p-6 border border-[#333] w-full max-w-lg backdrop-blur-lg">
      <div className="h-56 bg-cover bg-center rounded-lg mb-6 overflow-hidden group">
        <img 
          src={kurtImage} 
          alt="Nirvana recycling benefits"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <h3 className="text-[#9d81ff] text-xl font-bold mb-4">Why Join Nirvana?</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3 group">
          <div className="text-[#9d81ff] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white text-sm">Get rewarded for every piece of waste you properly sort and recycle - earning points.</p>
        </div>
        
        <div className="flex items-start gap-3 group">
          <div className="text-[#9d81ff] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white text-sm">Use our AI-powered waste identification to easily determine how to properly dispose of any item.</p>
        </div>
        
        <div className="flex items-start gap-3 group">
          <div className="text-[#9d81ff] mt-1 transform group-hover:rotate-[360deg] transition-transform duration-500">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <p className="text-white text-sm">Join a community of like-minded individuals committed to making our planet cleaner one recycled item at a time.</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[#333]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#38ef7d] animate-pulse"></div>
            <p className="text-white/60 text-xs">9,782 people joined this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignupPage = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5 bg-[#121212] min-h-screen">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between py-12 relative">
          {/* Background effects */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#9d81ff]/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#38ef7d]/10 blur-3xl"></div>
          
          <SignupForm />
          <div className="hidden md:flex flex-col w-1/2 items-center">
            <BenefitsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;