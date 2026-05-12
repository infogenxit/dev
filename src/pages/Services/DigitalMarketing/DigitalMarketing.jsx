import AppDevHero from "../../../sections/Services/DigitalMarketing/DigitalMarketingHero/DigitalMarketingHero";
import AppDevExpertise from "../../../sections/Services/DigitalMarketing/DigitalMarketingExpertise/DigitalMarketingExpertise";
import AppDevApproach from "../../../sections/Services/DigitalMarketing/DigitalMarketingApproach/DigitalMarketingApproach";
import AppDevBusinessImpact from "../../../sections/Services/DigitalMarketing/DigitalMarketingBusinessImpact/DigitalMarketingBusinessImpact";
import AppDevImpactCTA from "../../../sections/Services/DigitalMarketing/DigitalMarketingImpactCTA/DigitalMarketingImpactCTA";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const DigitalMarketing = () => {
  const marketingContent = [
    {
      heading: "Elevating Your Brand in the Digital Landscape",
      content: [
        "In an increasingly crowded digital marketplace, having a great product or service is only half the battle. To truly thrive, you must be visible to the right audience, at the right time, with the right message. At Infogenx, we provide high-impact Digital Marketing solutions designed to cut through the noise and drive measurable growth. We move beyond vanity metrics like 'likes' and 'followers,' focusing instead on lead generation, conversion, and long-term brand equity.",
        "Our marketing strategies are rooted in data and powered by creativity. We provide the technical expertise and strategic insight needed to optimize your online presence and maximize your marketing ROI."
      ]
    },
    {
      heading: "Our Core Marketing Capabilities",
      content: [
        "We take a holistic approach to digital marketing, ensuring that every channel and campaign works in harmony to support your broader business objectives."
      ],
      list: [
        { label: "Search Engine Optimization (SEO)", text: "Dominate search results with our technical, on-page, and content-driven SEO strategies that drive high-intent organic traffic to your site." },
        { label: "Performance Marketing & PPC", text: "Maximize your advertising spend with highly targeted campaigns across Google Ads, LinkedIn, and Meta, focused on lead quality and conversion cost." },
        { label: "Content Strategy & Storytelling", text: "We build brand authority through compelling, keyword-rich content that resonates with your audience and establishes your organization as a thought leader." }
      ]
    },
    {
      heading: "Data-Driven Growth: The Infogenx Methodology",
      content: [
        "We believe that what gets measured, gets improved. Our marketing methodology is built on a foundation of rigorous data analysis and continuous optimization. We use advanced tracking and attribution models to understand the entire customer journey, identifying which channels and messages are driving the most value for your business.",
        "By continuously testing and refining our approach—from A/B testing landing pages to optimizing ad copy—we ensure that your marketing budget is always working its hardest. We provide transparent, decision-grade reporting that shows exactly how our efforts are impacting your bottom line, allowing you to scale with confidence."
      ]
    },
    {
      heading: "Beyond Clicks: Focusing on Conversion and ROI",
      content: [
        "At Infogenx, our ultimate goal is not just to drive traffic, but to drive revenue. We focus heavily on Conversion Rate Optimization (CRO), ensuring that the traffic we generate is funneled into a seamless, high-converting user experience. We analyze user behavior, identify friction points in your sales funnel, and implement changes that turn visitors into loyal customers.",
        "Our strategic content and social framework ensures that your brand voice remains consistent and impactful across every touchpoint, building the trust and credibility necessary to win in the modern digital economy. We are your partners in growth, committed to delivering marketing excellence that lasts."
      ]
    }
  ];

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
      question: "Can you help with local SEO?",
      answer: "Yes, we specialize in local SEO strategies that help businesses appear in relevant search results and attract local customers."
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
      link: PATHS.implementationIntegration
    },
    {
      title: "Consulting & Advisory",
      description: "Strategic guidance to align your digital marketing with your business goals.",
      link: PATHS.consultingAdvisory
    },
    {
      title: "Managed Services",
      description: "Ongoing support and optimization for your digital marketing platforms.",
      link: PATHS.managedServices
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "Digital Marketing", path: PATHS.digitalMarketing }
  ];
  return (
    <>
      <SEO
        title="Digital Marketing Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading Digital Marketing Brisbane services in Brisbane. Our team delivers high-quality Digital Marketing Brisbane. Get started today!"
        keywords="digital marketing, online marketing services"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Data-Powered Growth & Brand Authority" 
        subtitle="Marketing Excellence"
        sections={marketingContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default DigitalMarketing;
