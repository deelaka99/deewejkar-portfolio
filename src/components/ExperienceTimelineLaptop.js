import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, Avatar, Paper } from "@mui/material";
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
import { fetchExperience } from "../store/actions/experiencesActions";

function ExperienceTimelineLaptop() {
  const dispatch = useDispatch();
  const { experienceList, experienceLoading, error } = useSelector(
    (state) => state.experiencesReducer,
  );

  useEffect(() => {
    dispatch(fetchExperience());
  }, [dispatch]);

  if (experienceLoading) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Loading experiences...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h6" sx={{ color: "error.main" }}>
          Error loading experiences: {error}
        </Typography>
      </Box>
    );
  }

  return (
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
      {experienceList?.data
        ?.sort((a, b) => a.order - b.order)
        ?.map((exp, index) => (
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
                    src={`${process.env.GATSBY_BACKEND_URL}${exp?.image?.url}`}
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
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: "bold",
                        color: "secondary.light",
                        mb: 0,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {exp.title}
                    </Typography>
                    {exp.subtitle && (
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: "text.secondary",
                          fontWeight: "bold",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {exp.subtitle}
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
  );
}

export default ExperienceTimelineLaptop;
