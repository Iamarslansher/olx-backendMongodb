import React from "react";
import "./footer.css";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            OLX is the leading online marketplace in many countries, connecting
            buyers and sellers to make deals.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Sell on OLX</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul className="social-icons">
            <li>
              <a href="#">
                <FaFacebook  className="social-icon social-icon1"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter  className="social-icon social-icon2"/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram  className="social-icon social-icon3"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OLX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
