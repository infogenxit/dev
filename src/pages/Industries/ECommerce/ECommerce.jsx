import AppDevHero from "../../../sections/Industries/ECommerce/ECommerceHero/ECommerceHero";
import AppDevExpertise from "../../../sections/Industries/ECommerce/ECommerceExpertise/ECommerceExpertise";
import AppDevApproach from "../../../sections/Industries/ECommerce/ECommerceApproach/ECommerceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/ECommerce/ECommerceBusinessImpact/ECommerceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/ECommerce/ECommerceImpactCTA/ECommerceImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const ECommerce = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "E-Commerce", path: PATHS.ecommerce }
  ];

  const faqs = [
    {
      question: "How long does it take to build an e-commerce store in Brisbane?",
      answer: "Honestly, it depends on complexity. A straightforward product store typically takes 4–8 weeks. Custom builds with complex configurations take longer. We give you a realistic timeline upfront."
    },
    {
      question: "Which platform do you recommend — Shopify or WooCommerce?",
      answer: "Neither is universally better. Shopify suits businesses wanting lower maintenance; WooCommerce gives more control but needs more upkeep. We'll recommend what actually makes sense for you."
    },
    {
      question: "Can you migrate my existing store without losing data or SEO rankings?",
      answer: "Yes. Migration is one of our most common tasks. We transfer products, customer data, and orders, while handling redirects so your search rankings don't tank."
    },
    {
      question: "Do you provide ongoing support after the store goes live?",
      answer: "Absolutely. Launch day is just the beginning. We offer maintenance and performance monitoring so you're not left scrambling when something needs updating."
    },
    {
      question: "How much does Brisbane e-commerce development cost?",
      answer: "It varies. A basic store starts from a few thousand dollars, while enterprise-level builds with custom integrations are higher. We have a discovery conversation first to give you an accurate number."
    }
  ];

  return (
    <>
      <SEO
        title="Brisbane E-Commerce Development | Shopify & WooCommerce Experts | Infogenx"
        description="Build high-converting online stores with Infogenx. We specialize in Brisbane e-commerce development, from Shopify and WooCommerce to custom payment and logistics integrations."
        keywords="ecommerce development Brisbane, Shopify experts Brisbane, WooCommerce development Australia, online store builder Brisbane, payment gateway integration, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
    </>
  );
};

export default ECommerce;
