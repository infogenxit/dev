import React from "react";
import AppDevHero from "../../../sections/Platforms/Shopify/ShopifyHero/ShopifyHero";
import AppDevExpertise from "../../../sections/Platforms/Shopify/ShopifyExpertise/ShopifyExpertise";
import AppDevApproach from "../../../sections/Platforms/Shopify/ShopifyApproach/ShopifyApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Shopify/ShopifyBusinessImpact/ShopifyBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Shopify/ShopifyImpactCTA/ShopifyImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";

const ShopifySolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Shopify Agency Brisbane", path: PATHS.shopify }
  ];

  const faqs = [
    {
      question: "What does a Shopify agency in Brisbane actually do?",
      answer: "A Shopify agency helps you build, improve, and manage your store so it runs properly. That includes design, development, integrations, and making sure your operations behind the store are smooth."
    },
    {
      question: "Do I need a Shopify expert or developer?",
      answer: "Yes, in case you wish for a store that will be functional long-term. A Shopify developer ensures that everything is configured neatly, both in terms of structure and integrations, so that you do not have problems as you expand."
    },
    {
      question: "Can Shopify connect with our existing systems?",
      answer: "Yes. We can integrate Shopify with your CRM, ERP, accounting systems, or any other system to ensure data flows in an automatic manner rather than manually."
    },
    {
      question: "How does Shopify automation help?",
      answer: "Shopify automation reduces manual work. Other aspects such as order updates, notifications and data synchronization can be automated, wasting less time and preventing mistakes."
    },
    {
      question: "What happens after the store goes live?",
      answer: "We stay involved. As your business grows, we help improve performance, fix gaps, and make sure the system keeps working the way it should."
    }
  ];

  return (
    <>
      <SEO
        title="Shopify Agency Brisbane | Trusted Experts & Agency"
        description="Experience the best Shopify Agency Brisbane has to offer. Our expert team focuses on Shopify Brisbane to drive results and maximize your ROI. Reach out now!"
        keywords="shopify brisbane, shopify agency brisbane, shopify expert brisbane, shopify development brisbane, shopify app development brisbane, shopify integration brisbane, shopify automation brisbane, shopify analytics brisbane"
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

export default ShopifySolution;
