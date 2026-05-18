import React from "react";
import AppDevHero from "../../../sections/Services/ManagedServices/ManagedServicesHero/ManagedServicesHero";
import AppDevExpertise from "../../../sections/Services/ManagedServices/ManagedServicesExpertise/ManagedServicesExpertise";
import AppDevApproach from "../../../sections/Services/ManagedServices/ManagedServicesApproach/ManagedServicesApproach";
import AppDevBusinessImpact from "../../../sections/Services/ManagedServices/ManagedServicesBusinessImpact/ManagedServicesBusinessImpact";
import AppDevImpactCTA from "../../../sections/Services/ManagedServices/ManagedServicesImpactCTA/ManagedServicesImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const ManagedServices = () => {
  const managedContent = [
    {
      heading: "Operations Automation in Brisbane",
      content: [
        "Approvals sitting in inboxes. Status updates nobody can find. Reports that take half a day to compile. Our operations automation work maps where time is being lost and builds automated workflows that keep things moving — without someone having to chase it every time."
      ]
    },
    {
      heading: "Process Automation",
      content: [
        "We use RPA tools like UiPath, Automation Anywhere, and Blue Prism to automate end-to-end business processes — from customer onboarding to supplier management to internal sign-off workflows. Our process automation in Brisbane service works around your existing systems. Nothing gets ripped out."
      ]
    },
    {
      heading: "Sales Automation",
      content: [
        "Sales teams should be selling — not updating CRM fields or manually sending follow-ups. Our sales automation in Brisbane work automates lead capture, follow-up sequences, pipeline reporting, and task reminders so your team spends more time in front of customers and less time buried in admin."
      ]
    },
    {
      heading: "CRM Automation in Brisbane",
      content: [
        "A CRM that isn't automated is just an expensive contact list. Our CRM automation service gets it working properly — auto-capturing leads, routing enquiries, triggering follow-ups, and keeping records updated without anyone touching it manually."
      ]
    },
    {
      heading: "ERP Automation",
      content: [
        "Most businesses barely use half of what their ERP can do. Our ERP automation work connects your ERP to the rest of your systems, automates data entry, invoice processing, and procurement workflows, and removes the manual steps that slow everything down and introduce errors."
      ]
    },
    {
      heading: "Finance Automation",
      content: [
        "Invoice processing. Payment approvals. Month-end reporting. All of it is automatable. Our finance automation in Brisbane service handles high-volume finance workflows end-to-end — improving accuracy, cutting processing times, and freeing your finance team for work that actually needs human thinking."
      ]
    },
    {
      heading: "HR Automation Brisbane",
      content: [
        "Onboarding, leave requests, compliance documents, approval routing — HR carries a heavy admin load. Our HR automation Brisbane work removes the repetitive side of it so your people team can focus on your people, not paperwork."
      ]
    },
    {
      heading: "AI Automation Services",
      content: [
        "This is where it gets powerful. Our AI automation services in Brisbane go beyond basic rule-based bots. We combine RPA with AI, machine learning, and natural language processing to automate processes involving emails, documents, contracts, and unstructured data — things that used to need a human at every step."
      ]
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
      title: "Data Analytics & AI",
      description: "Turn your business data into actionable intelligence and strategic decision-support.",
      link: PATHS.dataAnalyticsAi
    }
  ];

  const faqs = [
    {
      question: "How do I know which processes are worth automating first?",
      answer: "Look for anything high-volume, repetitive, and rule-based — data entry, invoice processing, approval workflows, scheduled reports. We run a process audit with every new client to find exactly where automation saves the most time."
    },
    {
      question: "Can you automate our CRM and ERP and connect them to each other?",
      answer: "Yes — and that's often where the biggest wins are. Connecting CRM and ERP automation in Brisbane eliminates duplicate data entry and keeps both systems in sync without anyone manually updating either one."
    },
    {
      question: "How long until we see results?",
      answer: "Simpler automations like approval flows or report generation can go live in 2–4 weeks. More complex multi-system process automation projects are typically 6–12 weeks. We always validate with a proof-of-concept before full build."
    },
    {
      question: "Is AI automation only for large businesses?",
      answer: "Not anymore. AI automation services in Brisbane are practical for mid-sized businesses — especially for processing emails, documents, and customer communications. We scope what makes commercial sense for your size."
    },
    {
      question: "Will our team push back on automation?",
      answer: "Rarely. In our experience the people who've been doing the manual work longest are the first to welcome it. When the repetitive admin disappears, people have more energy for the work that actually matters."
    }
  ];

  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "Workflow Automation", path: PATHS.managedServices }
  ];

  return (
    <>
      <SEO
        title="Workflow Automation Services in Brisbane | Infogenx"
        description="Workflow Automation Services in Brisbane | Your team didn't sign up to copy-paste data between systems, chase approvals over email, or rebuild the same report every Monday. Our workflow automation services in Brisbane identify what’s slowing your business down and replace it with intelligent, automated processes."
        keywords="workflow automation brisbane, business process automation, crm automation brisbane, erp automation brisbane, RPA services, UiPath brisbane, finance automation, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="What We Automate: Intelligent Business Automation Services" 
        subtitle="Uptime Guaranteed"
        sections={managedContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default ManagedServices;
