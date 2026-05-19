import WebDevHero from "../../../sections/Technologies/WebDev/WebDevHero/WebDevHero";
import WebDevTech from "../../../sections/Technologies/WebDev/WebDevTech/WebDevTech";
import WebDevExpertise from "../../../sections/Technologies/WebDev/WebDevExperties/WebDevExpertise";
import WebDevOutcomes from "../../../sections/Technologies/WebDev/WebDevOutcomes/WebDevOutcomes";
import WebDevImpactCTA from "../../../sections/Technologies/WebDev/WebDevImpactCTA/WebDevImpactCTA";
import SEO from "../../../components/SEO/SEO";
import Breadcrumbs from "../../../sections/Common/Breadcrumbs/Breadcrumbs";
import ServiceDetailedContent from "../../../sections/Common/ServiceDetailedContent/ServiceDetailedContent";
import ServiceFaq from "../../../sections/Common/ServiceFaq/ServiceFaq";
import { PATHS } from "../../../route/paths";

const Webdev = () => {
  const webContent = [
    {
      heading: "AI-Ready Web Development",
      content: [
        "Custom business websites are our bread and butter. The kind where someone lands on your homepage and immediately knows who you are, what you do, and why they should talk to you. Not a theme with your logo dropped in. Actually built around your business."
      ]
    },
    {
      heading: "eCommerce Development",
      content: [
        "For businesses selling online, we do eCommerce development on Shopify and WooCommerce. The things that kill online sales — slow pages, confusing navigation, a checkout that breaks on mobile — we fix all of that before it goes live. A good eCommerce site pays for itself quickly when it stops leaking customers."
      ]
    },
    {
      heading: "Custom Portals & Web Applications",
      content: [
        "Some businesses need more than a website. Custom portals, booking systems, client dashboards, internal tools — our website development company in Brisbane builds web applications that work properly and connect to the other systems your business already runs on. Xero, your CRM, whatever it is."
      ]
    },
    {
      heading: "CMS Platforms & Easy Handover",
      content: [
        "Our web development company in Brisbane also makes sure your team can manage the site themselves after handover. No calling us every time you want to change a heading. We build on CMS platforms your people can actually use without a technical background."
      ]
    },
    {
      heading: "Properly Mobile-Responsive",
      content: [
        "Every site we build is properly mobile-responsive — and by properly, we mean tested on real devices, not just scaled down in a browser. Google notices the difference. So do your visitors."
      ]
    },
    {
      heading: "Technical SEO Foundations",
      content: [
        "SEO foundations go in from the start too. Fast load speed, clean code, correct structure. It won't rank you overnight but it means you're not starting from a technical disadvantage the moment the site goes live."
      ]
    }
  ];

  const faqs = [
    {
      question: "How long does it take to perform website development in Brisbane?",
      answer: "Straightforward business sites usually land somewhere between 4 and 8 weeks. eCommerce and custom applications take longer — we'll tell you the real timeline during scoping, not an optimistic one we can't hit."
    },
    {
      question: "Can you work on our existing site rather than rebuilding everything?",
      answer: "Often yes. If the bones are fine but the design is dated and the performance is poor, a redesign usually makes more sense than a full rebuild. We'll look at what you have first and give you an honest recommendation."
    },
    {
      question: "We're not technical — can we actually manage our own site after?",
      answer: "That's exactly how we build them. We run you through everything at handover and make sure your team is comfortable before we're done. Most of our clients are updating their own content within the first week."
    },
    {
      question: "Will it rank on Google?",
      answer: "We build every site with strong technical SEO from the ground up — speed, structure, mobile, clean code. That's the foundation. Where you go from there with content and ongoing SEO is a separate conversation, but you won't be starting from a broken base."
    },
    {
      question: "What genuinely separates you from other Brisbane web design companies?",
      answer: "Honestly — the technology depth behind us. A lot of agencies can build a good-looking site. Not many can also connect it to your data platform, automate your follow-up workflows, or integrate it with a custom cloud environment. That matters when your business is growing and needs more than a brochure online."
    }
  ];

  const breadcrumbItems = [
    { name: "Technologies", path: PATHS.home },
    { name: "Web Development", path: PATHS.webDevelopment }
  ];

  return (
    <>
      <SEO
        title="Web Design Brisbane | Website Development Company Brisbane"
        description="Top web design company in Brisbane offering creative, responsive, and SEO-friendly website development services to help your business stand out."
        keywords="web development, custom websites, React development, full-stack engineering, Infogenx"
      />
      <Breadcrumbs items={breadcrumbItems} />
      <WebDevHero />
      <WebDevTech />
      <WebDevExpertise />
      <ServiceDetailedContent 
        title="AI-Ready Web Development for Australian Businesses" 
        subtitle="Custom Web Design & Development"
        sections={webContent} 
      />
      <WebDevOutcomes />
      <WebDevImpactCTA />
      <ServiceFaq faqs={faqs} />
    </>
  );
};

export default Webdev;
