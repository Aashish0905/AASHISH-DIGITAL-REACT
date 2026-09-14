import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    ["Home", "/"],
    ["Services", "/services"],
    ["Why Us", "/why-us"],
    ["Portfolio", "/portfolio"],
    ["AI Creatives", "/ai-creatives"],
    ["Pricing", "/pricing"],
    ["How It Works", "/how-it-works"],
    ["About", "/about"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-icon">✦</span>

          <span>
            AASHISH <strong>DIGITAL</strong>
          </span>
        </Link>

        <nav className="desktop-nav">
          {links.map(([name, path]) => (
            <Link
              key={path}
              to={path}
              className={
                location.pathname === path
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {name}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="nav-button"
        >
          Get Started
          <span>↗</span>
        </Link>

        <button
          className={`menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        {links.map(([name, path]) => (
          <Link
            key={path}
            to={path}
            onClick={closeMenu}
          >
            {name}
            <span>↗</span>
          </Link>
        ))}

        <Link
          to="/contact"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Get Free Consultation
          <span>↗</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;