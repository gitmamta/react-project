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

        {/* links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><a href="/shop" >Shop</a></li> */}
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@mwardrobe.com</p>
          <p>Phone: 9762214953</p>
          <div className="social-icons">
            <Link to="#"><span>🔵</span></Link>
            <Link to="#"><span>🐦</span></Link>
            <Link to="#"><span>📸</span></Link>
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
