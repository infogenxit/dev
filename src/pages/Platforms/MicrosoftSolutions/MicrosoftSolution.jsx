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
      question: "What does a Microsoft partner in Brisbane actually do?",
      answer: "A Microsoft partner works as an extension of your team to ensure your technical environment is set up according to best practices. We help you choose the right licenses, configure the systems (like Dynamics 365 or Azure), and provide the ongoing support to ensure you're getting value from your investment."
    },
    {
      question: "Do I really need a Microsoft consultant, or can I just set it up myself?",
      answer: "While you can set up basic tools like Microsoft 365 yourself, complex systems like Dynamics 365, Azure logic apps, and Power BI require professional architecture. Without it, you risk disjointed data, security gaps, and a system that your team won't actually use."
    },
    {
      question: "Is Power BI only for big companies?",
      answer: "No. Power BI is scalable. We work with many Brisbane-based mid-market companies who use Power BI to gain visibility over their sales, inventory, and finance without the need for a massive IT department."
    }
  ];

  return (
    <>
      <SEO
        title="Microsoft Dynamics 365 Brisbane | Trusted Experts"
        description="Scale your company with leading Microsoft Dynamics 365 Brisbane services. Our expert Brisbane Microsoft Dynamics 365 consultants deliver tailored solutions."
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
