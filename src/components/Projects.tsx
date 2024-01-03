import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Projects.css"; // Make sure to import the CSS file

const projects = [
  {
    title: "Advanced Predictive Modeling for Used Car Price Estimation",
    description:
      "Developed an advanced machine learning model for predicting used car prices, leveraging a substantial dataset of over 100,000 used car listings. This model, built using Python and TensorFlow, accurately estimates the market value of used cars. In parallel, I developed a complementary web application, crafted with Flask, HTML, and CSS. This application streamlines data entry and optimizes user interaction, providing a seamless bridge between complex algorithmic functionality and user accessibility.",
    tags: ["#Python", "#Flask", "#FeatureEngineering", "#NLP"],
    image: "carprediction.png", // Replace with your image path
  },
  {
    title: "Enhanced COVID-19 Detection from Chest X-Rays",
    description:
      "Enhanced the accuracy of COVID-19 detection from chest X-rays by creating a sophisticated machine learning model, achieving 97% training accuracy and 95% validation accuracy. This project, executed from August 2023 to September 2023 at UB, involved processing a large dataset of chest X-rays. By employing advanced image segmentation techniques, the efficiency of the models in analyzing complex medical imaging data was significantly boosted, leading to more reliable and precise diagnosis capabilities in the fight against COVID-19.",
    tags: ["#Python", "#NLM", "#Unet", "#Segmentation", "#Tensorflow"],
    image: "img2.jpg", // Replace with your image path
  },
  {
    title: "Advanced Online Auction Platform",
    description:
      "At UB, I spearheaded the development of Auction Point, an innovative online auction platform akin to eBay. This project involved implementing secure user authentication and role-based access control, greatly enhancing platform security and building user trust. I also engineered a personalized recommendation system using Matrix Factorization. This project represents a significant step in combining advanced security measures with user-centric design in the realm of online auction systems.",
    tags: [
      "#JavaScript",
      "#Node.js",
      "#React",
      "#MySQL",
      "#Express",
      "#Matrix Factorization",
    ],
    image: "auction.png", // Replace with your image path
  },
  {
    title: "LibraryHub: Building a Bookworm Community",
    description:
      "In this project, I orchestrated the creation and deployment of 'LibraryHub', a dynamic and interactive website designed for book enthusiasts. The platform was developed using Java (Spring Boot) and PostgreSQL, ensuring efficient data management and top-notch performance on local internal Linux servers. A notable feature of this website is the integration of a machine learning algorithm that enhanced the precision of book recommendations by 10%, leveraging user reading history and preferences. This development not only provided a superior performance but also fostered a vibrant community for book lovers. ",
    tags: [
      "#SpringBoot",
      "#PostgreSQL",
      "#Recommendation",
      "#linux",
      "#Matrix Factorization",
    ],
    image: "libraryhub.png",
  },
  {
    title: "Celestial Gems: Game Item and Character NFTs",
    description:
      "In the project 'Celestial Gems', I developed and deployed a scalable and secure cryptocurrency platform specifically for the gaming industry. This platform facilitates rapid exchange, ownership, and rental of game characters and items, utilizing JavaScript and Solidity on GCP and Infura. Additionally, I led the creation of an innovative NFT marketplace for game items and characters. This marketplace features a dynamic pricing system that adjusts character prices based on demand, enabling gamers to buy, sell, and rent digital assets in a fair and efficient manner. ",
    tags: ["#Solidity", "#JavaScript", "#GCP", "#Infura"],
    image: "celestialgems.png",
  },
  {
    title: "Authorship Attribution for Neural Text Generation",
    description:
      "In this project, undertaken at UB from January 2023 to April 2023, I directed the development of a state-of-the-art authorship attribution model. This model leveraged advanced Natural Language Processing (NLP) techniques, including BERT and GPT-3, and integrated attention mechanisms for enhanced text analysis. A significant achievement of this project was attaining unparalleled accuracy in identifying authors from eight large language models. Additionally, the implementation and fine-tuning of attention-based neural networks markedly improved the model's ability to discern subtle linguistic patterns unique to each author, showcasing the depth and precision of our approach.",
    tags: ["#BERT", "#FeatureEngineering", "#RNNS", "#Attention Mechanism"],
    image: "authorshipattr.png",
  },

  // ... other projects
];

function ProjectsSection() {
  return (
    <Container id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card className="project-card">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsSection;
