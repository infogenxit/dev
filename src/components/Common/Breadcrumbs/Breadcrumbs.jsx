import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${process.env.REACT_APP_SITE_URL || 'https://infogenx.com.au'}/`
      },
      ...pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const name = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": `${process.env.REACT_APP_SITE_URL || 'https://infogenx.com.au'}${to}`
        };
      })
    ]

  };

  return (
    <nav className="breadcrumbs-nav">
      <div className="breadcrumbs-container">
        <Link to="/">Home</Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

          return last ? (
            <span key={to} className="breadcrumb-current"> / {name}</span>
          ) : (
            <span key={to}>
              {" / "}
              <Link to={to}>{name}</Link>
            </span>
          );
        })}
      </div>

      {/* JSON-LD Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbListSchema)}
      </script>
    </nav>
  );
};

export default Breadcrumbs;
