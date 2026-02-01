import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "gatsby";
import { fetchProjects } from "../store/actions/projectsActions";

const FeaturedProjects = () => {
  const dispatch = useDispatch();
  const { projectList, projectLoading, error } = useSelector(
    (state) => state.projectsReducer,
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (projectLoading) {
    return (
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Loading projects...
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
          Error loading projects: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              sx={{
                fontWeight: "bold",
                background: "linear-gradient(45deg, #663399 30%, #bb86fc 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Featured Work
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/projects"
            endIcon={<ArrowForwardIcon />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            View All
          </Button>
        </Box>

        <Grid container spacing={5}>
          {projectList?.data?.slice(0, 3).map((project, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={project.id}
              component={motion.div}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.13,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <ProjectItem
                id={project.id}
                name={project.name}
                image={`${process.env.GATSBY_BACKEND_URL}${project?.image[0]?.url}`}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontWeight: 700,
              borderRadius: 3,
              px: 3,
              py: 1.2,
              borderColor: "#bb86fc",
              color: "#bb86fc",
              textTransform: "none",
              fontSize: "1.08rem",
              transition: "all 0.2s",
              "&:hover": {
                borderColor: "#663399",
                color: "#663399",
                background: "#f3eaff",
              },
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
