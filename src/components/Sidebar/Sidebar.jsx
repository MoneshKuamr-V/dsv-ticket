import './Sidebar.css';
import { useState } from 'react';

function Sidebar() {
  const [expandedSections, setExpandedSections] = useState({
    'Asset Menu': true,  // Default open
    'Report Facility': false,  // Default closed
    'Saved Searches': false,  // Default closed
    'Tagging': false,  // Default closed
    'History': false   // Default closed
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const assetMenuItems = [
    'All Assets - received by C&R',
    'All Assets - received by Jamf',
    'All Assets - received by CDW',
    'All Assets - received by T2',
    'All Assets - received',
    'All Assets - Available',
    'All Assets - Employee Offboarding',
    'All Assets - Parked',
    'Advanced Search'
  ];

  const reportFacilityItems = [
    'Manage Reports',
    'Asset by Status - Dashboard',
    'Asset by Status - Aggregation',
    'ITClient Hardware Availability',
    'Eligible for Upgrade'
  ];

  const savedSearchesItems = ['Shared Search'];

  return (
    <div className="sidebar">
      {/* Asset Menu */}
      <div className="sidebar-section">
        <div 
          className={`section-header ${expandedSections['Asset Menu'] ? 'expanded' : ''}`}
          onClick={() => toggleSection('Asset Menu')}
        >
          Asset Menu
          <span className="toggle-icon">{expandedSections['Asset Menu'] ? '▼' : '►'}</span>
        </div>
        {expandedSections['Asset Menu'] && (
          <ul className="section-items">
            {assetMenuItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <div className="search-box">
          <input type="text" placeholder="Search Assets" />
          <button className="search-button">🔍</button>
        </div>
      </div>

      {/* Report Facility */}
      <div className="sidebar-section">
        <div 
          className={`section-header ${expandedSections['Report Facility'] ? 'expanded' : ''}`}
          onClick={() => toggleSection('Report Facility')}
        >
          Report Facility
          <span className="toggle-icon">{expandedSections['Report Facility'] ? '▼' : '►'}</span>
        </div>
        {expandedSections['Report Facility'] && (
          <ul className="section-items">
            {reportFacilityItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Saved Searches */}
      <div className="sidebar-section">
        <div 
          className={`section-header ${expandedSections['Saved Searches'] ? 'expanded' : ''}`}
          onClick={() => toggleSection('Saved Searches')}
        >
          Saved Searches
          <span className="toggle-icon">{expandedSections['Saved Searches'] ? '▼' : '►'}</span>
        </div>
        {expandedSections['Saved Searches'] && (
          <ul className="section-items">
            {savedSearchesItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Tagging */}
      <div className="sidebar-section">
        <div 
          className={`section-header ${expandedSections['Tagging'] ? 'expanded' : ''}`}
          onClick={() => toggleSection('Tagging')}
        >
          Tagging
          <span className="toggle-icon">{expandedSections['Tagging'] ? '▼' : '►'}</span>
        </div>
        {expandedSections['Tagging'] && (
          <ul className="section-items">
            {/* Tagging items would go here */}
          </ul>
        )}
      </div>

      {/* History */}
      <div className="sidebar-section">
        <div 
          className={`section-header ${expandedSections['History'] ? 'expanded' : ''}`}
          onClick={() => toggleSection('History')}
        >
          History
          <span className="toggle-icon">{expandedSections['History'] ? '▼' : '►'}</span>
        </div>
        {expandedSections['History'] && (
          <ul className="section-items">
            {/* History items would go here */}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
