import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedServices.css';

const RelatedServices = ({ currentService }) => {
  const allServices = [
    { name: "Intelligent Automation", path: "/solutions/intelligent-automation" },
    { name: "Modern Application", path: "/solutions/modern-application" },
    { name: "Cloud Engineering", path: "/solutions/cloud-engineering" },
    { name: "Data & Analytics", path: "/solutions/data-analytics" },
    { name: "AI Strategy", path: "/solutions/ai-strategy" }
  ];

  const filteredServices = allServices
    .filter(service => service.path !== currentService)
    .slice(0, 3);

  return (
    <section className="related-services-section container">
      <h2 className="related-title">Explore Related Solutions</h2>
      <div className="related-grid">
        {filteredServices.map((service, index) => (
          <Link key={index} to={service.path} className="related-card">
            <h3>{service.name}</h3>
            <span className="learn-more">Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedServices;
