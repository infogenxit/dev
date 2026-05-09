import React from "react";
import AppDevHero from "../../../sections/Platforms/Microsoft/MicrosoftHero/MicrosoftHero";
import AppDevExpertise from "../../../sections/Platforms/Microsoft/MicrosoftExpertise/MicrosoftExpertise";
import AppDevApproach from "../../../sections/Platforms/Microsoft/MicrosoftApproach/MicrosoftApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Microsoft/MicrosoftBusinessImpact/MicrosoftBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Microsoft/MicrosoftImpactCTA/MicrosoftImpactCTA";
import SEO from "../../../components/SEO/SEO";
const MicrosoftSolution = () => {
  return (
    <>
      <SEO
        title="Microsoft Solutions Brisbane | Dynamics 365 & Power BI Partner"
        description="Empower your business with Microsoft solutions in Brisbane. We are experts in Dynamics 365, Power BI, Azure, and Power Platform integrations."
        keywords="Microsoft solutions Brisbane, Dynamics 365 partner, Power BI consultant Brisbane, Azure integrations, Microsoft partner Australia"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default MicrosoftSolution;
