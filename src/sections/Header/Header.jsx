import { useState, useEffect } from "react";
import { NavLink } from "../../components/Common/NavLink";
import "./Header.css?v=202605141743";
import "../../styles/variables.css";
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

  // Close drawer on Escape key for accessibility
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && menuOpen) closeAll();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navItems = [
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true, component: ServicesDropdown },
    { name: "Solutions", path: "/solutions", hasDropdown: true, component: SolutionsDropdown },
    { name: "Industries", path: "/industries", hasDropdown: true, component: IndustriesDropdown },
    { name: "Platforms", path: "/platforms", hasDropdown: true, component: PlatformsDropdown },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Insights", path: "/insights", hasDropdown: true, component: InsightDropdown },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="header" aria-label="Main navigation">
      <div className="header-container">
        <NavLink className="logo" toKey="home" onClick={closeAll} aria-label="Home">
          <img src={logo} alt="Infogenx Logo" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" role="navigation">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="nav-item-desktop"
              onMouseEnter={() => item.hasDropdown && setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <NavLink to={item.path} className="nav-link">{item.name}</NavLink>
              {item.hasDropdown && activeMenu === item.name && (
                <div className="dropdown-container">
                  <item.component closeMenu={closeAll} />
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="quote-wrapper desktop-only">
          <NavLink to="/contact-us" className="quote-btn">Request Strategy Briefing</NavLink>
        </div>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleDrawer} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </div>
      </div>

      {/* Mobile Navigation Drawer - Moved outside header-container to fix stacking context */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation drawer">
        <div className="drawer-header">
          {activeMenu ? (
            <button className="back-btn" onClick={() => setActiveMenu(null)} aria-label="Back to main menu">
              <span className="back-icon" /> Back
            </button>
          ) : (
            <div className="drawer-logo">
              <img src={logo} alt="Logo" />
            </div>
          )}
          <div className="close-drawer" onClick={closeAll} aria-label="Close drawer">&times;</div>
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
                      <span className="arrow-icon" />
                    </div>
                  ) : (
                    <NavLink to={item.path} onClick={closeAll}>{item.name}</NavLink>
                  )}
                </div>
              ))}
              <div className="drawer-footer">
                <NavLink to="/contact-us" className="quote-btn mobile-cta" onClick={closeAll}>Request Strategy Briefing</NavLink>
              </div>
            </div>

            {/* Sub‑menu level */}
            <div className="menu-level sub-level">
              {navItems.filter(i => i.hasDropdown).map((item) =>
                activeMenu === item.name && (
                  <div key={`sub-${item.name}`} className="sub-menu-content">
                    <h3 className="sub-menu-title">{item.name}</h3>
                    <item.component closeMenu={closeAll} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={closeAll} aria-label="Overlay" />}
    </header>
  );
};

export default Header;
