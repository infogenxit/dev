import WebDevHero from "../../../sections/Technologies/CloudComputing/CloudComputingHero/CloudComputingHero";
import WebDevTech from "../../../sections/Technologies/CloudComputing/CloudComputingTech/CloudComputingTech";
import WebDevExpertise from "../../../sections/Technologies/CloudComputing/CloudComputingExperties/CloudComputingExpertise";
import WebDevOutcomes from "../../../sections/Technologies/CloudComputing/CloudComputingOutcomes/CloudComputingOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/CloudComputing/CloudComputingImpactCTA/CloudComputingImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const CloudComputing = () => {
  const cloudContent = [
    {
      heading: "Cloud Strategy & Roadmap",
      content: [
        "Before anything moves, we need to understand what you're working with. We assess your current infrastructure, your applications, your data, and your business goals — then build a clear cloud adoption roadmap. No vague recommendations. A concrete plan with priorities, timelines, and costs so you know exactly what you're committing to."
      ]
    },
    {
      heading: "Cloud Migration",
      content: [
        "This is usually where the real work happens. Our service for cloud migration in Brisbane handles the end-to-end lift — applications, data, databases, and infrastructure — moved to the cloud with minimal disruption to your operations. We plan the migration carefully, sequence it correctly, and test everything before anything goes live. Most businesses worry about downtime during migration. With the right planning, it rarely becomes a problem."
      ]
    },
    {
      heading: "Cloud-Native Application Development",
      content: [
        "Some applications don't need to be migrated — they need to be rebuilt properly for the cloud. We design and build cloud-native applications that are scalable, resilient, and actually take advantage of what cloud environments offer — auto-scaling, distributed architecture, managed services — rather than just replicating what you had on-premise."
      ]
    },
    {
      heading: "Cloud Management & Optimisation",
      content: [
        "Moving to the cloud is step one. Getting value from it is ongoing. We manage your cloud environment proactively — monitoring performance, tightening security, controlling costs, and making sure your setup isn't quietly getting more expensive than it needs to be. A lot of businesses overspend on cloud computing in Brisbane because nobody's actively managing it. We fix that."
      ]
    },
    {
      heading: "Public, Private, Hybrid & Multi-Cloud",
      content: [
        "Not every business should be entirely on the public cloud. We work across all models — public, private, hybrid, and multi-cloud — and we recommend what's right for your security requirements, compliance obligations, and operational needs. No single-vendor bias. No unnecessary complexity."
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I know if my business is ready to move to the cloud?",
      answer: "If you're paying to maintain ageing servers, struggling to scale, or spending IT budget on infrastructure management instead of actual business problems — you're ready. We run a cloud readiness assessment to confirm what moves first and what the realistic costs and benefits look like."
    },
    {
      question: "How long does a cloud migration take?",
      answer: "It depends on complexity. A straightforward cloud migration in Brisbane for a small business can be done in 4–8 weeks. Larger, multi-system migrations typically run 3–6 months. We phase it so your operations aren't disrupted while it happens."
    },
    {
      question: "Will we experience downtime during migration?",
      answer: "With proper planning, rarely. We sequence migrations carefully and test everything before cutover. Most businesses are surprised by how smooth it is when it's planned correctly."
    },
    {
      question: "Is cloud actually cheaper than what we have now?",
      answer: "It can be — but only if it's managed properly. Unmanaged cloud environments often end up more expensive than on-premise because nobody's monitoring usage and rightsizing resources. We include ongoing optimisation as part of our Brisbane cloud computing service so your costs stay in check."
    },
    {
      question: "Which cloud platform is right for us — AWS, Azure, or Google Cloud?",
      answer: "It depends on your existing tools, applications, and team familiarity. Azure tends to suit businesses already in the Microsoft ecosystem. AWS has the broadest range of services. Google Cloud is strong for data and AI workloads. We'll assess your environment and tell you which fits best — or whether a multi-cloud approach makes more sense."
    }
  ];

  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Cloud Computing", path: PATHS.cloudComputing }
  ];

  return (
    <>
      <SEO
        title="Cloud Computing Brisbane | Cloud Migration & Managed Services"
        description="Reliable cloud computing in Brisbane. Lift-and-shift, rebuild, or manage cloud infrastructure across AWS, Azure, and Google Cloud with certified experts."
        keywords="cloud computing brisbane, cloud migration brisbane, AWS brisbane, Azure brisbane, GCP brisbane, cloud managed services, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <ServiceDetailedContent 
        title="Brisbane Cloud Computing Services Tailored to Your Business" 
        subtitle="Scale Your Infrastructure"
        sections={cloudContent} 
      />
      <WebDevOutcomes />
      <WebDevImpactCTA />
      <ServiceFaq faqs={faqs} />
    </>
  );
};

export default CloudComputing;
