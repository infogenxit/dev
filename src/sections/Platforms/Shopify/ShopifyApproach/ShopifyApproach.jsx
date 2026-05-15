import React from "react";
import "./ShopifyApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
const steps = [
  {
    number: "1",
    title: "Understand Business",
    desc: "We start by understanding how your business actually runs — orders, fulfilment, and backend operations.",
  },
  {
    number: "2",
    title: "System Design",
    desc: "We design the entire Shopify ecosystem around your specific workflows, ensuring long-term stability.",
  },
  {
    number: "3",
    title: "Clean Setup",
    desc: "We keep the setup practical and clean, avoiding unnecessary complexity or over-burdened app structures.",
  },
  {
    number: "4",
    title: "Integrate & Automate",
    desc: "We connect your Shopify store to your internal systems and automate repetitive manual tasks.",
  },
  {
    number: "5",
    title: "Scale & Support",
    desc: "We stay involved after launch, helping you improve performance and scale without operational disruption.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Approach</span>
          <h2>Built Around Real eCommerce Operations</h2>
        </div>
        <div className="approach-grid">
          {steps.map((step, index) => (
            <div className="approach-card" key={index}>
              <span className="step-number">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
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
  );
};
export default AppDevApproach;


