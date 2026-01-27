import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  description,
  pathname,
  image,
  article = false,
  author,
  datePublished,
  children,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `);

  const seo = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    url: `${site.siteMetadata.siteUrl}${pathname || ""}`,
    image: image
      ? `${site.siteMetadata.siteUrl}${image}`
      : `${site.siteMetadata.siteUrl}/og-image.jpg`,
    author: author || site.siteMetadata.author,
  };

  // Structured Data for Person/Developer
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seo.author,
    jobTitle: "Full Stack Developer",
    url: site.siteMetadata.siteUrl,
    sameAs: [
      "https://github.com/deelaka99",
      "https://www.linkedin.com/in/deelaka-kariyawasam",
    ],
    knowsAbout: [
      "Web Development",
      "React",
      "JavaScript",
      "Node.js",
      "Mobile Development",
      "UI/UX Design",
    ],
  };

  // Article Schema (for project details)
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: seo.title,
        description: seo.description,
        image: seo.image,
        author: {
          "@type": "Person",
          name: seo.author,
        },
        publisher: {
          "@type": "Person",
          name: seo.author,
        },
        datePublished: datePublished,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": seo.url,
        },
      }
    : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="author" content={seo.author} />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content="@deewejkar" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {children}
    </Helmet>
  );
};

export default SEO;
