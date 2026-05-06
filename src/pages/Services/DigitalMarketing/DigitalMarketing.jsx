import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Services/DigitalMarketing/DigitalMarketingHero/DigitalMarketingHero";
import AppDevExpertise from "../../../components/Services/DigitalMarketing/DigitalMarketingExpertise/DigitalMarketingExpertise";
import AppDevApproach from "../../../components/Services/DigitalMarketing/DigitalMarketingApproach/DigitalMarketingApproach";
import AppDevBusinessImpact from "../../../components/Services/DigitalMarketing/DigitalMarketingBusinessImpact/DigitalMarketingBusinessImpact";
import AppDevImpactCTA from "../../../components/Services/DigitalMarketing/DigitalMarketingImpactCTA/DigitalMarketingImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../components/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../components/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../components/Common/RelatedServices/RelatedServices";

const DigitalMarketing = () => {
  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We provide SEO, SEM, social media management, content strategy, and data-led performance marketing to help businesses grow their online presence."
    },
    {
      question: "How do you track the success of marketing campaigns?",
      answer: "We use advanced analytics and performance reporting to track KPIs like conversion rates, ROI, and customer engagement, ensuring your budget is spent effectively."
    },
    {
      question: "Can you help with local SEO for Australian businesses?",
      answer: "Yes, we specialize in local SEO strategies that help Australian businesses appear in relevant search results and attract local customers."
    },
    {
      question: "Do you offer social media advertising management?",
      answer: "Absolutely. We manage paid social campaigns across LinkedIn, Facebook, Instagram, and X to reach your target audience with precision."
    },
    {
      question: "How long before we see results from digital marketing?",
      answer: "While paid ads can show immediate results, organic strategies like SEO typically take 3-6 months to build significant momentum and sustainable growth."
    }
  ];

  const relatedItems = [
    {
      title: "Implementation & Integration",
      description: "Seamlessly integrate your marketing tech stack with Microsoft, Zoho, or Odoo.",
      link: "/services/implementation-integration"
    },
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance to align your digital marketing with your business goals.",
      link: "/services/consulting-advisory"
    },
    {
      title: "Managed Services",
      description: "Ongoing support and optimization for your digital marketing platforms.",
      link: "/services/managed-services"
    }
  ];
  return (
    <>
      <SEO
        title="Digital Marketing Services | Infogenx Australia"
        description="Boost your online presence and drive growth with our comprehensive digital marketing solutions tailored for the Australian market."
        keywords="digital marketing Australia, online marketing services"
      />
      {/* <Helmet>
        <title>Digital Marketing Services | Infogenx Australia</title>
        <meta
          name="description"
          content="Boost your online presence and drive growth with our comprehensive digital marketing solutions tailored for the Australian market."
        />
        <meta
          name="keywords"
          content="digital marketing Australia, online marketing services"
        />
      </Helmet> */}
      <Header />
      <Breadcrumbs />
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

export default DigitalMarketing;
