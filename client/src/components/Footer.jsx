import { Link } from "react-router-dom";
import logo from "../assets/images/logo-1.png";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-top container">
          <div className="row gy-4">
            {/* Logo & Social */}
            <div className="col-md-3 col-12">
              <Link to="/" className="logo_t">
                <img src={logo} alt="MYO Drinks" />
              </Link>

              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* About */}
            <div className="col-md-3 col-12">
              <div className="footer-accordion">
                <input id="acc-about" type="checkbox" />
                <label className="acc-hd" htmlFor="acc-about">About</label>
                <h5 className="footer-title">About</h5>
                <ul className="footer-list">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our mission</a></li>
                  <li><a href="#">Work with us</a></li>
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="col-md-3 col-12">
              <div className="footer-accordion">
                <input id="acc-res" type="checkbox" />
                <label className="acc-hd" htmlFor="acc-res">Resources</label>
                <h5 className="footer-title">Resources</h5>
                <ul className="footer-list">
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Tutorials</a></li>
                  <li><a href="#">Instructions</a></li>
                </ul>
              </div>
            </div>

            {/* Customer care */}
            <div className="col-md-3 col-12">
              <div className="footer-accordion">
                <input id="acc-care" type="checkbox" />
                <label className="acc-hd" htmlFor="acc-care">Customer care</label>
                <h5 className="footer-title">Customer care</h5>
                <ul className="footer-list">
                  <li><a href="#">Help & Contact us</a></li>
                  <li><a href="#">Returns & Exchanges</a></li>
                  <li><a href="#">Shipping & Delivery</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom container">
          <div className="footer-policy">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
          <p>© 2024 MYO Drinks. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
