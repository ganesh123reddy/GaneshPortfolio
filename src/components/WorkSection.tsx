import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./WorkSection.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Typewriter from "typewriter-effect";

function WorkSection() {
  return (
    <div id="experience" className="experience">
      <div className="container">
        <div className="experience-heading">
          <Typewriter
            options={{
              strings: ["What I Have Done So Far...."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <h2 className="section-title">Work Experience.</h2>
      </div>

      <VerticalTimeline lineColor="white">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#040B2A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2020 - July 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            Jio Platforms Limited
          </h6>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            Bangalore, Karnataka, India
          </h6>

          <br></br>
          <ul className="work-experience-points">
            <li>
              Designed a cutting-edge Offers Engine architecture leveraging
              AKKA(Java), Apache Kafka, Apache Ignite, and Apache Spark.
              Achieved an impressive 50% reduction in coupon assignment time.
            </li>
            <li>
              Worked on an advanced SMS delivery system, achieving a 99.9%
              success rate in message delivery. Used TIBCO queue, Cassandra, and
              Apache Akka, reducing average message delivery time to 10
              milliseconds.
            </li>
            <li>
              Architected and implemented an Apache Airflow (Python) data
              ingestion pipeline, processing over 10TB data daily, reducing
              processing times by 35%.
            </li>
          </ul>
          <div className="tech-stack-container">
            <span className="tech-tag">Java</span>
            <span className="tech-tag">Apache Akka</span>
            <span className="tech-tag">Apache Spark</span>
            <span className="tech-tag">Cassandra</span>
            <span className="tech-tag">Apache Ignite</span>
            <span className="tech-tag">Apache Kafka</span>
            <span className="tech-tag">Hive</span>
            <span className="tech-tag">Apache AirFlow</span>
            {/* <span className="tech-tag">Hive</span> */}
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#040B2A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2019 - May 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
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
            Guwahati, Assam, India
          </h6>

          <br></br>
          <ul className="work-experience-points">
            <li>
              Collaborated with esteemed researchers to conceive and implement a
              sophisticated attention mechanism for remote sensing data,
              boosting classification accuracy by an impressive 7\% and slashing
              model training time by 30\%.
            </li>
            <li>
              Explored and applied domain adaptation techniques to enhance the
              model's performance on a remote sensing domain with limited
              annotated data belonging to a particular region, demonstrating the
              ability to transfer knowledge from images collected in other
              regions.
            </li>
          </ul>
          <div className="tech-stack-container">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Tensorflow</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">OpenCV</span>
            <span className="tech-tag">Feature Engineering</span>
            <span className="tech-tag">Attention Mechanism</span>
            <span className="tech-tag">LSTM</span>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#040B2A", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="August 2020 - July 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Intern Software Engineer
          </h3>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            TheRightDoctors
          </h6>
          <h6
            className="vertical-timeline-element-subtitle"
            style={{ color: "#9AA5D3" }}
          >
            Hyderabad, Telangana, India
          </h6>

          <br></br>
          <ul className="work-experience-points">
            <li>
              Collaborated with the development team on TheRightDoctors
              platform's chatbot project, leveraging sentiment analysis to
              enhance user interactions, resulting in a 40% increase in user
              engagement among existing clients.
            </li>
            <li>
              Led a 2-member team in developing an internal video commenting
              application using the MERN stack, tailored for medical
              conferencing videos. This application enhanced editor and reviewer
              engagement by enabling real-time discussions and feedback on
              conference videos.
            </li>
            <li>
              Implemented cutting-edge Single Sign-On (SSO) across 4
              intern-driven web applications, seamlessly integrating MEAN stack,
              JWT, and Redis Cache, reducing the login time for users by 50%.
            </li>
          </ul>
          <div className="tech-stack-container">
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Javascript</span>
            <span className="tech-tag">nodejs</span>
            <span className="tech-tag">Java</span>
            <span className="tech-tag">JWT</span>
            <span className="tech-tag">Redis</span>
            {/* <span className="tech-tag"></span> */}
            {/* <span className="tech-tag">Hive</span> */}
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default WorkSection;
