import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  Chip,
  Stack,
  Button,
  Paper,
  Grid,
  CircularProgress,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
  Draw as FigmaIcon,
  Android as AppIcon,
  Launch as LaunchIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import LazyImage from "../components/LazyImage";
import { fetchProjects } from "../store/actions/projectsActions";
import { getImageUrl } from "../helpers/imageUrl";

import slugify from "../helpers/slugify";

function ProjectDetail({ slug }) {
  const dispatch = useDispatch();
  const { projectList, projectLoading, error } = useSelector(
    (state) => state.projectsReducer,
  );

  useEffect(() => {
    if (!projectList?.data?.length && !projectLoading) {
      dispatch(fetchProjects());
    }
  }, [dispatch, projectList, projectLoading]);

  const project = projectList?.data?.find((p) => slugify(p.name) === slug);

  if (projectLoading) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2, color: "text.secondary" }}>
          Loading project...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "error.main" }}>
          Error loading project: {error}
        </Typography>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4">Project not found</Typography>
      </Container>
    );
  }

  return (
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
          bgcolor: "background.default",
        }}
      >
        <LazyImage
          src={getImageUrl(project?.featured_image[0]?.url)}
          alt={project.name}
          height={500}
          width="100%"
          objectFit="contain"
          borderRadius={2}
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
              {project?.skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill?.name}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              ))}
            </Stack>

            <Stack spacing={2}>
              {project.githubLink && (
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              )}
              {project.figmaLink && (
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<FigmaIcon />}
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </Button>
              )}
              {project.youtubeLink && (
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<YouTubeIcon />}
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
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
              {project.appLink && (
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<AppIcon />}
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="secondary"
                >
                  Download App
                </Button>
              )}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProjectDetail;
