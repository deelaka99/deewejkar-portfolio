import React from "react";
import Layout from "../components/Layout";
import {
  Container,
  Typography,
  Box,
  Chip,
  Stack,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";
import { ProjectList } from "../helpers/ProjectList";
import { motion } from "framer-motion";

import { graphql } from "gatsby";

const ProjectDetails = ({ pageContext, data }) => {
  const { id } = pageContext;
  const project = ProjectList.find((p) => p.id === id);

  if (!project)
    return (
      <Layout>
        <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h4">Project not found</Typography>
        </Container>
      </Layout>
    );

  // Split skills string into array
  const skillsArray = project.skills
    ? project.skills.split(",").map((s) => s.trim())
    : [];

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
          sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
        >
          {project.name}
        </Typography>

        <Paper
          elevation={4}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          sx={{
            overflow: "hidden",
            borderRadius: 2,
            mb: 4,
            maxHeight: 500,
            display: "flex",
            justifyContent: "center",
            bgcolor: "background.default",
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.name}
            sx={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Paper>

        <Grid
          container
          spacing={4}
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "secondary.light", fontWeight: "bold" }}
            >
              Overview
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                mb: 4,
                lineHeight: 1.8,
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {project.desc}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "rgba(102, 51, 153, 0.05)",
                border: "1px solid rgba(102, 51, 153, 0.2)",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "secondary.light", fontWeight: "bold" }}
              >
                Technologies
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{ mb: 4, rowGap: 1 }}
              >
                {skillsArray.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Stack>

              <Stack spacing={2}>
                {project.github && (
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Button>
                )}
                {project.activelink && (
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<LaunchIcon />}
                    href={project.activelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                  >
                    Live Demo
                  </Button>
                )}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProjectDetails;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
