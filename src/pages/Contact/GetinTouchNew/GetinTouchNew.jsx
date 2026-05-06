import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./GetinTouchNew.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import indiaFlag from "../../../assets/images/india-flag.png";
import australiaFlag from "../../../assets/images/australia-flags.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

/** Must match `contactformzoho.html` (Zoho export) — do not rename fields. */
const ZOHO_CONTACTUS_SUBMIT_URL =
  "https://forms.zohopublic.in/infogenxprivatelimited1/form/ContactUs/formperma/swlzQv4WOiaDG1SDRx3_1N7T17S9SQfTFt2q6N6Qy6U/htmlRecords/submit";

/** Target for Zoho POST so the SPA does not navigate away (thank-you + redirect work). */
const ZOHO_SUBMIT_IFRAME_NAME = "zohoContactSubmitFrame";

const GetinTouch = () => {
  const navigate = useNavigate();
  const homeRedirectTimerRef = useRef(null);

  const [formData, setFormData] = useState({
    lastName: "",
    businessEmail: "",
    companyName: "",
    designation: "",
    organisationSize: "",
    businessObjective: "",
    primaryTech: "",
    techStack: [],
    transformationBudget: "",
    message: "",
    phone: "+61 ",
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearHomeRedirectTimer = () => {
    if (homeRedirectTimerRef.current) {
      clearTimeout(homeRedirectTimerRef.current);
      homeRedirectTimerRef.current = null;
    }
  };

  const goHome = () => {
    clearHomeRedirectTimer();
    navigate("/");
  };

  useEffect(() => {
    if (!showThankYou) return undefined;
    clearHomeRedirectTimer();
    homeRedirectTimerRef.current = setTimeout(() => {
      homeRedirectTimerRef.current = null;
      navigate("/");
    }, 3500);
    return () => {
      clearHomeRedirectTimer();
    };
  }, [showThankYou, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle the Technology Stack array
      setFormData((prev) => {
        const currentStack = prev.techStack || [];
        const newStack = checked
          ? [...currentStack, value] // Add if checked
          : currentStack.filter((item) => item !== value);
        return { ...prev, techStack: newStack };
      });
    } else {
      // Handle standard inputs and dropdowns
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };



  // Zoho ContactUs — same fields as the embedded form; UI stays React/CSS.
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = ZOHO_CONTACTUS_SUBMIT_URL;
      form.acceptCharset = "UTF-8";
      form.enctype = "multipart/form-data";

      const addField = (name, value) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value ?? "";
        form.appendChild(input);
      };

      addField("zf_referrer_name", typeof document !== "undefined" ? document.referrer || "" : "");
      addField("zf_redirect_url", "https://infogenx.com/contact-us");
      addField("zc_gad", "");

      const fullName = formData.lastName.trim();
      const parts = fullName.split(/\s+/).filter(Boolean);
      let firstName = "";
      let lastName = "";
      if (parts.length) {
        firstName = parts[0];
        lastName = parts.length > 1 ? parts.slice(1).join(" ") : parts[0];
      }

      addField("Name_First", firstName);
      addField("Name_Last", lastName);
      addField("PhoneNumber_countrycode", formData.phone.trim());
      addField("SingleLine", formData.companyName);
      addField("Email", formData.businessEmail);
      addField("Dropdown", formData.organisationSize);
      addField("Dropdown1", formData.businessObjective);
      addField("Dropdown2", formData.designation);
      addField("Dropdown3", formData.transformationBudget);
      (formData.techStack || []).forEach((tech) => addField("Checkbox", tech));
      addField("MultiLine", formData.message);

      form.target = ZOHO_SUBMIT_IFRAME_NAME;
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        if (form.parentNode) form.parentNode.removeChild(form);
      }, 2000);

      setFormData({
        lastName: "",
        businessEmail: "",
        companyName: "",
        designation: "",
        organisationSize: "",
        businessObjective: "",
        primaryTech: "",
        techStack: [],
        transformationBudget: "",
        message: "",
        phone: "+61 ",
      });
      setShowThankYou(true);
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <iframe
        title="Zoho form submit"
        name={ZOHO_SUBMIT_IFRAME_NAME}
        className="zoho-submit-hidden-frame"
      />
      <Helmet>
        <title>Contact Infogenx | Get AI & IT Solutions Today</title>
        <meta
          name="description"
          content="Contact Infogenx to discuss your project and discover how AI, automation, and software solutions can help your business grow."
        />
        <meta
          name="keywords"
          content="contact Infogenx, IT consultation, software services inquiry, AI solutions contact"
        />
      </Helmet>
      <Header />
      <div className="page-intro-header container">
        <style>
          {`
      div.page-intro-header.container h1.main-headline {
        font-size: 28px !important;
      }
      @media (max-width: 1024px) {
        div.page-intro-header.container h1.main-headline {
          font-size: 28px !important;
        }
      }
    `}
        </style>
        <h1 className="main-headline">
          ORCHESTRATE GROWTH:STRATEGIC AI INTEGRATION FOR MODERN ECOSYSTEMS
        </h1>
        <p className="intro-subtext">
          Partner with Infogenx to architect high-yield, AI-integrated roadmaps
          across Microsoft, Zoho, and Global SaaS ecosystems. Tailored for
          leaders in Australia and India looking to optimize capital, eliminate
          operational silos, and capture dominant market share
        </p>
      </div>
      <div className="quote-main-layout">
        <div className="contact-form-container">
          <h2 className="contact-title">
            REQUEST A CONFIDENTIAL STRATEGY BRIEFING
          </h2>
          {!showThankYou ? (
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Full Name *"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <div className="phone-input-wrapper">
                    <img
                      src="https://flagcdn.com/w40/au.png"
                      alt="Australia Flag"
                      className="flag-icon"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name *"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="businessEmail"
                    placeholder="Business Email *"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    required
                  />

                  <select
                    name="organisationSize"
                    value={formData.organisationSize}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Organisation Size *</option>
                    <option value="1-10">1–10</option>
                    <option value="10-50">10–50</option>
                    <option value="50-200">50–200</option>
                    <option value="200-1000">200–1000</option>
                    <option value="1000+">1000+</option>
                  </select>

                  <select
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Designation / Role *</option>
                    <option value="CEO">CEO</option>
                    <option value="COO">COO</option>
                    <option value="CIO">CIO</option>
                    <option value="Director">Director</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="tech-split-section">
                  <div className="objective-budget-wrapper">
                    <select
                      name="businessObjective"
                      value={formData.businessObjective}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Primary Business Objective *</option>
                      <option value="Operational Efficiency">
                        Operational Efficiency
                      </option>
                      <option value="Revenue Growth">Revenue Growth</option>
                      <option value="Cost Optimisation">
                        Cost Optimisation
                      </option>
                      <option value="AI Adoption">AI Adoption</option>
                      <option value="System Consolidation">
                        System Consolidation
                      </option>
                    </select>

                    <select
                      name="transformationBudget"
                      value={formData.transformationBudget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Estimated Transformation Budget (AUD) *
                      </option>
                      <option value="Under $100k">Under $100k</option>
                      <option value="$100k - $250k">$100k – $250k</option>
                      <option value="$250 - $500k">$250k – $500k</option>
                      <option value="$500k">$500k+</option>
                    </select>
                  </div>
                  <div className="tech-stack-container">
                    <label>
                      Current Technology Stack (Select all that apply) *
                    </label>

                    <div className="tech-layout-wrapper">
                      <div className="checkbox-grid">
                        {[
                          "Microsoft",
                          "Shopify",
                          "Other",
                          "Zoho",
                          "Odoo",
                          "Manual/Excel",
                          "Salesforce",
                          "HubSpot",
                          "Xero",
                        ].map((tech) => (
                          <label key={tech} className="checkbox-label">
                            <input
                              type="checkbox"
                              name="techStack"
                              value={tech}
                              onChange={handleChange}
                              checked={formData.techStack.includes(tech)}
                            />
                            {tech}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Message - Full Width */}
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Describe your current transformation challenge *"
                  className="full-width"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "REQUEST STRATEGY BRIEFING"}
                </button>
              </form>
            </div>
          ) : null}
        </div>
        {/* COLUMN 3 (Right): Fast Facts & AI Insights */}
        <div className="side-content right-facts">
          <div className="fact-card">
            <h4>Fast Facts</h4>

            <p className="mini-heading">Why Leaders Engage Us</p>

            <ul>
              <li>
                <strong>Cross-Border Capability:</strong> Integrated delivery
                teams across Australia and India ensuring 24/7 operational
                continuity.
              </li>
              <li>
                <strong>High-Yield Architecture:</strong> Specializing in
                $100k–$500k+ enterprise transformations that prioritize ROI over
                simple automation.
              </li>
              <li>
                <strong>Ecosystem Neutrality:</strong> Expert-level integration
                across Microsoft, Zoho, Shopify, and Odoo to eliminate data
                silos.
              </li>
            </ul>
          </div>

          <div className="did-you-know-card">
            <h4>Did you know?</h4>
            <p>
              Enterprises that fail to integrate AI... face a 30% higher
              cost-of-capital...
            </p>
            <p className="highlight-text">
              We don't just automate tasks; we optimize your valuation.
            </p>
          </div>
          <div className="nda-shield-box">
            <span className="shield-icon">🛡️</span>
            <p>
              All strategy briefings are conducted under strict NDA protocols.
            </p>
          </div>
        </div>{" "}
        {/* Closing side-content */}
      </div>{" "}
      {/* Closing quote-main-layout - THIS WAS LIKELY MISSING OR MISPLACED */}
      {/*Locatios */}
      <div className="global-locations-container">
        <h2>Global Locations</h2>
        <div className="global-locations">
          <div className="location-box">
            <div className="location-box-header">
              <img src={indiaFlag} alt="India Flag" className="flag-icon" />
              <h3>India Office</h3>
            </div>
            <p>
              <FaLocationDot /> &nbsp; Spaces Olympia, 10th Floor, Citius A
              Block, Phase 1, Plot No. 1, Sidco Industrial Estate, Guindy,
              Chennai, Tamil Nadu 600032
            </p>
            <p>
              <FaPhone /> &nbsp; +91 9787806366
            </p>
            <p>
              {" "}
              <FaEnvelope /> &nbsp;{" "}
              <a
                href="mailto:reachus@infogenx.com"
                style={{ color: "#00123C", textDecoration: "none" }}
              >
                reachus@infogenx.com
              </a>
            </p>
          </div>

          <div className="location-box">
            <div className="location-box-header">
              <img
                src={australiaFlag}
                alt="Australia Flag"
                className="flag-icon"
              />
              <h3>Australia Office</h3>
            </div>
            <p>
              <FaLocationDot /> &nbsp; 17 View Street, Mount Gravatt East,
              Brisbane, Queensland, Upper Mount Gravatt QLD 4122, Australia
            </p>
            <p>
              <FaPhone /> &nbsp; +61 403339424{" "}
            </p>
            <p>
              {" "}
              <FaEnvelope /> &nbsp;{" "}
              <a
                href="mailto:reachus@infogenx.com"
                style={{ color: "#00123C", textDecoration: "none" }}
              >
                reachus@infogenx.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="global-delivery-section">
        {/* 1. Background Map */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
          alt="Global Delivery Map"
          className="global-map-bg"
        />

        <svg
          className="map-connection-svg"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
        >
          <defs>
            <filter
              id="glow-effect"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Arrowhead Marker Definition */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="8"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#F36B2A" />
            </marker>
          </defs>

          {/* 🔥 PATH: Adjusted up and left to hit the Indian landmass (Chennai) */}
          <path
            d="M 690 205 Q 760 250, 860 360"
            stroke="#F36B2A"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,6"
            strokeLinecap="round"
            opacity="0.8"
            markerEnd="url(#arrowhead)"
          />

          {/* 🔴 Dot: Moved to X=690, Y=205 (Chennai, India) */}
          <circle
            cx="690"
            cy="205"
            r="5"
            fill="#F36B2A"
            filter="url(#glow-effect)"
          />
        </svg>
        {/* 3. Text Content */}
        <div className="global-content">
          <h2 className="global-title">
            GLOBAL DELIVERY. LOCAL ACCOUNTABILITY.
          </h2>
          <p className="global-subtitle">
            Seamless integration across borders.
          </p>

          <div className="insight-box">
            {/* Opening Quote */}
            <span className="quote-icon-left">“</span>

            <h5>AI COST-OF-CAPITAL INSIGHT BLOCK</h5>
            <p>
              Enterprises that fail to integrate AI by 2026 face 30% higher
              cost-of-capital.
              <br />
              <span style={{ color: "#F36B2A", fontWeight: "700" }}>
                We don't just automate tasks, we optimize your valuation.
              </span>
            </p>

            {/* 🔥 Closing Quote (Added) */}
            <span className="quote-icon-right">”</span>
          </div>
        </div>
      </div>
      {showThankYou && (
        <div
          className="contact-thankyou-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-thankyou-title"
        >
          <div className="contact-thankyou-modal thank-you-message">
            <h3 id="contact-thankyou-title">Thank you!</h3>
            <p>
              Your message has been submitted successfully. We&apos;ll get back
              to you soon.
            </p>
            <p className="contact-thankyou-sub">
              You&apos;ll be taken to the home page in a few seconds.
            </p>
            <div className="contact-thankyou-actions">
              <button type="button" className="submit-btn" onClick={goHome}>
                Go to home
              </button>
              <button
                type="button"
                className="contact-thankyou-secondary"
                onClick={() => {
                  clearHomeRedirectTimer();
                  setShowThankYou(false);
                }}
              >
                Submit another message
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
export default GetinTouch;
