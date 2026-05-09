import React from "react";
import AppDevHero from "../../../sections/Solutions/ApiIntegration/ApiIntegrationHero/ApiIntegrationHero";
import AppDevExpertise from "../../../sections/Solutions/ApiIntegration/ApiIntegrationExpertise/ApiIntegrationExpertise";
import AppDevApproach from "../../../sections/Solutions/ApiIntegration/ApiIntegrationApproach/ApiIntegrationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/ApiIntegration/ApiIntegrationBusinessImpact/ApiIntegrationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/ApiIntegration/ApiIntegrationImpactCTA/ApiIntegrationImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";

const ApiIntegration = () => {
  const apiContent = [
    {
      heading: "Systems Integration in Brisbane Without Breaking What Already Works",
      content: [
        "Every business has a mix of tools — CRM, ERP, finance platforms, cloud apps, and internal systems. The issue isn’t the tools themselves. It’s the gaps between them.",
        "With our systems integration in Brisbane, we close those gaps properly. We don’t replace your systems unless it’s necessary. We integrate what you already use and make it work together properly."
      ],
      list: [
        { label: "Real-Time Exchange", text: "Systems exchange data in real time." },
        { label: "No Duplication", text: "No duplication or manual syncing." },
        { label: "Automated Workflows", text: "Workflows move automatically between platforms." },
        { label: "Accurate Information", text: "Teams get consistent, accurate information." }
      ]
    },
    {
      heading: "API-First Integration That Scales With Your Business",
      content: [
        "We follow an API-first approach because it keeps your systems flexible. Instead of building rigid connections that break over time, we create integrations that can evolve as your business grows.",
        "Our integrations are designed to support both current operations and future expansion — not just quick fixes."
      ],
      list: [
        { label: "Add New Tools", text: "Add new tools without disrupting existing workflows." },
        { label: "Scale Operations", text: "Scale operations without rebuilding your tech stack." },
        { label: "Structured Data", text: "Maintain clean, structured data across platforms." },
        { label: "Reduce Manual Processes", text: "Reduce long-term dependency on manual processes." }
      ]
    },
    {
      heading: "Automating Data Flow Across Platforms",
      content: [
        "Disconnected systems slow everything down. Teams spend time moving data instead of using it.",
        "With our API integration in Brisbane, we automate how data moves across your systems. The goal is not just integration — it’s operational clarity. When data flows properly, your business runs cleaner and faster."
      ],
      list: [
        { label: "Automatic Updates", text: "Information updates automatically between platforms." },
        { label: "No Repeated Entry", text: "No repeated data entry." },
        { label: "Reduced Errors", text: "Reduced errors caused by manual handling." },
        { label: "Faster Reporting", text: "Faster reporting and decision-making." }
      ]
    },
    {
      heading: "Built Around Real Business Workflows",
      content: [
        "We don’t start with technology. We start with how your business actually operates. This ensures that the integration isn’t just technically correct — it’s practical and usable for your team."
      ],
      list: [
        { label: "Internal Workflows", text: "Every integration is designed around your internal workflows." },
        { label: "Day-to-day Use", text: "We look at how your teams use systems day-to-day." },
        { label: "Inefficiencies", text: "We identify where delays or inefficiencies currently exist." },
        { label: "Automation Focus", text: "We pinpoint what needs to be automated or connected." }
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: "/solutions/digital-transformation" },
    { name: "API Integration", path: "/solutions/api-integration" }
  ];

  const faqs = [
    {
      question: "What does API integration in Brisbane actually solve for businesses?",
      answer: "It connects your systems so they can exchange data automatically, removing manual work and reducing errors caused by disconnected platforms."
    },
    {
      question: "How is systems integration different from API integration?",
      answer: "API integration focuses on connecting applications using APIs, while systems integration in Brisbane covers the broader process of making all business systems work together as one."
    },
    {
      question: "Will integration require replacing our current systems?",
      answer: "No. The focus is on integrating what you already use unless there’s a clear reason to replace something."
    },
    {
      question: "Can integrations scale as the business grows?",
      answer: "Yes. The API-first approach ensures your integrations remain flexible and can support new tools, processes, and increased workload."
    },
    {
      question: "How do you ensure integrations match real business workflows?",
      answer: "Every integration is designed based on how your business operates — not just technical requirements — so it fits naturally into your day-to-day processes."
    }
  ];

  const relatedItems = [
    {
      title: "Modern Applications",
      description: "Build robust applications designed for seamless integration and performance.",
      link: "/solutions/modern-applications"
    },
    {
      title: "Intelligent Automation",
      description: "Orchestrate automated workflows across your newly connected platforms.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Digital Transformation",
      description: "Harness the power of a fully integrated business to drive growth.",
      link: "/solutions/digital-transformation"
    }
  ];
  return (
    <>
      <SEO
        title="API Integration Brisbane | Systems & Software Integration Experts"
        description="Looking for API integration in Brisbane? We provide seamless systems and software integration services to connect your apps, automate workflows, and improve efficiency."
        keywords="API integration Brisbane, Systems Integration, Software connectivity"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Seamless Connectivity & Technical Enablement" 
        subtitle="Connect Your Ecosystem"
        sections={apiContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default ApiIntegration;
