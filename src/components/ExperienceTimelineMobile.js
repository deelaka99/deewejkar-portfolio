import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, Avatar } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { School as SchoolIcon, Work as WorkIcon } from "@mui/icons-material";
import { fetchExperience } from "../store/actions/experiencesActions";

function ExperienceTimelineMobile() {
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
          py: 4,
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
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
          py: 4,
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography variant="body1" sx={{ color: "error.main" }}>
          Error loading experiences: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experienceList?.data
          ?.sort((a, b) => a.order - b.order)
          ?.map((exp, index) => (
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
                      src={`${process.env.GATSBY_BACKEND_URL}${exp?.image?.url}`}
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
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {exp.title}
                    </Typography>
                  </Box>
                  {exp.subtitle && (
                    <Typography variant="caption" display="block">
                      {exp.subtitle}
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
  );
}

export default ExperienceTimelineMobile;
