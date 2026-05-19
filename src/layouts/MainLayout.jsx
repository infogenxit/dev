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

  return (
    <div className="App">
      <ScrollToTop />
      <GtmPageViewTracker />
      <RouteSeo />
      <Header />
      <main className={isHome ? "" : "main-subpage"}>{children}</main>
      <StickyContact />
      <Footer />
    </div>
  );
};

export default MainLayout;
