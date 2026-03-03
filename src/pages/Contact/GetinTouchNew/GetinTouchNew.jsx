import { useState } from "react";
import "./GetinTouchNew.css";
import Header from "../../../components/header/Header";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
const GetinTouch = () => {
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     // Submit to Odoo CRM
  //     const odooResponse = await fetch(
  //       "https://igxerp.infogenx.com/form/submit",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: formData.name,
  //           phone: formData.contactNumber,
  //           email: formData.email,
  //           "entry.720479336": formData.location,
  //           "entry.505898934": formData.desiredService,
  //           message: formData.message,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     );

  //     const data = await odooResponse.json();
  //     console.log("Odoo submission successful:", data);

  //     // Submit to Google Forms
  //     const googleFormUrl =
  //       "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyVw9o6-iQW88bgzL96jD6KHesu3V-J-QkOJQAKRYwVCDj0A/formResponse";
  //     const params = new URLSearchParams();
  //     params.append("entry.1583188992", formData.name);
  //     params.append("entry.59106495", formData.contactNumber);
  //     params.append("entry.1507836294", formData.email);
  //     params.append("entry.1678940442", formData.location);
  //     params.append("entry.645797029", formData.desiredService);
  //     params.append("entry.2000705636", formData.message);

  //     await fetch(googleFormUrl, {
  //       method: "POST",
  //       mode: "no-cors",
  //       body: params,
  //     });

  //     console.log("Google Form submission successful");

  //     // Show thank you message
  //     setShowThankYou(true);

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       contactNumber: "",
  //       email: "",
  //       location: "",
  //       desiredService: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
 const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://crm.zoho.com/crm/WebToLeadForm";
      form.acceptCharset = "UTF-8";

      const fields = {
        xnQsjsdp: "af3cd41b6fd1aa90e4cec5492096c20a4411ab7cf9ab23d4f6ae4a8643797cd9",
        xmIwtLD: "1b4554fa9405e9208d337cd1c20b7f3adfb42ead74dc2ee63873bdc69ba330e92386b33d783c8612d3e84405828f035f",
        actionType: "TGVhZHM=",
        returnURL: "https://infogenx.com/contact-us",

        // ✅ Only default Zoho fields
        "Last Name": formData.lastName,
        "Email": formData.businessEmail,
        "Company": formData.companyName,
        "Phone": formData.phone,

        // ✅ Put EVERYTHING else inside Description
        "Description": `
      Designation: ${formData.designation}
      Organisation Size: ${formData.organisationSize}
      Primary Objective: ${formData.businessObjective}
      Budget: ${formData.transformationBudget}
      Ecosystem: ${formData.techStack.join(", ")}
      Challenge: ${formData.message}
      `
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Show thank you message
      setShowThankYou(true);

      // Reset form state correctly
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
        phone: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Infogenx | Book an AI & Automation Call</title>
        <meta
          name="description"
          content="Get in touch with Infogenx to discuss your digital transformation goals, request a demo, or book an Australian-led strategy consultation."
        />
        <meta
          name="keywords"
          content="contact AI & Automation Australia company, IT strategy call Australia"
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
    <p className="intro-subtext">Partner with Infogenx to architect high-yield, AI-integrated 
      roadmaps across Microsoft, Zoho, and Global SaaS ecosystems. Tailored for leaders in Australia and India looking to optimize capital, eliminate operational silos, and capture dominant market share</p>
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
              <option value="Operational Efficiency">Operational Efficiency</option>
              <option value="Revenue Growth">Revenue Growth</option>
              <option value="Cost Optimisation">Cost Optimisation</option>
              <option value="AI Adoption">AI Adoption</option>
              <option value="System Consolidation">System Consolidation</option>
            </select>

            <select
              name="transformationBudget"
              value={formData.transformationBudget}
              onChange={handleChange}
              required
            >
              <option value="">Estimated Transformation Budget (AUD) *</option>
              <option value="Under $100k">Under $100k</option>
              <option value="$100k-$250k">$100k – $250k</option>
              <option value="$250k-$500k">$250k – $500k</option>
              <option value="$500k+">$500k+</option>
            </select>
          </div>
  <div className="tech-stack-container">
    <label>Current Technology Stack (Select all that apply) *</label>

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
          "Xero"
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

  <button type="submit" className="submit-btn" disabled={isSubmitting}>
    {isSubmitting ? "Processing..." : "REQUEST STRATEGY BRIEFING"}
  </button>

  

</form>

            </div>
          ) : (
            <div className="thank-you-message">
              <h3>Thank You!</h3>
              <p>
                Your message has been successfully submitted. We'll get back to
                you soon!
              </p>
              <button onClick={() => setShowThankYou(false)}>
                Submit Another Message
              </button>
            </div>
          )}
        </div>
       {/* COLUMN 3 (Right): Fast Facts & AI Insights */}
          <div className="side-content right-facts">
            <div className="fact-card">
              <h4>Fast Facts</h4>
              

  <p className="mini-heading">Why Leaders Engage Us</p>

  
              <ul>
                <li><strong>Cross-Border Capability:</strong> Integrated delivery teams across Australia and India ensuring 24/7 operational continuity.</li>
                <li><strong>High-Yield Architecture:</strong> Specializing in $100k–$500k+ enterprise transformations that prioritize ROI over simple automation.</li>
                <li><strong>Ecosystem Neutrality:</strong> Expert-level integration across Microsoft, Zoho, Shopify, and Odoo to eliminate data silos.</li>
              </ul>
            </div>

           <div className="did-you-know-card">
            <h4>Did you know?</h4>
            <p>Enterprises that fail to integrate AI... face a 30% higher cost-of-capital...</p>
            <p className="highlight-text">We don't just automate tasks; we optimize your valuation.</p>
          </div>
            <div className="nda-shield-box">
      <span className="shield-icon">🛡️</span>
      <p>All strategy briefings are conducted under strict NDA protocols.</p>
   </div>
        </div> {/* Closing side-content */}
      </div> {/* Closing quote-main-layout - THIS WAS LIKELY MISSING OR MISPLACED */}
<div className="global-delivery-section">
        
        {/* 1. Background Map */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
          alt="Global Delivery Map" 
          className="global-map-bg"
        />

    <svg className="map-connection-svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
    <defs>
        <filter id="glow-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        
        {/* Arrowhead Marker Definition */}
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="8" refY="3.5" orient="auto">
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
    <circle cx="690" cy="205" r="5" fill="#F36B2A" filter="url(#glow-effect)" />
</svg>
        {/* 3. Text Content */}
        <div className="global-content">
          <h2 className="global-title">GLOBAL DELIVERY. LOCAL ACCOUNTABILITY.</h2>
          <p className="global-subtitle">Seamless integration across borders.</p>

          <div className="insight-box">
            {/* Opening Quote */}
            <span className="quote-icon-left">“</span>
            
            <h5>AI COST-OF-CAPITAL INSIGHT BLOCK</h5>
            <p>
              Enterprises that fail to integrate AI by 2026 face 30% higher cost-of-capital.
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
      <Footer />
    </>
  );
};
export default GetinTouch;