import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DirectoryContent from './components/DirectoryContent/DirectoryContent';
import './App.css';

function App() {
  const [expandedSections, setExpandedSections] = useState({
    'Asset Menu': true,
    'Report Facility': true,
    'Saved Searches': true,
    'Tagging': true,
    'History': true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar expandedSections={expandedSections} toggleSection={toggleSection} />
        <DirectoryContent />
      </div>
    </div>
  );
}

export default App;