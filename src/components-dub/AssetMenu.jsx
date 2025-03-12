import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const AssetMenu = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: 1, title: 'All Assets - received by FYI' },
    { id: 2, title: 'All Assets - received by Jamf' },
    { id: 3, title: 'All Assets - received by CDW' },
    { id: 4, title: 'All Assets - received by T2' },
    { id: 5, title: 'All Assets - received' },
    { id: 6, title: 'All Assets - Available' },
    { id: 7, title: 'All Assets - Employee Offboarding' },
    { id: 8, title: 'All Assets - Parked' },
    { id: 9, title: 'Advanced Search' }
  ];

  return (
    <div className="border-b border-gray-300">
      <div 
        className="bg-blue-700 text-white p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="font-bold">Asset Menu</h2>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      
      {isExpanded && (
        <div className="bg-gray-200">
          <ul>
            {menuItems.map(item => (
              <li 
                key={item.id} 
                className="p-2 border-b border-gray-300 text-sm hover:bg-gray-300 cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="p-2 flex border-t border-gray-300">
            <input 
              type="text" 
              placeholder="Search Assets" 
              className="border border-gray-400 p-1 text-sm flex-grow"
            />
            <button className="bg-gray-300 border border-gray-400 border-l-0 p-1">
              <Search size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetMenu;