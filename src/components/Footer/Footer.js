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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
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
