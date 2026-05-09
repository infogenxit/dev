import Header from "../../../sections/header/Header";
import AppDevHero from "../../../sections/Industries/Finance/FinanceHero/FinanceHero";
import AppDevExpertise from "../../../sections/Industries/Finance/FinanceExpertise/FinanceExpertise";
import AppDevApproach from "../../../sections/Industries/Finance/FinanceApproach/FinanceApproach";
import AppDevBusinessImpact from "../../../sections/Industries/Finance/FinanceBusinessImpact/FinanceBusinessImpact";
import AppDevImpactCTA from "../../../sections/Industries/Finance/FinanceImpactCTA/FinanceImpactCTA";
import Footer from "../../../sections/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const Finance = () => {
  return (
    <>
      {/* 
        PREVIOUS SEO (COMMENTED OUT):
        <SEO
          title="AI Consulting for Finance Australia | Infogenx"
          description="Secure AI-enabled business solutions for the Australian finance sector by InfogenX: risk analytics, automation & digital transformation tailored for compliance & growth."
          keywords="intelligent automation finance, digital transformation finance Australia, AI-enabled risk analytics, fraud detection automation Australia, financial analytics consulting Brisbane"
        />
      */}
      <SEO
        title="Finance IT Solutions Brisbane | Infogenx"
        description="Secure and compliant finance IT solutions in Brisbane. We help financial institutions automate workflows and enhance data security through intelligent technology."
        keywords="finance IT solutions Brisbane, financial automation, fintech solutions Australia, data security finance, Infogenx"
      />
      {/* <Helmet>
        <title>AI Consulting for Finance Australia | Infogenx</title>
        <meta
          name="description"
          content="Secure AI-enabled business solutions for the Australian finance sector by InfogenX: risk analytics, automation & digital transformation tailored for compliance & growth."
        />
        <meta
          name="keywords"
          content="intelligent automation finance, digital transformation finance Australia, AI-enabled risk analytics, fraud detection automation Australia, financial analytics consulting Brisbane"
        />
      </Helmet> */}
      <Header />
      <AppDevHero />
      <AppDevExpertise />
      <AppDevApproach />
      <AppDevBusinessImpact />
      <AppDevImpactCTA />
      <Footer />
    </>
  );
};

export default Finance;
