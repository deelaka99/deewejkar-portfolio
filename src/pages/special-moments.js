import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import SpecialMomentTimelineLaptop from "../components/SpecialMomentTimelineLaptop";
import SpecialMomentTimelineMobile from "../components/SpecialMomentTimelineMobile";

const SpecialMomentsPage = () => {
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
            Special Moments
          </Box>
        </Typography>

        {/* Desktop View */}
        <SpecialMomentTimelineLaptop />
        {/* Mobile View */}
        <SpecialMomentTimelineMobile />
      </Container>
    </Layout>
  );
};

export default SpecialMomentsPage;

export const Head = () => (
  <Seo
    title="Special Moments & Achievements | Deelaka Kariyawasam"
    description="Explore the special moments, achievements, professional journey and milestones of Deelaka Kariyawasam."
    pathname="/special-moments/"
  />
);
