import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reports = () => {
  const { reportType } = useParams();
  const [activeTab, setActiveTab] = useState(reportType || 'dashboard');

  const renderReportContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <div className="report-content">Asset Status Dashboard</div>;
      case 'aggregation':
        return <div className="report-content">Asset Status Aggregation</div>;
      case 'hardware':
        return <div className="report-content">ITClient Hardware Availability</div>;
      case 'upgrade':
        return <div className="report-content">Eligible for Upgrade</div>;
      default:
        return <div className="report-content">Select a report type</div>;
    }
  };

  return (
    <div className="reports-page">
      <div className="reports-header">
        <h2>Reports</h2>
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={`tab ${activeTab === 'aggregation' ? 'active' : ''}`}
            onClick={() => setActiveTab('aggregation')}
          >
            Aggregation
          </button>
          <button 
            className={`tab ${activeTab === 'hardware' ? 'active' : ''}`}
            onClick={() => setActiveTab('hardware')}
          >
            Hardware
          </button>
          <button 
            className={`tab ${activeTab === 'upgrade' ? 'active' : ''}`}
            onClick={() => setActiveTab('upgrade')}
          >
            Upgrade
          </button>
        </div>
      </div>
      {renderReportContent()}
    </div>
  );
};

export default Reports;