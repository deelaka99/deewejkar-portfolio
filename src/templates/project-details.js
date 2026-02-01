import React from "react";
import Layout from "../components/Layout";
import ProjectDetail from "../components/ProjectDetail";

const ProjectDetails = ({ pageContext }) => {
  const { slug } = pageContext;

  return (
    <Layout>
      <ProjectDetail slug={slug} />
    </Layout>
  );
};

export default ProjectDetails;
