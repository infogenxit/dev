import Hero from "../../sections/Home/Hero/Hero";
import Expertise from "../../sections/Home/Expertise/Expertise";
import ServiceHighlight from "../../sections/Home/ServiceHighlight/ServiceHighlight";
import TechSlider from "../../sections/Home/TechSlider/TechSlider";
import Testimonials from "../../sections/Home/Testimonials/Testimonials";
import TrustSection from "../../sections/Home/TrustSection/TrustSection";
import IndustryTrust from "../../sections/Home/IndustryTrust/IndustryTrust";
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
    },
    {
      question: "How long does an application development usually take?",
      answer: "Time varies depending on the complexity. A basic application can be developed in 4-8 weeks, while a custom application can take 3-6 months. We employ an agile project process for transparency and flexibility."
    },
    {
      question: "Why choose a Brisbane-based IT consulting partner?",
      answer: "Working with a local team means direct access to experienced consultants, faster communication, and better accountability. Our IT consulting in Brisbane combines local expertise with deep technical capability to deliver practical, results-driven solutions."
    }
  ];

  return (
    <>
      <SEO 
        title="It Consulting Brisbane | Trusted Experts & Agency"
        description="Scale your company with leading It Consulting Brisbane services in Brisbane. Our team delivers high-quality Application Development Brisbane. Get started today!"
        keywords="it consulting brisbane, application development brisbane, business intelligence brisbane, cloud solutions brisbane, custom software development brisbane, data analytics brisbane, digital transformation brisbane, ai automation brisbane, ai consulting brisbane, business automation brisbane, enterprise automation brisbane, enterprise integration brisbane, predictive analytics brisbane"
      />
      <Hero />
      <Expertise />
      <ServiceHighlight />
      <TechSlider />
      <Testimonials />
      <TrustSection />
      <IndustryTrust />
      <CtaBanner />
      <ServiceFaq faqs={faqs} />
    </>
  );
};

export default Home;
