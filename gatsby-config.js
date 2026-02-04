/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Deelaka Kariyawasam | Full Stack Software Engineer Portfolio`,
    description: `Full Stack Software Engineer specializing in React, Node.js, and mobile development. Showcasing innovative web solutions and software engineering projects.`,
    author: `Deelaka Kariyawasam`,
    siteUrl: `https://www.deelakakariyawasam.dev`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
        createLinkInHead: true,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => "https://www.deelakakariyawasam.dev",
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.filter((page) => !page.path.match(/404/));
        },
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: "daily",
            priority: path === "/" ? 1.0 : 0.8,
          };
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.deelakakariyawasam.dev",
        sitemap: "https://www.deelakakariyawasam.dev/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
