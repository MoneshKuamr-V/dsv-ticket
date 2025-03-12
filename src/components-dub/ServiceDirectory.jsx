// src/components/ServiceDirectory.jsx
import React from 'react';

const ServiceDirectory = () => {
  const assetData = [
    { 
      id: 1, 
      name: 'Bulk Item', 
      description: 'This is an asset application user to store item details.',
      url: '#'
    },
    { 
      id: 2, 
      name: 'Infrastructure Asset', 
      description: 'Infrastructure Asset',
      url: '#',
      highlight: true
    },
    { 
      id: 3, 
      name: 'Rack Asset', 
      description: 'Rack Asset',
      url: '#'
    }
  ];

  return (
    <div className="bg-white border border-gray-300 rounded shadow">
      <div className="bg-blue-100 p-3 text-lg font-semibold border-b border-gray-300">
        Service Directory
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-200">
              <th className="p-2 text-left border-b border-r border-gray-300">Asset Form</th>
              <th className="p-2 text-left border-b border-gray-300">Description</th>
            </tr>
          </thead>
          <tbody>
            {assetData.map((asset, index) => (
              <tr 
                key={asset.id} 
                className={`${asset.highlight ? 'bg-gray-100' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')}`}
              >
                <td className="p-2 border-r border-b border-gray-300">
                  <a 
                    href={asset.url} 
                    className={`${asset.name === 'Infrastructure Asset' ? 'text-blue-600' : ''} hover:underline`}
                  >
                    {asset.name}
                  </a>
                </td>
                <td className="p-2 border-b border-gray-300">{asset.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceDirectory;