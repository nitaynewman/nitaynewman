import "D:/Users/User/Desktop/Private/js/js-react/src/css/react.css";
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';





const Navbar = ({ theme, toggleTheme }) => {
  
    return (  
        <nav className="navbar">
      <div className="navbar_container">
      <Link to="/" id="navbar_logo">KnowItAll</Link>
        <div className="navbar_toggle" id="mobile-menu">
          <span className="bar"></span> 
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar_menu">
          <li className="navbar_item">
            <Link to="/" className="navbar_links" id="home-page">Home</Link>
          </li>
          <li className="navbar_item">
            <Link to="#about" className="navbar_links" id="about-page">About</Link>
          </li>
          <li className="navbar_item">
            <Link to="/Classes" className="navbar_links" id="classes-page">Classes</Link>
          </li>
          <li className="navbar_item">
            <Link to="/Create" className="navbar_links" id="about-page">Create</Link>
          </li>
          <li className="switch">
           <ReactSwitch onChange={ toggleTheme } checked={theme === 'dark'}/>
          </li>
          <li className="navbar_btn">
            <Link to="#" className="button" id="signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
    
    );
}
 
export default Navbar;