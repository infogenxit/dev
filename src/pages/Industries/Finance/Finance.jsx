import Header from "../../../components/header/Header";
import AppDevHero from "../../../components/Industries/Finance/FinanceHero/FinanceHero";
import AppDevExpertise from "../../../components/Industries/Finance/FinanceExpertise/FinanceExpertise";
import AppDevApproach from "../../../components/Industries/Finance/FinanceApproach/FinanceApproach";
import AppDevBusinessImpact from "../../../components/Industries/Finance/FinanceBusinessImpact/FinanceBusinessImpact";
import AppDevImpactCTA from "../../../components/Industries/Finance/FinanceImpactCTA/FinanceImpactCTA";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import SEO from "../../../components/SEO/SEO";
const Finance = () => {
  return (
    <>
      <SEO
        title="AI Consulting for Finance Australia | Infogenx"
        description="Secure AI-enabled business solutions for the Australian finance sector by InfogenX: risk analytics, automation & digital transformation tailored for compliance & growth."
        keywords="intelligent automation finance, digital transformation finance Australia, AI-enabled risk analytics, fraud detection automation Australia, financial analytics consulting Brisbane"
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
