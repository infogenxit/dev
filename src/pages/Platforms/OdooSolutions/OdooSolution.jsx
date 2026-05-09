import React from "react";
import AppDevHero from "../../../sections/Platforms/Odoo/OdooHero/OdooHero";
import AppDevExpertise from "../../../sections/Platforms/Odoo/OdooExpertise/OdooExpertise";
import AppDevApproach from "../../../sections/Platforms/Odoo/OdooApproach/OdooApproach";
import AppDevBusinessImpact from "../../../sections/Platforms/Odoo/OdooBusinessImpact/OdooBusinessImpact";
// import AppDevImpactCTA from "../../../sections/Platforms/Odoo/OdooImpactCTA/OdooImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const OdooSolution = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="Odoo ERP Implementation & Customisation | Infogenx"
          description="Infogenx delivers Odoo ERP implementation, custom modules, and workflow automation to streamline operations and improve business visibility."
          keywords="Odoo ERP Australia, Odoo implementation, ERP automation"
        />
      */}
      <SEO
        title="Odoo in Brisbane for Scalable ERP, Automation and Business Systems"
        description="Expert Odoo consulting, migration, and custom development in Brisbane. We help you eliminate app fatigue and fragmented data with a unified business platform."
        keywords="Odoo Brisbane, Odoo ERP implementation, Odoo consulting, ERP automation Brisbane, Infogenx"
      />
      {/* <Helmet>
        <title>Odoo ERP Implementation & Customisation | Infogenx</title>
        <meta
          name="description"
          content="Infogenx delivers Odoo ERP implementation, custom modules, and workflow automation to streamline operations and improve business visibility."
        />
        <meta
          name="keywords"
          content="Odoo ERP Australia, Odoo implementation, ERP automation"
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

export default OdooSolution;
