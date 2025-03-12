// src/components/ReportFacility.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ReportFacility = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const reportItems = [
    { id: 1, title: 'Manage Reports' },
    { id: 2, title: 'Asset by Status - Dashboard' },
    { id: 3, title: 'Asset by Status - Aggregation' },
    { id: 4, title: 'ITClient Hardware Availability' },
    { id: 5, title: 'Eligible for Upgrade' },
  ];

  return (
    <div className="border-b border-gray-300">
      <div 
        className="bg-blue-700 text-white p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="font-bold">Report Facility</h2>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      
      {isExpanded && (
        <div className="bg-gray-200">
          <ul>
            {reportItems.map(item => (
              <li 
                key={item.id} 
                className="p-2 border-b border-gray-300 text-sm hover:bg-gray-300 cursor-pointer"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReportFacility;