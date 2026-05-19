import "./CloudComputingTech.css";
import AppcornerAssent from "../../../../assets/images/corner-accent.webp";

const WebDevTech = () => {
  return (
    <section className="tech-web-section">
      <div className="tech-web-container">
        <div className="tech-web-header">
          <span className="app-section-label">What We Offer</span>
          <h2>What Cloud Computing Means</h2>
          <p className="tech-web-desc">
            Cloud computing isn’t just about hosting – it’s about creating digital environments that scale dynamically, support business goals, and protect your critical data assets.
          </p>
          <p className="tech-web-desc">
            We combine proven public/private cloud models, robust migration sequencing, and optimization strategies to deliver cloud environments that are fast, secure, and cost-effective across your operations.
          </p>
        </div>
        <div className="tech-stack">
          <h3>Core Cloud Integration Stack</h3>
          <div className="tech-stack-grid">
            <div className="tech-stack-card">
              <h4>Cloud Architecture & Strategy</h4>
              <p>
                We architect landing zones and cross-region architectures tailored to your operational scale and latency needs.
              </p>
              <span className="tech-label">Platforms:</span>
              <p>
                Amazon Web Services (AWS)
                <br />
                Microsoft Azure, Google Cloud
              </p>
            </div>
            <div className="tech-stack-card">
              <h4>Migration & Modernisation</h4>
              <p>
                Minimise disruption with planned cutovers, sequenced dependencies, and secure data sync pipelines.
              </p>
              <span className="tech-label">Methodologies:</span>
              <p>
                Rehosting (Lift-and-Shift)
                <br />
                Replatforming & Refactoring
              </p>
            </div>
            <div className="tech-stack-card">
              <h4>Cloud-Native Development</h4>
              <p>
                Build applications that natively scale, utilizing auto-scaling features and serverless compute models.
              </p>
              <span className="tech-label">Technologies:</span>
              <p>
                Docker & Kubernetes (EKS, AKS)
                <br />
                AWS Lambda, Azure Functions
              </p>
            </div>
            <div className="tech-stack-card">
              <h4>Database & Cloud Storage</h4>
              <p>
                Secure and highly available storage systems built for enterprise persistence and rapid query execution.
              </p>
              <span className="tech-label">Solutions:</span>
              <p>
                Relational Databases (RDS, SQL)
                <br />
                NoSQL (DynamoDB, CosmosDB), S3
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="tech-approach">
          <span className="app-section-label">Approach</span>
          <h3>Our Cloud Engineering Approach</h3>
          <div className="tech-approach-grid">
            <div>
              <h5>Assess & Strategy</h5>
              <p>
                We audit current servers, map data dependencies, and define workload readiness to build your migration roadmap.
              </p>
            </div>
            <div>
              <h5>Architect & Design</h5>
              <p>
                Design secure virtual private networks (VPCs), landing zones, identity access controls, and recovery protocols.
              </p>
            </div>
            <div>
              <h5>Migrate & Validate</h5>
              <p>
                Incremental cutovers of applications and data databases with zero operational disruption and post-migration checks.
              </p>
            </div>
            <div>
              <h5>Optimize & Govern</h5>
              <p>
                Implement real-time billing alerts, cost-saving recommendations, rightsized nodes, and resource scaling controls.
              </p>
            </div>
            <div>
              <h5>Manage & Support</h5>
              <p>
                Ongoing environment maintenance, proactive OS/patch management, and security audits for long-term reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="web-corner-accent"
      />
    </section>
  );
};

export default WebDevTech;


