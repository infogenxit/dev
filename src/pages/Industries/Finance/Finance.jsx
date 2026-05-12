import AppDevHero from "../../../sections/Industries/Finance/FinanceHero/FinanceHero";
import AppDevExpertise from "../../../sections/Industries/Finance/FinanceExpertise/FinanceExpertise";
import AppDevApproach from "../../../sections/Industries/Finance/FinanceApproach/FinanceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Finance/FinanceBusinessImpact/FinanceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Finance/FinanceImpactCTA/FinanceImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const Finance = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Finance", path: PATHS.finance }
  ];

  const faqs = [
    {
      question: "We already use accounting software — do we need a custom Brisbane finance IT solution?",
      answer: "Depends on whether your current tools are actually solving your problems. If your team is still doing manual work to fill gaps between systems, something isn't right. We look at what you have first before recommending anything new."
    },
    {
      question: "How long does implementation take?",
      answer: "Straightforward integrations typically take 4–8 weeks. Larger builds take longer. We give you a realistic timeline after the initial assessment — not a number designed just to win the quote."
    },
    {
      question: "Is our financial data safe during the build process?",
      answer: "Yes. We follow strict data handling protocols throughout. No live client data is used in testing environments without proper controls and security measures in place."
    },
    {
      question: "Can your solutions handle Australian compliance requirements?",
      answer: "That's built in from the start. We're familiar with ASIC obligations, the Privacy Act, and AML/CTF requirements that apply to Brisbane finance businesses."
    },
    {
      question: "What happens after the system goes live?",
      answer: "We stay involved. Ongoing support is part of how we work — if something needs fixing, updating, or improving after launch, we're available. You won't be managing it alone."
    }
  ];

  return (
    <>
      <SEO
        title="Brisbane Finance IT Solutions | Process Automation | Infogenx"
        description="Infogenx provides expert Brisbane finance IT solutions, from integrated financial systems and process automation to secure data handling and ASIC compliance reporting."
        keywords="finance IT solutions Brisbane, fintech automation Australia, secure financial systems Brisbane, ASIC compliance reporting, financial process automation, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <ServiceFaq faqs={faqs} />
    </>
  );
};

export default Finance;
