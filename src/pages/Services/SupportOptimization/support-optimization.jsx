import AppDevHero from "../../../sections/Services/SupportOptimization/SupportHero/SupportHero";
import AppDevExpertise from "../../../sections/Services/SupportOptimization/SupportExpertise/SupportExpertise";
import AppDevApproach from "../../../sections/Services/SupportOptimization/SupportApproach/SupportApproach";
import AppDevBusinessImpact from "../../../sections/Services/SupportOptimization/SupportBusinessImpact/SupportBusinessImpact";
import AppDevImpactCTA from "../../../sections/Services/SupportOptimization/SupportImpactCTA/SupportImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import { PATHS } from "../../../route/paths";

const SupportOptimization = () => {
  const supportContent = [
    {
      heading: "Continuous Excellence: The Strategic Value of Post-Launch Optimization",
      content: [
        "In the digital world, 'launch' is only the beginning of a system’s lifecycle. For a platform to remain a value-driver, it must be continuously monitored, maintained, and optimized to meet the evolving demands of users and the market. At Infogenx, we provide high-impact Support and Optimization services that go far beyond simple troubleshooting. We focus on 'Continuous Excellence,' ensuring that your digital assets remain secure, fast, and flawlessly efficient long after the initial deployment.",
        "Our support teams provide proactive oversight for enterprises, identifying and resolving potential bottlenecks before they impact your users. We transform traditional IT support from a reactive cost-center into a proactive optimization engine that drives long-term business growth."
      ]
    },
    {
      heading: "Beyond Maintenance: Our Proactive Support Ecosystem",
      content: [
        "We believe that the best support is the kind you never have to call. Our support ecosystem is built on the principles of predictive maintenance and real-time observability."
      ],
      list: [
        { label: "Predictive Monitoring & Alerting", text: "We use advanced telemetry to monitor the health of your applications and infrastructure, resolving issues before they manifest as downtime." },
        { label: "Performance Tuning & Optimization", text: "Regular audits of code, database queries, and cloud resource allocation to ensure your systems run at peak efficiency with minimal overhead." },
        { label: "Security & Compliance Patching", text: "Proactive management of security updates and patches, ensuring your organization remains protected against the latest cyber threats and compliant with global data privacy standards." }
      ]
    },
    {
      heading: "Maximizing ROI through Continuous Performance Tuning",
      content: [
        "A system that was optimized a year ago may no longer be efficient today. Changes in user behavior, data volumes, and cloud pricing models all impact the performance and cost of your applications. Our optimization specialists conduct regular 'health checks' to identify areas where performance can be improved and costs can be reduced.",
        "Whether it's optimizing your cloud spend, refactoring inefficient code, or improving the UI/UX based on real-world user feedback, our goal is to ensure you are getting the absolute maximum return on your technology investment. We help you stay lean, fast, and competitive."
      ]
    },
    {
      heading: "Our Long-Term Success Partnership Model",
      content: [
        "We don't view ourselves as a vendor, but as a long-term partner in your success. Our support and optimization engagements are built on transparency, accountability, and a shared vision for excellence. We provide detailed reporting on system health, performance metrics, and optimization initiatives, giving you total visibility into the value we provide.",
        "As your business grows and your needs change, our team is there to ensure your technology scales with you, providing the technical muscle and strategic oversight needed to navigate the challenges of a digital-first world with total confidence."
      ]
    }
  ];

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
      link: PATHS.managedServices
    },
    {
      title: "Intelligent Automation",
      description: "Streamline workflows and reduce operational friction with AI-driven automation.",
      link: PATHS.intelligentAutomation
    },
    {
      title: "Digital Transformation",
      description: "Modernise your business ecosystem with global digital strategy and engineering.",
      link: PATHS.digitalTransformation
    }
  ];
  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "Support & Optimization", path: PATHS.supportOptimization }
  ];
  return (
    <>
      <SEO
        title="Support Optimization Brisbane | Trusted Experts"
        description="Experience the best Support Optimization Brisbane has to offer. Our expert team focuses on Custom Software to drive results and maximize your ROI."
        keywords="IT support, system optimisation, performance monitoring, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <ServiceDetailedContent 
        title="Proactive Monitoring & Continuous Performance Improvement" 
        subtitle="Optimization for Growth"
        sections={supportContent} 
      />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices items={relatedItems} />
    </>
  );
};

export default SupportOptimization;
