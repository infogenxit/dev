import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css?v=202605141743";
import logo from "../../assets/images/logo.webp";
import ServicesDropdown from "./ServicesDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import IndustriesDropdown from "./IndustriesDropdown";
import PlatformsDropdown from "./PlatformsDropdown";
import InsightDropdown from "./InsightDropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDrawer = () => {
    setMenuOpen(!menuOpen);
    setActiveMenu(null);
  };

  const toggleSubMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  const navItems = [
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true, component: ServicesDropdown },
    { name: "Solutions", path: "/solutions", hasDropdown: true, component: SolutionsDropdown },
    { name: "Industries", path: "/industries", hasDropdown: true, component: IndustriesDropdown },
    { name: "Platforms", path: "/platforms", hasDropdown: true, component: PlatformsDropdown },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Insights", path: "/insights", hasDropdown: true, component: InsightDropdown },
    { name: "Contact Us", path: "/contact-us" }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" onClick={closeAll}>
          <img src={logo} alt="Infogenx Logo" />
        </Link>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <div key={item.name} className={`nav-item ${activeMenu === item.name ? "active" : ""}`}
                 onMouseEnter={() => window.innerWidth > 1024 && item.hasDropdown && setActiveMenu(item.name)}
                 onMouseLeave={() => window.innerWidth > 1024 && setActiveMenu(null)}>
              
              <div className="nav-link-wrapper">
                <Link to={item.path} onClick={closeAll}>{item.name}</Link>
                {item.hasDropdown && (
                  <span className="mobile-toggle" onClick={(e) => { e.stopPropagation(); toggleSubMenu(item.name); }}></span>
                )}
              </div>

              {item.hasDropdown && (
                <div className="dropdown-container">
                  <item.component closeMenu={closeAll} />
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="quote-wrapper">
          <Link to="/contact-us" className="quote-btn desktop-only">Request Strategy Briefing</Link>
        </div>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleDrawer}>
          <span></span><span></span><span></span>
        </div>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={closeAll}></div>}
    </header>
  );
};

export default Header;

