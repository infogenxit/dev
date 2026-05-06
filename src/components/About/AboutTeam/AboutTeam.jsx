import React from 'react';
import './AboutTeam.css';
import { RiLinkedinBoxLine } from "react-icons/ri";

const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Strategic Direction & Operations",
      bio: "Our leadership team focuses on driving digital transformation excellence across the Australian business landscape.",
      linkedin: "https://www.linkedin.com/company/infogenx-pvt-ltd/"
    },
    {
      name: "AI & Automation Experts",
      role: "Solutions Engineering",
      bio: "Specialists in Microsoft, Zoho, and Odoo ecosystems, delivering intelligent automation and AI-enabled apps.",
      linkedin: "https://www.linkedin.com/company/infogenx-pvt-ltd/"
    },
    {
      name: "Data Analytics Team",
      role: "Intelligence & Insights",
      bio: "Experts in turning complex business data into actionable insights and decision-support systems.",
      linkedin: "https://www.linkedin.com/company/infogenx-pvt-ltd/"
    }
  ];

  return (
    <section className="about-team-section">
      <div className="team-container">
        <span className="section-label">Our People</span>
        <h2 className="team-title">Experts Driving Your <span>Digital Success</span></h2>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                  <RiLinkedinBoxLine /> Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
