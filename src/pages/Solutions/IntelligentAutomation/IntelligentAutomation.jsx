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
      heading: "What Actually Is IPA?",
      content: [
        "Most people have heard of basic automation, a script that runs the same task on repeat. Brisbane Intelligent Process Automation goes further. It brings together RPA (Robotic Process Automation), AI, and machine learning so your systems can handle tasks that involve real decisions, not just fixed rules.",
        "It can read a document, pull the right data, check it against another system, flag anything unusual, and pass it along, without anyone touching it. That's the difference between automating a task and automating a workflow."
      ]
    },
    {
      heading: "Who Can Benefit From Our Brisbane Intelligent Process Automation",
      content: [
        "Every business has bottlenecks. The industries change, but the problems are often the same, repetitive tasks, disconnected systems, and teams wasting hours on manual work.",
        "That’s where Brisbane Intelligent Process Automation helps.",
        "We work with finance teams overwhelmed by invoices and reporting, HR departments stuck in onboarding admin, operations teams manually tracking workflows, healthcare providers managing disconnected systems, and e-commerce businesses struggling to scale processes efficiently.",
        "If your team spends too much time on tasks that should already be automated, it’s probably time for a conversation."
      ]
    },
    {
      heading: "Why Work With Infogenx in Brisbane",
      content: [
        "There are plenty of firms that will sell you automation software and leave you to figure out the rest. That's not what we do.",
        "We're a practical team. We don't propose technology to tick a box, we recommend what will actually work for the size, budget, and complexity of your business. If something won't give you a return, we'll tell you.",
        "We work with the platforms businesses actually use, UiPath, Automation Anywhere, Blue Prism, Power Automate, ABBYY, and we pick the right fit for your situation, not ours.",
        "Most of our clients recover their investment within six to twelve months. Some much sooner, depending on the volume of work being automated.",
        "A free consultation costs you nothing except an hour. We'll look at your current workflows, tell you honestly where Brisbane Intelligent Process Automation makes sense, and give you a clear idea of what to expect, timelines, costs, and results."
      ]
    }
  ];

  const faqData = [
    {
      question: "1. We're not a big company, does IPA still make sense for us?",
      answer: "Yes, and honestly mid-sized businesses often see faster results than large ones. There's less red tape, faster decisions, and the impact on a smaller team is immediately visible. We've built automation for businesses with teams of 10 and teams of 500. The right starting point just looks different."
    },
    {
      question: "2. How long before we see something actually working?",
      answer: "A pilot process is usually live within four to six weeks. Full rollout across multiple workflows takes three to six months. You're not waiting a year to see value — we build that in from the start."
    },
    {
      question: "3. Are we going to have to let staff go after this?",
      answer: "That's a concern we hear often, and the honest answer is no, that's not how this works in practice. Automation handles the tasks people hate doing anyway. What we consistently see is that teams feel less stretched, less frustrated, and more focused on work that actually requires their judgment. Headcount decisions are yours to make, not driven by the bots."
    },
    {
      question: "4. Our processes are messy and not well documented. Is that a problem?",
      answer: "It's actually the norm. Very few businesses have clean, documented workflows sitting ready to automate. Part of what we do in the discovery phase is map out how things really work — messy edges and all. That clarity alone is valuable, separate from any automation."
    },
    {
      question: "5. What happens when our processes change?",
      answer: "We update the automation. Bots aren't set-and-forget — they need to reflect how your business operates. As part of our ongoing support, we handle those changes so your automations stay accurate and your team doesn't inherit a maintenance headache."
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
        description="Your team didn't sign up to copy-paste data all day. At Infogenx, we build Brisbane Intelligent Process Automation solutions so your systems can handle tasks that involve decisions."
        keywords="intelligent process automation, AI workflow automation, business process automation, Infogenx"
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
