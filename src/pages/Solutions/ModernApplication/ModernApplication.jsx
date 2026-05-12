import React from "react";
import AppDevHero from "../../../sections/Solutions/ModernApplication/ModernApplicationHero/ModernApplicationHero";
import AppDevExpertise from "../../../sections/Solutions/ModernApplication/ModernApplicationExpertise/ModernApplicationExpertise";
import AppDevApproach from "../../../sections/Solutions/ModernApplication/ModernApplicationApproach/ModernApplicationApproach";
import AppDevBusinessImpact from "../../../sections/Solutions/ModernApplication/ModernApplicationBusinessImpact/ModernApplicationBusinessImpact";
import AppDevImpactCTA from "../../../sections/Solutions/ModernApplication/ModernApplicationImpactCTA/ModernApplicationImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const ModernApplication = () => {
  const modernAppContent = [
    {
      heading: "Engineering Future-Proof Applications for the Global Market",
      content: [
        "In a world where software is the primary touchpoint between businesses and their customers, the quality of your applications directly impacts your bottom line. At Infogenx, we don't just write code; we engineer robust, scalable, and secure digital products designed to meet the rigorous demands of the modern market. Modern application development requires a departure from legacy thinking, embracing agility, user-centric design, and technical excellence.",
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
    { name: "Solutions", path: PATHS.home },
    { name: "Modern Applications", path: PATHS.modernApplications }
  ];

  const faqs = [
    {
      question: "What is a modern application?",
      answer: "A modern application is an architectural approach that prioritizes cloud-native technologies, microservices, and rapid delivery cycles to ensure software is scalable, resilient, and easy to maintain."
    },
    {
      question: "Why should we modernize our legacy applications?",
      answer: "Legacy applications often suffer from security vulnerabilities, high maintenance costs, and an inability to scale. Modernization improves performance, reduces costs, and allows for faster integration with new technologies like AI."
    },
    {
      question: "What technologies do you use for application development?",
      answer: "We specialize in full-stack development using React, Node.js, Python, and cloud platforms like Azure and AWS, ensuring every application is built for performance and security."
    },
    {
      question: "Do you build mobile applications as well?",
      answer: "Yes, we build high-performance mobile applications for iOS and Android using cross-platform frameworks like React Native and Flutter, as well as native development."
    },
    {
      question: "How do you ensure application security?",
      answer: "We follow DevSecOps practices, integrating security checks throughout the development lifecycle and ensuring all applications comply with industry-standard encryption and authentication protocols."
    }
  ];

  const relatedItems = [
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with global digital strategy and engineering.",
      link: PATHS.digitalTransformation
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: PATHS.intelligentAutomation
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
        title="Application Development Brisbane | Trusted Experts"
        description="Experience the best Application Development Brisbane has to offer. Our expert team focuses on Custom Software to drive results and maximize your ROI."
        keywords="modern application development, cloud-native applications, custom software engineering, Infogenx"
      />
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
    </>
  );
};

export default ModernApplication;
