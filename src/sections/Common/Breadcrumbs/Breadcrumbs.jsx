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

  return null; // Breadcrumbs temporarily disabled as per user request
};


export default Breadcrumbs;


