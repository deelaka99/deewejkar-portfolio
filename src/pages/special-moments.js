import React from "react";
import Layout from "../components/Layout";
import { Typography, Container, Box, Paper } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import {
  School as SchoolIcon,
  Work as WorkIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Import images
import Img1 from "../images/specialMoments/2015.jpg";
import Img2 from "../images/specialMoments/2016_10_16.jpg";
import Img3 from "../images/specialMoments/2017_02_19.jpg";
import Img4 from "../images/specialMoments/2018_8_28.jpg";
import Img5 from "../images/specialMoments/2018_12_21.jpg";
import Img6 from "../images/specialMoments/2019_01_01.jpg";
import Img7 from "../images/specialMoments/2019_01_02.jpg";
import Img8 from "../images/specialMoments/2019_02_23.jpg";
import Img9 from "../images/specialMoments/2020_01_23.jpg";
import Img10 from "../images/specialMoments/2020_02_11.jpg";
import Img11 from "../images/specialMoments/2020_03_14.jpg";
import Img12 from "../images/specialMoments/2021_09_21.jpg";
import Img13 from "../images/specialMoments/2022-12-1.jpg";
import Img14 from "../images/specialMoments/2023_01_13.jpg";
import Img15 from "../images/specialMoments/2023_01_22_2.jpg";
import Img16 from "../images/specialMoments/2023_04_10.jpg";
import Img17 from "../images/specialMoments/2023_05_04_1.jpg";
import Img18 from "../images/specialMoments/2023_09_11_3.jpg";
import Img19 from "../images/specialMoments/2023_09_20_1.jpg";
import Img20 from "../images/specialMoments/2023_09_20_2.jpg";
import Img21 from "../images/specialMoments/2023_09_20.jpg";
import Img22 from "../images/specialMoments/2023_10_13.jpg";
import Img23 from "../images/specialMoments/2020_09_03.jpg";
import Img24 from "../images/specialMoments/2024_02_08.png";
import Img25 from "../images/specialMoments/2024_02_12_1.jpg";
import Img26 from "../images/specialMoments/2024_02_12_2.jpg";
import Img27 from "../images/specialMoments/2024_02_14.jpg";

const SpecialMomentsPage = () => {
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
      title: "Onboarded as a Trainee Associate Software Engineer",
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
    <Layout>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component={motion.h1}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold", color: "#fff", letterSpacing: 1.5 }}
        >
          <Box
            component="span"
            sx={{ borderBottom: "4px solid #bb86fc", pb: 1 }}
          >
            Special Moments
          </Box>
        </Typography>

        {/* Desktop View */}
        <Timeline
          position="alternate"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            display: { xs: "none", md: "block" },
          }}
        >
          {spMomentDetails.map((moment, index) => (
            <TimelineItem
              key={index}
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {moment.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{ bgcolor: "rgba(102, 51, 153, 0.3)" }}
                />
                <TimelineDot
                  color="primary"
                  sx={{ boxShadow: "0 0 10px rgba(102, 51, 153, 0.3)" }}
                >
                  {moment.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
                </TimelineDot>
                <TimelineConnector
                  sx={{ bgcolor: "rgba(102, 51, 153, 0.3)" }}
                />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper
                  component={motion.div}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
                  }}
                  sx={{
                    bgcolor: "background.paper",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    component="img"
                    src={moment.img}
                    alt="moment"
                    sx={{ width: "100%", height: 250, objectFit: "cover" }}
                  />
                  <Box sx={{ p: 2.5 }}>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: "bold",
                        color: "secondary.light",
                        mb: 1,
                      }}
                    >
                      {moment.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.secondary",
                      }}
                    >
                      <LocationIcon fontSize="small" sx={{ mr: 0.5 }} />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {moment.location}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Mobile View */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {spMomentDetails.map((moment, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot
                    color={moment.type === "edu" ? "primary" : "secondary"}
                  >
                    {moment.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      component="img"
                      src={moment.img}
                      alt="moment"
                      sx={{ width: "100%", height: 150, objectFit: "cover" }}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                      >
                        {moment.date}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ fontWeight: "bold", color: "primary.light" }}
                      >
                        {moment.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mt: 1,
                          color: "text.secondary",
                        }}
                      >
                        <LocationIcon fontSize="small" sx={{ mr: 0.5 }} />
                        <Typography variant="body2">
                          {moment.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Layout>
  );
};

export default SpecialMomentsPage;

export const Head = () => <title>Special Moments | DeeWejkar</title>;
