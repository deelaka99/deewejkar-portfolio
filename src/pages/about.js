import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import {
  Launch as LaunchIcon,
  RecordVoiceOver as MentorIcon,
  EmojiEvents as JudgeIcon,
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
    hidden: { opacity: 0, y: 30 },
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
          {/* 1. Header Section */}
          <Box sx={{ mb: { xs: 8, md: 12 }, textAlign: "center" }}>
            <Typography
              variant="h2"
              component={motion.h1}
              variants={itemVariants}
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "4rem" },
                background: "linear-gradient(45deg, #663399 30%, #bb86fc 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beyond the Code
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
                lineHeight: 1.6,
              }}
            >
              I am Deelaka Kariyawasam, a Full Stack Software Engineer and Tech
              Community Leader based in Colombo, Sri Lanka.
            </Typography>
          </Box>

          {/* 2. Professional Journey Section */}
          <Grid container spacing={8} alignItems="center" sx={{ mb: 12 }}>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box component={motion.div} variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "text.primary",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  Engineering Digital Experiences
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "text.secondary",
                  }}
                >
                  My journey involves more than just writing code using{" "}
                  <strong>React</strong> and <strong>Node.js</strong>. It is
                  about crafting intelligent, scalable web solutions that solve
                  real-world problems. I specialize in integrating{" "}
                  <strong>AI/ML capabilities</strong> into modern web
                  architectures, ensuring applications are not only smart but
                  also accessible and lightning-fast.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    color: "text.secondary",
                    mb: 4,
                  }}
                >
                  Currently exploring the frontiers of software engineering, I
                  am passionate about sharing knowledge and empowering the next
                  generation of developers in Sri Lanka.
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, mb: 2, color: "secondary.light" }}
                  >
                    Core Strengths
                  </Typography>
                  <Grid container spacing={1}>
                    {[
                      "Full Stack Development",
                      "AI/ML Integration",
                      "React & Node.js Ecosystems",
                      "UI/UX Design Systems",
                      "Technical Leadership",
                      "Mentorship",
                    ].map((skill) => (
                      <Grid item key={skill}>
                        <Chip
                          label={skill}
                          sx={{
                            bgcolor: "rgba(102, 51, 153, 0.1)",
                            color: "secondary.light",
                            border: "1px solid rgba(102, 51, 153, 0.2)",
                            fontWeight: 500,
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{ position: "relative" }}
              >
                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: "100%",
                    height: "100%",
                    border: "2px solid #bb86fc",
                    borderRadius: 4,
                    zIndex: 0,
                    display: { xs: "none", md: "block" },
                  }}
                />
                <Box
                  component="img"
                  src="https://res.cloudinary.com/dp5vkrjof/image/upload/v1770385224/medium_SUSL_FOC_Batch_photo_day_2k24_3_7353129eb7.png"
                  alt="Deelaka Kariyawasam - Full Stack Software Engineer Professional Portrait"
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    filter: "grayscale(10%) contrast(105%)",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* 3. Community & Mentorship Section (Femovate) */}
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{ position: "relative" }}
              >
                <Box
                  component="div"
                  sx={{
                    position: "absolute",
                    bottom: -20,
                    left: -20,
                    width: "100%",
                    height: "100%",
                    border: "2px solid #03DAC6",
                    borderRadius: 4,
                    zIndex: 0,
                    display: { xs: "none", md: "block" },
                  }}
                />
                <Box
                  component="img"
                  src="https://res.cloudinary.com/dp5vkrjof/image/upload/v1770385844/Femovate_2025_1_8a20923aae.jpg"
                  alt="Deelaka Kariyawasam Mentoring at Femovate 2025"
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    filter: "grayscale(10%)",
                    transition: "all 0.5s ease",
                    "&:hover": {
                      filter: "grayscale(0%)",
                      transform: "scale(1.02)",
                    },
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box component={motion.div} variants={itemVariants}>
                <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                  <Chip
                    icon={<MentorIcon />}
                    label="Mentor"
                    color="secondary"
                    variant="outlined"
                  />
                  <Chip
                    icon={<JudgeIcon />}
                    label="Judge"
                    color="secondary"
                    variant="outlined"
                  />
                </Stack>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    color: "text.primary",
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  Empowering Innovation
                </Typography>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    bgcolor: "rgba(102, 51, 153, 0.05)",
                    borderLeft: "4px solid #bb86fc",
                    mb: 4,
                    borderRadius: "0 16px 16px 0",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 2, color: "secondary.main" }}
                  >
                    Femovate 2025 by Women in FOSS
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    Femovate 2025, a vibrant startup challenge organized by the
                    FOSS Community and Women In FOSS (WIF) of{" "}
                    <strong>NSBM Green University</strong>, took place on the
                    19th of June 2025. This unique event provided a platform for
                    undergraduate students—particularly young women—to pitch
                    innovative business ideas with real-world impact.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", lineHeight: 1.7 }}
                  >
                    I had the honor of representing <strong>Knovik</strong>{" "}
                    alongside my team, serving as mentors and judges. Our goal
                    was to provide industry insights and interactive engagement
                    to elevate the competition to a professional level.
                  </Typography>
                </Paper>
                <Button
                  variant="text"
                  color="secondary"
                  endIcon={<LaunchIcon />}
                  href="https://www.nsbm.ac.lk/femovate-2025-by-women-in-foss-at-nsbm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    fontSize: "1.1rem",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 0,
                    "&:hover": {
                      bgcolor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Read full event coverage
                </Button>
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
    description="Learn about Deelaka Kariyawasam, a Full Stack Software Engineer based in Colombo. Discover his journey, technical expertise, and contributions."
    pathname="/about/"
  />
);
