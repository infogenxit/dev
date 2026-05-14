import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css?v=202605141648";
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

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setPlatformsOpen(false);
    setInsightOpen(false);
    setContactOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" onClick={closeAll}>
          <img src={logo} alt="Infogenx Logo" fetchPriority="high" loading="eager" />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/about" onClick={closeAll}>About us</Link>

          {/* Services */}
          <div className="nav-item" onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/services" onClick={closeAll}>Services</Link>
              <span className="mobile-toggle" onClick={() => setServicesOpen(!servicesOpen)}></span>
            </div>
            {servicesOpen && <ServicesDropdown closeMenu={closeAll} />}
          </div>

          {/* Solutions */}
          <div className="nav-item" onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/solutions" onClick={closeAll}>Solutions</Link>
              <span className="mobile-toggle" onClick={() => setSolutionsOpen(!solutionsOpen)}></span>
            </div>
            {solutionsOpen && <SolutionsDropdown closeMenu={closeAll} />}
          </div>

          {/* Industries */}
          <div className="nav-item" onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/industries" onClick={closeAll}>Industries</Link>
              <span className="mobile-toggle" onClick={() => setIndustriesOpen(!industriesOpen)}></span>
            </div>
            {industriesOpen && <IndustriesDropdown closeMenu={closeAll} />}
          </div>

          {/* Platforms */}
          <div className="nav-item" onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/platforms" onClick={closeAll}>Platforms</Link>
              <span className="mobile-toggle" onClick={() => setPlatformsOpen(!platformsOpen)}></span>
            </div>
            {platformsOpen && <PlatformsDropdown closeMenu={closeAll} />}
          </div>

          <Link to="/products" onClick={closeAll}>Products</Link>
          <Link to="/portfolio" onClick={closeAll}>Portfolio</Link>

          {/* Insights */}
          <div className="nav-item" onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)} onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/insights" onClick={closeAll}>Insights</Link>
              <span className="mobile-toggle" onClick={() => setInsightOpen(!insightOpen)}></span>
            </div>
            {insightOpen && <InsightDropdown closeMenu={closeAll} />}
          </div>

          <Link to="/contact-us" onClick={closeAll}>Contact Us</Link>
        </nav>

        <div className="quote-wrapper">
          <Link to="/contact-us" className="quote-btn desktop-only">Request Strategy Briefing</Link>
        </div>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={closeAll}></div>}
    </header>
  );
};

export default Header;


