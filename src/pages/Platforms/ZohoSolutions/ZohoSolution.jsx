import React from "react";
import AppDevHero from "../../../sections/Platforms/Zoho/ZohoHero/ZohoHero";
import AppDevExpertise from "../../../sections/Platforms/Zoho/ZohoExpertise/ZohoExpertise";
import AppDevApproach from "../../../sections/Platforms/Zoho/ZohoApproach/ZohoApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Zoho/ZohoBusinessImpact/ZohoBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Zoho/ZohoImpactCTA/ZohoImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const ZohoSolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Zoho Consultant Brisbane", path: PATHS.zohoSolutions }
  ];

  const faqs = [
    {
      question: "What does a Zoho consultant in Brisbane actually do?",
      answer: "A Zoho consultant will map out and then configure and optimise Zoho to suit your business. Otherwise, it's most likely to be underutilised or chaotic. We ensure your system enhances your team's performance."
    },
    {
      question: "Should I choose Zoho CRM or Zoho One?",
      answer: "If you want to start with sales, Zoho CRM is the way to go. If you want to integrate all parts of your business (sales, finance, human resources, operations), Zoho One is a better choice. Let's help, based on your needs, not the size of the title."
    },
    {
      question: "Can Zoho integrate with my existing tools?",
      answer: "Yes. We can integrate with Xero, MYOB, Google Workspace and more. When required, we develop custom integrations to ensure seamless connections."
    },
    {
      question: "How long does implementation take?",
      answer: "It depends on the scope. CRM implementations usually take a few weeks. More complex Zoho One deployments can take a few months. We tell you how long it will take - no hidden surprises."
    },
    {
      question: "What happens after the system goes live?",
      answer: "That’s where the real value starts. We offer support, enhancements and advice to help your system grow with your business."
    }
  ];

  return (
    <>
      <SEO 
        title="Your Trusted Zoho Consultant Brisbane | Certified Partner Brisbane"
        description="Certified Zoho Partner in Brisbane providing structured Zoho implementation, workflow automation, and optimisation. With 30+ years experience, we build systems that perform."
        keywords="zoho consultant brisbane, zoho crm brisbane, zoho one brisbane, zoho analytics brisbane, zoho automation brisbane, zoho flow brisbane, zoho creator brisbane, zoho development brisbane"
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

export default ZohoSolution;
