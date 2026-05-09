import AppDevHero from "../../../sections/Services/ImplementIntegration/ImplementIntegrationHero/ImplementIntegrationHero";
import AppDevExpertise from "../../../sections/Services/ImplementIntegration/ImplementIntegrationExpertise/ImplementIntegrationExpertise";
import AppDevApproach from "../../../sections/Services/ImplementIntegration/ImplementIntegrationApproach/ImplementIntegrationApproach";
import AppDevBusinessImpact from "../../../sections/Services/ImplementIntegration/ImplementIntegrationBusinessImpact/ImplementIntegrationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Services/ImplementIntegration/ImplementIntegrationImpactCTA/ImplementIntegrationImpactCTA";

import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";

const ImplementationIntegration = () => {
  const faqs = [
    {
      question: "Which platforms do you specialize in implementing?",
      answer: "We specialize in the full implementation of Microsoft (Dynamics 365, Power Platform), Zoho (CRM, Creator, Books), and Odoo ERP systems."
    },
    {
      question: "Can you integrate our existing legacy systems?",
      answer: "Yes, we build custom API connectors and middleware to ensure your legacy systems communicate seamlessly with modern platforms like Zoho or Microsoft."
    },
    {
      question: "What is your implementation methodology?",
      answer: "We follow a structured 4-step process: Audit, Design, Deploy, and Optimize, ensuring every system is built for scalability and user adoption."
    },
    {
      question: "Do you provide training after implementation?",
      answer: "Absolutely. Every implementation includes comprehensive user training and documentation to ensure your team is confident using the new systems."
    },
    {
      question: "How do you ensure data security during migration?",
      answer: "We use encrypted migration protocols and follow Australian data protection standards to ensure your business data remains secure and intact throughout the process."
    }
  ];

  const relatedItems = [
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance to align your platform implementation with your business goals.",
      link: "/services/consulting-advisory"
    },
    {
      title: "Managed Services",
      description: "Ensure performance, security, and reliability with our proactive IT support.",
      link: "/services/managed-services"
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: "/solutions/intelligent-automation"
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: "/services/managed-services" },
    { name: "Implementation & Integration", path: "/services/implementation-integration" }
  ];
  return (
    <>
      <SEO
        title="System Implementation & Integration Services | Infogenx Australia"
        description="Streamline your operations with Infogenx's expert system implementation and platform integration services in Australia. We specialize in Microsoft, Zoho, and Odoo connectivity for scalable growth."
        keywords="system implementation services Australia, platform integration Brisbane, technical ecosystem connectivity"
      />

      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default ImplementationIntegration;
