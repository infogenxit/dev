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
        title="Microsoft Solutions Partner Brisbane | Trusted Experts & Agency"
        description="Are you looking for professional Microsoft Solutions Partner Brisbane? Unlock business growth with expert Microsoft consulting services in Brisbane."
        keywords="Microsoft solutions partner Brisbane, Microsoft Dynamics 365 Brisbane, Power BI consultant Brisbane, Microsoft Azure Brisbane, Microsoft 365 expert"
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
