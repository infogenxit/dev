import AppcornerAssent from "../../../../assets/images/corner-accent.webp";
import SolutionPath from "../../../../components/SolutionPath/SolutionPath";

const steps = [
  {
    number: "1",
    title: "Health Checks and Performance Audits",
    desc: "We conduct thorough checks to identify potential issues and ensure your platform runs at its best.",
  },
  {
    number: "2",
    title: "Targeted Enhancements and Automation Upgrades",
    desc: "Implement tailored improvements and automation features to enhance performance and reduce manual work.",
  },
  {
    number: "3",
    title: "Fast-Track Issue Resolution and Knowledge Transfer",
    desc: "We resolve issues swiftly and empower your team with the knowledge to handle future challenges.",
  },
  {
    number: "4",
    title: "Scalable Optimisation for Long-Term Growth",
    desc: "We ensure your platform is scalable and continuously improve to meet your evolving business needs.",
  },
];

const businessOutcomes = [
  {
    title: "Increase Efficiency",
    desc: "Eliminate manual processes and speed up operational cycle times, boosting overall efficiency.",
  },
  {
    title: "Boost Accuracy",
    desc: "Minimise human errors and improve consistency with automated processes and proactive optimisation.",
  },
  {
    title: "Enhance Productivity",
    desc: "Empower teams to focus on high-value tasks by automating repetitive workflows.",
  },
  {
    title: "Drive Growth",
    desc: "Free up resources to redirect them toward key business growth initiatives.",
  },
];

const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">How We Deliver</span>
          <h2>A Smarter Approach to Platform Support</h2>
        </div>
        <SolutionPath steps={steps} />

        <hr
          style={{
            margin: "50px 0px",
            border: "1px solid  rgba(248, 138, 60, 0.792)",
          }}
        />

        <div className="business-outcome">
          <h1>Business Outcomes</h1>
          <SolutionPath steps={businessOutcomes} />
        </div>
        <img src={AppcornerAssent} alt="AppcornerAssent" className="approach-corner-accent" />
      </div>
    </section>
  );
};
export default AppDevApproach;


