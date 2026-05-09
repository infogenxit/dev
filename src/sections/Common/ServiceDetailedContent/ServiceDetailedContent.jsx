import React from 'react';
import './ServiceDetailedContent.css';
const ServiceDetailedContent = ({ title, subtitle, sections }) => {
  return (
    <section className="service-detailed-content container">
      <div className="content-header">
        {subtitle && <span className="section-label">{subtitle}</span>}
        <h2 className="main-title">{title}</h2>
      </div>
      <div className="detailed-grid">
        {sections.map((section, index) => (
          <div key={index} className="content-section">
            <h3 className="section-title">{section.heading}</h3>
            <div className="section-body">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
              {section.list && (
                <ul className="section-list">
                  {section.list.map((item, iIndex) => (
                    <li key={iIndex}><strong>{item.label}:</strong> {item.text}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServiceDetailedContent;

