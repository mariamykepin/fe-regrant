import React from 'react';
import './App.css';
import Defbar from './component/Sidebar/Defbar'; 
import Cards from './component/Card/cards';

const App: React.FC = () => {
  return (
    <div className="dashboard flex bg-gray-100 min-h-screen"> {/* min-h-screen ditambahkan */}
      <div className="navbar w-100 flex-grow">
        <Defbar/>
      </div>

      <div className="content flex-grow pl-15 p-6">
        <div className="header-container mb-6"> {/* Kontainer untuk header */}
            <div className="header pl-0 pt-6"> {/* Header dipisahkan */}
              <p className="title text-[70px] font-bold mb-2">Offer, lend, borrow.</p>
              <p className="desc text-xl text-gray-500 mt-4 pr-[15em]">Discover what you desire in a whole new way! Barter your pre-loved items for something fresh, or buy and sell with ease and security.</p>
            </div>
        </div>

        <div className="search-bar flex mb-6">
          <input type="text" placeholder="Search an Item" className="border border-gray-300 rounded-l-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="searchbutt bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-none ">Search</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2">Add</button>
        </div>

        <div className="flex mb-6">
          <select className="border border-gray-300 rounded-md px-4 py-2 mr-2">
            <option>Item label: All</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2">
            <option>Distance: All</option>
          </select>
        </div>

        <div>
          <Cards/>
        </div>

      </div>
    </div>
  );
};

export default App;