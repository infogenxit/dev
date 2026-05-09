import { useState } from "react";
import "./RequestQuote.css";

import SEO from "../../components/SEO/SEO";
const RequestQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    location: "",
    desiredService: "",
    message: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://crm.zoho.com/crm/WebToLeadForm";
      form.acceptCharset = "UTF-8";

      const fields = {
        // Zoho mandatory hidden fields
        xnQsjsdp: process.env.REACT_APP_ZOHO_CRM_XNQSJSDP_QUOTE,
        xmIwtLD: process.env.REACT_APP_ZOHO_CRM_XMIWTLD_QUOTE,
        actionType: "TGVhZHM=",
        returnURL: process.env.REACT_APP_QUOTE_RETURN_URL,

        // User form fields → Zoho Lead fields
        "Last Name": formData.name,
        Phone: formData.contactNumber,
        Email: formData.email,
        Country: formData.location,
        Designation: formData.desiredService,
        Description: formData.message,
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      form.target = "zohoQuoteSubmitFrame"; // Prevents full page redirect
      document.body.appendChild(form);
      form.submit();
      
      // Cleanup form element after submission
      setTimeout(() => {
        if (form.parentNode) form.parentNode.removeChild(form);
      }, 2000);

      setShowThankYou(true);
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        location: "",
        desiredService: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <iframe
        title="Zoho quote form submit"
        name="zohoQuoteSubmitFrame"
        style={{ display: "none" }}
      />
      <SEO
        title="Contact Infogenx | Book an AI & Automation Call"
        description="Get in touch with Infogenx to discuss your digital transformation goals, request a demo, or book an Australian-led strategy consultation."
        keywords="contact AI & Automation Australia company, IT strategy call Australia"
      />

      <div className="request-quote-page">
        <div className="contact-form-container">
          <h2 className="contact-title">Get In Touch</h2>

          {!showThankYou ? (
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="desiredService"
                  placeholder="Desired Service"
                  className="full-width"
                  value={formData.desiredService}
                  onChange={handleChange}
                  required
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Message"
                  className="full-width"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          ) : (
            <div className="thank-you-message">
              <h3>Thank You!</h3>
              <p>
                Your message has been successfully submitted. We'll get back to
                you soon!
              </p>
              <button onClick={() => setShowThankYou(false)}>
                Submit Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RequestQuote;
