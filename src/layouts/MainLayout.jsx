import React from "react";
import Header from "../sections/Header/Header";
import Footer from "../sections/Footer/Footer";
import StickyContact from "../components/StickyContact/StickyContact";
import ScrollToTop from "../components/ScrollTop/ScrollToTop";
import RouteSeo from "../components/SEO/RouteSeo";
import GtmPageViewTracker from "../components/analytics/GtmPageViewTracker";

const MainLayout = ({ children }) => {
  return (
    <div className="App">
      <ScrollToTop />
      <GtmPageViewTracker />
      <RouteSeo />
      <Header />
      <main>{children}</main>
      <StickyContact />
      <Footer />
    </div>
  );
};

export default MainLayout;
