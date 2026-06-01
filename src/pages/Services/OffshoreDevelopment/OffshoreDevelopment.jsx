// Offshore Development Services Page
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

const OffshoreDevelopment = () => {
  const offshoreContent = [
    {
      heading: "The Real Reason Brisbane Offshore Development Fails",
      content: [
        "Most businesses that come to us have already tried Brisbane offshore development once. It didn't go well. The code was messy, the communication was painful, and the whole thing cost more time to fix than it saved.",
        "That's not a knock on offshore development. That's what happens when the wrong people are placed with no real structure around them.",
        "At Infogenx Digital Solutions, we've been doing this long enough to know what separates a team that works from one that falls apart in three months. And the difference rarely comes down to technical ability alone.",
        "Placement is the easy part. The hard part is everything that comes after. Does the developer actually understand what you're trying to build? Can they push back when something doesn't make sense? Will they flag a problem early or hide it until it becomes your problem?",
        "These are the questions we ask before anyone joins your team. Not just 'can they code in React' but 'are they the kind of person your team will actually want to work with every day.' That's the bar we set. And it's why our clients stop shopping around after working with us."
      ]
    },
    {
      heading: "What Offshore Development Looks Like When It's Done Properly",
      content: [
        "Your offshore developer — or team — works as part of your business. Not alongside it, not for it at arm's length. Part of it.",
        "With our Brisbane offshore development solutions, your developers become fully integrated into your daily operations. They’re in your project management tools. They join your calls. They know your codebase and your preferences. When something is urgent, they treat it like it’s urgent. When requirements shift, they adapt instead of billing you for every small change.",
        "That sounds like a basic expectation. Surprisingly, it's not standard in this industry. It is for us."
      ]
    },
    {
      heading: "Who We Work With in Brisbane",
      content: [
        "Most of our Brisbane clients aren't tech companies. They're businesses in industries like logistics, healthcare, finance, retail, and professional services — companies that have real software needs but can't justify building a full local engineering team to meet them.",
        "A few scenarios we see often: A growing company whose internal developer is stretched thin and needs a backend engineer to take load off. A founder who has a product idea but needs the technical execution handled properly. A data-driven business that wants to rebuild an outdated system without pausing operations.",
        "Whatever the context, the starting point is the same — we figure out what you actually need before we recommend anything."
      ]
    },
    {
      heading: "How We Work With You",
      content: [
        "No surprises, no handoffs to people you've never met. Here's the honest version of our process.",
        "We start with a proper conversation. Not a sales call — an actual conversation about your project, your team, and your situation. If Brisbane offshore development isn’t the right move for you right now, we’ll say so.",
        "Then we find the right person or team. You meet them before work starts. You ask them questions. You get a feel for how they communicate. If the fit isn't right, we keep looking.",
        "Once work starts, we stay involved. Not hovering — but available. If there's a performance issue or a resourcing gap, that's our problem to solve, not something you manage alone."
      ]
    },
    {
      heading: "What You Can Get Help With",
      content: [
        "Web and mobile application development",
        "API builds and third-party integrations",
        "Cloud and DevOps work",
        "Front-end development and UI design",
        "QA and testing",
        "Long-term product support and maintenance"
      ]
    }
  ];

  const faqs = [
    {
      question: "How is this different from just outsourcing a project?",
      answer: "With a project outsource, you hand something over and wait for a result. With offshore development, the developer is part of your team — accountable to you, working inside your tools and processes, and building context over time. It's a fundamentally different working relationship."
    },
    {
      question: "Will the time zones actually work for us?",
      answer: "Yes, and we set this up deliberately. Most clients run at least four to six hours of overlap with their offshore team each day. For businesses that need more, we can arrange that too. Time zones stop being a problem when scheduling is handled upfront."
    },
    {
      question: "How do you make sure the work is good quality?",
      answer: "Technical screening before placement, and then it's on you to set up review processes that match how your team works — we can help you design those if needed. Offshore developers aren't a replacement for having engineering standards. They work within whatever standards you set."
    },
    {
      question: "What if someone isn't working out?",
      answer: "We replace them. No long process, no awkward negotiation. It happens occasionally and we handle it quickly. That's part of what you're working with us for."
    },
    {
      question: "How long do we need to commit to?",
      answer: "Three months is our usual starting point — long enough to get past onboarding and into real momentum. But we talk through terms based on what makes sense for your specific situation."
    }
  ];

  const breadcrumbItems = [
    { name: "Services", path: PATHS.home },
    { name: "Offshore Development", path: PATHS.offshoreDevelopment }
  ];

  return (
    <>
      <SEO
        title="Brisbane Offshore Development Services | Infogenx"
        description="Looking for reliable offshore development in Brisbane? We place fully integrated, highly skilled developers into your business operations with zero hassle."
        keywords="offshore development, offshore developers, brisbane offshore software development, dedicated developers, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <ServiceDetailedContent
        title="Brisbane Offshore Development Services: Infogenx Digital Solutions"
        subtitle="Scale Your Team Efficiently"
        sections={offshoreContent}
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

export default OffshoreDevelopment;
