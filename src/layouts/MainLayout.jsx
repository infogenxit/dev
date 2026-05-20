import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import StickyContact from "../components/StickyContact/StickyContact";
import ScrollToTop from "../components/ScrollTop/ScrollToTop";
import RouteSeo from "../components/SEO/RouteSeo";
import GtmPageViewTracker from "../components/Analytics/GtmPageViewTracker";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Check if current route is one of the 4 isolated product landing pages
  const isIsolatedProduct = [
    "/products/stock-management-system",
    "/products/odoo-erp-management-system",
    "/products/retail-pos-management-system",
    "/products/customer-relationship-management-system"
  ].includes(location.pathname);

  return (
    <div className="App">
      <ScrollToTop />
      <GtmPageViewTracker />
      {!isIsolatedProduct && <RouteSeo />}
      {!isIsolatedProduct && <Header />}
      <main className={isHome ? "" : (isIsolatedProduct ? "" : "main-subpage")}>{children}</main>
      {!isIsolatedProduct && <StickyContact />}
      {!isIsolatedProduct && <Footer />}
    </div>
  );
};

export default MainLayout;
