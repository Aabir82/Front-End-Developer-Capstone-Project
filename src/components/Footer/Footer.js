import { Link } from "react-router-dom";
import "./Footer.css";
import "./Footerdesktop.css";
import "./Footertablet.css";

import llFooterIcon from "../../images/Asset 18@4x.png";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-logo-container">
      <img src={llFooterIcon} alt={llFooterIcon + " footer icon"} className="footer-logo" />
      </div>

      <div className="doormat-navigation">
        <h2>Navigation</h2>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="onlineorder">Order Online</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <h3>Address:</h3>
            123, Chicago Drive, Block 3
          </li>
          <li>
            <h3>Phone number:</h3> +001 123XXX56
          </li>
          <li>
            <h3>Email:</h3> llemonawesome@llemon.com
          </li>
        </ul>
      </div>

      <div className="social-media-links">
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <img src={twitter} alt="twitter-logo" className="twitter-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} alt="facebook-logo" className="facebook-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagram} alt="instagram-logo" className="instagram-logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
