import React from "react";
import { Link } from "gatsby";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

// Create a motion component for the Card
const MotionCard = motion(Card);

import slugify from "../helpers/slugify";

const ProjectItem = ({ image, name }) => {
  const slug = slugify(name);

  return (
    <MotionCard
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
      }}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
    >
      <CardActionArea
        component={Link}
        to={`/projects/${slug}`}
        sx={{ flexGrow: 1 }}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <LazyImage
            src={image}
            alt={name}
            height={200}
            width="100%"
            objectFit="cover"
            sx={{
              transition: "transform 0.5s ease",
            }}
          />
          {/* Hover Overlay */}
          <Box
            component={motion.div}
            variants={{
              hover: { opacity: 1, y: 0 },
            }}
            initial={{ opacity: 0, y: 20 }}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(102, 51, 153, 0.6)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              View Project
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ p: 2.5 }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "primary.light",
              mb: 0,
              textAlign: "center",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MotionCard>
  );
};

export default ProjectItem;
