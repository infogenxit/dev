import "./AboutMissionVision.css";
import missionVideo from "../../../assets/videos/mission.mp4";

const AboutMissionVision = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Left content */}

        <div className="mission-top-container">
          <div className="mission-block">
            <span className="section-label">Mission & Vision</span>
            <h2>Our Mission</h2>
            <p>
              To help businesses modernise operations through connected applications, intelligent automation,
              and data-driven solutions that improve performance and support confident growth.

            </p>
          </div>

          <div className="mission-block">
            <h2>Our Vision</h2>
            <p>
              To be a trusted digital transformation partner for businesses seeking smarter systems, 
              stronger visibility, and scalable long-term success.
            </p>
          </div>
        </div>
        <div className="mission-bottom-container">
          <div className="mission-left">
            <div className="values-block">
              <span className="section-label">Core Values</span>

              <ul className="values-list">
                <li>
                  <strong>Purpose-Driven Innovation</strong>
                  <span>Smart solutions built for real business impact.</span>
                </li>

                <li>
                  <strong>Client-First Thinking</strong>
                  <span>Your goals shape every solution we deliver.</span>
                </li>

                <li>
                  <strong>Excellence in Execution</strong>
                  <span>High standards, reliable delivery, measurable results.</span>
                </li>

                <li>
                  <strong>Agility That Adapts</strong>
                  <span>Flexible systems built for changing business needs.</span>
                </li>

                <li>
                  <strong>Integrity in Action</strong>
                  <span>Clear communication, honest work, trusted partnerships.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right image */}
          <div className="mission-right">
            <div className="mission-right">
              <div className="mission-image-wrapper">
                <video
                  src={missionVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="mission-video"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
