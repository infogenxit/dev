import React from "react";
import "./TrustSection.css";

const TrustSection = () => {
  const trustItems = [
    {
      title: "30+ Years Experience",
      description: "Over 30 years of IT industry experience in the leadership team, ensuring your projects are guided by seasoned veterans who have seen it all."
    },
    {
      title: "All-in-One Expertise",
      description: "AI, cloud, automation, data and custom software development expertise in Brisbane, all in one place. No need for multiple vendors."
    },
    {
      title: "Cross-Industry Success",
      description: "Delivered projects successfully for health, retail, manufacturing, financial and professional services across Australia."
    },
    {
      title: "Truly Agile Process",
      description: "We focus on delivery, with no heavy project management or administration getting in the way of your results."
    },
    {
      title: "Local Responsibility",
      description: "Great team with local responsibility and direct access to senior consultants who understand the Brisbane market."
    },
    {
      title: "Honest Consultation",
      description: "No charge for the first consultation. No obligation, no sales pitch—just an upfront, honest conversation about your needs."
    }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-header">
          <span className="section-label">What Sets Us Apart</span>
          <h2>Why Do Organisations Trust Infogenx for IT Consulting and Technology Delivery?</h2>
          <p style={{ marginTop: "20px", color: "#666", maxWidth: "800px", margin: "20px auto 0" }}>
            There are lots of IT companies. What sets us apart is simple: we are practitioners, not just consultants. We have the experience of delivery to back up our recommendations, and we stick around until the job is done.
          </p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <div className="trust-card" key={index}>
              <div className="trust-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

