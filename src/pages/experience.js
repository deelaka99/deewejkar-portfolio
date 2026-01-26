import React from "react";
import Layout from "../components/Layout";
import { Typography, Container, Box, Avatar, Paper } from "@mui/material";
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
import { School as SchoolIcon, Work as WorkIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

// Import images
import DS from "../images/logos/ds.png";
import PCM from "../images/logos/pcm.png";
import HMV from "../images/logos/hmv.png";
import OIT from "../images/logos/oit.png";
import SCAF from "../images/logos/scaf.png";
import OUSL from "../images/logos/ousl.png";
import SUSL from "../images/logos/susl.png";
import ESOFT from "../images/logos/esoft.png";
import KNOVIK from "../images/logos/knovik.png";

const ExperiencePage = () => {
  const expDetails = [
    {
      title: "Knovik (Pvt) Ltd",
      subTitle: "",
      date: "2025 Oct - Present",
      desc: "Associate Software Engineer - R&D Lead",
      type: "work",
      img: KNOVIK,
    },
    {
      title: "Knovik (Pvt) Ltd",
      subTitle: "",
      date: "2024 Aug - 2025 Oct",
      desc: "Associate Software Engineer",
      type: "work",
      img: KNOVIK,
    },
    {
      title: "Knovik (Pvt) Ltd",
      subTitle: "",
      date: "2024 Feb - 2024 Aug",
      desc: "Trainee Associate Software Engineer",
      type: "work",
      img: KNOVIK,
    },
    {
      title: "Faculty of Computing",
      subTitle: "Sabaragamuwa University of Sri Lanka",
      date: "2020 - 2025",
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
      desc: "Person assured Diploma in Information Technology & Diploma in English",
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
            Experience
          </Box>
        </Typography>

        <Timeline
          position="alternate"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            // For mobile responsive
            display: { xs: "none", md: "block" },
          }}
        >
          {expDetails.map((exp, index) => (
            <TimelineItem
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {exp.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector
                  sx={{ bgcolor: "rgba(102, 51, 153, 0.3)" }}
                />
                <TimelineDot
                  color="primary"
                  sx={{ boxShadow: "0 0 10px rgba(102, 51, 153, 0.5)" }}
                >
                  {exp.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
                </TimelineDot>
                <TimelineConnector
                  sx={{ bgcolor: "rgba(102, 51, 153, 0.3)" }}
                />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Paper
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  }}
                  sx={{
                    p: 3,
                    bgcolor: "background.paper",
                    borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      src={exp.img}
                      alt={exp.title}
                      sx={{
                        mr: 2,
                        width: 50,
                        height: 50,
                        bgcolor: "transparent",
                        borderRadius: 2,
                      }}
                      imgProps={{
                        style: { objectFit: "contain" },
                        loading: "lazy",
                      }}
                      variant="square"
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        component="p"
                        sx={{
                          fontWeight: "bold",
                          color: "secondary.light",
                          mb: 0,
                        }}
                      >
                        {exp.title}
                      </Typography>
                      {exp.subTitle && (
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "text.secondary", fontWeight: "bold" }}
                        >
                          {exp.subTitle}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}
                  >
                    {exp.desc}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>

        {/* Mobile View Timeline (simplified) */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {expDetails.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    {exp.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      display="block"
                      color="text.secondary"
                    >
                      {exp.date}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1,
                        mt: 1,
                      }}
                    >
                      <Avatar
                        src={exp.img}
                        alt={exp.title}
                        sx={{
                          width: 30,
                          height: 30,
                          mr: 1,
                          bgcolor: "transparent",
                          borderRadius: 2,
                        }}
                        imgProps={{
                          style: { objectFit: "contain" },
                          loading: "lazy",
                        }}
                        variant="square"
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {exp.title}
                      </Typography>
                    </Box>
                    {exp.subTitle && (
                      <Typography variant="caption" display="block">
                        {exp.subTitle}
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {exp.desc}
                    </Typography>
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

export default ExperiencePage;

export const Head = () => <title>Experience | DeeWejkar</title>;
