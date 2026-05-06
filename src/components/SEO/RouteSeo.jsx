import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// const SITE_URL = "https://infogenx.com.au";
// const GLOBAL_URL = "https://infogenx.com";
const SITE_URL = process.env.REACT_APP_SITE_URL || "https://infogenx.com.au";
const GLOBAL_URL = process.env.REACT_APP_GLOBAL_URL || "https://infogenx.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/infogenx-title-icon.png`;
const DEFAULT_DESCRIPTION =
  "Infogenx delivers apps, automation, AI, and data solutions for modern businesses in Australia.";

const canonicalPathByRoute = {
  "/contact-us/get-in-touch": "/contact-us",
};

const RouteSeo = () => {
  const location = useLocation();
  const normalizedPathname =
    location.pathname.length > 1 && location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;
  const canonicalPath =
    canonicalPathByRoute[normalizedPathname] ?? normalizedPathname;
  const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const globalUrl = `${GLOBAL_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;
  
  const robotsContent =
    location.pathname === "/contact-us/get-in-touch"
      ? "noindex, follow"
      : "index, follow";

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Infogenx",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo192.png`,
    "sameAs": [
      "https://www.linkedin.com/company/infogenx/",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": process.env.REACT_APP_CONTACT_PHONE || "+61 403 331 910",
      "email": process.env.REACT_APP_CONTACT_EMAIL || "contactus@infogenx.com",
      "contactType": process.env.REACT_APP_CONTACT_TYPE || "customer service",
      "areaServed": process.env.REACT_APP_CONTACT_AREA_SERVED || "AU",
      "availableLanguage": process.env.REACT_APP_CONTACT_LANG || "en"
    }
  };

  // Service Schema (Global Technical Task)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation & Application Development",
    "provider": {
      "@type": "Organization",
      "name": "Infogenx"
    },
    "areaServed": {
      "@type": "Country",
      "name": process.env.REACT_APP_CONTACT_AREA_SERVED === "Global" ? "Worldwide" : "Australia"
    },

    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Application Development"
          }
        }
      ]
    }
  };

  // FAQ Schema (Global Technical Task - based on Why Choose section)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose Infogenx for AI and Automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Infogenx brings trusted platform expertise across Microsoft, Zoho, and Odoo, delivering tailored, business-first solutions built for measurable impact and clarity."
        }
      }
    ]
  };

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags for Multi-Region Targeting */}
      <link rel="alternate" href={canonicalUrl} hreflang="en-au" />
      <link rel="alternate" href={globalUrl} hreflang="en" />
      <link rel="alternate" href={globalUrl} hreflang="en-in" />
      <link rel="alternate" href={globalUrl} hreflang="x-default" />

      <meta name="robots" content={robotsContent} />
      <meta property="og:site_name" content="Infogenx" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default RouteSeo;
