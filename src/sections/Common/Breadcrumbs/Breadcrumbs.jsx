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
    <nav className="breadcrumbs-nav container" aria-label="Breadcrumb">
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      <ol className="breadcrumbs-list">
        <li>
          <Link title="Home" to="/">Home</Link>
        </li>
        {(items || []).map((item, index) => (
          <li key={index}>
            <span className="separator">/</span>
            {item.path ? (
              <Link title={item.name} to={item.path}>{item.name}</Link>
            ) : (
              <span className="current">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default Breadcrumbs;

