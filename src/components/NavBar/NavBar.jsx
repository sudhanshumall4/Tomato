import React, { useContext, useState } from 'react';
import './NavBar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getCartCount } = useContext(StoreContext); // ✅ use getCartCount instead of getTotalCart

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <li>
          <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Download</a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact Us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="Cart" /></Link>
          {getCartCount() > 0 && <div className="dot">{getCartCount()}</div>} {/* ✅ fixed logic */}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;
