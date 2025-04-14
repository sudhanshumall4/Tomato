import React, { useState } from 'react';
import './NavBar.css';
import {assets} from '../../assets/assets';
import { Link } from 'react-router';

const NavBar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
  <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
  <a  href="#explore-menu" onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
  <a href="#app-download"onClick={()=>setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Download</a>
  <a href="#footer"onClick={()=>setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact-us</a>
</ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=""/>
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
