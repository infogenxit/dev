import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedServices.css';
const RelatedServices = ({ currentService, items }) => {
  const allServices = [
    { 
      name: "Intelligent Automation", 
      path: "/solutions/intelligent-automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation."
    },
    { 
      name: "Modern Application", 
      path: "/solutions/modern-applications",
      description: "Build scalable, cloud-native applications tailored to your business objectives."
    },
    { 
      name: "API Integration", 
      path: "/solutions/api-integration",
      description: "Connect your business ecosystem with seamless API-first solutions."
    },
    { 
      name: "Data & Analytics", 
      path: "/solutions/data-analytics-ai",
      description: "Unlock actionable insights and drive business growth with advanced data analytics."
    },
    { 
      name: "Digital Transformation", 
      path: "/solutions/digital-transformation",
      description: "Transform your business operations and customer experiences with digital solutions."
    }
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


