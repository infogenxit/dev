import React from "react";
import Header from "../../../sections/header/Header";
import AppDevHero from "../../../sections/Solutions/ModernApplication/ModernApplicationHero/ModernApplicationHero";
import AppDevExpertise from "../../../sections/Solutions/ModernApplication/ModernApplicationExpertise/ModernApplicationExpertise";
import AppDevApproach from "../../../sections/Solutions/ModernApplication/ModernApplicationApproach/ModernApplicationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/ModernApplication/ModernApplicationBusinessImpact/ModernApplicationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/ModernApplication/ModernApplicationImpactCTA/ModernApplicationImpactCTA";
import Footer from "../../../sections/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";

const ModernApplication = () => {
  const modernAppContent = [
    {
      heading: "Engineering Future-Proof Applications for the Australian Market",
      content: [
        "In a world where software is the primary touchpoint between businesses and their customers, the quality of your applications directly impacts your bottom line. At Infogenx, we don't just write code; we engineer robust, scalable, and secure digital products designed to meet the rigorous demands of the Australian market. Modern application development requires a departure from legacy thinking, embracing agility, user-centric design, and technical excellence.",
        "From consumer-facing mobile apps to complex enterprise resource planning systems, our engineering team focuses on creating software that is not only functional today but adaptable for the innovations of tomorrow. We bridge the gap between complex business requirements and elegant technical execution, ensuring your digital assets drive real value."
      ]
    },
    {
      heading: "Cloud-Native: The Standard for Modern Enterprises",
      content: [
        "We believe that the future of business is cloud-native. By building applications specifically for the cloud, we unlock levels of performance, resilience, and cost-efficiency that traditional software simply cannot match."
      ],
      list: [
        { label: "Microservices Architecture", text: "We break complex systems into smaller, independent services that can be updated, deployed, and scaled individually without affecting the whole system." },
        { label: "Serverless Computing", text: "Leverage modern cloud capabilities to run code only when needed, reducing infrastructure management overhead and operational costs." },
        { label: "DevSecOps Integration", text: "We bake security into the very core of our development lifecycle, ensuring that your applications are protected against modern threats from day one." }
      ]
    },
    {
      heading: "Our Core Engineering Principles",
      content: [
        "Every application that leaves the Infogenx engineering lab is built upon three foundational principles: Security, Performance, and Scalability.",
        "Security is never an afterthought; we implement industry-standard encryption, secure authentication (OAuth2/SAML), and rigorous penetration testing. Performance is optimized through efficient code, global content delivery networks (CDNs), and advanced caching strategies. Scalability ensures that as your user base grows from hundreds to millions, your application remains fast and responsive, automatically adjusting to meet demand."
      ]
    },
    {
      heading: "The Lifecycle of a Modern Application",
      content: [
        "Software is a living entity. Our approach covers the entire lifecycle, from the initial discovery workshops and UI/UX design to continuous integration (CI/CD) and proactive maintenance. We use agile methodologies to ensure transparent communication and rapid delivery, allowing you to see progress in real-time and pivot as market conditions change.",
        "Post-launch, we provide continuous monitoring and optimization services, ensuring your application stays ahead of the technical curve and continues to delight your users."
      ]
    }
  ];

  const breadcrumbItems = [
    { name: "Solutions", path: "/solutions/digital-transformation" },
    { name: "Modern Applications", path: "/solutions/modern-applications" }
  ];

  const faqs = [
    {
      question: "What makes an application 'modern'?",
      answer: "A modern application is cloud-native, uses microservices architecture, scales automatically, and is developed using agile and DevOps practices."
    },
    {
      question: "Why should we move to a microservices architecture?",
      answer: "Microservices allow for independent scaling, easier updates, and greater resilience compared to monolithic applications."
    },
    {
      question: "How do you ensure the security of modern apps?",
      answer: "We use DevSecOps practices, integrating security at every stage of development, along with robust encryption and authentication protocols."
    },
    {
      question: "Can you help modernize our legacy software?",
      answer: "Yes, we specialize in legacy modernization, either by refactoring existing code or rebuilding core functionality using modern, cloud-native technologies."
    },
    {
      question: "What technologies do you use for app development?",
      answer: "We use a wide range of modern stacks, including React, Node.js, Python, and cloud services from Azure and AWS, depending on the project requirements."
    }
  ];

  const relatedItems = [
    {
      title: "API Integration",
      description: "Connect your applications seamlessly with secure, high-performance API solutions.",
      link: "/solutions/api-integration"
    },
    {
      title: "Intelligent Automation",
      description: "Enhance your application's power with AI-driven workflow orchestration.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Data Analytics & AI",
      description: "Unlock actionable insights from your application data with advanced analytics.",
      link: "/solutions/data-analytics-ai"
    }
  ];
  return (
    <>
      <SEO
        title="Modern Application Engineering & Development | Infogenx"
        description="We build secure, scalable, and cloud-native applications designed for the modern enterprise. Expert engineering for mobile, web, and enterprise platforms."
        keywords="modern application development Australia, cloud native apps, custom software engineering Brisbane"
      />
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Scalable, Secure & Performance-Driven Engineering" 
        subtitle="Built for the Cloud"
        sections={modernAppContent} 
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

export default ModernApplication;
