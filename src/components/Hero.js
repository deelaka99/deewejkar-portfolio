import React from "react";
import { Box, Typography, Button, Stack, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import ProfileDP from "../images/dp2.png";

const Hero = () => {
  // Floating animation for the image
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          <Grid item xs={12} md={7}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Typography
                variant="overline"
                component={motion.span}
                variants={itemVariants}
                sx={{
                  color: "secondary.main",
                  fontWeight: "bold",
                  letterSpacing: 3,
                  mb: 2,
                  display: "block",
                }}
              >
                SOFTWARE ENGINEER
              </Typography>
              <Typography
                variant="h1"
                component={motion.h1}
                variants={itemVariants}
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm <br />
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(45deg, #663399 30%, #bb86fc 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Deelaka Wejith
                </Box>
              </Typography>
              <Typography
                variant="h5"
                component={motion.p}
                variants={itemVariants}
                color="text.secondary"
                sx={{
                  mb: 4,
                  maxWidth: 600,
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Crafting exceptional digital experiences with a focus on
                accessibility, performance, and modern aesthetics.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 4 }}
                component={motion.div}
                variants={itemVariants}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="mailto:123deelaka@gmail.com"
                  sx={{
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    fontWeight: "bold",
                    boxShadow: "0 8px 16px rgba(102, 51, 153, 0.3)",
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="https://github.com/deelaka99"
                  target="_blank"
                  sx={{
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    borderWidth: 2,
                    "&:hover": { borderWidth: 2 },
                  }}
                  startIcon={<GitHubIcon />}
                >
                  Github
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={3}
                sx={{ mt: 6 }}
                component={motion.div}
                variants={itemVariants}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0077b5" }}
                  href="https://www.linkedin.com/in/deelaka-wejith-kariyawasam-7a9bb0213/"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <LinkedInIcon fontSize="large" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0037ff" }}
                  href="https://www.facebook.com/deelaka.kariyawasam?mibextid=wwXIfr&mibextid=wwXIfr"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <FacebookIcon fontSize="large" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#c300ff" }}
                  href="https://www.instagram.com/deelaka_wk?igsh=NXd5b3UweWRkd2Vh&utm_source=qr"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <InstagramIcon fontSize="large" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#FF0000" }}
                  href="https://www.youtube.com/@deelakawejithkariyawasam"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <YouTubeIcon fontSize="large" />
                </motion.a>
              </Stack>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Background blob/glow */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background:
                  "radial-gradient(circle, rgba(102, 51, 153, 0.4) 0%, rgba(102, 51, 153, 0) 70%)",
                zIndex: -1,
                transform: "scale(1.2)",
              }}
            />
            <motion.div
              animate={floatAnimation}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={ProfileDP}
                alt="Deelaka Kariyawasam"
                sx={{
                  width: { xs: 280, md: 400 },
                  height: { xs: 280, md: 400 },
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", // Organic shape
                  objectFit: "cover",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  border: "2px solid rgba(255,255,255,0.1)",
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
