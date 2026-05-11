import React from "react";
import "./IndustryTrust.css";

const IndustryTrust = () => {
  const industries = [
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Financial Services",
    "Logistics",
    "Professional Services",
    "Government"
  ];

  return (
    <section className="industry-trust">
      <div className="industry-container">
        <div className="industry-content">
          <span className="section-label">Our Industry Footprint</span>
          <h2>Trusted Across Industries: Delivering Results That Matter</h2>
          <p>
            We've had the privilege of serving clients across diverse industries throughout Australia, and it makes a real difference. Our work is cross-industry in nature, so we have solutions that work in the real world, not just in theory.
          </p>
          <p>
            We have significant experience with the healthcare, manufacturing, retail & e-commerce, financial services, logistics, professional services and government industries. Each of these industries has its own regulatory, data and technology issues, and we are familiar with them all.
          </p>
          <p className="industry-footer-text">
            Our approach is simple: innovation, client-focused and relentless focus on excellence in all we do. We win when you win; that alignment drives everything about how we work.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div className="industry-item" key={index}>
              <div className="industry-dot"></div>
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTrust;
