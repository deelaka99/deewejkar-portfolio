import React from "react";
import Layout from "../components/Layout";
import ProjectDetail from "../components/ProjectDetail";

const ProjectDetails = ({ pageContext }) => {
  const { id } = pageContext;

  return (
    <Layout>
      <ProjectDetail id={id} />
    </Layout>
  );
};

export default ProjectDetails;
