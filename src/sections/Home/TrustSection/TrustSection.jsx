import React from "react";
import "./TrustSection.css";

const TrustSection = () => {
  const trustItems = [
    {
      title: "We Speak Business First",
      description: "Technology is a business tool. We don't speak in jargon; we speak in outcomes. Our focus is on how technology can improve your bottom line, not just how it works."
    },
    {
      title: "Hands-on Experience",
      description: "Our team has real-world, enterprise-level experience. We've seen the systems that fail and we know how to build the ones that don't. We bring that knowledge to every Brisbane business we work with."
    },
    {
      title: "Future-Driven",
      description: "We don't just build for today. We design systems that are scalable and flexible, so your technology doesn't become obsolete as your business grows."
    },
    {
      title: "No Contract Lock-ins",
      description: "We believe in the quality of our work. We work on a project or case-by-case basis. If we aren't delivering value, you aren't stuck with us. That's how we ensure we're always doing our best work."
    }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-header">
          <span className="section-label">Why Choose Infogenx</span>
          <h2>Why Do Organisations Trust Infogenx for IT Consulting in Brisbane?</h2>
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
