import Hero from "../../sections/Home/Hero/Hero";
import Expertise from "../../sections/Home/Expertise/Expertise";
import ServiceHighlight from "../../sections/Home/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../sections/Home/TechSlider/TechSlider";
import Testimonials from "../../sections/Home/Testimonials/Testimonials";
import CtaBanner from "../../sections/Home/CtaBanner/CtaBanner";
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
