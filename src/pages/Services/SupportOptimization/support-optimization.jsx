import Header from "../../../sections/header/Header";
import AppDevHero from "../../../sections/Services/SupportOptimization/SupportHero/SupportHero";
import AppDevExpertise from "../../../sections/Services/SupportOptimization/SupportExpertise/SupportExpertise";
import AppDevApproach from "../../../sections/Services/SupportOptimization/SupportApproach/SupportApproach";
import AppDevBusinessImpact from "../../../sections/Services/SupportOptimization/SupportBusinessImpact/SupportBusinessImpact";
import AppDevImpactCTA from "../../../sections/Services/SupportOptimization/SupportImpactCTA/SupportImpactCTA";
import Footer from "../../../sections/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";

const SupportOptimization = () => {
  const faqs = [
    {
      question: "What is the difference between support and optimization?",
      answer: "Support focuses on resolving immediate technical issues, while optimization involves continuously fine-tuning your systems for better performance and scalability."
    },
    {
      question: "Do you offer ad-hoc technical support?",
      answer: "Yes, we provide both on-demand technical assistance and structured optimization plans tailored to your business needs."
    },
    {
      question: "How do you measure system optimization results?",
      answer: "We use performance metrics, user feedback, and system logs to generate regular reporting that highlights improvements in speed, security, and efficiency."
    },
    {
      question: "Can you optimize our existing Microsoft or Zoho setup?",
      answer: "Absolutely. We specialize in auditing existing platform implementations and applying best practices to improve stability and user productivity."
    },
    {
      question: "What platforms do you support?",
      answer: "Our primary expertise lies in Microsoft (Azure/365), Zoho, Odoo, and custom-built web and mobile applications."
    }
  ];

  const relatedItems = [
    {
      title: "Managed Services",
      description: "Ensure performance, security, and reliability with our proactive IT support.",
      link: "/services/managed-services"
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: "/solutions/intelligent-automation"
    },
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with global digital strategy and engineering.",
      link: "/solutions/digital-transformation"
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: "/services/managed-services" },
    { name: "Support & Optimization", path: "/services/support-optimization" }
  ];
  return (
    <>
      <SEO
        title="IT Support & Continuous Optimization Services | Infogenx"
        description="Infogenx helps businesses resolve issues faster and continuously optimise systems through structured support and performance reporting."
        keywords="IT support Australia, system optimisation, performance monitoring"
      />
      {/* <Helmet>
        <title>IT Support & Continuous Optimization Services | Infogenx</title>
        <meta
          name="description"
          content="Infogenx helps businesses resolve issues faster and continuously optimise systems through structured support and performance reporting."
        />
        <meta
          name="keywords"
          content="IT support Australia, system optimisation, performance monitoring"
        />
      </Helmet> */}
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
      <Footer />
    </>
  );
};

export default SupportOptimization;
