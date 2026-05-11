import React from "react";
import AppDevHero from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsHero/DataAnalyticsHero";
import AppDevExpertise from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsExpertise/DataAnalyticsExpertise";
import AppDevApproach from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsApproach/DataAnalyticsApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsBusinessImpact/DataAnalyticsBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/DataAnalyticsAI/DataAnalyticsImpactCTA/DataAnalyticsImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const DataAnalyticsAI = () => {
  const analyticsContent = [
    {
      heading: "Transforming Data into Decision-Grade Intelligence",
      content: [
        "In the digital economy, data is often referred to as the 'new oil.' However, raw data without refinement is just noise. At Infogenx, we specialize in the refinement process, transforming vast quantities of unstructured information into clear, actionable, decision-grade intelligence. Our Data Analytics & AI solutions are designed to help businesses move beyond looking in the rearview mirror and start predicting the road ahead.",
        "From identifying hidden market trends to automating complex decision-making processes, our data scientists and engineers build the intelligent systems that give your organization a distinct competitive advantage. We help you unlock the true value of your information, ensuring that every data point serves a strategic purpose."
      ]
    },
    {
      heading: "The Analytics Spectrum: From Descriptive to Predictive",
      content: [
        "We guide our clients through the full maturity curve of data analytics, moving from simple reporting to advanced predictive modeling."
      ],
      list: [
        { label: "Descriptive & Diagnostic Analytics", text: "Understand exactly what happened in your business and, more importantly, why it happened, through advanced visualization and root-cause analysis." },
        { label: "Predictive Intelligence", text: "Leverage historical data and machine learning algorithms to forecast future trends, customer behaviors, and market shifts with high accuracy." },
        { label: "Prescriptive Strategy", text: "Move beyond 'what will happen' to 'what should we do,' using AI to recommend the optimal course of action for maximum business impact." }
      ]
    },
    {
      heading: "Modernizing Your Data Engineering Pipeline",
      content: [
        "Great insights require great data. We focus heavily on the underlying data engineering that powers your analytics. We build robust, automated pipelines that ingest data from across your ecosystem—CRMs, ERPs, web analytics, and IoT devices—cleansing and consolidating it into a unified, high-performance data warehouse.",
        "By utilizing modern cloud technologies like Azure Synapse, AWS Redshift, or BigQuery, we ensure that your data is always fresh, accurate, and ready for analysis, providing a reliable foundation for your most critical business decisions."
      ]
    },
    {
      heading: "AI & Machine Learning for Real-World Challenges",
      content: [
        "AI is most powerful when applied to specific, high-impact business challenges. Whether it's building a recommendation engine for an e-commerce platform, developing a fraud detection model for a financial service, or creating an AI assistant to handle complex customer queries, our focus is on practical, outcome-driven innovation.",
        "We prioritize transparency and explainability in our AI models, ensuring that you not only get a prediction but understand the factors that drove it. This builds trust in the technology and allows your team to act on AI insights with total confidence."
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: PATHS.home },
    { name: "Data Analytics & AI", path: PATHS.dataAnalyticsAi }
  ];

  const faqs = [
    {
      question: "How can AI and analytics benefit my business?",
      answer: "AI and analytics help you uncover hidden patterns in your data, predict future trends, and automate complex decision-making processes, leading to increased efficiency and competitive advantage."
    },
    {
      question: "What platforms do you use for data analytics?",
      answer: "We primarily use Microsoft Power BI, Zoho Analytics, and custom-built Python/SQL models to create comprehensive dashboards and predictive tools."
    },
    {
      question: "Can you analyze data from multiple sources?",
      answer: "Yes, we specialize in data engineering to consolidate data from various sources like CRM, ERP, and web analytics into a single source of truth."
    },
    {
      question: "How do you ensure the accuracy of AI models?",
      answer: "We follow a rigorous validation process, using historical data to test our models and continuously monitoring their performance to ensure they remain accurate over time."
    },
    {
      question: "Is my business data secure when using your AI solutions?",
      answer: "Absolutely. We implement strict data governance and security protocols, ensuring all data processing complies with the latest privacy standards."
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
        title="Data Analytics & AI Solutions | Business Intelligence Experts | Infogenx"
        description="Transform your data into actionable intelligence with Infogenx's expert analytics and AI solutions. We help businesses predict trends and optimize performance through data-driven strategies."
        keywords="data analytics, business intelligence, AI solutions, predictive analytics, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Intelligence That Powers Strategic Growth" 
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
