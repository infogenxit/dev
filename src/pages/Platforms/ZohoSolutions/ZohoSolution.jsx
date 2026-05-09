import React from "react";
import AppDevHero from "../../../sections/Platforms/Zoho/ZohoHero/ZohoHero";
import AppDevExpertise from "../../../sections/Platforms/Zoho/ZohoExpertise/ZohoExpertise";
import AppDevApproach from "../../../sections/Platforms/Zoho/ZohoApproach/ZohoApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Zoho/ZohoBusinessImpact/ZohoBusinessImpact";
// import AppDevImpactCTA from "../../../sections/Platforms/Zoho/ZohoImpactCTA/ZohoImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const ZohoSolution = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="Zoho Consulting, Automation & Analytics | Infogenx Australia"
          description="Infogenx helps businesses implement, customize, and optimize Zoho solutions for CRM, automation, analytics, and operational efficiency."
          keywords="Zoho consulting Australia, Zoho CRM automation, Zoho Analytics"
        />
      */}
      <SEO
        title="Your Trusted Zoho Consultant in Brisbane — Built Around How Your Business Actually Works"
        description="Expert Zoho consulting in Brisbane. We help you customize and optimize Zoho CRM, Zoho One, and Zoho Analytics to solve real operational gaps."
        keywords="Zoho consultant Brisbane, Zoho CRM implementation, Zoho One expert, Zoho automation, Infogenx"
      />
      {/* <Helmet>
        <title>
          Zoho Consulting, Automation & Analytics | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Infogenx helps businesses implement, customize, and optimize Zoho solutions for CRM, automation, analytics, and operational efficiency."
        />
        <meta
          name="keywords"
          content="Zoho consulting Australia, Zoho CRM automation, Zoho Analytics"
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

export default ZohoSolution;
