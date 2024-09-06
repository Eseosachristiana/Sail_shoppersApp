import React from "react";
import './Footer.css';
import logo from '../Assests/logo.png'
import cart from '../Assests/cart.png'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>SHOPPERS</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>About</li>
                <li>Products</li>
                <li>Offices</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icon-container">
                    <i className="ri-instagram-line"></i>
                </div>
                <div className="footer-icon-container">
                    <i className="ri-facebook-fill"></i>
                </div>
                <div className="footer-icon-container">
                    <i className="ri-twitter-fill"></i>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
