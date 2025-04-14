import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
          All trademarks are properties of their respective owners.
          2008-2025 © Zomato<sup>TM</sup> Ltd. All rights reserved.
        </p>
      </div>

      <div className="footer-content-center">
        <div className="footer-social-icons">
          <img src={assets.facebook_icon} alt="Facebook" />
          <img src={assets.linkedin_icon} alt="LinkedIn" />
          <img src={assets.twitter_icon} alt="Twitter" />
        </div>
      </div>

      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>7275027406</li>
          <li>sudhanshumall4@gmail.com</li>
          <li>H-15 R-20 JUET CAMPUS</li>
        </ul>
      </div>

      <hr />

      <p className="footer-copyright">
        &copy; 2025 Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
