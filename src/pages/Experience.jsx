import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2009"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Homagama Maha Vidyala, Homagama
          </h3>
          <p>Grade 5 Scholorship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            President's College, Maharagama
          </h3>
          <p>G.C.E. Ordinary Level Examination</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            D.S. Senanayake College, Colombo 07 
          </h3>
          <p>G.C.E. Advanced Level Examination (Physical science stream + ICT)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#DCC825", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            OrelIT Coperation, Nawinna, Maharagama 
          </h3>
          <p>Worked as a <b>Associate Image Processor</b></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            ESOFT Metro Campus, Nugegoda 
          </h3>
          <p>Diploma in Information Technology</p>
          <p>Diploma in English</p>
        </VerticalTimelineElement>         
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            The Open University of Sri Lanka 
          </h3>
          <h4 className="vertical-timeline-element-title">
            Faculty of Engineering Technology 
          </h4>
          <p>Undergraduate of <b>Bacherlor of Software Engineering (Honurs) Degree Program</b></p>
        </VerticalTimelineElement>         
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#DCC825", color: "#fff" }}
          icon={<WorkIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            ScafLanka Solutions 
          </h3>
          <p>Worked as a <b>Junior Graphic Designer</b></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            Sabaragamuwa University of Sri Lanka 
          </h3>
          <h4 className="vertical-timeline-element-title">
            Faculty of Computing 
          </h4>
          <p>Undergraduate of <b>Bacherlor of Science in Computing & Information Systems (Special) Degree Program</b></p>
        </VerticalTimelineElement> 
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
