import AppDevHero from "../../../sections/Services/ConsultingAdvisory/ConsultingHero/ConsultingHero";
import AppDevExpertise from "../../../sections/Services/ConsultingAdvisory/ConsultingExpertise/ConsultingExpertise";
import AppDevApproach from "../../../sections/Services/ConsultingAdvisory/ConsultingAppDev/ConsultingAppDev";
import AppDevBusinessImpact from "../../../sections/Services/ConsultingAdvisory/ConsultingBusinessImpact/ConsultingBusinessImpact";
// import AppDevImpactCTA from "../../../components/Analytics/AppDevImpactCTA/AppDevImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";

const ConsultingAdvisory = () => {
  const faqs = [
    {
      question: "What does your IT consulting process involve?",
      answer: "We start with a deep dive into your current workflows, identify friction points, and design a practical roadmap for digital transformation and AI integration."
    },
    {
      question: "How do you help with platform selection?",
      answer: "We evaluate your business needs against Microsoft, Zoho, Odoo, and other platforms to recommend the best fit for your long-term growth and budget."
    },
    {
      question: "Do you offer strategy planning for AI automation?",
      answer: "Yes, we specialize in helping businesses identify high-impact automation opportunities and building a strategy for intelligent application deployment."
    },
    {
      question: "Is your advisory service available for existing implementations?",
      answer: "Absolutely. We often help businesses audit and optimize their existing systems to improve governance, performance, and user adoption."
    },
    {
      question: "How long does a typical consulting engagement take?",
      answer: "Engagement duration varies by scope, but we focus on delivering actionable insights and a clear execution roadmap within 2-4 weeks for most audits."
    }
  ];

  const relatedItems = [
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with global digital strategy and engineering.",
      link: "/solutions/digital-transformation"
    },
    {
      title: "Managed Services",
      description: "Ensure performance, security, and reliability with our proactive IT support.",
      link: "/services/managed-services"
    },
    {
      title: "Data Analytics & AI",
      description: "Turn your business data into actionable intelligence and strategic decision-support.",
      link: "/solutions/data-analytics-ai"
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: "/services/managed-services" },
    { name: "Consulting & Advisory", path: "/services/consulting-advisory" }
  ];
  return (
    <>
      <SEO
        title="IT Consulting & Technology Advisory Services | Infogenx Australia"
        description="Make confident AI-Enabled Business Solutions decisions with Infogenx’s consulting and advisory services focused on strategy, planning, and business alignment."
        keywords="AI & Automation Consulting Australia, technology advisory, digital strategy consulting"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
      {/* <AppDevImpactCTA /> */}
    </>
  );
};

export default ConsultingAdvisory;
