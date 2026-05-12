import AppDevHero from "../../../sections/Industries/Manufacturing/ManufacturingHero/ManufacturingHero";
import AppDevExpertise from "../../../sections/Industries/Manufacturing/ManufacturingExpertise/ManufacturingExpertise";
import AppDevApproach from "../../../sections/Industries/Manufacturing/ManufacturingApproach/ManufacturingApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Manufacturing/ManufacturingBusinessImpact/ManufacturingBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Manufacturing/ManufacturingImpactCTA/ManufacturingImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const Manufacturing = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Manufacturing", path: PATHS.manufacturing }
  ];

  const faqs = [
    {
      question: "Do you only work with large manufacturers?",
      answer: "No. We work with everything from small production businesses to large multi-site operations. The solution scales to the size of your facility."
    },
    {
      question: "Will this work with the software we already use?",
      answer: "Yes. Integration with existing systems is standard practice for us — we're not here to replace everything you've already invested in."
    },
    {
      question: "How quickly can we expect to see results?",
      answer: "Most clients start seeing measurable efficiency gains within the first six months, particularly around automation and reporting."
    },
    {
      question: "Is compliance handled as part of the solution?",
      answer: "It's built in from the start. Compliance requirements are factored into how we design data management and reporting — not added as an afterthought."
    },
    {
      question: "What support do we get after the project launches?",
      answer: "Full ongoing support. System updates, troubleshooting, and scaling assistance as your business grows."
    }
  ];

  return (
    <>
      <SEO
        title="Brisbane Manufacturing IT Solutions | Infogenx"
        description="Fix operational gaps with Brisbane Manufacturing IT Solutions at Infogenx. Practical systems built for real production environments to reduce downtime."
        keywords="manufacturing IT solutions Brisbane, Custom Software Brisbane, Infogenx"
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

export default Manufacturing;
