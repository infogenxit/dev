import AppDevHero from "../../../sections/Industries/ECommerce/ECommerceHero/ECommerceHero";
import AppDevExpertise from "../../../sections/Industries/ECommerce/ECommerceExpertise/ECommerceExpertise";
import AppDevApproach from "../../../sections/Industries/ECommerce/ECommerceApproach/ECommerceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/ECommerce/ECommerceBusinessImpact/ECommerceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/ECommerce/ECommerceImpactCTA/ECommerceImpactCTA";
import SEO from "../../../components/SEO/SEO";
const ECommerce = () => {
  return (
    <>
      <SEO
        title="E-Commerce Development Brisbane | Shopify & WooCommerce Expert"
        description="Build high-converting online stores with our Brisbane e-commerce development team. We specialize in Shopify, WooCommerce, and custom sales platforms."
        keywords="e-commerce development Brisbane, Shopify expert Brisbane, WooCommerce developer, online store builder Australia, Infogenx"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default ECommerce;
