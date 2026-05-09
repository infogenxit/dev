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

const seoDataByRoute = {
  "/": {
    title: "IT Consulting Brisbane | Custom Software, AI & Cloud Experts",
    description: "Brisbane IT consulting services for custom software, AI solutions, and cloud computing. Enhance your business with our expert IT strategies."
  },
  "/platforms/zoho": {
    title: "Zoho Consultant Brisbane | CRM, Implementation & Automation Experts",
    description: "Looking for a Zoho consultant in Brisbane? We provide expert CRM implementation, automation, and support to streamline your business workflows."
  },
  "/platforms/zoho-solutions": {
    title: "Zoho Consultant Brisbane | CRM, Implementation & Automation Experts",
    description: "Looking for a Zoho consultant in Brisbane? We provide expert CRM implementation, automation, and support to streamline your business workflows."
  },
  "/platforms/microsoft": {
    title: "Microsoft Dynamics 365 Brisbane | Azure, Power BI & Microsoft Partner",
    description: "Looking for Microsoft Dynamics 365 in Brisbane? We provide expert implementation, customization, and support to empower your business with Microsoft solutions."
  },
  "/platforms/microsoft-solutions": {
    title: "Microsoft Dynamics 365 Brisbane | Azure, Power BI & Microsoft Partner",
    description: "Looking for Microsoft Dynamics 365 in Brisbane? We provide expert implementation, customization, and support to empower your business with Microsoft solutions."
  },
  "/platforms/odoo": {
    title: "Odoo Consultant Brisbane | ERP Implementation & Customization Experts",
    description: "Looking for an Odoo consultant in Brisbane? We provide expert ERP implementation, customization, and automation to optimize your business operations."
  },
  "/platforms/odoo-solutions": {
    title: "Odoo Consultant Brisbane | ERP Implementation & Customization Experts",
    description: "Looking for an Odoo consultant in Brisbane? We provide expert ERP implementation, customization, and automation to optimize your business operations."
  },
  "/industries/e-commerce": {
    title: "Shopify Agency Brisbane | Experts in Development, Apps & Automation",
    description: "Looking for a Shopify agency in Brisbane? We provide expert development, app integration, and automation solutions to grow your online store."
  },
  "/industries/e-commerce-solutions": {
    title: "Shopify Agency Brisbane | Experts in Development, Apps & Automation",
    description: "Looking for a Shopify agency in Brisbane? We provide expert development, app integration, and automation solutions to grow your online store."
  },
  "/solutions/data-analytics-ai": {
    title: "Data Analytics Brisbane | BI, Power BI Dashboards & Consulting",
    description: "Looking for data analytics in Brisbane? We provide expert solutions in BI, data visualization, and reporting to help you make informed business decisions."
  },
  "/solutions/api-integration": {
    title: "API Integration Brisbane | Systems & Software Integration Experts",
    description: "Looking for API integration in Brisbane? We provide expert solutions to connect your systems, automate workflows, and improve data flow."
  },
  "/solutions/intelligent-automation": {
    title: "Workflow Automation Brisbane | AI, CRM & Process Automation Experts",
    description: "Looking for workflow automation in Brisbane? We provide expert AI, CRM, and process automation solutions to streamline your business operations."
  },
  "/industries/healthcare": {
    title: "Healthcare IT Solutions Brisbane | Medical Software & IT Services",
    description: "Looking for healthcare IT solutions in Brisbane? We provide expert medical software and IT services to help your practice run smoothly."
  },
  "/industries/healthcare-solutions": {
    title: "Healthcare IT Solutions Brisbane | Medical Software & IT Services",
    description: "Looking for healthcare IT solutions in Brisbane? We provide expert medical software and IT services to help your practice run smoothly."
  },
  "/industries/retail": {
    title: "Retail IT Solutions Brisbane | POS, eCommerce & Automation Experts",
    description: "Looking for retail IT solutions in Brisbane? We provide expert POS, eCommerce, and automation solutions to grow your retail business."
  },
  "/industries/retail-solutions": {
    title: "Retail IT Solutions Brisbane | POS, eCommerce & Automation Experts",
    description: "Looking for retail IT solutions in Brisbane? We provide expert POS, eCommerce, and automation solutions to grow your retail business."
  },
  "/industries/manufacturing": {
    title: "Manufacturing IT Solutions Brisbane | ERP, Automation & Analytics",
    description: "Looking for manufacturing IT solutions in Brisbane? We provide expert ERP, automation, and analytics to optimize your production and operations."
  },
  "/industries/manufacturing-solutions": {
    title: "Manufacturing IT Solutions Brisbane | ERP, Automation & Analytics",
    description: "Looking for manufacturing IT solutions in Brisbane? We provide expert ERP, automation, and analytics to optimize your production and operations."
  },
  "/industries/transport-logistics": {
    title: "Logistics IT Solutions Brisbane | Supply Chain, WMS & Automation",
    description: "Looking for logistics IT solutions in Brisbane? We provide expert supply chain, WMS, and automation solutions to optimize your logistics."
  },
  "/industries/finance": {
    title: "Finance IT Solutions Brisbane | Fintech, Automation & Data Analytics",
    description: "Looking for finance IT solutions in Brisbane? We provide expert fintech, automation, and data analytics solutions to optimize your financial operations."
  },
  "/industries/finance-solutions": {
    title: "Finance IT Solutions Brisbane | Fintech, Automation & Data Analytics",
    description: "Looking for finance IT solutions in Brisbane? We provide expert fintech, automation, and data analytics solutions to optimize your financial operations."
  },
  "/technologies/cloud-computing": {
    title: "Cloud Computing Brisbane | Cloud Migration & Managed Services",
    description: "Looking for cloud computing in Brisbane? We provide expert cloud migration, managed services, and security solutions to scale your business."
  },
  "/technologies/web-development": {
    title: "Web Design Brisbane | Website Development Company Brisbane",
    description: "Top web design company in Brisbane offering creative, responsive, and SEO-friendly website development services to help your business stand out."
  },
  "/technologies/mobile-app-development": {
    title: "Mobile App Development Brisbane | iOS, Android & Custom App Solutions",
    description: "Looking for mobile app development in Brisbane? We design and develop custom iOS and Android apps that are scalable, user-friendly, and built to grow your business."
  },
  "/technologies/artificial-intelligence": {
    title: "Artificial Intelligence Brisbane | AI Strategy & Implementation",
    description: "Leading AI company in Brisbane. We provide expert AI strategy, implementation, and consulting to transform your business."
  },
  "/solutions/modern-applications": {
    title: "Custom Software Development Brisbane | Bespoke Software Solutions",
    description: "Looking for custom software development in Brisbane? We provide expert bespoke software solutions to meet your unique business requirements."
  }
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

  const currentSeo = seoDataByRoute[normalizedPathname] || {};
  const pageTitle = currentSeo.title || "Infogenx | AI Automation & App Development Experts";
  const pageDescription = currentSeo.description || DEFAULT_DESCRIPTION;
  
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

  // Dynamic Breadcrumb Schema
  const pathParts = normalizedPathname.split("/").filter(Boolean);
  const breadcrumbItems = [{ name: "Home", item: SITE_URL }];
  let currentPath = "";
  pathParts.forEach((part) => {
    currentPath += `/${part}`;
    const name = part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    breadcrumbItems.push({ name, item: `${SITE_URL}${currentPath}` });
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags for Multi-Region Targeting */}
      <link rel="alternate" href={canonicalUrl} hreflang="en-au" />
      <link rel="alternate" href={globalUrl} hreflang="en" />
      <link rel="alternate" href={globalUrl} hreflang="en-in" />
      <link rel="alternate" href={globalUrl} hreflang="x-default" />

      <meta name="robots" content={robotsContent} />
      <meta property="og:site_name" content="Infogenx" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:description" content={pageDescription} />

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
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default RouteSeo;
