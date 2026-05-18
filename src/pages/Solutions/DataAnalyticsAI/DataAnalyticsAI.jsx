import React from "react";
import AppDevHero from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsHero/DataAnalyticsHero";
import AppDevExpertise from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsExpertise/DataAnalyticsExpertise";
import AppDevApproach from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsApproach/DataAnalyticsApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsBusinessImpact/DataAnalyticsBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsImpactCTA/DataAnalyticsImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const DataAnalyticsAI = () => {
  const analyticsContent = [
    {
      heading: "Data Strategy in Brisbane",
      content: [
        "Most businesses jump straight to tools before they know what they're trying to measure. We slow that down on purpose. We sit with your team, understand your goals, find the gaps, and build a data strategy that connects what you're collecting to what actually matters for your business. No generic frameworks. Just a clear plan that makes sense for your size, your industry, and your budget."
      ]
    },
    {
      heading: "Data Engineering in Brisbane",
      content: [
        "Good analytics needs clean, connected data underneath it. We build the pipelines, data warehouses, and infrastructure that pull everything — your CRM, your ERP, your marketing platforms — into one place. If your data is scattered, siloed, or just plain messy, this is where we start."
      ]
    },
    {
      heading: "Business Intelligence in Brisbane",
      content: [
        "Our BI consulting in Brisbane work helps you stop drowning in reports and start actually understanding your business. We identify the metrics that matter, cut the noise, and set up a BI environment your whole team can use — not just the analysts."
      ]
    },
    {
      heading: "Dashboard Development in Brisbane",
      content: [
        "We build Power BI dashboards teams genuinely use. Not pretty demos that get ignored after week two. Real dashboards with the right data, built around how your people actually work. We also work with Tableau and Looker — we'll always recommend what fits your stack, not what's easiest for us."
      ]
    },
    {
      heading: "Reporting Automation in Brisbane",
      content: [
        "If someone on your team is still manually pulling reports every week, that time is being wasted. We automate the whole process — scheduled, accurate, delivered straight to whoever needs it. Finance, ops, sales — doesn't matter. If it's repetitive, we'll automate it."
      ]
    },
    {
      heading: "Predictive & Forecasting Analytics",
      content: [
        "This is where things get interesting. Our predictive analytics services in Brisbane use your historical data to show you what's likely coming next — demand forecasting, churn risk, sales trends. Forecasting analytics businesses use to stop reacting and start planning ahead."
      ]
    },
    {
      heading: "Data Platform Development in Brisbane",
      content: [
        "We build and manage modern data platform development solutions on cloud infrastructure including AWS and Azure. Scalable, secure, and built to grow with your business. Not a patchwork of tools duct-taped together."
      ]
    },
    {
      heading: "Enterprise Reporting",
      content: [
        "Multiple teams. Different systems. Everyone working off different numbers. Our enterprise reporting in Brisbane work fixes that by creating one consistent, trusted reporting environment across your whole organisation. One version of the truth, finally."
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Data Analytics & AI", path: PATHS.dataAnalyticsAi }
  ];

  const faqs = [
    {
      question: "How long does a Power BI dashboard take to build?",
      answer: "Usually 2–4 weeks for a solid working version. If your data sources are already accessible, sometimes faster. We scope it properly upfront so there are no surprises."
    },
    {
      question: "My data is scattered across systems — where do we even start?",
      answer: "With a data audit. Our data engineering team maps what you have, identifies what's usable, and builds the infrastructure to bring it all together. You don't need to be organised before calling us."
    },
    {
      question: "What's the real difference between BI consulting and just buying a BI tool?",
      answer: "A tool is just software. BI consulting in Brisbane means someone helps you figure out what to measure, how to model your data correctly, and how to build something your team will actually trust and use. Tools without strategy usually just create faster confusion."
    },
    {
      question: "Can a smaller business actually benefit from predictive analytics?",
      answer: "Yes — and it doesn't need to cost a fortune. Predictive analytics services are far more accessible now than they were five years ago. We scope projects around a specific problem you're trying to solve, not a full enterprise rollout."
    },
    {
      question: "How do we know if we need a data strategy or just better reporting?",
      answer: "If you're unsure what to measure — you need a data strategy. If you know what to measure but the reports are slow, manual, or inconsistent — that's enterprise reporting. We'll tell you honestly which one you actually need."
    }
  ];

  const relatedItems = [
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: PATHS.intelligentAutomation
    },
    {
      title: "Modern Applications",
      description: "Build scalable, cloud-native applications tailored to your business objectives.",
      link: PATHS.modernApplications
    },
    {
      title: "API Integration",
      description: "Connect your business ecosystem with seamless API-first solutions.",
      link: PATHS.apiIntegration
    }
  ];

  return (
    <>
      <SEO
        title="Data Analytics Brisbane | Smarter Decisions, Real Business Results"
        description="Data Analytics in Brisbane | Smarter Decisions, Real Business Results Most businesses have more data than they know what to do with. CRM data, sales reports, website analytics, finance exports — it's all there. But when someone asks 'why did revenue drop last quarter?' or 'which customers are about to churn?' the answer is usually a shrug and a spreadsheet."
        keywords="data analytics brisbane, business intelligence brisbane, data strategy, predictive analytics, Power BI brisbane, data engineering, reporting automation, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Smarter Growth Starts with Data Analytics in Brisbane Solutions" 
        subtitle="Data-Driven Excellence"
        sections={analyticsContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default DataAnalyticsAI;
