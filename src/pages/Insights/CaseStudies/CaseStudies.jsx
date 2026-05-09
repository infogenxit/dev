import React from 'react';
import SEO from '../../../components/SEO/SEO';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <>
      <SEO 
        title="Case Studies | Real-World Digital Transformation | Infogenx"
        description="Explore how Infogenx has helped Australian businesses scale with intelligent automation, custom applications, and AI-driven solutions."
      />
      <section className="coming-soon-section">
        <div className="container text-center">
          <span className="section-label">Success Stories</span>
          <h1 className="display-4">Driving Real Impact <br/> <span>Through Digital Innovation</span></h1>
          <p className="lead">
            We are currently documenting our recent success stories with clients across Healthcare, Logistics, and Retail sectors.
          </p>
          <div className="status-badge">
            <span className="dot"></span> Coming Soon
          </div>
          
          <div className="case-study-grid-placeholder">
            {[1, 2, 3].map((i) => (
              <div key={i} className="placeholder-card">
                <div className="shimmer-img"></div>
                <div className="shimmer-content">
                  <div className="line long"></div>
                  <div className="line short"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
