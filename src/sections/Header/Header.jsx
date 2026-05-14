import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css?v=202605141708";
import logo from "../../assets/images/logo.webp";
import ServicesDropdown from "./ServicesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import PlatformsDropdown from "./PlatformsDropdown";
import InsightDropdown from "./InsightDropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [insightOpen, setInsightOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setPlatformsOpen(false);
    setInsightOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" onClick={closeAll}>
          <img src={logo} alt="Infogenx Logo" fetchPriority="high" loading="eager" />
        </Link>

        <nav className={
av \}>
          <Link to="/about" onClick={closeAll}>About us</Link>

          {/* Services */}
          <div className={
av-item \} 
               onMouseEnter={() => window.innerWidth > 1024 && setServicesOpen(true)} 
               onMouseLeave={() => window.innerWidth > 1024 && setServicesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/services" onClick={closeAll}>Services</Link>
              <span className="mobile-toggle" onClick={(e) => { e.stopPropagation(); setServicesOpen(!servicesOpen); }}></span>
            </div>
            {servicesOpen && <ServicesDropdown closeMenu={closeAll} />}
          </div>

          {/* Solutions */}
          <div className={
av-item \} 
               onMouseEnter={() => window.innerWidth > 1024 && setSolutionsOpen(true)} 
               onMouseLeave={() => window.innerWidth > 1024 && setSolutionsOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/solutions" onClick={closeAll}>Solutions</Link>
              <span className="mobile-toggle" onClick={(e) => { e.stopPropagation(); setSolutionsOpen(!solutionsOpen); }}></span>
            </div>
            {solutionsOpen && <SolutionsDropdown closeMenu={closeAll} />}
          </div>

          {/* Industries */}
          <div className={
av-item \} 
               onMouseEnter={() => window.innerWidth > 1024 && setIndustriesOpen(true)} 
               onMouseLeave={() => window.innerWidth > 1024 && setIndustriesOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/industries" onClick={closeAll}>Industries</Link>
              <span className="mobile-toggle" onClick={(e) => { e.stopPropagation(); setIndustriesOpen(!industriesOpen); }}></span>
            </div>
            {industriesOpen && <IndustriesDropdown closeMenu={closeAll} />}
          </div>

          {/* Platforms */}
          <div className={
av-item \} 
               onMouseEnter={() => window.innerWidth > 1024 && setPlatformsOpen(true)} 
               onMouseLeave={() => window.innerWidth > 1024 && setPlatformsOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/platforms" onClick={closeAll}>Platforms</Link>
              <span className="mobile-toggle" onClick={(e) => { e.stopPropagation(); setPlatformsOpen(!platformsOpen); }}></span>
            </div>
            {platformsOpen && <PlatformsDropdown closeMenu={closeAll} />}
          </div>

          <Link to="/products" onClick={closeAll}>Products</Link>
          <Link to="/portfolio" onClick={closeAll}>Portfolio</Link>

          {/* Insights */}
          <div className={
av-item \} 
               onMouseEnter={() => window.innerWidth > 1024 && setInsightOpen(true)} 
               onMouseLeave={() => window.innerWidth > 1024 && setInsightOpen(false)}>
            <div className="nav-link-wrapper">
              <Link to="/insights" onClick={closeAll}>Insights</Link>
              <span className="mobile-toggle" onClick={(e) => { e.stopPropagation(); setInsightOpen(!insightOpen); }}></span>
            </div>
            {insightOpen && <InsightDropdown closeMenu={closeAll} />}
          </div>

          <Link to="/contact-us" onClick={closeAll}>Contact Us</Link>
        </nav>

        <div className="quote-wrapper">
          <Link to="/contact-us" className="quote-btn desktop-only">Request Strategy Briefing</Link>
        </div>

        <div className={hamburger \} onClick={toggleMenu}>
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
