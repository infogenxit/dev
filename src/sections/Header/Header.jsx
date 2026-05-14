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

  const handleNavClick = (item) => {
    if (window.innerWidth <= 1024 && item.hasDropdown) {
      setActiveMenu(item.name);
    } else {
      closeAll();
    }
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

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <div key={item.name} className="nav-item-desktop"
                 onMouseEnter={() => item.hasDropdown && setActiveMenu(item.name)}
                 onMouseLeave={() => setActiveMenu(null)}>
              <Link to={item.path} className="nav-link">{item.name}</Link>
              {item.hasDropdown && activeMenu === item.name && (
                <div className="dropdown-container">
                  <item.component closeMenu={closeAll} />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
          <div className="drawer-header">
            {activeMenu ? (
              <button className="back-btn" onClick={() => setActiveMenu(null)}>
                <span className="back-icon"></span> Back
              </button>
            ) : (
              <div className="drawer-logo">
                <img src={logo} alt="Logo" />
              </div>
            )}
            <div className="close-drawer" onClick={closeAll}>&times;</div>
          </div>

          <div className="drawer-content">
            <div className={`menu-slider ${activeMenu ? "slide-active" : ""}`}>
              {/* Main level */}
              <div className="menu-level main-level">
                {navItems.map((item) => (
                  <div key={item.name} className="drawer-item" onClick={() => handleNavClick(item)}>
                    {item.hasDropdown ? (
                      <div className="drawer-link-wrapper">
                        <span>{item.name}</span>
                        <span className="arrow-icon"></span>
                      </div>
                    ) : (
                      <Link to={item.path} onClick={closeAll}>{item.name}</Link>
                    )}
                  </div>
                ))}
                <div className="drawer-footer">
                  <Link to="/contact-us" className="quote-btn mobile-cta" onClick={closeAll}>Request Strategy Briefing</Link>
                </div>
              </div>

              {/* Sub-menu level */}
              <div className="menu-level sub-level">
                {navItems.filter(i => i.hasDropdown).map((item) => (
                  activeMenu === item.name && (
                    <div key={`sub-${item.name}`} className="sub-menu-content">
                      <h3 className="sub-menu-title">{item.name}</h3>
                      <item.component closeMenu={closeAll} />
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="quote-wrapper desktop-only">
          <Link to="/contact-us" className="quote-btn">Request Strategy Briefing</Link>
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
