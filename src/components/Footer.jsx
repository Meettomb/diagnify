import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <main className="footer_main">
        <footer className="footer">
          <div className="footer_web_detail">
            <div className="footer_logo">
              <Link to="/">
                <p>
                  <span>D</span>iagnify
                </p>
              </Link>
            </div>
            <p className="footer_web_detail">
              Diagnify uses cutting-edge AI to make medical image interpretation
              accessible, fast, and understandable for everyone. Empowering
              patients, caregivers, and professionals &mdash; anytime, anywhere.
            </p>
          </div>
          <div className="footer_links">
            <p>Quick Links</p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#About">About</Link>
              </li>
              <li>
                <Link to="/#ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link to="/uplode">BIO Metrics</Link>
              </li>
              <li>
                <Link to="/uplode">Lung</Link>
              </li>
              <li>
                <Link to="/uplode">Brain</Link>
              </li>
            </ul>
          </div>
          <div className="footer_contact">
            <p>
              <i className="fa-solid fa-location-dot"></i> Titanium Business
              Park, Ahmedabad, Gujrat
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> diagnifyhealth@gmail.com
            </p>
          </div>
        </footer>
      </main>
      <p className="copywrite">
        {new Date().getFullYear()} © All rights reserved by Diagnify
      </p>
    </div>
  );
}

export default Footer;
