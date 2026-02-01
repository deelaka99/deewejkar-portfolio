import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { Container, Typography, Box } from "@mui/material";
import ProjectsLayout from "../components/ProjectsLayout";

const ProjectsPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold", color: "#fff", letterSpacing: 1.5 }}
        >
          <Box
            component="span"
            sx={{ borderBottom: "4px solid #bb86fc", pb: 1 }}
          >
            My Projects
          </Box>
        </Typography>
        <ProjectsLayout />
      </Container>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => (
  <Seo
    title="Web & Mobile App Projects | Deelaka Kariyawasam"
    description="Explore my portfolio of web applications, mobile apps, and software projects. Built with React, Node.js, Firebase, and modern web technologies."
    pathname="/projects/"
  />
);
