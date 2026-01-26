const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // We have 16 projects (IDs 0 to 15) in ProjectList.js
  // We generate a page for each.
  // In a real scenario, we might want to read this count dynamically,
  // but since we can't easily import the ES module ProjectList here, we hardcode the count or range.
  const projects = Array.from({ length: 16 }, (_, i) => i);

  projects.forEach((id) => {
    createPage({
      path: `/project/${id}`,
      component: path.resolve("./src/templates/project-details.js"),
      context: {
        id: id,
      },
    });
  });
};
