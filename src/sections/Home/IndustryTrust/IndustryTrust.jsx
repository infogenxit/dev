import React from "react";
import "./IndustryTrust.css";
import industryImg from "../../../assets/images/businessimg1.webp"; // Using an existing image

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
          <span className="section-label">Trusted Across Industries</span>
          <h2>Delivering Results That Matter</h2>
          <p>
            We've had the privilege of serving clients across diverse industries throughout Australia, and it makes a real difference. Our work is cross-industry in nature, so we have solutions that work in the real world, not just in theory.
          </p>
          <p>
            We have significant experience with the following industries. Each of these industries has its own regulatory, data and technology issues, and we are familiar with them all.
          </p>
          <div className="industry-list-grid">
            {industries.map((item, index) => (
              <div key={index} className="industry-tag">
                <span className="dot"></span>
                {item}
              </div>
            ))}
          </div>
          <div className="industry-footer-note">
            Our approach is simple: innovation, client-focused and relentless focus on excellence in all we do. We win when you win; that alignment drives everything about how we work.
          </div>
        </div>
        <div className="industry-visual">
          <div className="image-wrapper">
             <img src={industryImg} alt="Industry expertise" />
             <div className="experience-badge">
               <span className="number">30+</span>
               <span className="text">Years Experience</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryTrust;
