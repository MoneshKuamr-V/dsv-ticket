import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Navigation = () => {
  // State to track open sections
  const [expandedSections, setExpandedSections] = useState({
    assetMenu: true, // Open by default
    reportFacility: false,
    savedSearches: false,
    tagging: false,
    history: false
  });

  // State to track open submenus
  const [expandedSubmenus, setExpandedSubmenus] = useState({
    asset: false,
    ticket: false,
    accountAdmin: false,
    dataAdmin: false,
    appAdmin: false,
    softwareAsset: false
  });

  // Toggle main sections
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Toggle submenus inside "Asset Menu"
  const toggleSubmenu = (submenu) => {
    setExpandedSubmenus((prev) => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

  return (
    <nav className="side-navigation">
      {/* Asset Menu - Open by default */}
      <section className="nav-section">
        <div className="section-header" onClick={() => toggleSection('assetMenu')}>
          <span className={`arrow ${expandedSections.assetMenu ? 'down' : 'right'}`}>▼</span>
          Menu
        </div>
        {expandedSections.assetMenu && (
          <ul className="section-items">
            <li onClick={() => toggleSubmenu('asset')}>
              <span className={`arrow ${expandedSubmenus.asset ? 'down' : 'right'}`}>▶</span>
              Asset Menu
            </li>
            {expandedSubmenus.asset && (
              <ul className="submenu">
                <li><Link to="/">All Assets - received by Jamf</Link></li>
                <li><Link to="/">All Assets - received by CDW</Link></li>
                <li><Link to="/">All Assets - received by T2</Link></li>
                <li><Link to="/">All Assets - received</Link></li>
                <li><Link to="/">All Assets - Available</Link></li>
                <li><Link to="/">All Assets - Employee Offboarding</Link></li>
                <li><Link to="/">All Assets - Parked</Link></li>
                <li><Link to="/">Advanced Search</Link></li>
              </ul>
            )}

            <li onClick={() => toggleSubmenu('ticket')}>
              <span className={`arrow ${expandedSubmenus.ticket ? 'down' : 'right'}`}>▶</span>
              Ticket Menu
            </li>
            {expandedSubmenus.ticket && (
              <ul className="submenu">
                <li><Link to="/">Ticket Menu 1</Link></li>
                <li><Link to="/">Ticket Menu 2</Link></li>
              </ul>
            )}

            <li onClick={() => toggleSubmenu('accountAdmin')}>
              <span className={`arrow ${expandedSubmenus.accountAdmin ? 'down' : 'right'}`}>▶</span>
              Account Admin Menu
            </li>
            {expandedSubmenus.accountAdmin && (
              <ul className="submenu">
                <li><Link to="/">Account Admin 1</Link></li>
                <li><Link to="/">Account Admin 2</Link></li>
              </ul>
            )}

            <li onClick={() => toggleSubmenu('dataAdmin')}>
              <span className={`arrow ${expandedSubmenus.dataAdmin ? 'down' : 'right'}`}>▶</span>
              Data Admin Menu
            </li>
            {expandedSubmenus.dataAdmin && (
              <ul className="submenu">
                <li><Link to="/">Data Admin 1</Link></li>
                <li><Link to="/">Data Admin 2</Link></li>
              </ul>
            )}

            <li onClick={() => toggleSubmenu('appAdmin')}>
              <span className={`arrow ${expandedSubmenus.appAdmin ? 'down' : 'right'}`}>▶</span>
              Application Admin Menu
            </li>
            {expandedSubmenus.appAdmin && (
              <ul className="submenu">
                <li><Link to="/">Application Admin 1</Link></li>
                <li><Link to="/">Application Admin 2</Link></li>
              </ul>
            )}

            <li onClick={() => toggleSubmenu('softwareAsset')}>
              <span className={`arrow ${expandedSubmenus.softwareAsset ? 'down' : 'right'}`}>▶</span>
              Software Asset Menu
            </li>
            {expandedSubmenus.softwareAsset && (
              <ul className="submenu">
                <li><Link to="/">Software Asset 1</Link></li>
                <li><Link to="/">Software Asset 2</Link></li>
              </ul>
            )}
          </ul>
        )}
      </section>

      {/* Report Facility - Closed by default */}
      <section className="nav-section">
        <div className="section-header" onClick={() => toggleSection('reportFacility')}>
          <span className={`arrow ${expandedSections.reportFacility ? 'down' : 'right'}`}>▼</span>
          Report Facility
        </div>
        {expandedSections.reportFacility && (
          <ul className="section-items">
            <li><Link to="/reports">Manage Reports</Link></li>
            <li><Link to="/reports/dashboard">Asset by Status - Dashboard</Link></li>
            <li><Link to="/reports/aggregation">Asset by Status - Aggregation</Link></li>
            <li><Link to="/reports/hardware">ITClient Hardware Availability</Link></li>
            <li><Link to="/reports/upgrade">Eligible for Upgrade</Link></li>
          </ul>
        )}
      </section>

      {/* Saved Searches - Closed by default */}
      <section className="nav-section">
        <div className="section-header" onClick={() => toggleSection('savedSearches')}>
          <span className={`arrow ${expandedSections.savedSearches ? 'down' : 'right'}`}>▼</span>
          Saved Searches
        </div>
        {expandedSections.savedSearches && (
          <ul className="section-items">
            <li><Link to="/search/shared">Shared Search</Link></li>
          </ul>
        )}
      </section>

      {/* Tagging - Closed by default */}
      <section className="nav-section">
        <div className="section-header" onClick={() => toggleSection('tagging')}>
          <span className={`arrow ${expandedSections.tagging ? 'down' : 'right'}`}>▼</span>
          Tagging
        </div>
        {expandedSections.tagging && (
          <ul className="section-items">
            {/* Tagging content */}
          </ul>
        )}
      </section>

      {/* History - Closed by default */}
      <section className="nav-section">
        <div className="section-header" onClick={() => toggleSection('history')}>
          <span className={`arrow ${expandedSections.history ? 'down' : 'right'}`}>▼</span>
          History
        </div>
        {expandedSections.history && (
          <ul className="section-items">
            {/* History content */}
          </ul>
        )}
      </section>
    </nav>
  );
};

export default Navigation;
