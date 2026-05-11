import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Router from "./route";
import "./styles/App.css";

function App() {
  useEffect(() => {
    const widgetCode = process.env.REACT_APP_ZOHO_SALESIQ_WIDGET_CODE;
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    if (!widgetCode || isLocalhost) return;

    // Interaction-first lazy load: Googlebot never interacts → widget never loads for bots
    const loadSalesIQ = () => {
      if (document.getElementById("zsiqscript")) return;
      window.$zoho = window.$zoho || {};
      window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };
      const script = document.createElement("script");
      script.id = "zsiqscript";
      script.src = `https://salesiq.zohopublic.in/widget?wc=${widgetCode}`;
      script.defer = true;
      document.body.appendChild(script);
    };

    const events = ['mousemove', 'scroll', 'keydown', 'touchstart', 'click'];
    const handleInteraction = () => {
      loadSalesIQ();
      events.forEach(e => window.removeEventListener(e, handleInteraction));
      clearTimeout(fallbackTimer);
    };

    events.forEach(e => window.addEventListener(e, handleInteraction, { passive: true }));
    const fallbackTimer = setTimeout(() => { loadSalesIQ(); events.forEach(e => window.removeEventListener(e, handleInteraction)); }, 8000);

    return () => {
      events.forEach(e => window.removeEventListener(e, handleInteraction));
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
