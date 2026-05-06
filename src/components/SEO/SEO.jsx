import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO Component
 * @param {Object} props
 * @param {string} props.title - Page Title
 * @param {string} props.description - Meta Description
 * @param {string} props.keywords - Meta Keywords
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.robots - Robots directive (default: "INDEX, FOLLOW")
 * @param {string} props.ogTitle - Open Graph Title
 * @param {string} props.ogDescription - Open Graph Description
 * @param {string} props.ogImage - Open Graph Image URL
 * @param {string} props.ogUrl - Open Graph URL
 * @param {string} props.ogType - Open Graph Type (default: "website")
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  robots = "INDEX, FOLLOW",
  ogTitle,
  ogDescription,
  ogImage = "https://infogenx.com.au/infogenx-og-image.png",
  ogUrl,
  ogType = "website",
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl || canonical} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
