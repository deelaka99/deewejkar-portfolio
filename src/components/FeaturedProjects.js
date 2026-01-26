import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "gatsby";

const FeaturedProjects = () => {
  // Select top 3 projects (or specific ones by ID if preferred)
  const featuredProjects = ProjectList.slice(0, 3);

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
              variant="overline"
              component={motion.span}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                color: "secondary.main",
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              PORTFOLIO
            </Typography>
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

        <Grid container spacing={4}>
          {featuredProjects.map((project, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={project.id}
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectItem
                id={project.id}
                name={project.name}
                image={project.image}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            mt: 4,
          }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProjects;
