import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 p-2 flex justify-between items-center">
      <div className="flex items-center">
        {/* <img 
          src="/radaptive-logo.png" 
          alt="Radaptive Logo" 
          className="h-8 mr-4" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/120x30?text=Radaptive";
          }}
        /> */}
        <p>Radaptive</p>
        <h1 className="text-xl font-bold">Service Directory</h1>
      </div>
      <div className="flex items-center text-sm">
        <span>Bala Ganesh</span>
        <span className="mx-2">|</span>
        <a href="#" className="text-blue-600 hover:underline">Preferences</a>
        <span className="mx-2">|</span>
        <span>GMT</span>
        <span className="mx-2">|</span>
        <a href="#" className="text-blue-600 hover:underline">Logout</a>
      </div>
    </header>
  );
};

export default Header;