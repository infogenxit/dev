import "./TechSlider.css";
import aws from "../../../assets/images/aws.png";
import laravel from "../../../assets/images/laravel.png";
import codeigniter from "../../../assets/images/codeigniter.png";
import tableau from "../../../assets/images/tableau.png";
import python from "../../../assets/images/python.png";
import node from "../../../assets/images/node.png";
import angular from "../../../assets/images/angular.png";
import react from "../../../assets/images/react.png";
import powerbi from "../../../assets/images/powerbi.png";
import ml from "../../../assets/images/ml.png";
import flutter from "../../../assets/images/flutter.png";
import sql from "../../../assets/images/sql.png";
import wordpress from "../../../assets/images/wordpress.png";
import shopify from "../../../assets/images/shopify.png";
import spark from "../../../assets/images/spark.png";
import php from "../../../assets/images/php.png";

const techLogos = [
  { src: aws, name: "AWS Cloud" },
  { src: laravel, name: "Laravel Framework" },
  { src: python, name: "Python AI Development" },
  { src: node, name: "Node.js Backend" },
  { src: angular, name: "Angular Web Development" },
  { src: react, name: "React Frontend" },
  { src: powerbi, name: "Microsoft Power BI" },
  { src: ml, name: "Machine Learning" },
  { src: flutter, name: "Flutter Mobile Apps" },
  { src: sql, name: "SQL Database" },
  { src: wordpress, name: "WordPress CMS" },
  { src: shopify, name: "Shopify E-commerce" },
  { src: spark, name: "Apache Spark" },
  { src: php, name: "PHP Development" },
  { src: codeigniter, name: "CodeIgniter" },
  { src: tableau, name: "Tableau Visualization" },
];

const TechSlider = () => {
  return (
    <section className="tech-slider-section">
      <div className="tech-slider">
        <div className="tech-track">
          {techLogos.map((logo, index) => (
            <div className="tech-card" key={index}>
              <img src={logo.src} alt={`${logo.name} Expertise`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
