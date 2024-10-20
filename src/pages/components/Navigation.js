import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import navData from "./data/nav.json";

export default function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({});
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // Load navigation items from the JSON file
    setNavItems(navData.navItems);

    // Initialize dropdown state for each dropdown item
    const initialDropdownState = {};
    navData.navItems.forEach((item, index) => {
      if (item.dropdown) {
        initialDropdownState[index] = false;
      }
    });
    setDropdowns(initialDropdownState);
  }, []);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const toggleDropdown = (index) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".navbar-dropdown")) {
      setDropdowns({});
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link href="#">
            <p className="logo">
              Awesome<span>logo</span>
            </p>
          </Link>
        </div>

        <div className={`navbar-menu ${navbarOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li key={index} className="navbar-item">
                {item.dropdown ? (
                  <div className="navbar-dropdown">
                    <button
                      className="dropdown-toggler"
                      onClick={() => toggleDropdown(index)}
                    >
                      {item.name} <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                    <ul
                      className={`dropdown ${dropdowns[index] ? "show" : ""}`}
                    >
                      {item.dropdown.map((dropdownItem, idx) => (
                        <li key={idx}>
                          <Link href={dropdownItem.path}>
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

        .navbar,
        .navbar > .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .navbar {
          background-color: #fff;
          padding: 0 1.15rem 0;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid #eceef3;
        }

        .container {
          max-width: 1170px;
          margin: 0 auto;
          padding: 0 15px;
          margin-top: 1rem;
        }

        .logo {
          font-family: "Roboto", sans-serif;
          font-size: 1.25rem;
          font-weight: 500;
        }

        .navbar-header span {
          color: #66f;
        }

        .navbar-toggler {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
        }

        .navbar-toggler span {
          display: block;
          width: 22px;
          height: 2px;
          background-color: #a1a1a1;
          margin-bottom: 0.2rem;
        }

        @media (max-width: 768px) {
          .navbar-toggler {
            display: block;
          }
        }

        .navbar-menu {
          display: flex;
          align-items: center;
        }

        .navbar-menu.active {
          display: flex;
        }

        .navbar-nav {
          list-style: none;
          display: flex;
          gap: 20px;
          margin: 0;
          padding: 0;
          margin-left: auto;
        }

        .navbar-nav > li {
          position: relative;
        }

        .navbar-nav > li > a {
          text-decoration: none;
          color: #3c4250;
          padding: 0.5rem 1rem;
          transition: color 0.2s ease;
        }

        .navbar-nav > li > a:hover {
          color: #66f;
        }

        .navbar-dropdown .dropdown {
          display: none;
          position: absolute;
          top: 150%;
          left: 0;
          background-color: white;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
          list-style: none;
          z-index: 9999;
        }

        .navbar-dropdown .dropdown.show {
          display: block;
          padding: 0 20px;
        }

        .navbar-dropdown .dropdown li a {
          color: #3c4250;
          padding: 0.25rem 1rem;
        }

        .navbar-dropdown .dropdown li a:hover {
          background-color: #eceef3;
        }

        .navbar-dropdown .separator {
          width: 100%;
          height: 1px;
          background-color: #eceef3;
          margin: 9px 0;
        }

        @media (max-width: 768px) {
          .navbar-menu {
            display: none;
            flex-direction: column;
            width: 100%;
          }

          .navbar-menu.active {
            display: block;
          }

          .navbar-nav {
            flex-direction: column;
          }

          .navbar-nav > li > a {
            border-bottom: 1px solid #eceef3;
            padding: 15px;
          }
        }
      `}</style>
    </nav>
  );
}
