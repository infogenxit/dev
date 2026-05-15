import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedServices.css';
const RelatedServices = ({ currentService, items }) => {
  const allServices = [
    { name: "Intelligent Automation", path: "/solutions/intelligent-automation" },
    { name: "Modern Application", path: "/solutions/modern-applications" },
    { name: "API Integration", path: "/solutions/api-integration" },
    { name: "Data & Analytics", path: "/solutions/data-analytics-ai" },
    { name: "Digital Transformation", path: "/solutions/digital-transformation" }
  ];
  const filteredServices = items || allServices
    .filter(service => service.path !== currentService)
    .slice(0, 3);
  return (
    <section className="related-services-section container">
      <h2 className="related-title">Explore Related Solutions</h2>
      <div className="related-grid">
        {filteredServices.map((service, index) => (
          <Link key={index} to={service.path || service.link} className="related-card">
            <h3>{service.name || service.title}</h3>
            {service.description && <p>{service.description}</p>}
            <span className="learn-more">Learn More →</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default RelatedServices;


