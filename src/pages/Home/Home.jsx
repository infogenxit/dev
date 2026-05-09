import Hero from "../../sections/Home/Hero/Hero";
import Expertise from "../../sections/Home/Expertise/Expertise";
import ServiceHighlight from "../../sections/Home/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../sections/Home/TechSlider/TechSlider";
import Testimonials from "../../sections/Home/Testimonials/Testimonials";
import CtaBanner from "../../sections/Home/CtaBanner/CtaBanner";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO/SEO";
import ServiceFaq from "../../sections/Common/ServiceFaq/ServiceFaq";

const Home = () => {
  const faqs = [
    {
      question: "What does an IT consultant actually do?",
      answer: "An IT consultant helps you align your technology with your business goals. At Infogenx, we look at your current systems, find bottlenecks, and recommend or build solutions—like automation or custom software—to help you scale."
    },
    {
      question: "Why should I choose a Brisbane-based IT consulting firm?",
      answer: "Local expertise matters. We understand the Brisbane business landscape, and being local means we can offer more personalised, face-to-face support when needed."
    },
    {
      question: "Do you only work with large companies?",
      answer: "No. We work with businesses of all sizes, from local emerging brands to mid-market enterprises. Our focus is on the impact our solutions have, not just the size of the client."
    },
    {
      question: "How long does a digital transformation project take?",
      answer: "It varies. Small automation projects can take a few weeks, while complete digital transformations can take months. We give you a clear timeline after our initial discovery phase."
    },
    {
      question: "Will your solutions work with my existing software?",
      answer: "Yes. We specialise in integrations and building extensions for platforms like Zoho, Microsoft, and Odoo, ensuring everything works together seamlessly."
    }
  ];

  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="AI Automation & App Development Company in Australia | Infogenx"
          description="Infogenx is a leading AI automation and application development company in Australia. We deliver intelligent apps, workflow automation, and data analytics for Microsoft, Zoho, and Odoo."
          keywords="AI application development Australia, AI automation company Brisbane, intelligent business automation, app development services Melbourne"
        />
      */}
      <SEO
        title="Brisbane's Trusted IT Consulting Partner — From Strategy to Scale"
        description="Future-driven IT consulting in Brisbane. We partner with local businesses to solve operational problems through AI automation, app development, and data analytics."
        keywords="IT consulting Brisbane, IT solutions Brisbane, AI automation Australia, digital transformation Brisbane, Infogenx"
      />
      {/* <Helmet>
        <title>
          AI Automation & Application Development Company in Australia |
          Infogenx
        </title>
        <meta
          name="description"
          content="Infogenx is an Australian AI automation and application development company delivering intelligent apps, workflow automation, and analytics using Microsoft, Zoho, and Odoo."
        />
        <meta
          name="keywords"
          content="AI application development Australia, AI-enabled business applications, intelligent automation Australia, application modernisation services"
        />
      </Helmet> */}
      <Hero />
      <Expertise />
      <ServiceHighlight />
      <TechSlider />
      <Testimonials />
      <CtaBanner />
      <ServiceFaq faqs={faqs} />
    </>
  );
};

export default Home;
