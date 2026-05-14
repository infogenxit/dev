import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Router from ./"route";
import ScrollToTop from ./"components/ScrollToTop/ScrollToTop";
import "./styles/App.css";

function App() {
  useEffect(() => {
    // Other global initializations can go here
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
