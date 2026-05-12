import React from "react";
import AppDevHero from "../../../sections/Platforms/Odoo/OdooHero/OdooHero";
import AppDevExpertise from "../../../sections/Platforms/Odoo/OdooExpertise/OdooExpertise";
import AppDevApproach from "../../../sections/Platforms/Odoo/OdooApproach/OdooApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Odoo/OdooBusinessImpact/OdooBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Odoo/OdooImpactCTA/OdooImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const OdooSolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Odoo Consultant Brisbane", path: PATHS.odoo }
  ];

  const faqs = [
    {
      question: "What is the job of an Odoo consultant?",
      answer: "An Odoo consultant can assist in configuring and organizing Odoo to suit your business appropriately. That is not only installation, they also ensure that your workflows, data and processes are configured in a manner that your team can use."
    },
    {
      question: "Is Odoo suitable for small or growing businesses?",
      answer: "Yes. Odoo is good when a company desires everything under a single roof without employing various tools. You can begin with a couple of modules and add on as you develop."
    },
    {
      question: "What is the average time taken to implement Odoo?",
      answer: "It is based on what you require. A simple installation may require a few weeks, and a comprehensive Odoo ERP solution with customisation and integration may require a few months."
    },
    {
      question: "Is Odoo compatible with our systems?",
      answer: "In most cases, yes. We will be able to interlink Odoo to your existing tools and allow data to move between them without handwork."
    },
    {
      question: "What then happens upon the system going live?",
      answer: "We stay involved. As your business expands or alters, we aid in modifying the system in such a way that it will still operate effectively in the future."
    }
  ];
  return (
    <>
      <SEO
        title="Odoo Consultant Brisbane | Trusted Experts & Agency"
        description="Unlock business growth with expert Odoo Consultant in Brisbane. We specialize in Odoo Brisbane and innovative digital strategies. Book a consult now."
        keywords="odoo brisbane, odoo automation brisbane, odoo consultant brisbane, odoo customization brisbane, odoo developer brisbane, odoo erp brisbane, odoo implementation brisbane, odoo integration brisbane"
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

export default OdooSolution;
