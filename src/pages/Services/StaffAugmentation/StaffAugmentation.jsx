// Staff Augmentation Services Page
import React from "react";
import WebDevHero from "../../../sections/Technologies/CloudComputing/CloudComputingHero/CloudComputingHero";
import WebDevTech from "../../../sections/Technologies/CloudComputing/CloudComputingTech/CloudComputingTech";
import WebDevExpertise from "../../../sections/Technologies/CloudComputing/CloudComputingExperties/CloudComputingExpertise";
import WebDevOutcomes from "../../../sections/Technologies/CloudComputing/CloudComputingOutcomes/CloudComputingOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/CloudComputing/CloudComputingImpactCTA/CloudComputingImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import RelatedServices from "../../../sections/Common/RelatedServices/RelatedServices";
import { PATHS } from "../../../route/paths";

const StaffAugmentation = () => {
  const staffContent = [
    {
      heading: "What Makes Our Brisbane Staff Augmentation Different?",
      content: [
        "We're not a job board. We're not a generic staffing agency.",
        "Infogenx is Brisbane-based, tech-focused, and we only place people we'd genuinely vouch for. Every professional in our network has been assessed for real-world capability — not just what looks good on a CV. When we send you someone, they're ready to contribute from week one.",
        "You stay in charge of the work. We handle everything on the employment side. It's that clean."
      ]
    },
    {
      heading: "Who We Place",
      content: [
        "Full stack, front end and back end developers",
        "Data engineers and analysts",
        "Cloud and DevOps engineers",
        "QA and automation testers",
        "AI and machine learning engineers",
        "Business analysts and tech project managers"
      ]
    },
    {
      heading: "How Our Staff Augmentation Services Actually Works",
      content: [
        "Step 1: We Chat About What You Need — No long forms or bureaucracy. Just a proper conversation about your project, what tech you're using, what skills are missing, and how quickly you need someone. We also talk about team culture because technical skills only get you so far - personality fit matters too.",
        "Step 2: We Send You Actual Candidates — Usually within 2-3 days, you'll get profiles of people who match what you're after. Real people, not just keyword-stuffed CVs. You pick who you want to interview, have a chat with them, and decide if they're right for your team.",
        "Step 3: They Start Working — Once you've made your choice, we sort out the paperwork and get them access to whatever systems they need. Most teams see them doing useful work within the first week. Sometimes even sooner.",
        "Step 4: We Stay in Touch — We check in regularly to make sure everything's running smoothly. If something's not working, we fix it. When your project finishes or your needs change, scaling back down is straightforward."
      ]
    },
    {
      heading: "Built for Brisbane Businesses",
      content: [
        "Whether you're a startup scaling fast, an enterprise mid-transformation, or an agency that needs to flex capacity — Brisbane staff augmentation through Infogenx gives you exactly what traditional hiring can't: speed, flexibility, and zero long-term commitment.",
        "We understand Brisbane's tech landscape. We know the industries driving growth here — construction, healthcare, logistics, government, finance. And we know the skills those industries need right now."
      ]
    }
  ];

  const faqs = [
    {
      question: "How quickly can you place someone with our Brisbane team?",
      answer: "Most placements happen within 5–10 business days. We move fast because we maintain an active, pre-vetted talent pool — not a cold database we trawl through when a request comes in."
    },
    {
      question: "Do we manage the augmented staff member directly?",
      answer: "Yes. They work under your direction, follow your processes, and are fully integrated into your team. You manage the day-to-day. We manage the employment and compliance."
    },
    {
      question: "What if the person isn't the right fit?",
      answer: "We sort it. If someone isn't working out — for any reason — tell us early and we'll find a better match. Simple as that."
    },
    {
      question: "Is there a minimum engagement period?",
      answer: "No rigid minimums. Engagements typically run anywhere from 6 weeks to 18 months depending on the project. We shape it around what you actually need."
    },
    {
      question: "Can augmented staff work on-site at our Brisbane office?",
      answer: "Absolutely. On-site, remote, or hybrid — whatever works best for your team and your project."
    }
  ];

  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "Staff Augmentation", path: PATHS.staffAugmentation }
  ];

  return (
    <>
      <SEO
        title="Brisbane Staff Augmentation Services | Infogenx"
        description="You've got a deadline. Your team is stretched. We connect you with skilled, job-ready tech professionals who slot straight into your team. No lengthy contracts, no recruitment headaches."
        keywords="staff augmentation brisbane, IT staff augmentation, hire developers brisbane, resource augmentation, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <ServiceDetailedContent
        title="Brisbane Staff Augmentation Services — Infogenx"
        subtitle="Flex Your Capacity"
        sections={staffContent}
      />
      <WebDevOutcomes />
      <WebDevImpactCTA />
      <ServiceFaq faqs={faqs} />
      <RelatedServices
        items={[
          { title: "Managed Services", description: "Proactive support & monitoring.", link: PATHS.managedServices },
          { title: "Consulting & Advisory", description: "Strategic technology roadmaps.", link: PATHS.consultingAdvisory }
        ]}
      />
    </>
  );
};

export default StaffAugmentation;
