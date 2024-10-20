import { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Accessibility Services",
    path: "/accessibility-services",
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
      <button
        className="mobile-menu-btn"
        aria-expanded={mobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        {mobileMenuOpen ? "✖" : "☰"}
      </button>

      <ul className={`nav-items ${mobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="nav-link dropdown-btn"
                  aria-expanded={openDropdown === index}
                >
                  {item.name}
                </button>
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
          background-color: rgba(
            0,
            0,
            0,
            0.85
          ); /* Semi-transparent background */
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
        }

        .nav-items {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 30px;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          padding: 10px 15px;
          display: block;
          text-decoration: none;
          color: white; /* White text on dark background */
          font-size: 1.1rem;
          font-weight: 600;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link:focus {
          color: #0070f3; /* Hover color */
        }

        .nav-link:focus {
          outline: 2px solid #0070f3;
          outline-offset: 3px;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          background-color: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          list-style: none;
          padding: 10px 0;
        }

        .dropdown.open {
          display: block;
        }

        .dropdown-link {
          padding: 10px 20px;
          display: block;
          text-decoration: none;
          color: #333;
          font-size: 1rem;
          font-weight: 500;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .dropdown-link:hover,
        .dropdown-link:focus {
          background-color: #f0f0f0;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-items {
            display: none;
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: rgba(0, 0, 0, 0.9);
            padding: 10px 0;
            text-align: center;
          }

          .nav-items.open {
            display: flex;
          }

          .mobile-menu-btn {
            display: block;
          }

          .dropdown {
            position: relative;
          }

          .dropdown-link {
            padding-left: 30px;
          }
        }
      `}</style>
    </nav>
  );
}
