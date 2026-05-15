import React from "react";
import "./Products.css";
import AppcornerAssent from "../../assets/images/appcorner.webp";
import { AiOutlineStock } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";

import CtaBanner from "../../sections/Home/CtaBanner/CtaBanner";
import { useState } from "react";
import DemoPopup from "./DemoPopup";

import SEO from "../../components/SEO/SEO";
import AboutCornerAccent from "../../assets/images/about-corner-accent.webp";

const Products = () => {
  const navigate = useNavigate();
  const steps = [
    {
      number: "1",
      icon: <AiOutlineStock />,
      title: "Inventory & ERP Solutions",
      desc: "Stock, ERP, and Odoo systems that improve control, automate workflows, and support scalable business operations.",
      btn1: "/products/stock-management-system",
      demo: {
        loginUrl: "https://stockmgmt.infogenx.com/login.php",
        email: "admin@gmail.com",
        password: "admin",
      },
    },

    {
      number: "2",
      icon: <FaLaptopCode />,
      title: "ODOO ERP",
      desc: "Our ERP software integrates various functions into one complete system to streamline processes and information across the entire application which helps you manage day-to-day business activities.",
      btn1: "/products/odoo-erp-management-system",
      demo: {
        loginUrl:
          "https://igxerp.infogenx.com/web/login?_gl=1*nmuj0q*_ga*MTAyMjU4OTU4LjE3NjgxNDcwMzI.*_ga_97FMVFGS43*czE3Njk2MDcwMzUkbzEzJGcxJHQxNzY5NjA3ODIxJGo2MCRsMCRoMTg1ODg1MTkzOA..",
        email: "infogenx",
        password: "12345",
      },
    },
    {
      number: "3",
      title: "Retail POS",
      icon: <FaChartBar />,
      desc: "Our hospital management system is an integrated healthcare solution which includes Pharmacy, OP Management,Laboratory Information System, Insurance And Corporate Billing and much more.",
      btn1: "/products/retail-pos-management-system",
      demo: {
        loginUrl:
          "https://pos.infogenx.com/?_gl=1*sob463*_ga*MTAyMjU4OTU4LjE3NjgxNDcwMzI.*_ga_97FMVFGS43*czE3Njk2MDcwMzUkbzEzJGcxJHQxNzY5NjA3ODIxJGo2MCRsMCRoMTg1ODg1MTkzOA..",
        email: "admin@gmail.com",
        password: "admin",
      },
    },
    {
      number: "4",
      icon: <FaUserGear />,
      title: "Customer Relationship Management",
      desc: "Customer relationship management (CRM) is the combination of practices, strategies and technologies that companies use to manage and analyze customer interactions and data throughout the customer lifecycle, with the goal of improving customer service relationships and assisting in customer retention and driving sales growthin.",
      btn1: "/products/customer-relationship-management-system",
      demo: {
        loginUrl:
          "https://crm.infogenx.com/index.php?action=Login&module=Users&_gl=1*sob463*_ga*MTAyMjU4OTU4LjE3NjgxNDcwMzI.*_ga_97FMVFGS43*czE3Njk2MDcwMzUkbzEzJGcxJHQxNzY5NjA3ODIxJGo2MCRsMCRoMTg1ODg1MTkzOA..",
        email: "admin",
        password: "admin",
      },
    },
  ];
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <>
      <SEO
        title="Automation Software Products & Custom Solutions for Startups & Enterprises in Brisbane, Australia | Infogenx"
        description="Explore Infogenx’s innovative IT products designed to streamline operations, enhance efficiency, and drive business growth across Australia."
        keywords="Australian IT consulting, AI solutions Australia, digital transformation services, AI-enabled intelligent automation,intelligent process automation solutions,AI application development Australia,AI-enabled business applications,application modernisation Australia,enterprise application transformation"
      />


      <section className="product-WebDev-hero">
        <img
          alt="corner accent"
          className="about-corner-accent"
          src={AppcornerAssent}
        ></img>
        <div className="product-WebDev-hero-container">
          <div className="hero-intro-label">
            <span className="section-label">Readymade Software Solutions</span>
          </div>
          <h1 className="product-products-hero-heading">
            <span>Business Software Built for Real Operations</span>
          </h1>

          <p className="product-WebDev-hero-description">
            Ready-to-deploy business applications for Australian organisations
            looking to automate workflows, improve visibility, and scale with
            confidence.
          </p>

          <div className="WebDev-hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Explore Our Products
            </button>
            <button
              className="secondary-btn"
              onClick={() => navigate("/contact-us")}
            >
              Talk to an Expert
            </button>
          </div>

        </div>
      </section>



      <section className="product-approach-section">
        <div className="approach-container">

          <div className="approach-header">
            <span className="app-section-label">Readymade Softwares</span>
            <h2><span>Solutions Built for Real Operations</span></h2>
          </div>


          <div className="approach-grid">
            {steps.map((step, index) => (
              <div className="product-approach-card" key={index}>
                <div className="approach-card-content">
                  <span className="product-step-number">{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                  <span className="product-icon">{step.icon}</span>
                </div>
                <div className="approach-card-button">
                  <button
                    onClick={() => window.open(step.btn1, "_blank")}
                    className="try-btn"
                  >
                    Try for free
                  </button>

                  <button
                    className="demo-btn"
                    onClick={() => setActiveDemo(step)}
                  >
                    Show Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>


        <img
          src={AppcornerAssent}
          alt="corner accent"
          className="app-corner-accent"
        />
      </section>
      <CtaBanner />
      {activeDemo && (
        <DemoPopup data={activeDemo} onClose={() => setActiveDemo(null)} />
      )}
    </>
  );
};

export default Products;
