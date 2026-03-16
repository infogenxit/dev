import "./PrivacyPolicy.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Infogenx</title>
        <meta
          name="description"
          content="Read Infogenx Privacy Policy to understand how we collect, use, and protect your personal information while using our website and services."
        />
        <meta
          name="keywords"
          content="Infogenx privacy policy, data protection, user privacy, information security policy"
        />
      </Helmet>

      <Header />
      <section className="privacy-policy-section">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>

          <div className="privacy-block">
            <p>
              At Infogenx, your privacy and the protection of your personal data
              are paramount. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              and interact with our services. By using our website or services,
              you agree to the terms of this Privacy Policy.
            </p>
          </div>

          <div className="privacy-block">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information to provide you with the best experience
              possible. This includes:
            </p>
            <p>
              <strong>Personal Information:</strong> This may include details
              such as your name, email address, phone number, and other personal
              identifiers that you provide directly through our contact forms,
              registration forms, or interactions with our customer support.
            </p>
            <p>
              <strong>Usage Data:</strong> We collect information about how you
              use our website and services, including IP address, device type,
              browser type, and your interactions with our website.
            </p>
            <p>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              to enhance user experience. Cookies are small text files stored on
              your device that allow us to recognise you and remember your
              preferences. You can control cookie settings via your browser
              preferences.
            </p>
          </div>

          <div className="privacy-block">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect for a variety of purposes,
              including:
            </p>
            <p>
              <strong>Providing Services:</strong> To offer and improve our
              services, including tailored recommendations, customer support, and
              the functionality of our website.
            </p>
            <p>
              <strong>Communication:</strong> To respond to inquiries, provide
              updates, and send promotional content or newsletters (if you have
              opted in).
            </p>
            <p>
              <strong>Security and Compliance:</strong> To ensure the security of
              our website and services, prevent fraud, and comply with applicable
              legal requirements.
            </p>
            <p>
              <strong>Personalisation:</strong> To personalise your experience by
              customising the content you see based on your preferences and
              behaviour.
            </p>
          </div>

          <div className="privacy-block">
            <h2>3. Data Security</h2>
            <p>
              We take data security seriously. We implement industry-standard
              security measures to protect your personal information from
              unauthorised access, disclosure, or modification. However, no data
              transmission over the internet is completely secure, so while we
              strive to protect your personal information, we cannot guarantee
              its absolute security.
            </p>
          </div>

          <div className="privacy-block">
            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information to third parties.
              However, we may share your information with trusted third-party
              service providers who assist in the operation of our business, such
              as:
            </p>
            <p>
              <strong>Service Providers:</strong> We share data with trusted
              partners for analytics, customer service, marketing, and website
              hosting services. These third parties are obligated to maintain the
              confidentiality of your information.
            </p>
            <p>
              <strong>Legal Obligations:</strong> We may disclose your
              information if required by law, to comply with a legal process, or
              to protect the rights, property, and safety of Infogenx, our
              customers, or the public.
            </p>
          </div>

          <div className="privacy-block">
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal data for as long as necessary to fulfill
              the purposes outlined in this Privacy Policy, unless a longer
              retention period is required by law. Once we no longer need the
              data for the purposes it was collected, we will securely delete or
              anonymize it.
            </p>
          </div>

          <div className="privacy-block">
            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <p>
              <strong>Access Your Data:</strong> You may request access to the
              personal data we hold about you.
            </p>
            <p>
              <strong>Correct Your Data:</strong> If you believe the information
              we hold is incorrect, you can request to have it updated.
            </p>
            <p>
              <strong>Delete Your Data:</strong> You may request the deletion of
              your personal data, subject to certain exceptions (e.g., if we need
              to retain it for legal reasons).
            </p>
            <p>
              <strong>Opt-Out of Marketing Communications:</strong> If you no
              longer wish to receive promotional emails or newsletters, you can
              unsubscribe at any time using the unsubscribe link in our emails.
            </p>
          </div>

          <div className="privacy-block">
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies to improve the functionality of our website and
              enhance your user experience. Cookies allow us to:
            </p>
            <p>Remember your preferences and settings.</p>
            <p>
              Analyze how our website is used to improve performance.
            </p>
            <p>
              Provide personalized content based on your interests.
            </p>
            <p>
              You can manage cookie preferences through your browser settings.
              However, disabling cookies may impact your experience on our
              website.
            </p>
          </div>

          <div className="privacy-block">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services.
              These websites are not operated by us, and we are not responsible
              for their privacy practices. We encourage you to review their
              privacy policies before providing any personal information.
            </p>
          </div>

          <div className="privacy-block">
            <h2>9. Children's Privacy</h2>
            <p>
              Our website and services are not intended for children under the
              age of 13. We do not knowingly collect personal information from
              children. If you believe that we have inadvertently collected
              information from a child, please contact us immediately, and we
              will take appropriate steps to delete the information.
            </p>
          </div>

          <div className="privacy-block">
            <h2>10. Updates to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or legal requirements. Any changes will be posted
              on this page, with the "Effective Date" updated accordingly. We
              encourage you to review this Privacy Policy regularly to stay
              informed about how we are protecting your information.
            </p>
          </div>

          <div className="privacy-block">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal data, please feel free to contact
              us:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:reachus@infogenx.com">reachus@infogenx.com</a>
            </p>
            <p>
              <strong>Phone:</strong>  +61403339424 
            </p>
            <p>
              <strong>Address:</strong>  207/17 View Street, Mount Gravatt East, QLD-4122
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;