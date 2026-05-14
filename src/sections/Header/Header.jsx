import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css?v=20260514131802";
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
            onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}
          >
            <span className="nav-link" onClick={() => window.innerWidth <= 1024 && setServicesOpen(!servicesOpen)}>Services</span>
            {servicesOpen && (
              <ServicesDropdown closeMenu={() => setServicesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => window.innerWidth > 1024 && setSolutionsOpen(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setSolutionsOpen(false)}
          >
            <span className="nav-link" onClick={() => window.innerWidth <= 1024 && setSolutionsOpen(!solutionsOpen)}>Solutions</span>
            {solutionsOpen && (
              <SolutionsDropdown closeMenu={() => setSolutionsOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => window.innerWidth > 1024 && setIndustriesOpen(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setIndustriesOpen(false)}
          >
            <span className="nav-link" onClick={() => window.innerWidth <= 1024 && setIndustriesOpen(!industriesOpen)}>Industries</span>
            {industriesOpen && (
              <IndustriesDropdown closeMenu={() => setIndustriesOpen(false)} />
            )}
          </div>
          <div
            className="nav-item"
            onMouseEnter={() => window.innerWidth > 1024 && setPlatformsOpen(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setPlatformsOpen(false)}
          >
            <span className="nav-link" onClick={() => window.innerWidth <= 1024 && setPlatformsOpen(!platformsOpen)}>Platforms</span>
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
            onMouseEnter={() => window.innerWidth > 1024 && setInsightOpen(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setInsightOpen(false)}
          >
            <span className="nav-link" onClick={() => window.innerWidth <= 1024 && setInsightOpen(!insightOpen)}>Insights</span>
            {insightOpen && (
              <InsightDropdown closeMenu={() => setInsightOpen(false)} />
            )}
          </div>
          <Link to="/contact-us">Contact Us</Link>
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



