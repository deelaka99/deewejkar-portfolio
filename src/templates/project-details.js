import React from "react";
import Layout from "../components/Layout";
import ProjectDetail from "../components/ProjectDetail";
import Seo from "../components/SEO";

import { getImageUrl } from "../helpers/imageUrl";

const ProjectDetails = ({ pageContext }) => {
  const { slug } = pageContext;

  return (
    <Layout>
      <ProjectDetail slug={slug} />
    </Layout>
  );
};

export default ProjectDetails;

export const Head = ({ pageContext }) => {
  const { slug, projectData } = pageContext;

  // Helper function to capitalize each word
  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Generate SEO-friendly title and description
  const title = capitalizeWords(slug.replace(/-/g, " "));
  const description = `View detailed information about ${title} including technologies used, features, and live demo.`;

  const imageUrl = getImageUrl(projectData?.featured_image?.data?.url || projectData?.image?.data?.url);

  // Structured data for the project
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description: description,
    author: {
      "@type": "Person",
      name: "Deelaka Kariyawasam",
      jobTitle: "Full Stack Developer",
    },
    ...(imageUrl && { image: imageUrl }),
    url: `https://www.deelakakariyawasam.dev/projects/${slug}/`,
  };

  return (
    <>
      <Seo
        title={`${title} | Deelaka Kariyawasam`}
        description={description}
        pathname={`/projects/${slug}/`}
        image={imageUrl}
        article={true}
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
};
