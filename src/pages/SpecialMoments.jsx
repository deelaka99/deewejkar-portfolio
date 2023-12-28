import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import LocationIcon from "@mui/icons-material/LocationOn";

import Img1 from "../assets/specialMoments/2015.jpg";
import Img2 from "../assets/specialMoments/2016_10_16.jpg";
import Img3 from "../assets/specialMoments/2017_02_19.jpg";
import Img4 from "../assets/specialMoments/2018_8_28.jpg";
import Img5 from "../assets/specialMoments/2018_12_21.jpg";
import Img6 from "../assets/specialMoments/2019_01_01.jpg";
import Img7 from "../assets/specialMoments/2019_01_02.jpg";
import Img8 from "../assets/specialMoments/2019_02_23.jpg";
import Img9 from "../assets/specialMoments/2020_01_23.jpg";
import Img10 from "../assets/specialMoments/2020_02_11.jpg";
import Img11 from "../assets/specialMoments/2020_03_14.jpg";
import Img12 from "../assets/specialMoments/2021_09_21.jpg";
import Img13 from "../assets/specialMoments/2022-12-1.jpg";
import Img14 from "../assets/specialMoments/2023_01_13.jpg";
import Img15 from "../assets/specialMoments/2023_01_22_2.jpg";
import Img16 from "../assets/specialMoments/2023_04_10.jpg";
import Img17 from "../assets/specialMoments/2023_05_04_1.jpg";
import Img18 from "../assets/specialMoments/2023_09_11_3.jpg";
import Img19 from "../assets/specialMoments/2023_09_20_1.jpg";
import Img20 from "../assets/specialMoments/2023_09_20_2.jpg";
import Img21 from "../assets/specialMoments/2023_09_20.jpg";
import Img22 from "../assets/specialMoments/2023_10_13.jpg";
import Img23 from "../assets/specialMoments/2020_09_03.jpg";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#021f6a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img22} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Mind blowing Vega Electric Car
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Vega Innovations, Trace Expertcity, Maradana.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img21} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            With my winning team of Innova 2k23
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Faculty of Management Studies, SUSL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img20} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Award ceremony of Innova 2k23
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Faculty of Management Studies, SUSL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img19} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            3rd Place of IT category of Innova 2k23
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Faculty of Management Studies, SUSL.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img18} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            JumborIEEE 2k23
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Uva Wellassa University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img17} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            IEEE Nenasa 2k23 | Mahiyanaganaya School Visit
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            B/ Kandekapu Ulpatha Maha Vidyalaya
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img16} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Manager of Media Division of SedsSabra
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            AGM of SedsSabra 2023.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img15} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            InfoBash Cricket Tourenment
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Hunduwa Ground, Sabaragamuwa University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2023"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img14} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Faculty of Computing's Opening Ceremony
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Faculty of Computing, Sabaragamuwa University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2022"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img13} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Volunteers of the Month
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            IEEE Student branch of SUSL
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2021"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img12} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            The Semi-Finalists of SpaceHack 2021
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            Organized by SedsSabra.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2020"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img23} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Student Registration Day of SUSL
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Sabaragamuwa University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2020"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img11} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            End Examination Day at OUSL
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            The Libaray of the Open University of Sri Lanka.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2020"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img10} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Final Day as a DS Student
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            D.S. Senanayake College, Colombo 07.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2020"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img9} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            With Open Uni friends
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Weli Park, Nawala, Nugegoda.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2019"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img8} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            School Leavers with ICT madam
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            D.S. Senanayake College, Colombo 07.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2019"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img7} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            A/L Results Realesed Day
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            D.S. Senanayake College, Colombo 07.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2019"
          iconStyle={{ background: "#DCC825", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img6} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Final day at OIT
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Head office, OrelIT, Nawinna, Maharagama.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2018"
          iconStyle={{ background: "#DCC825", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img5} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Training period of OIT
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Head office, OrelIT, Nawinna, Maharagama.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2018"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img4} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Final day of the A/L examination
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            D.S. Senanayake College, Colombo 07.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="February 2017"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img3} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Senani Educational Exibition 2017
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            D.S. Senanayake College, Colombo 07.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2016"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img2} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            Annual Prize Giving Ceremony 2015
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            Youth Center, Maharagama.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2015"
          iconStyle={{ background: "#021f6a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <img style={{ borderRadius: "5px" }} src={Img1} alt="profileDp" />
          <h3
            style={{ color: "#021f6a" }}
            className="vertical-timeline-element-title"
          >
            After the End of O/L examination
          </h3>
          <p style={{ color: "gray", fontFamily: "monospace" }}>
            <LocationIcon />
            President's College, Maharagama.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
