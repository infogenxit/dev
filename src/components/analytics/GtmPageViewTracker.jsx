import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GtmPageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: "page_view",
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
};

export default GtmPageViewTracker;
