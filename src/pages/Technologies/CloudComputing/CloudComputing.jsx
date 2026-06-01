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
      heading: "Brisbane Cloud-Native Development Services",
      content: [
        "A lot of businesses move old systems to AWS or Azure and expect everything to magically improve. Usually, it doesn’t. The same old problems stay there — slow performance, scaling issues, and infrastructure that becomes expensive to maintain.",
        "Our Brisbane cloud-native development approach focuses on building applications properly from the start. Systems that scale better, recover faster, and make deployments easier for your team as the business grows.",
        "Good architecture matters more than most businesses realise. Our approach builds applications that are easier to scale, manage, and improve over time.",
        "Microservices Development: Splitting a system into services sounds straightforward. In practice, the hard part is knowing where the boundaries go. We avoid distributed monoliths and create clean, maintainable services.",
        "Containerisation with Docker: Everything we build runs in containers. Same environment from developer laptop through to production. Consistent, reproducible builds every time.",
        "Kubernetes Orchestration: Properly configured clusters with resource limits, health checks, and rollback strategies ensure reliability at scale.",
        "Serverless and Function-Based Architecture: Use AWS Lambda, Azure Functions, Google Cloud Functions where they make sense for event‑driven workloads.",
        "Cloud‑Native Database Design: Choose distributed SQL, document stores, or time‑series databases based on access patterns.",
        "API Design and Integration: Build REST and GraphQL APIs with versioning, documentation, and resilience patterns.",
        "Migration from Monolith to Cloud‑Native: Phase‑wise migration with minimal disruption, keeping operations running.",
        "Why early decisions matter: Loose coupling, asynchronous processing, stateless layers, observability built‑in."
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
      question: "Is cloud-native only relevant for large or complex applications?",
      answer: "No — and this is probably the most common misconception we run into. Smaller applications benefit from these principles too. Automatic scaling means you pay for what you actually use. Containerisation means your developer environments match production. Serverless removes whole categories of infrastructure work. The advantages show up at any scale."
    },
    {
      question: "We're already running on AWS — doesn't that make us cloud-native?",
      answer: "Not automatically. Running on AWS or Azure doesn't mean cloud-native. If your application deploys as one unit, scales manually, or needs careful sequencing to update without downtime — it's cloud-hosted, not cloud-native. We can assess where you sit and what would make the biggest practical difference."
    },
    {
      question: "How do you handle data migration when modernising an existing system?",
      answer: "Carefully and in stages. Data migration carries the most risk in any modernisation project. We plan it in phases with rollback options at each step, and we never cut over without first validating the new system against real production data patterns."
    },
    {
      question: "What's the honest downside of cloud-native development?",
      answer: "Distributed systems are more complex than monoliths. Microservices bring network latency, partial failure scenarios, and data consistency challenges that a single application simply doesn't have. These are solvable — but they're real, and anyone who doesn't mention them upfront isn't being straight with you. We design systems that handle this complexity without it landing on your team to figure out."
    },
    {
      question: "How long does a typical project take?",
      answer: "It genuinely depends on scope. A new cloud-native application built from scratch can reach a working foundation in weeks. A migration from an existing system is usually measured in months, run in phases. We scope based on your actual situation — not a standard package that may or may not fit."
    }
  ];

  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Cloud Computing", path: PATHS.cloudComputing }
  ];

  return (
    <>
      <SEO
        title="Brisbane Cloud-Native Development Services | Infogenx"
        description="A lot of businesses move old systems to AWS or Azure and expect everything to magically improve. Usually, it doesn’t. Our Brisbane cloud-native development approach focuses on building applications properly from the start. Systems that scale better, recover faster, and make deployments easier for your team as the business grows."
        keywords="cloud-native development, cloud computing, AWS, Azure, Google Cloud, Docker, Kubernetes, serverless, microservices"
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
