import React from "react";
import AppDevHero from "../../../sections/Platforms/Zoho/ZohoHero/ZohoHero";
import AppDevExpertise from "../../../sections/Platforms/Zoho/ZohoExpertise/ZohoExpertise";
import AppDevApproach from "../../../sections/Platforms/Zoho/ZohoApproach/ZohoApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Zoho/ZohoBusinessImpact/ZohoBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Zoho/ZohoImpactCTA/ZohoImpactCTA";
import SEO from "../../../components/SEO/SEO";
const ZohoSolution = () => {
  return (
    <>
      <SEO
        title="Zoho Partner Brisbane | CRM Implementation & Automation"
        description="Optimise your business with our Brisbane Zoho consulting services. We specialize in Zoho CRM, Books, Projects, and custom automation for Australian businesses."
        keywords="Zoho partner Brisbane, Zoho CRM implementation, Zoho automation expert, Zoho consultant Australia, Zoho analytics"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default ZohoSolution;
