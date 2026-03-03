import "./AboutWhyChoose.css";

const AboutWhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <span className="why-choose-label">Why Choose Infogenx?</span>

        <div className="why-choose-grid">
          <div className="why-card">
            <h3>Trusted Platform Expertise</h3>
            <p>
              We bring strong experience across Microsoft, Zoho, Odoo, automation,
              and connected business systems.

            </p>
            <p className="muted">
              Our solutions are built to solve real operational challenges.
            </p>
          </div>
          <div className="why-card">
            <h3>Tailored, Business-First Solutions</h3>
            <p>
              Every business runs differently, so we design solutions around
              your workflows, priorities, and long-term goals.

            </p>
            <p className="muted">
              No generic delivery. No one-size-fits-all thinking.
            </p>
          </div>
        </div>

        <div className="why-divider" />

        <div className="why-choose-grid">
          <div className="why-card">
            <h3>Clarity Without Complexity</h3>
            <p>
              We remove friction, simplify systems, and 
              avoid unnecessary layers that slow teams down.
            </p>
            <p className="muted">
              Just practical technology with a clear business purpose.
            </p>
          </div>

          <div className="why-card">
            <h3>Built for Measurable Impact</h3>
            <p>
              We focus on outcomes that matter: better visibility,
              faster decisions, smoother workflows, and scalable growth.
            </p>
            <p className="muted">
              Every solution is designed to create lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
