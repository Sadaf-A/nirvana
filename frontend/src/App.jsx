import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './index.css'; // or './App.css'
// import WasteSortPage from './pages/WasteSortPage';
// import MarketplacePage from './pages/MarketplacePage';
// import MiniGamePage from './pages/MiniGamePage';
import HomePage from './pages/HomePage';

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
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* <Route path="/wastesort" element={<WasteSortPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/minigame" element={<MiniGamePage />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;