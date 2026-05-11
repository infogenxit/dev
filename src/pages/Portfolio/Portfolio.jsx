import PortfolioVideo from "../../assets/videos/portfolio.mp4";
import AboutCornerAccent from "../../assets/images/about-corner-accent.webp";
import { useState } from "react";
import "./Portfolio.css";
import AppImg1 from "../../assets/images/infogenx-application-images-1.webp";
import AppImg2 from "../../assets/images/infogenx-application-images-2.webp";
import AppImg3 from "../../assets/images/infogenx-application-images-3.webp";
import AppImg4 from "../../assets/images/infogenx-application-images-4.webp";
import AppImg5 from "../../assets/images/infogenx-application-images-5.webp";
import AppImg6 from "../../assets/images/infogenx-application-images-6.webp";
import AppImg7 from "../../assets/images/infogenx-application-images-7.webp";
import AppImg8 from "../../assets/images/infogenx-application-images-8.webp";
import AppImg9 from "../../assets/images/infogenx-application-images-9.webp";
import WebImg1 from "../../assets/images/infogenx-website-images-1.webp";
import WebImg2 from "../../assets/images/infogenx-website-images-2.webp";
import WebImg3 from "../../assets/images/infogenx-website-images-3.webp";
import WebImg4 from "../../assets/images/infogenx-website-images-4.webp";
import WebImg5 from "../../assets/images/infogenx-website-images-5.webp";
import WebImg6 from "../../assets/images/infogenx-website-images-6.webp";
import WebImg7 from "../../assets/images/infogenx-website-images-7.webp";
import LogoImg1 from "../../assets/images/infogenx-logos-images-1.webp";
import LogoImg2 from "../../assets/images/infogenx-logos-images-2.webp";
import LogoImg3 from "../../assets/images/infogenx-logos-images-3.webp";
import LogoImg4 from "../../assets/images/infogenx-logos-images-4.webp";
import LogoImg5 from "../../assets/images/infogenx-logos-images-5.webp";

import SEO from "../../components/SEO/SEO";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../sections/Common/Breadcrumbs/Breadcrumbs";
import { PATHS } from "../../route/paths";
const projects = [
  {
    id: 1,
    category: "Application",
    image: AppImg1,
  },
  {
    id: 2,
    category: "Application",
    image: AppImg2,
  },
  {
    id: 3,
    category: "Application",
    image: AppImg3,
  },
  {
    id: 4,
    category: "Application",
    image: AppImg4,
  },
  {
    id: 5,
    category: "Application",
    image: AppImg5,
  },
  {
    id: 6,
    category: "Application",
    image: AppImg6,
  },
  {
    id: 7,
    category: "Application",
    image: AppImg7,
  },
  {
    id: 8,
    category: "Application",
    image: AppImg8,
  },
  {
    id: 9,
    category: "Application",
    image: AppImg9,
  },
  {
    id: 10,
    category: "Website",
    image: WebImg1,
  },
  {
    id: 11,
    category: "Website",
    image: WebImg2,
  },
  {
    id: 12,
    category: "Website",
    image: WebImg3,
  },
  {
    id: 13,
    category: "Website",
    image: WebImg4,
  },
  {
    id: 14,
    category: "Website",
    image: WebImg5,
  },
  {
    id: 15,
    category: "Website",
    image: WebImg6,
  },
  {
    id: 11,
    category: "Website",
    image: WebImg7,
  },
  {
    id: 12,
    category: "Logos",
    image: LogoImg1,
  },
  {
    id: 13,
    category: "Logos",
    image: LogoImg2,
  },
  {
    id: 14,
    category: "Logos",
    image: LogoImg3,
  },
  {
    id: 15,
    category: "Logos",
    image: LogoImg4,
  },
  {
    id: 16,
    category: "Logos",
    image: LogoImg5,
  },
];

const filters = ["All", "Application", "Website", "Logos"];
const Portfolio = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <>
      <SEO
        title="Our Portfolio | Infogenx Projects"
        description="Discover Infogenx portfolio showcasing our web development, UI/UX design, and software projects delivered to clients across various industries."
        keywords="Infogenx portfolio, web development projects, full-stack projects, software development work, UI UX portfolio"
      />
      <Breadcrumbs items={[{ name: "Portfolio", path: PATHS.portfolio }]} />
      <section className="appdev-hero">

        <img
          alt="corner accent"
          className="about-corner-accent"
          src={AboutCornerAccent}
        ></img>
        <div className="appdev-container">


          <div className="appdev-left">
            <h1>Explore Our Portfolio of High-Impact Digital Work</h1>

            <p>
              Websites, applications, and digital solutions built to combine
              design clarity, functional strength, and measurable business
              value.
            </p>

            <div className="appdev-buttons">
              <button
                className="primary-btn"
                onClick={() => navigate("/contact-us")}
              >
                View Our Work
              </button>

              <button
                className="secondary-btn"
                onClick={() => navigate("/contact-us")}
              >
                Talk to an Expert <span>↗</span>
              </button>
            </div>
          </div>


          <div className="appdev-right">
            <div className="appdev-video-wrapper">
              <div className="bg"></div>
              <video
                src={PortfolioVideo}
                autoPlay
                muted
                loop
                playsInline
                className="appdev-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-container">

          <h2 className="portfolio-title">Built to Perform</h2>

          <p className="portfolio-subtitle">
            Our portfolio highlights digital experiences crafted to improve
            usability, strengthen operations, and support long-term growth
            across industries.
          </p>


          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter-btn active" : "filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>


          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div className="portfolio-card" key={project.id}>
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
