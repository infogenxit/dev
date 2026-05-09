import AppDevHero from "../../../sections/Services/ManagedServices/ManagedServicesHero/ManagedServicesHero";
import AppDevExpertise from "../../../sections/Services/ManagedServices/ManagedServicesExpertise/ManagedServicesExpertise";
import AppDevApproach from "../../../sections/Services/ManagedServices/ManagedServicesApproach/ManagedServicesApproach";
import AppDevBusinessImpact from "../../../sections/Services/ManagedServices/ManagedServicesBusinessImpact/ManagedServicesBusinessImpact";
import AppDevImpactCTA from "../../../sections/Services/ManagedServices/ManagedServicesImpactCTA/ManagedServicesImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";

const ManagedServices = () => {
  const relatedItems = [
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with Australian-led digital strategy and engineering.",
      link: "/solutions/digital-transformation"
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Data Analytics & AI",
      description: "Turn your business data into actionable intelligence and strategic decision-support.",
      link: "/solutions/data-analytics-ai"
    }
  ];
  const faqs = [
    {
      question: "What is included in Infogenx Managed IT Services?",
      answer: "Our managed services include 24/7 proactive monitoring, SLA-driven support, system optimization, security management, and regular performance audits for Microsoft, Zoho, and Odoo ecosystems."
    },
    {
      question: "Do you offer 24/7 support for Australian businesses?",
      answer: "Yes, we provide round-the-clock monitoring and support to ensure your critical business applications remain operational and secure at all times."
    },
    {
      question: "How does proactive monitoring help my business?",
      answer: "Proactive monitoring allows us to identify and resolve potential issues before they cause downtime, ensuring uninterrupted productivity and system reliability."
    },
    {
      question: "Can you manage our existing Microsoft or Zoho environment?",
      answer: "Absolutely. Our experts specialize in optimizing and managing existing platform implementations to improve governance, performance, and user adoption."
    },
    {
      question: "What is the typical response time for support requests?",
      answer: "We offer tiered SLA response times based on the severity of the issue, with critical alerts being addressed immediately by our dedicated support team."
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: "/services/managed-services" }
  ];
  return (
    <>
      <SEO
        title="Managed IT Services Australia | Proactive Support & Monitoring | Infogenx"
        description="Maximize uptime and security with Infogenx Managed IT Services in Australia. We provide proactive monitoring, SLA-driven support, and system optimization for Microsoft, Zoho, and Odoo ecosystems."
        keywords="managed IT services Australia, proactive IT support Brisbane, business system monitoring"
      />
      {/* <Helmet>
        <title>
          Managed IT Services & Ongoing Support | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Ensure performance, security, and reliability with Infogenx’s managed services, proactive monitoring, and SLA-driven IT support."
        />
        <meta
          name="keywords"
          content="managed IT services Australia, IT support and maintenance"
        />
      </Helmet> */}
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

export default ManagedServices;
