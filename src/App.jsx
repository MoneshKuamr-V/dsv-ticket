// App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import Routes from './Components/Routes/Routes';
import Navigation from './Components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          
          <div className="logo-container">
            {/* <img src="/radaptive-logo.png" alt="Radaptive" className="logo" /> */}
            <span className='logo'>Radaptive</span>
            <h1>Service Directory</h1>
            <spam></spam>
            <span className="user-info">
            Bala Ganesh | Preferences | GMT | Logout
          </span>
          </div>
        
        </header>
        <div className="main-content">
          <Navigation />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;