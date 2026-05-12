import React from "react";
import AppDevHero from "../../../sections/Solutions/DigitalTransformation/DigitalTransformationHero/DigitalTransformationHero";
import AppDevExpertise from "../../../sections/Solutions/DigitalTransformation/DigitalTransformationExpertise/DigitalTransformationExpertise";
import AppDevApproach from "../../../sections/Solutions/DigitalTransformation/DigitalTransformationApproach/DigitalTransformationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/DigitalTransformation/DigitalTransformationBusinessImpact/DigitalTransformationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/DigitalTransformation/DigitalTransformationImpactCTA/DigitalTransformationImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const DigitalTransformation = () => {
  const transformationContent = [
    {
      heading: "Navigating the Modern Digital Frontier",
      content: [
        "In today’s rapidly evolving economic landscape, digital transformation is no longer a luxury—it is a foundational requirement for survival and growth. At Infogenx, we view digital transformation not merely as the adoption of new software, but as a comprehensive strategic overhaul that aligns your technological infrastructure with your core business objectives.",
        "Businesses are facing increasing pressure to modernize their operations, improve customer engagement, and maintain security in an interconnected world. Our mission is to guide organizations through this complexity, turning technical debt into competitive advantage and fragmented processes into streamlined, data-driven ecosystems."
      ]
    },
    {
      heading: "Our Core Transformation Pillars",
      content: [
        "A successful transformation requires a balanced approach across three critical areas of your business. We focus on these pillars to ensure that every change we implement is sustainable and high-impact."
      ],
      list: [
        { label: "Legacy System Modernization", text: "We help you transition away from outdated, monolithic software toward agile, cloud-native architectures that support rapid scaling and integration." },
        { label: "Operational Process Optimization", text: "By analyzing your current workflows, we identify friction points and implement automation that reduces manual errors and accelerates delivery times." },
        { label: "Data-First Decision Making", text: "We build the infrastructure necessary to capture, analyze, and visualize your business data, allowing you to make informed decisions based on real-time insights rather than intuition." }
      ]
    },
    {
      heading: "The Infogenx Strategic Roadmap",
      content: [
        "Transformation is a journey, not a destination. Our proven four-stage methodology ensures that your project is delivered on time, within budget, and with maximum user adoption across your organization.",
        "1. Discovery & Audit: We begin with a deep dive into your existing technical landscape and business culture. This phase is about understanding where you are today and identifying the 'low-hanging fruit' that can provide immediate ROI.",
        "2. Strategic Architecture: Based on our findings, we design a future-proof technical blueprint. We select the right platforms—whether Microsoft, Zoho, Odoo, or custom builds—that fit your specific industry needs.",
        "3. Agile Execution: Our engineering teams work in rapid cycles, delivering functional increments of your new system. This allows for continuous feedback and ensures the final product aligns perfectly with your evolving needs.",
        "4. Governance & Support: Post-launch, we provide the governance structures and proactive support necessary to ensure your new digital ecosystem remains secure, efficient, and up-to-date."
      ]
    },
    {
      heading: "Why Businesses Partner with Infogenx",
      content: [
        "What sets Infogenx apart is our deep understanding of the global market combined with technical excellence. We don't just build software; we build partnerships. We understand the regulatory requirements, the labor market challenges, and the specific consumer behaviors that define your business sector.",
        "Our team of consultants and engineers act as an extension of your own, providing the technical muscle and strategic oversight needed to navigate complex transformations without the overhead of a massive internal IT department."
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Digital Transformation", path: PATHS.digitalTransformation }
  ];

  const faqs = [
    {
      question: "What is Digital Transformation?",
      answer: "Digital transformation is the process of using digital technologies to create new—or modify existing—business processes, culture, and customer experiences to meet changing business and market requirements."
    },
    {
      question: "How long does a digital transformation project take?",
      answer: "Timeline varies depending on the scope and complexity of your organization, but we typically deliver foundational transformation milestones within 3-6 months."
    },
    {
      question: "Do we need to replace all our current systems?",
      answer: "Not necessarily. We often follow a 'modernize and integrate' approach, where we build upon your existing core systems while introducing new technologies for efficiency and scalability."
    },
    {
      question: "What is the ROI of digital transformation?",
      answer: "ROI can be measured through increased operational efficiency, reduced manual errors, improved customer satisfaction, and the ability to scale without proportional increases in overhead."
    },
    {
      question: "How do you handle change management during transformation?",
      answer: "We focus on user adoption through training, clear documentation, and building systems that are intuitive and truly helpful for your employees."
    }
  ];

  const relatedItems = [
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: PATHS.intelligentAutomation
    },
    {
      title: "Modern Applications",
      description: "Build scalable, cloud-native applications tailored to your business objectives.",
      link: PATHS.modernApplications
    },
    {
      title: "API Integration",
      description: "Connect your business ecosystem with seamless API-first solutions.",
      link: PATHS.apiIntegration
    }
  ];
  return (
    <>
      <SEO
        title="Digital Transformation Brisbane | Trusted Experts"
        description="Unlock business growth with expert Digital Transformation Brisbane in Brisbane. We specialize in Custom Software and innovative digital strategies."
        keywords="digital transformation consulting, business process transformation, enterprise modernization, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Comprehensive Digital Strategy & Engineering" 
        subtitle="The Infogenx Approach"
        sections={transformationContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default DigitalTransformation;
