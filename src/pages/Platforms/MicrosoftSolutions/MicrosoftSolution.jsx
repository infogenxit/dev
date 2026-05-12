import React from "react";
import AppDevHero from "../../../sections/Platforms/Microsoft/MicrosoftHero/MicrosoftHero";
import AppDevExpertise from "../../../sections/Platforms/Microsoft/MicrosoftExpertise/MicrosoftExpertise";
import AppDevApproach from "../../../sections/Platforms/Microsoft/MicrosoftApproach/MicrosoftApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Microsoft/MicrosoftBusinessImpact/MicrosoftBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Microsoft/MicrosoftImpactCTA/MicrosoftImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const MicrosoftSolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Microsoft Dynamics 365 Brisbane", path: PATHS.microsoftSolutions }
  ];

  const faqs = [
    {
      question: "What does a Brisbane Microsoft partner do?",
      answer: "A Microsoft partner helps get the most out of Microsoft Dynamics 365, Power BI and Azure. Not only installation that we are focused on, but we ensure it integrates, fits your business processes and supports your team."
    },
    {
      question: "Should I hire a Dynamics 365 consultant?",
      answer: "Yes, of course, if you want it right. Dynamics 365 is a highly helpful tool, but it can become complex if not set up correctly. A consultant ensures that your workflows, data and integrations are all clean to begin with."
    },
    {
      question: "What does Power BI do?",
      answer: "Microsoft Power BI shows you the numbers without having to go through reports. It offers easy-to-understand dashboards that explain what's good, bad, and what you need to focus on."
    },
    {
      question: "Will it connect to our existing tools?",
      answer: "Yes, in most cases, we integrate your tools. This makes the system-to-system data flow correct - no rework, no correction."
    },
    {
      question: "What about after the setup?",
      answer: "We stay involved. We work with you as your business needs evolve, so you improve and optimise over time."
    }
  ];

  return (
    <>
      <SEO
        title="Trusted Microsoft Partner Brisbane | Dynamics 365 & Power BI"
        description="Active Microsoft partner in Brisbane specializing in Microsoft Dynamics 365, Power BI, and Azure solutions. With 30+ years experience, we integrate and optimise processes."
        keywords="microsoft dynamics 365 brisbane, microsoft partner brisbane, power bi brisbane, azure logic apps brisbane, dynamics 365 consultant brisbane, dynamics 365 partner brisbane, microsoft 365 brisbane, microsoft azure brisbane, microsoft copilot brisbane, microsoft solutions brisbane"
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

export default MicrosoftSolution;
