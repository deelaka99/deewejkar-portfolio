import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Languages from "../components/Languages";
import FeaturedProjects from "../components/FeaturedProjects";
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

export const Head = () => <title>Home | DeeWejkar</title>;
