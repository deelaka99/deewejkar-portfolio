import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import ExperienceTimelineLaptop from "../components/ExperienceTimelineLaptop";
import ExperienceTimelineMobile from "../components/ExperienceTimelineMobile";

const ExperiencePage = () => {
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
          sx={{ mb: 6, fontWeight: "bold", color: "#fff", letterSpacing: 1.5 }}
        >
          <Box
            component="span"
            sx={{ borderBottom: "4px solid #bb86fc", pb: 1 }}
          >
            Experience
          </Box>
        </Typography>
        
        {/* Laptop View Timeline */}
        <ExperienceTimelineLaptop />
        {/* Mobile View Timeline */}
        <ExperienceTimelineMobile />
      </Container>
    </Layout>
  );
};

export default ExperiencePage;

export const Head = () => (
  <Seo
    title="Experience & Education | Deelaka Kariyawasam"
    description="Professional experience and educational background of Deelaka Kariyawasam - Associate Software Engineer with expertise in full-stack development."
    pathname="/experience/"
  />
);
