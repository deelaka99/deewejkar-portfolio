import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";
import DS from "../assets/logos/ds.png";
import PCM from "../assets/logos/pcm.png";
import HMV from "../assets/logos/hmv.png";
import OIT from "../assets/logos/oit.png";
import SCAF from "../assets/logos/scaf.png";
import OUSL from "../assets/logos/ousl.png";
import SUSL from "../assets/logos/susl.png";
import ESOFT from "../assets/logos/esoft.png";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#021f6a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="badge">
            <img src={SUSL} alt="img" />
          </div>
          <h4
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Faculty of Computing
          </h4>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Sabaragamuwa University of Sri Lanka
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Undergraduate of{" "}
            <b>
              Bacherlor of Science in Computing & Information Systems (Special)
              Degree Program
            </b>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#DCC825", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="badge">
            <img src={SCAF} alt="img" />
          </div>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            ScafLanka Solutions
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Worked as a <b>Junior Graphic Designer</b>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - present"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="badge">
            <img src={OUSL} alt="img" />
          </div>          
          <h4
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Faculty of Engineering Technology
          </h4>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            The Open University of Sri Lanka
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Undergraduate of{" "}
            <b>Bacherlor of Software Engineering (Honurs) Degree Program</b>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="badge">
            <img src={ESOFT} alt="img" />
          </div>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            ESOFT Metro Campus, Nugegoda
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Diploma in Information Technology
          </p>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Diploma in English
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#DCC825", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="badge">
            <img src={OIT} alt="img" />
          </div>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            OrelIT, Nawinna, Maharagama
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Worked as an <b>Associate Image Processor</b>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="badge">
            <img src={DS} alt="img" />
          </div>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            D.S. Senanayake College, Colombo 07
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            G.C.E. Advanced Level Examination <br />
            (Physical science stream + ICT)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="badge">
            <img src={PCM} alt="img" />
          </div>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            President's College, Maharagama
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            G.C.E. Ordinary Level Examination
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2009"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="badge">
            <img src={HMV} alt="img" />
          </div>
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Homagama Maha Vidyala, Homagama
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Grade 5 Scholorship
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
