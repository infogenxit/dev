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
      question: "What does an IT consulting engagement with Infogenx look like?",
      answer: "We work on a case-by-case basis. In our IT consulting in Brisbane, we begin with a discovery meeting to assess your IT systems, problems and objectives. We then scope out the work - be it consultancy, software programming or a digital transformation project - without restrictive contracts."
    },
    {
      question: "Will AI automation work for the size of my business?",
      answer: "Yes. AI automation is not just for big companies. We deliver business automation solutions which enable businesses to eliminate manual tasks, support accuracy and provide return on investment within 6-12 months."
    },
    {
      question: "How is business intelligence different to data analytics?",
      answer: "Business intelligence is about reporting and dashboards (what happened), while data analytics is about insights and predictions (why and what will happen). Both are important for most businesses, depending on their level of data maturity."
    }
  ];

  return (
    <>
      <SEO 
        title="IT Consulting Brisbane | Custom Software, AI & Cloud Experts"
        description="Brisbane IT consulting services for custom software, AI solutions, and cloud computing."
      />
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
