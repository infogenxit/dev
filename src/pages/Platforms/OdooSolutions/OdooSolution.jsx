import React from "react";
import AppDevHero from "../../../sections/Platforms/Odoo/OdooHero/OdooHero";
import AppDevExpertise from "../../../sections/Platforms/Odoo/OdooExpertise/OdooExpertise";
import AppDevApproach from "../../../sections/Platforms/Odoo/OdooApproach/OdooApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Odoo/OdooBusinessImpact/OdooBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Odoo/OdooImpactCTA/OdooImpactCTA";
import SEO from "../../../components/SEO/SEO";
const OdooSolution = () => {
  return (
    <>
      <SEO
        title="Odoo ERP Brisbane | Implementation & Customisation Expert"
        description="Streamline your operations with Odoo ERP in Brisbane. We are experts in Odoo implementation, custom module development, and business automation."
        keywords="Odoo ERP Brisbane, Odoo consultant Brisbane, Odoo developer Australia, ERP automation Brisbane, Odoo implementation"
      />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
    </>
  );
};

export default OdooSolution;
