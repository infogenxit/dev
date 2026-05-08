import React from "react";
import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Solutions/DataAnalyticsAI/DataAnalyticsAIHero/DataAnalyticsAIHero";
import AppDevExpertise from "../../../components/Solutions/DataAnalyticsAI/DataAnalyticsAIExpertise/DataAnalyticsAIExpertise";
import AppDevApproach from "../../../components/Solutions/DataAnalyticsAI/DataAnalyticsAIApproach/DataAnalyticsAIApproach";
import AppDevBusinessImpact from "../../../components/Solutions/DataAnalyticsAI/DataAnalyticsAIBusinessImpact/DataAnalyticsAIBusinessImpact";
import AppDevImpactCTA from "../../../components/Solutions/DataAnalyticsAI/DataAnalyticsAIImpactCTA/DataAnalyticsAIImpactCTA";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../components/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../components/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../components/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../components/Common/ServiceDetailedContent/ServiceDetailedContent";

const DataAnalyticsAI = () => {
  const analyticsContent = [
    {
      heading: "Transforming Data into Decision-Grade Intelligence",
      content: [
        "In the digital economy, data is often referred to as the 'new oil.' However, raw data without refinement is just noise. At Infogenx, we specialize in the refinement process, transforming vast quantities of unstructured information into clear, actionable, decision-grade intelligence. Our Data Analytics & AI solutions are designed to help Australian businesses move beyond looking in the rearview mirror and start predicting the road ahead.",
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
    { name: "Solutions", path: "/solutions/digital-transformation" },
    { name: "Data Analytics & AI", path: "/solutions/data-analytics-ai" }
  ];

  const faqs = [
    {
      question: "What is the difference between data analytics and AI?",
      answer: "Data analytics focuses on analyzing historical data to understand past trends, while AI uses that data to build models that can predict future outcomes or automate decisions."
    },
    {
      question: "How do you ensure data privacy in AI models?",
      answer: "We use secure, anonymized datasets for training and implement strict access controls and encryption to protect your information."
    },
    {
      question: "Can you work with our existing data sources?",
      answer: "Yes, we build automated pipelines that can ingest data from virtually any source, including CRMs, ERPs, and external APIs."
    },
    {
      question: "What is predictive analytics?",
      answer: "Predictive analytics is the use of statistical algorithms and machine learning to identify the likelihood of future outcomes based on historical data."
    },
    {
      question: "How long does it take to see results from a data project?",
      answer: "Initial descriptive insights can often be delivered within weeks, while complex predictive models typically take 2-4 months to refine and deploy."
    }
  ];

  const relatedItems = [
    {
      title: "Intelligent Automation",
      description: "Power your automated workflows with decision-grade AI and analytics.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Digital Transformation",
      description: "Harness the power of data to drive your organizational transformation.",
      link: "/solutions/digital-transformation"
    },
    {
      title: "Modern Applications",
      description: "Integrate intelligent data capabilities directly into your custom software.",
      link: "/solutions/modern-applications"
    }
  ];
  return (
    <>
      <SEO
        title="Data Analytics & AI Solutions Australia | Infogenx"
        description="Unlock decision-grade intelligence with our data analytics and AI services. We help Australian businesses transform raw data into actionable strategic insights."
        keywords="data analytics services Australia, AI business solutions, predictive analytics consulting"
      />
      <Header />
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
      <Footer />
    </>
  );
};

export default DataAnalyticsAI;
