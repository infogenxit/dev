import React from "react";
import AppDevHero from "../../../sections/Solutions/ModernApplication/ModernApplicationHero/ModernApplicationHero";
import AppDevExpertise from "../../../sections/Solutions/ModernApplication/ModernApplicationExpertise/ModernApplicationExpertise";
import AppDevApproach from "../../../sections/Solutions/ModernApplication/ModernApplicationApproach/ModernApplicationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/ModernApplication/ModernApplicationBusinessImpact/ModernApplicationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/ModernApplication/ModernApplicationImpactCTA/ModernApplicationImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const ModernApplication = () => {
  const modernAppContent = [
    {
      heading: "Implementation & Integration",
      content: [
        "Most businesses already have a technology stack they have invested in — Microsoft 365, Zoho, Odoo, or some combination of all three. What they often lack is a web application that talks to those platforms properly. We handle both sides of that in a single engagement: the application build and the integration architecture. One team, one brief, one delivery. No finger-pointing between a developer who built the app and a consultant who was supposed to connect it."
      ]
    },
    {
      heading: "API Integration",
      content: [
        "Disconnected systems quietly drain time and quietly introduce errors — and most teams do not notice the full cost until it is significant. Our team of web app development in Brisbane designs and builds API layers that bring your legacy platforms, SaaS tools, and custom applications into a single, coherent data flow. When your systems share data cleanly, your people stop doing the work that software should be doing for them."
      ]
    },
    {
      heading: "Intelligent Automation",
      content: [
        "We embed process automation directly into the application logic — not as a separate module you bolt on later, but as part of how the application is engineered in the first place. Manual handoffs get removed. Data re-entry gets eliminated. Your team gets their time back and can focus on the work that actually requires human judgement."
      ]
    },
    {
      heading: "Data Analytics & AI",
      content: [
        "Reporting and decision support tools should not be an afterthought. We build custom dashboards, real-time reporting layers, and AI-assisted decision tools into the application from the start. By the time your team is using the platform day to day, the visibility they need is already there — not sitting in a separate product with a separate licence fee."
      ]
    },
    {
      heading: "Managed Services & Ongoing Support",
      content: [
        "A web application is not a one-time project — it is an operational asset. After deployment, we stay engaged. Performance optimisation, platform updates, and ongoing support are part of our delivery model, not an upsell. Your application keeps running the way it was engineered to, and when your business requirements shift, we are already familiar enough with the system to move quickly."
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Modern Applications", path: PATHS.modernApplications }
  ];

  const faqs = [
    {
      question: "What makes Infogenx different from other web app developers in Brisbane?",
      answer: "We're a national partner for Microsoft, Zoho, and Odoo — not a generalist agency picking up whatever work comes in. Our developers are certified on these platforms, so there's no learning curve on your project. You get people who already know the technology your business runs on."
    },
    {
      question: "Can you connect a new web application to our existing Microsoft or Zoho setup?",
      answer: "Yes, and we do it regularly. Microsoft 365, Dynamics, Power Platform, Zoho CRM, Zoho Creator, Odoo ERP — integration is scoped into the project from the start, not added on at the end when it becomes a problem."
    },
    {
      question: "Do you work with clients outside Brisbane?",
      answer: "We do. Most of our clients are across Australia. Having teams in both Australia and India means we can scale a project without it affecting timelines or quality."
    },
    {
      question: "Which industries does your team have direct experience in?",
      answer: "Healthcare, retail, manufacturing, finance, and transport and logistics. Real projects, not demos. Each sector has its own compliance and workflow requirements and we've dealt with them across all five."
    },
    {
      question: "What support is available after the application goes live?",
      answer: "Managed services and ongoing support are part of our standard offering. After go-live you get a direct contact, not a ticketing system. We handle performance monitoring, updates, and integration changes as your business needs shift."
    }
  ];

  const relatedItems = [
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with global digital strategy and engineering.",
      link: PATHS.digitalTransformation
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: PATHS.intelligentAutomation
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
        title="Web Application Development Brisbane | Infogenx Digital Solutions"
        description="Infogenx Digital Solutions is a Brisbane-based technology firm specializing in web application development, enterprise platform integration, and intelligent automation."
        keywords="web application development brisbane, custom web apps, microsoft partner, zoho creator, odoo erp, API integration, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Automation-First Brisbane Web Application Development Services" 
        subtitle="Custom Web Applications"
        sections={modernAppContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default ModernApplication;
