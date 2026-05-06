import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/DataAnalytics/DataAnalyticsHero/DataAnalyticsHero";
import AppDevExpertise from "../../../components/Solutions/DataAnalytics/DataAnalyticsExpertise/DataAnalyticsExpertise";
import AppDevApproach from "../../../components/Solutions/DataAnalytics/DataAnalyticsApproach/DataAnalyticsApproach";
import AppDevBusinessImpact from "../../../components/Solutions/DataAnalytics/DataAnalyticsBusinessImpact/DataAnalyticsBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/DataAnalytics/DataAnalyticsImpactCTA/DataAnalyticsImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const DataAnalyticsAI = () => {
  return (
    <>
      <SEO
        title="Data Analytics & AI Solutions Australia | Intelligent Business Insights | Infogenx"
        description="Transform your business data into actionable insights with Infogenx's Data Analytics & AI solutions in Australia. We build intelligent models for Microsoft, Zoho, and Odoo systems."
        keywords="data analytics Australia, AI business insights, predictive intelligence Brisbane"
      />
      {/* <Helmet>
        <title>
          Data, Analytics & AI Consulting Services | Infogenx Australia
        </title>
        <meta
          name="description"
          content="Turn data into confident decisions with Infogenx’s analytics engineering and AI solutions designed for insight, performance, and business impact. "
        />
        <meta
          name="keywords"
          content="data analytics consulting Australia, AI consulting, analytics engineering"
        />
      </Helmet> */}
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default DataAnalyticsAI;
