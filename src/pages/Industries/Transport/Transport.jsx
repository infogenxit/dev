import AppDevHero from "../../../sections/Industries/Transport/TransportHero/TransportHero";
import AppDevExpertise from "../../../sections/Industries/Transport/TransportExpertise/TransportExpertise";
import AppDevApproach from "../../../sections/Industries/Transport/TransportApproach/TransportApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Transport/TransportBusinessImpact/TransportBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Transport/TransportImpactCTA/TransportImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const Transport = () => {
  const breadcrumbItems = [
    { name: "Industries", path: PATHS.home },
    { name: "Transport", path: PATHS.transport }
  ];

  const faqs = [
    {
      question: "Do you work with small courier businesses or only large freight companies?",
      answer: "Both. Our TMS and logistics tools scale to the size of your operation — whether you run 10 vehicles or 200."
    },
    {
      question: "Can your TMS connect to our existing warehouse software?",
      answer: "Yes. Integration with your current systems is standard — we don't force a full replacement."
    },
    {
      question: "How does route optimisation actually save us money?",
      answer: "By cutting unnecessary kilometres, reducing fuel spend, and improving on-time delivery rates — most clients see measurable cost reduction within the first few months."
    },
    {
      question: "Do you support e-commerce logistics specifically?",
      answer: "Yes — last-mile delivery tools, smart inventory management, and real-time order tracking are all part of what we build for logistics businesses serving online retailers."
    },
    {
      question: "What support do we get after the system goes live?",
      answer: "Ongoing support is part of every project. You get troubleshooting, updates, and scaling assistance as your business grows."
    }
  ];

  return (
    <>
      <SEO
        title="Brisbane Logistics IT Solutions | Infogenx"
        description="Fix delivery delays and visibility gaps with Brisbane Logistics IT Solutions from Infogenx. Scalable TMS and tracking systems built for growth."
        keywords="logistics IT solutions Brisbane, Custom Software Brisbane, Infogenx"
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

export default Transport;
