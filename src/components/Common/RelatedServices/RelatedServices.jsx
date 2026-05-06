import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedServices.css';

const RelatedServices = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <section className="related-services-section">
      <div className="related-container">
        <h2 className="related-title">Explore Related Solutions</h2>
        <div className="related-grid">
          {items.map((item, index) => (
            <Link key={index} to={item.link} className="related-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="learn-more">Learn More ↗</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
