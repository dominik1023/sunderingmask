import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Website Scanning",
    path: "/website-scanning",
  },
  {
    name: "About Us",
    dropdown: [
      { name: "About Us", path: "/about-us" },
      { name: "About Accessibility", path: "/about-accessibility" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    name: "Accessibility Lawsuits",
    path: "/accessibility-lawsuits",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navigation">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Main Navigation */}
      <ul className={`nav-items ${mobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            {item.dropdown ? (
              <>
                {/* Dropdown button for items with dropdown */}
                <button
                  onClick={() => toggleDropdown(index)}
                  className="nav-link dropdown-btn"
                >
                  {item.name}
                </button>
                {/* Dropdown menu */}
                <ul
                  className={`dropdown ${openDropdown === index ? "open" : ""}`}
                >
                  {item.dropdown.map((dropdownItem, idx) => (
                    <li key={idx}>
                      <Link href={dropdownItem.path} className="dropdown-link">
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // Regular link for non-dropdown items
              <Link href={item.path} className="nav-link">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .navigation {
          position: relative;
        }

        .nav-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          padding: 10px 20px;
          display: block;
          text-decoration: none;
          color: black;
        }

        .nav-link:hover {
          background-color: #eee;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          list-style: none;
          padding: 0;
          margin: 0;
          z-index: 1;
        }

        .dropdown.open {
          display: block;
        }

        .dropdown-link {
          padding: 10px 20px;
          display: block;
          text-decoration: none;
          color: black;
        }

        .dropdown-link:hover {
          background-color: #f0f0f0;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
          display: none;
          padding: 10px;
          font-size: 1.2rem;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }

        .mobile-menu-btn:hover {
          background-color: #005bb5;
        }

        @media (max-width: 768px) {
          .nav-items {
            display: none;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
          }

          .nav-items.open {
            display: block;
          }

          .mobile-menu-btn {
            display: block;
          }

          .dropdown {
            position: relative;
            top: auto;
            left: auto;
            box-shadow: none;
          }

          .dropdown-btn {
            background: none;
            border: none;
            width: 100%;
            text-align: left;
            padding: 10px 20px;
            font-size: 1rem;
            color: black;
            cursor: pointer;
          }

          .dropdown.open {
            display: block;
          }

          .dropdown-link {
            padding-left: 30px;
          }
        }
      `}</style>
    </nav>
  );
}
