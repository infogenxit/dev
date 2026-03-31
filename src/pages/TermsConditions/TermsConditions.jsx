import "./TermsConditions.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Infogenx</title>
        <meta
          name="description"
          content="Review the terms and conditions governing the use of Infogenx website and services, including user responsibilities and service limitations."
        />
        <meta
          name="keywords"
          content="Infogenx terms and conditions, website terms, service agreement, legal terms"
        />
      </Helmet>

      <Header />
      <section className="terms-section">
        <div className="terms-container">
          <h1 className="terms-title">Terms & Conditions</h1>

          <div className="terms-block">
            <p>
              Welcome to Infogenx! By accessing and using our website, you agree
              to comply with and be bound by the following Terms and Conditions.
              These terms govern your use of our website and services. If you do
              not agree with these terms, please refrain from using our site.
            </p>
          </div>

          <div className="terms-block">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, services, and products, you
              agree to comply with and be bound by these Terms and Conditions,
              including any updates or changes made from time to time. We reserve
              the right to modify, update, or change these terms at any time, and
              such changes will be effective immediately upon posting.
            </p>
          </div>

          <div className="terms-block">
            <h2>2. User Responsibilities</h2>
            <p>
              You agree to use our website and services for lawful purposes only.
              You are prohibited from using our website for any activity that
              could damage, disable, or impair the site's functionality or the
              servers connected to it. You may not attempt to gain unauthorized
              access to any portion of the website, systems, or networks.
            </p>
          </div>

          <div className="terms-block">
            <h2>3. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. By using our website and services,
              you consent to the collection, use, and sharing of your information
              as outlined in our Privacy Policy. This includes providing accurate
              and complete information when registering and agreeing to receive
              marketing communications, unless you opt out.
            </p>
          </div>

          <div className="terms-block">
            <h2>4. User-Generated Content</h2>
            <p>
              By submitting or posting any content on our website, you grant
              Infogenx the right to use, modify, display, and distribute such
              content in connection with the website's operations. You are solely
              responsible for any content you post, and it must comply with our
              community guidelines. We reserve the right to remove any content
              that violates these terms.
            </p>
          </div>

          <div className="terms-block">
            <h2>5. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, graphics, and materials on our
              website are owned by Infogenx or our licensors. You may not copy,
              reproduce, or distribute any of our intellectual property without
              explicit permission. You agree to respect the intellectual property
              rights of Infogenx and others.
            </p>
          </div>

          <div className="terms-block">
            <h2>6. Product and Service Availability</h2>
            <p>
              We make every effort to ensure that the products and services on
              our website are accurately described and available. However, we do
              not guarantee the availability of any products or services at all
              times. We reserve the right to modify or discontinue any product or
              service at our discretion, without prior notice.
            </p>
          </div>

          <div className="terms-block">
            <h2>7. Payment and Billing</h2>
            <p>
              For services or products that require payment, you agree to provide
              accurate and complete payment information. You authorize us to
              charge the agreed-upon amounts for the services rendered or products
              purchased. All payments are processed securely through third-party
              payment providers, and you agree to comply with their terms as well.
            </p>
          </div>
          

          <div className="terms-block">
            <h2>8. Limitation of Liability</h2>
            <p>
              Infogenx is not liable for any direct, indirect, incidental, or
              consequential damages resulting from your use of our website or
              services. This includes, but is not limited to, any errors, bugs,
              interruptions, or delays in service that may occur. Our liability
              is limited to the maximum extent allowed by law.
            </p>
          </div>

          <div className="terms-block">
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Infogenx, its affiliates,
              employees, and partners from any claims, damages, losses, or
              expenses (including legal fees) arising from your use of the
              website, violation of these terms, or infringement of any
              intellectual property rights.
            </p>
          </div>

          <div className="terms-block">
            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites for your
              convenience. We are not responsible for the content, privacy
              practices, or activities of these third-party sites. When you click
              on these links, you leave our website and access third-party content
              at your own risk.   
            </p>
          </div>

          <div className="terms-block">
            <h2>11. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of the
              jurisdiction in which Infogenx operates. Any disputes arising out
              of or related to these terms shall be resolved in accordance with
              the laws of that jurisdiction.
            </p>
          </div>

          <div className="terms-block">
            <h2>12. Termination of Service</h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              website or services at our discretion, including if you violate
              these terms. Upon termination, you must immediately stop using our
              website and services.
            </p>
          </div>

          <div className="terms-block">
            <h2>13. Dispute Resolution</h2>
            <p>
              Any disputes or claims arising out of or related to these Terms and
              Conditions shall be subject to mediation. If a resolution cannot be
              reached, the matter will be referred to binding arbitration under
              the applicable laws.
            </p>
          </div>

          <div className="terms-block">
            <h2>14. Contact Us</h2>
            <p>
              If you have any questions, concerns, or need clarification regarding
              these Terms and Conditions, please feel free to contact us at{" "}
              <a href="mailto:reachus@infogenx.com">reachus@infogenx.com</a>.
            </p>
          </div>

          <div className="terms-block">
            <h2>15. Agreement</h2>
            <p>
              By using our website or services, you acknowledge that you have
              read and understood these Terms and Conditions and agree to be
              bound by them.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsConditions;