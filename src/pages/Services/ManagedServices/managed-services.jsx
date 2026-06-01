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
      heading: "What RPA Actually Is",
      content: [
        "RPA uses software to mimic what a person does when interacting with digital systems. It logs into applications, reads and enters data, moves files, fills forms, triggers actions, and hands off to the next step — all without human input. It doesn't replace your existing software; it works on top of it.",
        "The result is a process that runs faster, makes fewer errors, and doesn't call in sick."
      ]
    },
    {
      heading: "What We Automate for Businesses With Our Brisbane RPA Services",
      content: [
        "Data Entry and Migration: Moving data between systems manually is slow, tedious, and error‑prone. RPA handles this at volume, accurately, without the fatigue that causes human mistakes halfway through a 400‑row spreadsheet.",
        "Invoice and Document Processing: Extracting information from invoices, purchase orders, and contracts and pushing it into your accounting or ERP system. What takes an accounts team hours can run overnight without anyone touching it.",
        "Report Generation and Distribution: Pulling data from multiple sources, compiling it into the right format, and sending it to the right people on schedule. No more Friday afternoons spent building the weekly report.",
        "Customer Onboarding Workflows: New customer setup across your CRM, billing system, and project management tools — completed consistently and quickly, every time, without steps getting skipped because someone was busy.",
        "Compliance and Audit Tasks: Regular checks, data validation, and record‑keeping that needs to happen consistently. RPA runs these on schedule and logs everything, which makes audits considerably less painful.",
        "HR and Payroll Administration: Timesheet processing, leave calculations, employee record updates — repetitive HR admin that consumes time without adding any strategic value."
      ]
    },
    {
      heading: "How We Work With Businesses",
      content: [
        "We start by understanding your current processes properly. Not a surface-level overview — we map out what actually happens, step by step, including the exceptions and edge cases that don't show up in the official process documentation.",
        "From there we identify what's genuinely worth automating. Not everything is. Some processes are too variable, too judgment-heavy, or simply not high enough volume to justify the build. We're honest about that upfront.",
        "For the processes that do make sense, we build, test, and deploy automation using tools like UiPath, Automation Anywhere, and Power Automate — depending on your existing tech environment and what fits best. We document everything so your team understands what's running and why.",
        "After go-live we stay involved. Automations need maintenance when the systems they interact with change. We handle that so your processes keep running without becoming someone's side job."
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
      question: "Do we need to replace our current software to implement RPA?",
      answer: "No — that's one of the main reasons RPA is practical. It works with the systems you already have, including older platforms that don't have modern APIs. If your team can interact with it on screen, RPA can usually be built to do the same."
    },
    {
      question: "What kind of ROI should we expect?",
      answer: "It varies by process, but most clients see significant time savings within the first few months. A process that takes a person two hours daily can often run unattended in minutes. The return compounds when you multiply that across multiple automations."
    },
    {
      question: "What happens when something breaks or a process changes?",
      answer: "Automations need maintenance when the underlying systems or business rules change — that's just the reality. We build with this in mind and provide ongoing support so your automations stay functional without becoming a burden on your internal team."
    },
    {
      question: "How long does it take to get an automation live?",
      answer: "Straightforward automations can be live in a few weeks. More complex, multi-system processes take longer depending on the number of steps and exceptions involved. We scope each one properly before committing to a timeline."
    },
    {
      question: "Is Brisbane RPA services only suitable for large businesses?",
      answer: "Not at all. Mid-sized Brisbane businesses often see the biggest impact because the time savings hit a proportionally larger share of their team's capacity. If a process happens regularly and follows consistent rules, it's worth assessing regardless of company size."
    }
  ];


  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "RPA Services", path: PATHS.managedServices }
  ];

  return (
    <>
      <SEO
        title="Brisbane RPA Services | Infogenx"
        description="Every Brisbane business has tasks that happen the same way, every day, handled manually by someone who should be doing something more valuable with their time. These tasks aren't complex. They're just repetitive. And repetitive work is exactly what Robotic Process Automation was built for. Our Brisbane RPA services at Infogenx help businesses identify, automate, and maintain these processes — so your team stops burning hours on admin and starts spending time on work that actually moves things forward."
        keywords="RPA Brisbane, robotic process automation, Infogenx, automation services, UiPath, Blue Prism, Power Automate, workflow automation"
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
