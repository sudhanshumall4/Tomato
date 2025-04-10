import React, { useState } from 'react';
import './NavBar.css';
import {assets} from '../../assets/assets';

const NavBar = () => {
    const[menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
  <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
  <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
  <li onClick={()=>setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</li>
  <li onClick={()=>setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact-us</li>
</ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=""/>
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=""/>
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default NavBar;
