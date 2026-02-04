import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Divider,
  Avatar,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import {
  Launch as LaunchIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Star as StarIcon,
} from "@mui/icons-material";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {/* Header Section */}
          <Box sx={{ mb: 8, textAlign: "center" }}>
            <Typography
              variant="h2"
              component={motion.h1}
              variants={itemVariants}
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" },
                background: "linear-gradient(45deg, #663399 30%, #bb86fc 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              component={motion.p}
              variants={itemVariants}
              sx={{
                color: "text.secondary",
                maxWidth: 800,
                mx: "auto",
                fontWeight: 400,
                px: 2,
              }}
            >
              Full Stack Software Engineer based in Colombo, Sri Lanka, with a
              passion for building intelligent, scalable, and impact-driven
              digital solutions.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Bio Section */}
            <Grid item xs={12} md={7}>
              <Box component={motion.div} variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, mb: 3, color: "primary.light" }}
                >
                  The Journey
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "text.primary",
                  }}
                >
                  I am a professional{" "}
                  <strong>Full Stack Software Engineer</strong> dedicated to
                  creating innovative <strong>React</strong> and{" "}
                  <strong>Node.js</strong> solutions. My technical expertise
                  lies at the intersection of web development and
                  <strong>AI/ML capabilities</strong>, where I strive to build
                  products that are not just functional, but visually stunning
                  and accessible to everyone.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "text.primary",
                  }}
                >
                  Based in the tech hub of <strong>Colombo, Sri Lanka</strong>,
                  I have spent years honing my skills in modern JavaScript
                  ecosystems. My approach combines rigorous engineering
                  principles with a deep understanding of{" "}
                  <strong>UI/UX Design Systems</strong> to ensure every product
                  I touch delivers an exceptional user experience and elevates
                  the brand it represents.
                </Typography>
              </Box>
            </Grid>

            {/* Quick Facts / Side Info */}
            <Grid item xs={12} md={5}>
              <Paper
                component={motion.div}
                variants={itemVariants}
                sx={{
                  p: 4,
                  bgcolor: "background.paper",
                  borderRadius: 4,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 3, color: "secondary.light" }}
                >
                  Quick Facts
                </Typography>
                <Stack spacing={3}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <WorkIcon color="primary" />
                    <Typography variant="body1">
                      Associate Software Engineer
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <SchoolIcon color="primary" />
                    <Typography variant="body1">
                      Specialization in Computing & AI
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <StarIcon color="primary" />
                    <Typography variant="body1">
                      Industry Mentor & Judge
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            {/* Mentorship & Judging Highlight */}
            <Grid item xs={12}>
              <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,0.1)" }} />
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{ mt: 2 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    textAlign: "center",
                    color: "primary.light",
                  }}
                >
                  Empowering the Next Generation
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 6 },
                    borderRadius: 4,
                    bgcolor: "rgba(102, 51, 153, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                      <Box sx={{ position: "relative", textAlign: "center" }}>
                        <Avatar
                          src="https://www.nsbm.ac.lk/wp-content/uploads/2021/08/NSBM-Logo-Website.png"
                          alt="NSBM Green University"
                          sx={{
                            width: 140,
                            height: 140,
                            mx: "auto",
                            p: 2,
                            bgcolor: "white",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 700, mb: 2, color: "secondary.main" }}
                      >
                        Femovate 2025: Mentor & Judge
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
                          fontSize: "1.05rem",
                        }}
                      >
                        In June 2025, I had the incredible honor of
                        participating in <strong>Femovate 2025</strong>, a
                        vibrant startup challenge organized by the FOSS
                        Community and Women In FOSS (WIF) at{" "}
                        <strong>NSBM Green University</strong>.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.8,
                          fontSize: "1.05rem",
                        }}
                      >
                        Representing the team from <strong>Knovik</strong>, I
                        served as a mentor and judge, providing industry
                        insights and interactive engagement to young women
                        pitching innovative business ideas with real-world
                        impact.
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<LaunchIcon />}
                        href="https://www.nsbm.ac.lk/femovate-2025-by-women-in-foss-at-nsbm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          mt: 1,
                          textTransform: "none",
                          fontWeight: 600,
                          borderRadius: 2,
                        }}
                      >
                        Read Event Coverage
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <Seo
    title="About Deelaka Kariyawasam | Full Stack Software Engineer"
    description="Professional background of Deelaka Kariyawasam, a Full Stack Software Engineer in Colombo. Expert in React, Node.js, and AI/ML with a heart for mentorship."
    pathname="/about"
  />
);
