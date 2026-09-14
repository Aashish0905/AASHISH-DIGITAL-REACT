import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-main">
          <Link to="/" className="footer-logo">
            <span>✦</span>
            AASHISH DIGITAL
          </Link>

          <p>
            Digital marketing, website development and
            creative growth solutions for modern businesses.
          </p>

          <a href="mailto:aashishraikwar9593@gmail.com">
            aashishraikwar9593@gmail.com
          </a>
        </div>

        <div className="footer-column">
          <h4>Services</h4>

          <Link to="/services">
            Website Development
          </Link>

          <Link to="/services">SEO</Link>

          <Link to="/services">
            Social Media Marketing
          </Link>

          <Link to="/services">
            Google & Meta Ads
          </Link>
        </div>

        <div className="footer-column">
          <h4>Company</h4>

          <Link to="/why-us">Why Us</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>

          <a
            href="https://wa.me/919074755317"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/code.withaashish/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a href="tel:+919074755317">
            +91 90747 55317
          </a>

          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} AASHISH DIGITAL.
          All rights reserved.
        </p>

        <p>
          Websites • SEO • Marketing • AI Creatives
        </p>
      </div>
    </footer>
  );
}

export default Footer;