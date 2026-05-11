import React from "react";
import AppDevHero from "../../../sections/Platforms/Zoho/ZohoHero/ZohoHero";
import AppDevExpertise from "../../../sections/Platforms/Zoho/ZohoExpertise/ZohoExpertise";
import AppDevApproach from "../../../sections/Platforms/Zoho/ZohoApproach/ZohoApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Zoho/ZohoBusinessImpact/ZohoBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Zoho/ZohoImpactCTA/ZohoImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const ZohoSolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Zoho Solutions", path: PATHS.zohoSolutions }
  ];
  return (
    <>
      <SEO 
        title="Zoho Consultant & CRM Implementation Experts | Infogenx"
        description="Unlock business growth with Infogenx, your expert Zoho consulting partner. We provide professional Zoho CRM implementation, automation, and custom solutions for global businesses."
        keywords="Zoho consultant, Zoho partner, Zoho CRM implementation, Zoho automation, Zoho consulting, Infogenx"
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

export default ZohoSolution;
