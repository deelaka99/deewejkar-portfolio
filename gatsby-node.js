const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const slugify = require("./src/helpers/slugify");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  try {
    const backendUrl =
      process.env.GATSBY_BACKEND_URL ||
      "https://services.deelakakariyawasam.dev";
    console.log("Fetching projects from:", backendUrl);

    const response = await fetch(
      `${backendUrl}/api/projects?populate[skills]=true&populate[image]=true&populate[featured_image]=true`,
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch projects: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log(
      "Full data received from Strapi:",
      JSON.stringify(data).substring(0, 500) + "...",
    );

    let projects = [];
    if (data && Array.isArray(data.data)) {
      projects = data.data;
    } else if (Array.isArray(data)) {
      projects = data;
    }

    console.log(`Found ${projects.length} projects to process.`);

    projects.forEach((project, index) => {
      // Handle Strapi v4 data structure (attributes) or flattened data
      const attrs = project.attributes || project;
      const id = project.id || attrs.id || index;
      const name = attrs.name || attrs.title || `project-${id}`;
      const slug = slugify(name);

      console.log(`[${index + 1}] Creating page: ${name} -> /projects/${slug}`);

      createPage({
        path: `/projects/${slug}`,
        component: path.resolve("./src/templates/project-details.js"),
        context: {
          slug: slug,
          id: id,
          projectData: attrs,
        },
      });
    });

    if (projects.length === 0) {
      console.warn("⚠️ No projects found to create pages for!");
    } else {
      console.log(`✓ Successfully created ${projects.length} project pages`);
    }
  } catch (error) {
    console.error("Error creating project pages:", error);
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
