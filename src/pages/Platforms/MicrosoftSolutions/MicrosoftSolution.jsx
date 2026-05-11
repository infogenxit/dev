import React from "react";
import AppDevHero from "../../../sections/Platforms/Microsoft/MicrosoftHero/MicrosoftHero";
import AppDevExpertise from "../../../sections/Platforms/Microsoft/MicrosoftExpertise/MicrosoftExpertise";
import AppDevApproach from "../../../sections/Platforms/Microsoft/MicrosoftApproach/MicrosoftApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Microsoft/MicrosoftBusinessImpact/MicrosoftBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Microsoft/MicrosoftImpactCTA/MicrosoftImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const MicrosoftSolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Microsoft Solutions", path: PATHS.microsoftSolutions }
  ];
  return (
    <>
      <SEO
        title="Microsoft Solutions Partner | Enterprise Consulting & Implementation | Infogenx"
        description="Unlock business growth with Infogenx, your trusted Microsoft Solutions Partner. We provide expert consulting for Dynamics 365, Power BI, Azure, and Microsoft 365."
        keywords="Microsoft solutions partner, Microsoft Dynamics 365, Power BI consultant, Microsoft Azure, Microsoft 365 expert, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default MicrosoftSolution;
