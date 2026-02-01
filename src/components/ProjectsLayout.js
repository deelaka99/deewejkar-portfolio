import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectItem from "../components/ProjectItem";
import { Grid, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fetchProjects } from "../store/actions/projectsActions";

function ProjectsLayout() {
  const dispatch = useDispatch();
  const { projectList, projectLoading, error } = useSelector(
    (state) => state.projectsReducer,
  );

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Grid container spacing={4}>
        {projectList?.data?.map((project) => (
          <Grid
            item
            key={project.id}
            xs={12}
            sm={6}
            md={4}
            component={motion.div}
            variants={itemVariants}
          >
            <ProjectItem
              id={project.id}
              name={project.name}
              image={`${process.env.GATSBY_BACKEND_URL}${project?.image[0]?.url}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsLayout;
