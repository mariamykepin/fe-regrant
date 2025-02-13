import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Defbar from './component/Sidebar/Defbar';
import { Cards, DesktopCards } from './component/Card/cards';
import Borrow from './pages/Borrow';

const App: React.FC = () => {
  return (
    <Router>
      <div className="dashboard flex flex-col md:flex-row bg-gray-100 min-h-screen">
        <Defbar />

        <div className="content flex-grow p-4 md:p-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="header-container mb-4 md:mb-6 text-center md:text-left">
                    <p className="title text-4xl md:text-[70px] font-bold mb-2 mt-10">Offer, lend, borrow.</p>
                    <p className="desc text-lg md:text-xl text-gray-500 mt-2 md:mt-4 pr-0 md:pr-[15em]">
                      Discover what you desire in a whole new way! Barter your pre-loved items for something fresh, or buy and sell with ease and security.
                    </p>
                  </div>
                  <div className="block lg:hidden">
                    <Cards />
                  </div>
                  <div className="hidden lg:block">
                    <DesktopCards />
                  </div>
                </>
              }
            />
            <Route path="/borrow/:itemLabel" element={<Borrow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
