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
        title="Shopify Developer Brisbane | Trusted Experts & Agency"
        description="Are you looking for professional Shopify Developer Brisbane? Unlock business growth with expert Shopify Developer services in Brisbane."
        keywords="Shopify developer Brisbane, Shopify expert Brisbane, Shopify app development, Shopify store setup Brisbane, Shopify integration Australia"
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
