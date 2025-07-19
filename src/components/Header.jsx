import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header({ onLoginClick, onSignUpClick }) {
  const [showNavBar, setNavBar] = useState(window.innerWidth > 1000);
  const [showDropdown, setShowDropdown] = useState(false);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleNav = () => {
    if (window.innerWidth <= 1000) {
      setNavBar((prev) => !prev);
    } else {
      setNavBar(true);
    }
  };

  const handleToolsClick = () => {
    setShowDropdown((prev) => !prev);
  };

  // Handle outside click to close navbar and dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 1000) {
        if (navRef.current && !navRef.current.contains(e.target)) {
          setNavBar(false);
          setShowDropdown(false);
        }
      }

      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const header = document.querySelector(".header");

      if (currentScroll >= 70) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 1000) {
      setNavBar(false);
      setShowDropdown(false);
    }
  };

  return (
    <div>
      <header className="header">
        <main className="header_main">
          <section className="header_first_section">
            <div className="logo">
              <Link to="/">
                <p>
                  <span>D</span>iagnify
                </p>
              </Link>
            </div>

            {showNavBar && (
              <div className="header_respo_help" ref={navRef}>
                <nav className="header_nav">
                  <div className="header_nav_p">
                    <Link to="/" onClick={handleNavLinkClick}>
                      Home
                    </Link>
                  </div>
                  <div className="header_nav_p">
                    <Link to="/Blog" onClick={handleNavLinkClick}>
                      Blog
                    </Link>
                  </div>

                  <div
                    className="header_nav_p"
                    id="header_nav_p1"
                    ref={dropdownRef}
                  >
                    <span id="Tools" onClick={handleToolsClick}>
                      Tools <i className="fa-solid fa-caret-down"></i>
                    </span>

                    {showDropdown && (
                      <div className="headre_drop_down" id="headre_drop_down">
                        <ul>
                          <Link to="/optic" onClick={handleNavLinkClick}>
                            <li>Optic</li>
                          </Link>
                          <Link to="/lung">
                            <li>Lung</li>
                          </Link>
                          <Link to="/brain">
                            <li>Brain</li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="header_nav_p">
                    <Link to="/#About">About</Link>
                  </div>
                </nav>

                <div className="header_last_section">
                  <div className="user_l_p">
                    <p onClick={onLoginClick}>Login</p>
                    <p onClick={onSignUpClick}>Sign up</p>
                  </div>
                </div>
              </div>
            )}

            <div className="hamburger">
              <i className="fa-solid fa-bars-staggered" onClick={toggleNav}></i>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}

export default Header;
