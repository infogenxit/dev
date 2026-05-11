import React from "react";
import "./TrustSection.css";

const TrustSection = () => {
  const trustItems = [
    {
      title: "30+ Years Experience",
      description: "Our leadership team brings over 30 years of deep IT industry experience, having navigated complex enterprise environments and legacy challenges."
    },
    {
      title: "All-in-One Expertise",
      description: "AI, cloud, automation, data, and custom software development expertise in Brisbane, all in one place. No need for multiple vendors."
    },
    {
      title: "Cross-Industry Success",
      description: "Successfully delivered projects for health, retail, manufacturing, financial, and professional services across Australia."
    },
    {
      title: "Truly Agile Process",
      description: "A streamlined, agile delivery process without heavy project management and administration getting in the way of your results."
    },
    {
      title: "Local Accountability",
      description: "A great team with local responsibility and direct access to senior consultants who understand the Brisbane business landscape."
    },
    {
      title: "Honest Conversation",
      description: "No charge for the first consultation, with no obligation or sales pitch—just an upfront, honest conversation about your needs."
    }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-header">
          <span className="section-label">The Infogenx Difference</span>
          <h2>Why Do Organisations Trust Infogenx for IT Consulting and Technology Delivery?</h2>
          <p style={{ maxWidth: '800px', margin: '20px auto 0', color: '#666', lineHeight: '1.6' }}>
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
