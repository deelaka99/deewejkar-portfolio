import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";
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
import { fetchSpecialMoments } from "../store/actions/specialMomentsActions";

function SpecialMomentTimelineMobile() {
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
          display: { xs: "block", md: "none" },
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
          display: { xs: "block", md: "none" },
        }}
      >
        <Typography variant="h6" sx={{ color: "error.main" }}>
          Error loading moments: {error}
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
        {specialMomentsList?.data?.map((moment, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary">
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
                  src={`${process.env.GATSBY_BACKEND_URL}${moment?.image?.url}`}
                  alt="moment"
                  loading="lazy"
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
                  <Typography variant="body2">{moment.location}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, mt: 1 }}>
                    {moment.desc}
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default SpecialMomentTimelineMobile;
