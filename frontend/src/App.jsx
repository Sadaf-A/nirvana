import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from "./pages/Homepage.jsx";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WasteSortPage from './pages/WasteSortPage';
import './index.css'; // or './App.css'
import './App.css';
import MarketplacePage from './pages/MarketplacePage';
import MiniGamePage from './pages/MiniGamePage';

function App() {
  return (
    <Router>
      <div 
        className="relative flex size-full min-h-screen flex-col bg-[#0e0e0e] dark group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
             <Route path="/wastesort" element={<WasteSortPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/minigame" element={<MiniGamePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;