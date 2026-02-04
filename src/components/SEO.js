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
  noindex = false,
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
          location
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
      : `${site.siteMetadata.siteUrl}/og-image.png`,
    author: author || site.siteMetadata.author,
  };

  // Structured Data for Person/Developer
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seo.author,
    jobTitle: "Full Stack Software Engineer",
    url: site.siteMetadata.siteUrl,
    description:
      "Deelaka Kariyawasam is a Full Stack Software Engineer based in Colombo, Sri Lanka, specializing in building high-performance web and mobile applications using React, Node.js, and AI/ML technologies.",
    gender: "Male",
    nationality: "Sri Lankan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressRegion: "Western Province",
      addressCountry: "Sri Lanka",
    },
    sameAs: [
      "https://github.com/deelaka99",
      "https://www.linkedin.com/in/deelaka-kariyawasam-7a9bb0213",
      "https://stackoverflow.com/users/13145710/deelaka-kariyawasam",
      "https://x.com/deelakawejith",
      "https://medium.com/@123wejith",
    ],
    knowsAbout: [
      "Full Stack Development",
      "React.js",
      "Node.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Mobile App Development",
      "Artificial Intelligence & Machine Learning Integration",
      "UI/UX Design Systems",
      "Cloud Architecture",
    ],
  };

  // FAQ Schema for AEO - Providing direct answers for AI queries
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Deelaka Kariyawasam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deelaka Kariyawasam is a professional Full Stack Software Engineer and digital solution architect based in Colombo, Sri Lanka.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Deelaka Kariyawasam specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He specializes in React, Node.js, Mobile Development, and integrating AI/ML capabilities into web applications.",
        },
      },
      {
        "@type": "Question",
        name: "What is Deelaka Kariyawasam's current location?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deelaka Kariyawasam is currently based in Colombo, Sri Lanka.",
        },
      },
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
      <meta name="twitter:creator" content="@deelakawejith" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <meta
        name="googlebot"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {children}
    </Helmet>
  );
};

export default SEO;
