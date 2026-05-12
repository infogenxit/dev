import React from "react";
import AppDevHero from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationHero/IntelligentAutomationHero";
import AppDevExpertise from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationExpertise/IntelligentAutomationExpertise";
import AppDevApproach from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationApproach/IntelligentAutomationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationBusinessImpact/IntelligentAutomationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/IntelligentAutomation/IntelligentAutomationImpactCTA/IntelligentAutomationImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const IntelligentAutomation = () => {
  const automationContent = [
    {
      heading: "Orchestrating Business Success with Intelligent Automation",
      content: [
        "In the modern business environment, efficiency is the currency of growth. Intelligent Automation (IA) is the catalyst that allows organizations to break free from the constraints of manual, repetitive tasks and focus their human capital on high-value, strategic initiatives. At Infogenx, we specialize in building the 'digital nervous system' for your business, connecting disparate applications and orchestrating complex workflows with AI-driven precision.",
        "Whether you are looking to optimize logistics or streamline healthcare operations, our automation solutions are designed to reduce operational friction, eliminate human error, and provide the scalability needed to handle increasing volumes without increasing headcount."
      ]
    },
    {
      heading: "Beyond Basic RPA: The Infogenx Intelligence Layer",
      content: [
        "While traditional Robotic Process Automation (RPA) handles simple 'if-this-then-that' scenarios, Infogenx introduces an intelligence layer that allows for cognitive decision-making within your workflows."
      ],
      list: [
        { label: "Cognitive Document Processing", text: "Automatically extract, classify, and validate data from invoices, contracts, and IDs using AI-powered OCR, reducing processing times from days to seconds." },
        { label: "Predictive Workflow Triggers", text: "Systems that don't just react to data but predict when intervention is needed, triggering alerts or automated actions before a problem becomes a crisis." },
        { label: "Seamless Ecosystem Integration", text: "We bridge the gap between your CRM, ERP, and communication tools, ensuring data flows naturally across Microsoft 365, Zoho, Odoo, and custom platforms." }
      ]
    },
    {
      heading: "High-Impact Automation Use Cases",
      content: [
        "Every industry has unique challenges, and our automation experts are skilled at identifying the specific areas where IA can provide the greatest return on investment.",
        "In Finance and Accounting, we automate end-to-end accounts payable processes, from invoice receipt to payment reconciliation, ensuring 100% audit accuracy. In Supply Chain and Logistics, we orchestrate real-time inventory updates and automated shipping notifications, improving customer satisfaction and reducing manual tracking.",
        "For Customer Service departments, we deploy intelligent chatbots and automated ticketing systems that handle routine inquiries instantly, leaving your agents to solve complex problems that require empathy and advanced reasoning."
      ]
    },
    {
      heading: "Scaling with Confidence: Governance and Security",
      content: [
        "We understand that as you automate more of your business, security and governance become paramount. Our automation frameworks are built with 'security-by-design' principles, ensuring that every automated agent and workflow operates within your organization’s strict compliance and privacy boundaries.",
        "We provide comprehensive dashboards that allow you to monitor the performance and impact of your automated ecosystem in real-time, giving you total visibility and control over your digital workforce."
      ]
    }
  ];

  const faqData = [
    {
      question: "What is Intelligent Automation?",
      answer: "Intelligent Automation (IA) combines Robotic Process Automation (RPA) with advanced technologies like Artificial Intelligence (AI) and Machine Learning (ML) to automate complex business processes that require decision-making."
    },
    {
      question: "How is IA different from basic automation?",
      answer: "While basic automation handles repetitive tasks with fixed rules, IA can handle unstructured data, learn from patterns, and make informed decisions during the workflow."
    },
    {
      question: "Can IA integrate with my existing ERP and CRM?",
      answer: "Yes, our IA solutions are designed to bridge the gaps between your existing platforms like Microsoft, Zoho, and Odoo, ensuring seamless data flow and process orchestration."
    },
    {
      question: "Is Intelligent Automation secure?",
      answer: "Security is built into our automation frameworks from day one, including encrypted data transfers, secure API gateways, and strict access controls."
    },
    {
      question: "How do we identify which processes to automate?",
      answer: "We begin with a thorough audit of your current workflows to identify high-volume, repetitive, or error-prone tasks where automation will provide the highest ROI."
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Intelligent Automation", path: PATHS.intelligentAutomation }
  ];

  return (
    <>
      <SEO
        title="Brisbane Intelligent Process Automation | Experts"
        description="Experience the best Brisbane Intelligent Process Automation has to offer. Our expert team focuses on Robotic Process Automation Brisbane to drive results. Reach out now!"
        keywords="intelligent automation, AI workflow automation, business process automation, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="AI-Driven Workflow Orchestration & Efficiency" 
        subtitle="Automate to Innovate"
        sections={automationContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqData} />
      <RelatedServices currentService={PATHS.intelligentAutomation} />
    </>
  );
};

export default IntelligentAutomation;
