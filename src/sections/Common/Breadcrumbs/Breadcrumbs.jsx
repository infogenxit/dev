import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';
const Breadcrumbs = ({ items = [] }) => {
  // BreadcrumbList Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": (items || []).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.path ? `${process.env.REACT_APP_SITE_URL || 'https://infogenx.com.au'}${item.path}` : undefined
    }))
  };

  return (
    <div className="breadcrumbs-wrapper">
      <nav className="breadcrumbs-nav container" aria-label="Breadcrumb">
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <ol className="breadcrumbs-list">
          <li className="breadcrumb-item">
            <Link title="Home" to="/" className="home-link">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          {(items || []).map((item, index) => (
            <li key={index} className="breadcrumb-item">
              <span className="separator">
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
              {item.path ? (
                <Link title={item.name} to={item.path} className="breadcrumb-link">{item.name}</Link>
              ) : (
                <span className="current">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};


export default Breadcrumbs;

