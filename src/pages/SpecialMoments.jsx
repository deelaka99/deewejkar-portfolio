import React, { useEffect } from "react";
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
import Img24 from "../assets/specialMoments/2024_02_08.png";
import Img25 from "../assets/specialMoments/2024_02_12_1.jpg";
import Img26 from "../assets/specialMoments/2024_02_12_2.jpg";
import Img27 from "../assets/specialMoments/2024_02_14.jpg";

import "../styles/SpecialMoments.css";

function Experience() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var spMomentDetails = [
    {
      title: "Working on the first project",
      location: "Knovik (Pvt) Ltd",
      date: "February 2024",
      img: Img27,
      type: "work",
      online: false,
    },
    {
      title: "With the Devlopment team",
      location: "Knovik (Pvt) Ltd",
      date: "February 2024",
      img: Img26,
      type: "work",
      online: false,
    },
    {
      title: "1st Day as a SE Intern",
      location: "Knovik (Pvt) Ltd",
      date: "February 2024",
      img: Img25,
      type: "work",
      online: false,
    },
    {
      title: (
        <span>
          Onboarded as a <br />
          Trainee Associate Software Engineer
        </span>
      ),
      location: "Knovik (Pvt) Ltd",
      date: "February 2024",
      img: Img24,
      type: "work",
      online: true,
    },
    {
      title: "Mind blowing Vega Electric Car",
      location: "Vega Innovations, Trace Expertcity, Maradana.",
      date: "October 2023",
      img: Img22,
      type: "edu",
      online: false,
    },
    {
      title: "With my winning team of Innova 2k23",
      location: "Faculty of Management Studies, SUSL.",
      date: "September 2023",
      img: Img21,
      type: "edu",
      online: false,
    },
    {
      title: "Award ceremony of Innova 2k23",
      location: "Faculty of Management Studies, SUSL.",
      date: "September 2023",
      img: Img20,
      type: "edu",
      online: false,
    },
    {
      title: "3rd Place of IT category of Innova 2k23",
      location: "Faculty of Management Studies, SUSL.",
      date: "September 2023",
      img: Img19,
      type: "edu",
      online: false,
    },
    {
      title: "JumborIEEE 2k23",
      location: "Uva Wellassa University of Sri Lanka.",
      date: "September 2023",
      img: Img18,
      type: "edu",
      online: false,
    },
    {
      title: "IEEE Nenasa 2k23 | Mahiyanaganaya School Visit",
      location: "B/ Kandekapu Ulpatha Maha Vidyalaya",
      date: "May 2023",
      img: Img17,
      type: "edu",
      online: false,
    },
    {
      title: "Manager of Media Division of SedsSabra",
      location: "AGM of SedsSabra 2023.",
      date: "April 2023",
      img: Img16,
      type: "edu",
      online: true,
    },
    {
      title: "InfoBash Cricket Tourenment",
      location: "Hunduwa Ground, Sabaragamuwa University of Sri Lanka.",
      date: "January 2023",
      img: Img15,
      type: "edu",
      online: false,
    },
    {
      title: "Faculty of Computing's Opening Ceremony",
      location: "Faculty of Computing, Sabaragamuwa University of Sri Lanka.",
      date: "January 2023",
      img: Img14,
      type: "edu",
      online: false,
    },
    {
      title: "Volunteers of the Month",
      location: "IEEE Student branch of SUSL",
      date: "December 2022",
      img: Img13,
      type: "edu",
      online: true,
    },
    {
      title: "The Semi-Finalists of SpaceHack 2021",
      location: "Organized by SedsSabra.",
      date: "September 2021",
      img: Img12,
      type: "edu",
      online: true,
    },
    {
      title: "Student Registration Day of SUSL",
      location: "Sabaragamuwa University of Sri Lanka.",
      date: "September 2020",
      img: Img23,
      type: "edu",
      online: false,
    },
    {
      title: "End Examination Day at OUSL",
      location: "The Libaray of the Open University of Sri Lanka.",
      date: "March 2020",
      img: Img11,
      type: "edu",
      online: false,
    },
    {
      title: "Final Day as a DS Student",
      location: "D.S. Senanayake College, Colombo 07.",
      date: "February 2020",
      img: Img10,
      type: "edu",
      online: false,
    },
    {
      title: "With Open Uni friends",
      location: "Weli Park, Nawala, Nugegoda.",
      date: "February 2020",
      img: Img9,
      type: "edu",
      online: false,
    },
    {
      title: "School Leavers with ICT madam",
      location: "D.S. Senanayake College, Colombo 07.",
      date: "February 2019",
      img: Img8,
      type: "edu",
      online: false,
    },
    {
      title: "A/L Results Realesed Day",
      location: "D.S. Senanayake College, Colombo 07.",
      date: "January 2019",
      img: Img7,
      type: "edu",
      online: false,
    },
    {
      title: "Final day at OIT",
      location: "Head office, OrelIT, Nawinna, Maharagama.",
      date: "January 2019",
      img: Img6,
      type: "work",
      online: false,
    },
    {
      title: "Training period of OIT",
      location: "Head office, OrelIT, Nawinna, Maharagama.",
      date: "December 2018",
      img: Img5,
      type: "work",
      online: false,
    },
    {
      title: "Final day of the A/L examination",
      location: "D.S. Senanayake College, Colombo 07.",
      date: "August 2018",
      img: Img4,
      type: "edu",
      online: false,
    },
    {
      title: "Senani Educational Exibition 2017",
      location: "D.S. Senanayake College, Colombo 07.",
      date: "February 2017",
      img: Img3,
      type: "edu",
      online: false,
    },
    {
      title: "Annual Prize Giving Ceremony 2015",
      location: "Youth Center, Maharagama.",
      date: "October 2016",
      img: Img2,
      type: "edu",
      online: false,
    },
    {
      title: "After the End of O/L examination",
      location: "President's College, Maharagama.",
      date: "December 2015",
      img: Img1,
      type: "edu",
      online: false,
    },
  ];

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#021f6a">
        {spMomentDetails.map((moment, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={moment.date}
            iconStyle={{
              background: moment.type === "edu" ? "#021f6a" : "#DCC825",
              color: "#fff",
            }}
            icon={moment.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
          >
            <div className="imageHolder">
              <img src={moment.img} alt="momentImg" />
            </div>
            <h3 className="vertical-timeline-element-title">{moment.title}</h3>
            <p>
              {moment.online ? (
                moment.location
              ) : (
                <span>
                  <LocationIcon /> {moment.location}
                </span>
              )}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
