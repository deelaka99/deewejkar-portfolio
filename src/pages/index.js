import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Languages from "../components/Languages";
import FeaturedProjects from "../components/FeaturedProjects";
import Articles from "../components/Articles";
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
        <Articles />
      </Box>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo
    title="Deelaka Kariyawasam - Full Stack Software Engineer | Portfolio"
    description="Full Stack Software Engineer based in Colombo, Sri Lanka. Expert in React, Node.js, and mobile apps. Explore my projects and digital solutions."
  />
);
