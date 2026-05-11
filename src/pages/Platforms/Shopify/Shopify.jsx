import React from "react";
import AppDevHero from "../../../sections/Platforms/Shopify/ShopifyHero/ShopifyHero";
import AppDevExpertise from "../../../sections/Platforms/Shopify/ShopifyExpertise/ShopifyExpertise";
import AppDevApproach from "../../../sections/Platforms/Shopify/ShopifyApproach/ShopifyApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Shopify/ShopifyBusinessImpact/ShopifyBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Shopify/ShopifyImpactCTA/ShopifyImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const ShopifySolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Shopify Solutions", path: PATHS.shopify }
  ];
  return (
    <>
      <SEO
        title="Shopify Development & Store Optimization Experts | Infogenx"
        description="Launch and scale your online store with Infogenx, your expert Shopify development partner. We specialize in custom themes, app development, and seamless integrations."
        keywords="Shopify developer, Shopify expert, Shopify app development, Shopify store setup, Shopify integration, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default ShopifySolution;
