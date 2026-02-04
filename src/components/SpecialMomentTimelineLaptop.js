import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, Paper } from "@mui/material";
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
import { fetchSpecialMoments } from "../store/actions/specialMomentsActions";
import { getImageUrl } from "../helpers/imageUrl";

function SpecialMomentTimelineLaptop() {
  const dispatch = useDispatch();
  const { specialMomentsList, specialMomentsLoading, error } = useSelector(
    (state) => state.specialMomentsReducer,
  );

  useEffect(() => {
    dispatch(fetchSpecialMoments());
  }, [dispatch]);

  if (specialMomentsLoading) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Loading moments...
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
          Error loading moments: {error}
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
        display: { xs: "none", md: "block" },
      }}
    >
      {specialMomentsList?.data?.map((moment, index) => (
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
            <TimelineConnector sx={{ bgcolor: "rgba(102, 51, 153, 0.3)" }} />
            <TimelineDot
              color="primary"
              sx={{ boxShadow: "0 0 10px rgba(102, 51, 153, 0.3)" }}
            >
              {moment.type === "edu" ? <SchoolIcon /> : <WorkIcon />}
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "rgba(102, 51, 153, 0.3)" }} />
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
                src={getImageUrl(moment?.image?.url)}
                alt="moment"
                loading="lazy"
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
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {moment.location}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500, mt: 1 }}>
                  {moment.desc}
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default SpecialMomentTimelineLaptop;
