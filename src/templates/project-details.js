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

  // Robustly extract image URL from projectData
  const getRawImageUrl = (field) => {
    if (!field) return null;
    // Handle array of images (common in the UI components)
    if (Array.isArray(field) && field.length > 0) return field[0].url;
    // Handle Strapi v4 nested structure: { data: { attributes: { url } } }
    if (field.data?.attributes?.url) return field.data.attributes.url;
    // Handle array in data: { data: [{ attributes: { url } }] }
    if (Array.isArray(field.data) && field.data.length > 0)
      return field.data[0].attributes?.url;
    // Handle flattened object { url }
    return field.url || null;
  };

  const imageUrl = getImageUrl(
    getRawImageUrl(projectData?.featured_image) ||
      getRawImageUrl(projectData?.image),
  );

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
