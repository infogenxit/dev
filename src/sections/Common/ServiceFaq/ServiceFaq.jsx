import React, { useState } from 'react';
import './ServiceFaq.css';
const ServiceFaq = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // FAQPage Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <section className="service-faq-section container">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServiceFaq;

