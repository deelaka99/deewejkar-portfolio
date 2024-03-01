import React, { useEffect } from "react";
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
import KNOVIK from "../assets/logos/knovik.png";

function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var expDetails = [
    {
      title: "Knovik (Pvt) Ltd",
      subTitle: "",
      date: "2024 - Present",
      desc: "Trainee Associate Software Engineer",
      type: "work",
      img: KNOVIK,
    },
    {
      title: "Faculty of Computing",
      subTitle: "Sabaragamuwa University of Sri Lanka",
      date: "2020 - present",
      desc: "Bacherlor of Science in Computing & Information Systems (Special) Degree Program",
      type: "edu",
      img: SUSL,
    },
    {
      title: "ScafLanka Solutions",
      subTitle: "",
      date: "2020 - 2021",
      desc: "Junior Graphic Designer",
      type: "work",
      img: SCAF,
    },
    {
      title: "Faculty of Engineering Technology",
      subTitle: "The Open University of Sri Lanka",
      date: "2019 - present",
      desc: "Bacherlor of Software Engineering (Honurs) Degree Program",
      type: "edu",
      img: OUSL,
    },
    {
      title: "ESOFT Metro Campus, Nugegoda",
      subTitle: "",
      date: "2019 - 2021",
      desc: (
        <span style={{ color: "gray", fontFamily: "monospace" }}>
          Person assured Diploma in Information Technology
          <br />
          Person assured Diploma in English
        </span>
      ),
      type: "edu",
      img: ESOFT,
    },
    {
      title: "OrelIT, Nawinna, Maharagama",
      subTitle: "",
      date: "2018 - 2019",
      desc: "Associate Image Processor",
      type: "work",
      img: OIT,
    },
    {
      title: "G.C.E. Advanced Level Examination 2018",
      subTitle: "D.S. Senanayake College, Colombo 07",
      date: "2016 - 2018",
      desc: " Physical science stream + ICT",
      type: "edu",
      img: DS,
    },
    {
      title: "G.C.E. Ordinary Level Examination 2015",
      subTitle: "President's College, Maharagama",
      date: "2010 - 2015",
      desc: "",
      type: "edu",
      img: PCM,
    },
    {
      title: "Grade 5 Scholorship 2009",
      subTitle: "Homagama Maha Vidyala, Homagama",
      date: "2005 - 2009",
      desc: "",
      type: "edu",
      img: HMV,
    },
  ];

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#021f6a">
        {expDetails.map((expSection, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={expSection.date}
            iconStyle={{
              background: expSection.type === "edu" ? "#021f6a" : "#DCC825",
              color: "#fff",
            }}
            icon={expSection.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
          >
            <div className="badge">
              <img src={expSection.img} alt="img" />
            </div>
            <h4
              style={{ color: "#021f6a" }}
              className="vertical-timeline-element-title"
            >
              {expSection.title}
            </h4>
            <h3
              style={{ color: "#021f6a" }}
              className="vertical-timeline-element-title"
            >
              {expSection.subTitle}
            </h3>
            <p style={{ color: "gray", fontFamily: "monospace" }}>
              <b>{expSection.desc}</b>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
