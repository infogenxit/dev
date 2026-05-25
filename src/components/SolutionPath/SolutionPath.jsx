import React from "react";
import "./SolutionPath.css";

/**
 * SolutionPath displays a series of steps.
 * It now arranges the cards in a responsive grid where the number of columns
 * equals Math.ceil(Math.sqrt(stepCount)). The badge number and title font size
 * scale proportionally with the step index to give a progressive visual weight.
 */
const SolutionPath = ({ steps = [] }) => {
  // Determine grid columns based on step count (e.g., 1→1, 2→2, 3→2, 4→2, 5→3, ...)
  const cols = Math.ceil(Math.sqrt(steps.length));

  return (
    <div className="solution-grid" style={{ "--cols": cols }}>
      {steps.map((step, idx) => {
        // Scale the badge number and title size based on index (starting at 1)
        const scale = 1 + idx * 0.15; // 1, 1.15, 1.30, ...
        const badgeStyle = { fontSize: `${1.4 * scale}rem` };
        const titleStyle = { fontSize: `${1.0 * scale}rem` };
        return (
          <div key={idx} className="approach-card">
            <span className="step-number" style={badgeStyle}>
              {step.number || idx + 1}
            </span>
            <h4 style={titleStyle}>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SolutionPath;