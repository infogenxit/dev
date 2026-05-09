import React from "react";
import AppDevHero from "../../../sections/Platforms/Shopify/ShopifyHero/ShopifyHero";
import AppDevExpertise from "../../../sections/Platforms/Shopify/ShopifyExpertise/ShopifyExpertise";
import AppDevApproach from "../../../sections/Platforms/Shopify/ShopifyApproach/ShopifyApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Shopify/ShopifyBusinessImpact/ShopifyBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Shopify/ShopifyImpactCTA/ShopifyImpactCTA";
import SEO from "../../../components/SEO/SEO";

const ShopifySolution = () => {
  return (
    <>
      <SEO
        title="Shopify Agency Brisbane | Expert Shopify Developers"
        description="Scale your online store with our Brisbane Shopify agency. We specialize in custom development, app creation, and automation for high-growth e-commerce."
        keywords="Shopify agency Brisbane, Shopify expert Brisbane, Shopify app development, e-commerce automation, Shopify integration Australia"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default ShopifySolution;
