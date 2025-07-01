import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <main className="header_main">
          <section className="header_first_section">
            <div className="logo">
              <p>
                <span>D</span>iagnify
              </p>
            </div>

            <nav className="header_nav">
              <div className="header_nav_p">
                <Link to="/">Home</Link>
              </div>
              <div className="header_nav_p">
                <Link to="/Blog">Blog</Link>
              </div>
              <div className="header_nav_p" id="header_nav_p1">
                Tools <i className="fa-solid fa-caret-down"></i>
                <div className="headre_drop_down">
                  <ul>
                    <li>BIO Metrics</li>
                    <li>Lung</li>
                    <li>Blood</li>
                  </ul>
                </div>
              </div>

              <div className="header_nav_p">About</div>
            </nav>
          </section>

          <section className="header_last_section">
            <div className="user_l_p">
              <p>Login</p>
              <p>Sign up</p>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}

export default Header;
