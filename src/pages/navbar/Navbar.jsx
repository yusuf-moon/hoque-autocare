import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "models", label: "Models" },
    { id: "features", label: "Features" },
    { id: "reviews", label: "Reviews" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id, label) => {
    setActiveLink(label);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav className={`ha-navbar ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
        {/* Brand */}
        <button
          className="ha-brand"
          onClick={() => goTo("home", "Home")}
          data-testid="brand-logo"
          aria-label="Hoque Autocare home"
        >
          <span className="ha-logo-wrap">
            <img src="/logo.jpg" alt="Hoque Autocare logo" className="ha-logo-img" />
          </span>
          <span className="ha-brand-text">
            <span className="ha-brand-name">
              Hoque <span>Autocare</span>
            </span>
            <span className="ha-brand-tagline">Electric Rickshaw Dealer</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul className="ha-nav-links" data-testid="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={activeLink === link.label ? "active" : ""}
                onClick={() => goTo(link.id, link.label)}
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="ha-nav-cta"
          onClick={() => goTo("contact", "Contact")}
          data-testid="nav-cta-quote"
        >
          Get Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>

        {/* Hamburger */}
        <button
          className={`ha-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`ha-mobile-menu ${menuOpen ? "open" : ""}`} data-testid="mobile-menu">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={activeLink === link.label ? "active" : ""}
            onClick={() => goTo(link.id, link.label)}
            data-testid={`mobile-nav-link-${link.id}`}
          >
            {link.label}
          </button>
        ))}
        <button
          className="ha-mobile-cta"
          onClick={() => goTo("contact", "Contact")}
          data-testid="mobile-nav-cta"
        >
          Get Quote
        </button>
      </div>
    </>
  );
};

export default Navbar;
