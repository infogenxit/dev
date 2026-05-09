import React from "react";
import AppDevHero from "../../../sections/Platforms/Microsoft/MicrosoftHero/MicrosoftHero";
import AppDevExpertise from "../../../sections/Platforms/Microsoft/MicrosoftExpertise/MicrosoftExpertise";
import AppDevApproach from "../../../sections/Platforms/Microsoft/MicrosoftApproach/MicrosoftApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Microsoft/MicrosoftBusinessImpact/MicrosoftBusinessImpact";
// import AppDevImpactCTA from "../../../sections/Platforms/Microsoft/MicrosoftImpactCTA/MicrosoftImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const MicrosoftSolution = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="Microsoft Consulting & Power Platform Solutions | Infogenx"
          description="Unlock the full value of Microsoft 365, Power Platform, Azure Data & AI, and Dynamics with Infogenx’s consulting and implementation services."
          keywords="Microsoft consulting Australia, Power Platform automation, Azure data AI"
        />
      */}
      <SEO
        title="Trusted Microsoft Partner in Brisbane"
        description="Certified Microsoft partner in Brisbane specializing in Dynamics 365, Power BI, and Microsoft Cloud solutions for scalable growth."
        keywords="Microsoft partner Brisbane, Dynamics 365 Brisbane, Power BI consulting, Microsoft Cloud solutions, Infogenx"
      />
      {/* <Helmet>
        <title>Microsoft Consulting & Power Platform Solutions | Infogenx</title>
        <meta
          name="description"
          content="Unlock the full value of Microsoft 365, Power Platform, Azure Data & AI, and Dynamics with Infogenx’s consulting and implementation services."
        />
        <meta
          name="keywords"
          content="Microsoft consulting Australia, Power Platform automation, Azure data AI"
        />
      </Helmet> */}
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      {/* <AppDevImpactCTA /> */}
    </>
  );
};

export default MicrosoftSolution;
