import AppDevHero from "../../../sections/Industries/Retail/RetailHero/RetailHero";
import AppDevExpertise from "../../../sections/Industries/Retail/RetailExpertise/RetailExpertise";
import AppDevApproach from "../../../sections/Industries/Retail/RetailApproach/RetailApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Retail/RetailBusinessImpact/RetailBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Retail/RetailImpactCTA/RetailImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const Retail = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Retail", path: PATHS.retail }
  ];

  const faqs = [
    {
      question: "Do you work with small independent retailers?",
      answer: "Yes — our solutions are built to scale, so they work for a single-location store just as well as a growing chain."
    },
    {
      question: "Can you connect with our existing POS or e-commerce platform?",
      answer: "Absolutely. We integrate with what you already have rather than forcing a full system replacement."
    },
    {
      question: "How long does a retail IT project take to go live?",
      answer: "Straightforward integrations can be live within weeks. Larger builds follow a clear timeline agreed on before we start."
    },
    {
      question: "Is cybersecurity a separate cost?",
      answer: "No. Security is built into every solution from day one — it's not an optional extra."
    },
    {
      question: "What kind of support do you offer after launch?",
      answer: "Ongoing support, system updates, and scaling assistance are all part of working with us long-term."
    }
  ];

  return (
    <>
      <SEO
        title="Brisbane Retail It Solutions | Trusted Experts"
        description="Scale your company with leading Brisbane Retail It Solutions services in Brisbane. Our team delivers high-quality Custom Software. Get started today!"
        keywords="retail IT solutions Brisbane, Custom Software Brisbane, Infogenx"
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

export default Retail;
