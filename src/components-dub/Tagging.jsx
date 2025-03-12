import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Tagging = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border-b border-gray-300">
      <div 
        className="bg-blue-700 text-white p-2 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="font-bold">Tagging</h2>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      
      {isExpanded && (
        <div className="bg-gray-200">
          {/* Content will be added here */}
        </div>
      )}
    </div>
  );
};

export default Tagging;