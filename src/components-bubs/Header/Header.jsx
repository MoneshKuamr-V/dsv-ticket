import "./Header.css"
function Header() {
    return (
      <div className="header">
        <div className="user-info">
          <span >Bala Ganesh | Preferences | GMT | Logout</span>
        </div>
        <div className="logo-container">
          <img src="/logo.png" alt="Radaptive" className="logo" />
          <h1>Service Directory</h1>
        </div>
      </div>
    );
  }
  
  export default Header;