import AppDevHero from "../../../sections/Industries/ECommerce/ECommerceHero/ECommerceHero";
import AppDevExpertise from "../../../sections/Industries/ECommerce/ECommerceExpertise/ECommerceExpertise";
import AppDevApproach from "../../../sections/Industries/ECommerce/ECommerceApproach/ECommerceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/ECommerce/ECommerceBusinessImpact/ECommerceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/ECommerce/ECommerceImpactCTA/ECommerceImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const ECommerce = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "E-Commerce", path: PATHS.ecommerce }
  ];
  return (
    <>
      <SEO
        title="E-Commerce Development & Online Store Experts | Infogenx"
        description="Build high-converting online stores with our expert e-commerce development team. We specialize in Shopify, WooCommerce, and custom sales platforms tailored for global growth."
        keywords="e-commerce development, Shopify expert, WooCommerce developer, online store builder, custom e-commerce solutions, Infogenx"
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

export default ECommerce;
