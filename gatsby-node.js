const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// Utility function to create URL-friendly slug
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  try {
    // Fetch projects from Strapi API
    const response = await fetch(
      `${process.env.GATSBY_BACKEND_URL || "http://localhost:1337"}/api/projects?populate[skills]=true&populate[image]=true&populate[featured_image]=true`,
    );
    const data = await response.json();
    const projects = data.data || [];

    projects.forEach((project) => {
      const slug = slugify(
        project.title || project.name || `project-${project.id}`,
      );
      createPage({
        path: `/projects/${slug}`,
        component: path.resolve("./src/templates/project-details.js"),
        context: {
          slug: slug,
          id: project.id,
          projectData: {
            title: project.title,
            description: project.description,
            featured_image: project.featured_image,
            image: project.image,
          },
        },
      });
    });

    console.log(`✓ Created ${projects.length} project pages`);
  } catch (error) {
    console.error("Error creating project pages:", error);
    // Fallback: create some placeholder pages
    console.log("Using fallback page creation");
  }
};

exports.onPostBuild = () => {
  const publicPath = path.join(__dirname, "public");
  const sitemapSrc = path.join(publicPath, "sitemap-0.xml");
  const sitemapDest = path.join(publicPath, "sitemap.xml");

  // Copy sitemap-0.xml to sitemap.xml
  if (fs.existsSync(sitemapSrc)) {
    fs.copyFileSync(sitemapSrc, sitemapDest);
    console.log("✓ Created sitemap.xml from sitemap-0.xml");
  }
};
