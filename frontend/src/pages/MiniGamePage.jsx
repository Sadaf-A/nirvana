import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import FactsCard from '../components/FactsCard';

const MMiniGamePage = () => {
  return (
    <div className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between py-12">
          <LoginForm />
          <div className="hidden md:flex flex-col w-1/2 items-center">
            <FactsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGamePage;
