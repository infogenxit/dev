import AppDevHero from "../../../sections/Industries/ECommerce/ECommerceHero/ECommerceHero";
import AppDevExpertise from "../../../sections/Industries/ECommerce/ECommerceExpertise/ECommerceExpertise";
import AppDevApproach from "../../../sections/Industries/ECommerce/ECommerceApproach/ECommerceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/ECommerce/ECommerceBusinessImpact/ECommerceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/ECommerce/ECommerceImpactCTA/ECommerceImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const ECommerce = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="AI-Enabled E-Commerce Solutions | InfogenX Australia"
          description="Scale your e-commerce with InfogenX's platform-focused AI & automation. We provide consulting on AI for e-commerce in Australia: personalisation, analytics & conversion optimisation."
          keywords="AI consulting e-commerce, intelligent automation online retail, digital transformation e-commerce Australia, AI-enabled personalisation solutions, conversion optimisation automation Australia"
        />
      */}
      <SEO
        title="Shopify Agency Brisbane — Built for Scalable eCommerce | Infogenx"
        description="Expert Shopify development and eCommerce strategy in Brisbane. We help brands scale through high-converting storefronts, custom apps, and seamless integrations."
        keywords="Shopify agency Brisbane, Shopify developer, eCommerce solutions Brisbane, custom Shopify apps, Infogenx"
      />
      {/* <Helmet>
        <title>AI-Enabled E-Commerce Solutions | InfogenX Australia</title>
        <meta
          name="description"
          content="Scale your e-commerce with InfogenX's platform-focused AI & automation. We provide consulting on AI for e-commerce in Australia: personalisation, analytics & conversion optimisation."
        />
        <meta
          name="keywords"
          content="AI consulting e-commerce, intelligent automation online retail, digital transformation e-commerce Australia, AI-enabled personalisation solutions, conversion optimisation automation Australia"
        />
      </Helmet> */}
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default ECommerce;
