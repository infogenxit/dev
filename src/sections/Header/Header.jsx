import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.webp";
import ServicesDropdown from "./ServicesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import PlatformsDropdown from "./PlatformsDropdown";
import InsightDropdown from "./InsightDropdown";
import ContactDropdown from "./ContactDropdown";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Infogenx Logo" fetchPriority="high" loading="eager" />
        </Link>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/about">About us</Link>
          <div
            className="nav-item"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="nav-link">Services</span>
            {servicesOpen && (
              <ServicesDropdown closeMenu={() => setServicesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <span className="nav-link">Solutions</span>
            {solutionsOpen && (
              <SolutionsDropdown closeMenu={() => setSolutionsOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <span className="nav-link">Industries</span>
            {industriesOpen && (
              <IndustriesDropdown closeMenu={() => setIndustriesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setPlatformsOpen(true)}
            onMouseLeave={() => setPlatformsOpen(false)}
          >
            <span className="nav-link">Platforms</span>
            {platformsOpen && (
              <PlatformsDropdown closeMenu={() => setPlatformsOpen(false)} />
            )}
          </div>
          <Link to="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          <div
            className="nav-item"
            onMouseEnter={() => setInsightOpen(true)}
            onMouseLeave={() => setInsightOpen(false)}
          >
            <span className="nav-link">Insights</span>
            {insightOpen && (
              <InsightDropdown closeMenu={() => setInsightOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <Link className="nav-link" to="/contact-us">Contact Us</Link>
            {contactOpen && (
              <ContactDropdown closeMenu={() => setContactOpen(false)} />
            )}
          </div>
        </nav>
        <div className="quote-wrapper">
          <Link to="/contact-us" className="quote-btn desktop-only">
            Request Strategy Briefing
          </Link>
          <span className="quote-tooltip">
            Request a tailored quote for smart app Automation and Analytics
            Engineering
          </span>
        </div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};
export default Header;

