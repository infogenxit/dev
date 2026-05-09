import "./TechSlider.css";
import aws from "../../../assets/images/aws.webp";
import laravel from "../../../assets/images/laravel.webp";
import codeigniter from "../../../assets/images/codeigniter.webp";
import tableau from "../../../assets/images/tableau.webp";
import python from "../../../assets/images/python.webp";
import node from "../../../assets/images/node.webp";
import angular from "../../../assets/images/angular.webp";
import react from "../../../assets/images/react.webp";
import powerbi from "../../../assets/images/powerbi.webp";
import ml from "../../../assets/images/ml.webp";
import flutter from "../../../assets/images/flutter.webp";
import sql from "../../../assets/images/sql.webp";
import wordpress from "../../../assets/images/wordpress.webp";
import shopify from "../../../assets/images/shopify.webp";
import spark from "../../../assets/images/spark.webp";
import php from "../../../assets/images/php.webp";
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

