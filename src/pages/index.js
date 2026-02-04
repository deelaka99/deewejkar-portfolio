import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Languages from "../components/Languages";
import FeaturedProjects from "../components/FeaturedProjects";
import Seo from "../components/SEO";
import { Box } from "@mui/material";

const IndexPage = () => {
  return (
    <Layout>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", gap: { xs: 4, md: 8 } }}
      >
        <Hero />
        <Languages />
        <FeaturedProjects />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Deelaka Kariyawasam - Full Stack Software Engineer | Portfolio"
    description="Full Stack Software Engineer specializing in React, Node.js, and mobile development. Explore my portfolio of web applications, mobile apps, and software projects."
  />
);
