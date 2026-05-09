import React from 'react';
import './AboutTeam.css';
import { RiLinkedinBoxLine } from "react-icons/ri";
const AboutTeam = () => {
  const teamMembers = [
    {
      name: "Strategic Leadership",
      role: "Digital Strategy & Enterprise Transformation",
      bio: "Our leadership brings decades of experience in navigating the intersection of business strategy and emerging technology. They specialize in defining the 'North Star' for Australian enterprises, ensuring every digital initiative aligns with long-term growth and operational excellence.",
      linkedin: "https://www.linkedin.com/company/infogenx-pvt-ltd/"
    },
    {
      name: "Solutions Architecture",
      role: "Platform Engineering & AI Integration",
      bio: "Comprised of certified experts in Microsoft Power Platform, Zoho Creator, and Odoo, our architecture team designs the secure, scalable foundations that power our intelligent automation and custom application solutions.",
      linkedin: "https://www.linkedin.com/company/infogenx-pvt-ltd/"
    },
    {
      name: "Data Science Group",
      role: "Predictive Analytics & Machine Learning",
      bio: "Our data specialists focus on transforming raw business datasets into actionable, decision-grade intelligence. They build the AI models and visualization tools that allow our clients to predict market shifts and optimize performance in real-time.",
      linkedin: "https://www.linkedin.com/company/infogenx-pvt-ltd/"
    },
    {
      name: "Delivery Management",
      role: "Project Governance & Customer Success",
      bio: "Our delivery leads ensure that every project is executed with transparency, structure, and a relentless focus on outcomes. They act as the bridge between our technical teams and your business objectives, ensuring seamless transition and high user adoption.",
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

