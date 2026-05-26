import "./FinanceApproach.css";
import AppcornerAssent from "../../../../assets/images/appcorner.webp";
import SolutionPath from "../../../../components/SolutionPath/SolutionPath";
const steps = [
  {
    number: "1",
    title: "Assessment",
    desc: "We start by understanding your current systems and identifying where things are not working as they should.",
  },
  {
    number: "2",
    title: "Solution Design",
    desc: "We create a clear plan based on your needs — no generic setups, no unnecessary features.",
  },
  {
    number: "3",
    title: "Implementation",
    desc: "We build and integrate the solution into your existing environment with minimal disruption.",
  },
  {
    number: "4",
    title: "Ongoing Support",
    desc: "After launch, we stay involved to make sure everything continues to run smoothly and improves over time.",
  },
];
const AppDevApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <div className="approach-header">
          <span className="app-section-label">Our Process</span>
          <h2>How We Deliver Financial Excellence</h2>
        </div>
        <SolutionPath steps={steps} />
      </div>
      <img
        src={AppcornerAssent}
        alt="corner accent"
        className="app-corner-accent"
      />
    </section>
  );
};
export default AppDevApproach;


