import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDjango,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiFlask,
  SiDjango,
  SiApacheairflow,
  SiAmazondynamodb,
  SiAmazonrds,
  SiAmazonredshift,
  SiAmazons3,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiKeras,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

import "./Tech.css";

function Techstack() {
  return (
    <div id="tech" className="tech">
      <Container>
        <h2 className="section-title">Technical Skills.</h2>
        <Row style={{ justifyContent: "left", paddingBottom: "50px" }}>
          <Col xs={12} md={6} lg={4}>
            <Card className="tech-container">
              <Card.Header>Programming Languages</Card.Header>
              <Card.Body>
                <div className="tech-stack-container">
                  <span className="tech-tag">
                    Java{" "}
                    <span className="logo">
                      <DiJava />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Python{" "}
                    <span className="logo">
                      <DiPython />
                    </span>
                  </span>
                  <span className="tech-tag">
                    C++{" "}
                    <span className="logo">
                      <CgCPlusPlus />
                    </span>
                  </span>
                  <span className="tech-tag">
                    JavaScript{" "}
                    <span className="logo">
                      <DiJavascript1 />
                    </span>
                  </span>
                  <span className="tech-tag">
                    GoLang{" "}
                    <span className="logo">
                      <TbBrandGolang />
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="tech-container">
              <Card.Header>Frameworks & Libraries</Card.Header>
              <Card.Body>
                <div className="tech-stack-container">
                  <span className="tech-tag">
                    SpringBoot{" "}
                    <span className="logo">
                      <SiSpringboot />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Django{"   "}
                    <span className="logo">
                      <SiDjango />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Flask{"   "}
                    <span className="logo">
                      <SiFlask />
                    </span>
                  </span>
                  <span className="tech-tag">
                    NodeJS{"   "}
                    <span className="logo">
                      <DiNodejs />
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="tech-container">
              <Card.Header>Databases & Cloud</Card.Header>
              <Card.Body>
                <div className="tech-stack-container">
                  <span className="tech-tag">
                    PostgresSQL{" "}
                    <span className="logo">
                      <SiPostgresql />
                    </span>
                  </span>
                  <span className="tech-tag">
                    MongoDB{" "}
                    <span className="logo">
                      <DiMongodb />
                    </span>
                  </span>
                  <span className="tech-tag">
                    DynamoDB{" "}
                    <span className="logo">
                      <SiAmazondynamodb />
                    </span>
                  </span>
                  <span className="tech-tag">
                    AmazonRDS{" "}
                    <span className="logo">
                      <SiAmazonrds />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Amazon S3{" "}
                    <span className="logo">
                      <SiAmazons3 />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Red Shift{" "}
                    <span className="logo">
                      <SiAmazonredshift />
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="tech-container">
              <Card.Header>Web Technologies</Card.Header>
              <Card.Body>
                <div className="tech-stack-container">
                  <span className="tech-tag">
                    React{" "}
                    <span className="logo">
                      <DiReact />
                    </span>
                  </span>
                  <span className="tech-tag">
                    NodeJS{" "}
                    <span className="logo">
                      <DiNodejs />
                    </span>
                  </span>
                  <span className="tech-tag">
                    HTML{" "}
                    <span className="logo">
                      <SiHtml5 />
                    </span>
                  </span>
                  <span className="tech-tag">
                    CSS{" "}
                    <span className="logo">
                      <SiCss3 />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Bootstrap{" "}
                    <span className="logo">
                      <SiBootstrap />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Solidity{" "}
                    <span className="logo">
                      <SiSolidity />
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Card className="tech-container">
              <Card.Header>Machine Learning</Card.Header>
              <Card.Body>
                <div className="tech-stack-container">
                  <span className="tech-tag">
                    TensorFlow{" "}
                    <span className="logo">
                      <SiTensorflow />
                    </span>
                  </span>
                  <span className="tech-tag">
                    PyTorch{" "}
                    <span className="logo">
                      <SiPytorch />
                    </span>
                  </span>
                  <span className="tech-tag">
                    Keras{" "}
                    <span className="logo">
                      <SiKeras />
                    </span>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* <Col xs={12} md={6} lg={4}>
            <Card className="tech-container">
              <Card.Header>Other</Card.Header>
              <Card.Body>
                <DiReact />
                <DiJavascript1 />
                <SiNextdotjs />
                <SiSolidity />
              </Card.Body>
            </Card>
          </Col> */}
          {/* ... Other categories like Databases, Tools & Version Control */}
        </Row>
      </Container>
    </div>
  );
}

export default Techstack;
