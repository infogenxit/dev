import React from "react";
import AppDevHero from "../../../sections/Platforms/Odoo/OdooHero/OdooHero";
import AppDevExpertise from "../../../sections/Platforms/Odoo/OdooExpertise/OdooExpertise";
import AppDevApproach from "../../../sections/Platforms/Odoo/OdooApproach/OdooApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Odoo/OdooBusinessImpact/OdooBusinessImpact";
import AppDevImpactCTA from "../../../sections/Platforms/Odoo/OdooImpactCTA/OdooImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../../route/paths";

const OdooSolution = () => {
  const breadcrumbItems = [
    { name: "Platforms", path: PATHS.home },
    { name: "Odoo Solutions", path: PATHS.odooSolutions }
  ];
  return (
    <>
      <SEO
        title="Odoo ERP Solutions | Implementation & Customization Experts | Infogenx"
        description="Streamline your operations with Odoo ERP. Infogenx specializes in Odoo implementation, custom module development, and business automation for global enterprises."
        keywords="Odoo ERP, Odoo consultant, Odoo developer, ERP automation, Odoo implementation, Infogenx"
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

export default OdooSolution;
