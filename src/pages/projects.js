import React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import { Container, Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const ProjectsPage = () => {
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

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold", color: "primary.main" }}
        >
          My Projects
        </Typography>

        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {ProjectList.map((project) => (
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
                  image={project.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => <title>Projects | DeeWejkar</title>;
