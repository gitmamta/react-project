import { Link } from 'react-router-dom';

import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>MWardrobe</h3>
          <p>Your one-stop online store for everything you need.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/shop" >Shop</a></li> */}
            <li><Link to="/">Shop</Link></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@mwardrobe.com</p>
          <p>Phone: 9762214953</p>
          <div className="social-icons">
            <a href="#"><span>🔵</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>📸</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MWardrobe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
