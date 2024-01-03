import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./EducationSection.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Typewriter from "typewriter-effect";
import ReactCountryFlag from "react-country-flag";

function EducationSection() {
  return (
    <div id="education" className="education">
      <div className="container">
        <div className="experience-heading">
          <Typewriter
            options={{
              strings: ["Where did I Study so far....."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h2 className="section-title">My Education</h2>
      </div>

      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement
          className="vertical-timeline-element--study"
          contentStyle={{ background: "#040B2A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2020 - July 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            M.S in Computer Science and Engineering
          </h3>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            The State University of New York Buffalo
          </h6>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            SUNY Buffalo, NewYork, USA{"  "}
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "1em",
                height: "1em",
              }}
              title="US"
            />
          </h6>

          <br></br>

          <div className="tech-stack-container">
            <span className="tech-tag">Analysis of Algorithms & Design</span>
            <span className="tech-tag">Intro to Machine Learning</span>
            <span className="tech-tag">Data Models and Query Language</span>
            <span className="tech-tag">Data Intensive Computing</span>
            <span className="tech-tag">Computer Security</span>
            <span className="tech-tag">
              Deep Learning for Medical Imaging Analysis
            </span>
            <span className="tech-tag">Natural Language Processing</span>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#040B2A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2019 - May 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors in Computer Science and Engineering
          </h3>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            Indian Institute of Information Technology Guwahati
          </h6>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            Guwahati, Assam, India{" "}
            <ReactCountryFlag
              countryCode="IN"
              svg
              style={{
                width: "1em",
                height: "1em",
              }}
              title="IN"
            />
          </h6>
          <br></br>
          <div className="tech-stack-container">
            <span className="tech-tag">Data Structures</span>
            <span className="tech-tag">Operating Systems</span>
            <span className="tech-tag">Distributed Systems</span>
            <span className="tech-tag">Cloud Computing</span>
            <span className="tech-tag">Introduction to Graph Theory</span>
            <span className="tech-tag">Optimization Techniques</span>
            <span className="tech-tag">Object Oriented Programming</span>
            <span className="tech-tag">Data Analytics</span>
            <span className="tech-tag">Software Engineering</span>
            {/* <span className="tech-tag">Object Oriented Programming</span>
            <span className="tech-tag">Object Oriented Programming</span> */}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default EducationSection;
