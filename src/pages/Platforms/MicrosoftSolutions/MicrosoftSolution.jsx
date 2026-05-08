import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Platforms/Microsoft/MicrosoftHero/MicrosoftHero";
import AppDevExpertise from "../../../components/Platforms/Microsoft/MicrosoftExpertise/MicrosoftExpertise";
import AppDevApproach from "../../../components/Platforms/Microsoft/MicrosoftApproach/MicrosoftApproach";
import AppDevBusinessImpact from "../../../components/Platforms/Microsoft/MicrosoftBusinessImpact/MicrosoftBusinessImpact";
// import AppDevImpactCTA from "../../../components/Platforms/Microsoft/MicrosoftImpactCTA/MicrosoftImpactCTA";
import Footer from "../../../components/Footer/Footer";
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
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      {/* <AppDevImpactCTA /> */}
      <Footer />
    </>
  );
};

export default MicrosoftSolution;
