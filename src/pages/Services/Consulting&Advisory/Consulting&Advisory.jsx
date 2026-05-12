import AppDevHero from "../../../sections/Services/ConsultingAdvisory/ConsultingHero/ConsultingHero";
import AppDevExpertise from "../../../sections/Services/ConsultingAdvisory/ConsultingExpertise/ConsultingExpertise";
import AppDevApproach from "../../../sections/Services/ConsultingAdvisory/ConsultingAppDev/ConsultingAppDev";
import AppDevBusinessImpact from "../../../sections/Services/ConsultingAdvisory/ConsultingBusinessImpact/ConsultingBusinessImpact";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const ConsultingAdvisory = () => {
  const consultingContent = [
    {
      heading: "Navigating Complexity: Strategic Technology Advisory for the Digital Age",
      content: [
        "In an era defined by rapid technological shifts and increasing market volatility, making the right technical decisions is more critical than ever. At Infogenx, we provide high-impact Consulting and Advisory services that help businesses navigate the complexities of digital transformation, AI adoption, and infrastructure modernization. We act as your strategic partner, ensuring that every technology investment is aligned with your broader business objectives and delivers a measurable return.",
        "Our consultants bring a wealth of experience across diverse industries, providing the objective perspective and deep technical knowledge needed to solve your most challenging architectural and operational problems. We help organizations turn technical uncertainty into a clear, actionable roadmap for success."
      ]
    },
    {
      heading: "Our Core Advisory Domains",
      content: [
        "Our consulting practice is built upon a foundation of technical excellence and business acumen. We focus on the areas that drive the most value for modern enterprises."
      ],
      list: [
        { label: "Digital Strategy & Roadmap Planning", text: "We help you define a long-term vision for your technology ecosystem, prioritizing initiatives based on ROI, risk, and strategic importance." },
        { label: "Platform Selection & Evaluation", text: "Objective analysis of ERP, CRM, and cloud platforms (Microsoft, Zoho, Odoo) to find the perfect fit for your specific workflows and budget." },
        { label: "AI & Automation Readiness Audits", text: "Determine exactly where AI and automation can provide the greatest impact within your organization and build a plan for secure implementation." }
      ]
    },
    {
      heading: "The Infogenx Audit & Roadmap Methodology",
      content: [
        "We believe that great advice is based on great data. Our advisory process begins with a comprehensive technical and operational audit. We interview key stakeholders, analyze your current system performance, and identify the 'friction points' that are holding your business back.",
        "This data-driven approach allows us to create a customized execution roadmap that addresses both your immediate needs and your long-term ambitions. We don't just hand you a report; we provide a living strategy that evolves with your business, ensuring you stay ahead of the technical curve."
      ]
    },
    {
      heading: "Aligning Technology with Business Ambition",
      content: [
        "A successful technology strategy is one that supports, rather than hinders, your business goals. We specialize in 'Business-IT Alignment,' ensuring that your IT department is not a cost center, but a value-driver. We help you establish governance structures, optimize your IT spend, and build a culture of innovation that empowers your employees to achieve more.",
        "By future-proofing your enterprise with the right technical foundations today, we ensure that you are ready to capitalize on the opportunities of tomorrow, whatever they may be."
      ]
    }
  ];

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
      link: PATHS.digitalTransformation
    },
    {
      title: "Managed Services",
      description: "Ensure performance, security, and reliability with our proactive IT support.",
      link: PATHS.managedServices
    },
    {
      title: "Data Analytics & AI",
      description: "Turn your business data into actionable intelligence and strategic decision-support.",
      link: PATHS.dataAnalyticsAi
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "Consulting & Advisory", path: PATHS.consultingAdvisory }
  ];
  return (
    <>
      <SEO
        title="It Consulting Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading It Consulting Brisbane services in Brisbane. Our team delivers high-quality Application Development Brisbane. Get started today!"
        keywords="AI & Automation Consulting, technology advisory, digital strategy consulting"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Outcome-Driven Technology Strategy & Governance" 
        subtitle="Strategic Advisory"
        sections={consultingContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default ConsultingAdvisory;
