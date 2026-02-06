import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Skeleton,
  Button,
} from "@mui/material";
import { Launch as LaunchIcon } from "@mui/icons-material";
import { motion } from "framer-motion";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const MEDIUM_USERNAME = "@123wejith";
  const RSS_TO_JSON_API = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(RSS_TO_JSON_API);
        const data = await response.json();

        if (data.status === "ok") {
          // Filter out comments (usually they don't have categories) and limit to 3
          const validArticles = data.items
            .filter((item) => item.categories.length > 0)
            .slice(0, 3);

          setArticles(validArticles);
        } else {
          throw new Error("Failed to fetch articles");
        }
      } catch (err) {
        console.error("Error fetching Medium articles:", err);
        setError("Could not load articles at this time.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Helper to strip HTML tags for description preview
  const truncateDescription = (html, maxLength = 100) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || "";
    return text.length > maxLength ? text.substr(0, maxLength) + "..." : text;
  };

  // Helper to extract first image from content if thumbnail is missing
  const getThumbnail = (item) => {
    if (item.thumbnail) return item.thumbnail;

    // Try to find an image in the content
    const imgRegex = /<img[^>]+src="([^">]+)"/;
    const match = item.content.match(imgRegex);
    if (match && match[1]) return match[1];

    return "https://i.imgur.com/7f8f9jN.png"; // Fallback image placeholder
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
          <Skeleton width="40%" />
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Skeleton
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 2, mb: 2 }}
              />
              <Skeleton variant="text" height={30} width="80%" />
              <Skeleton variant="text" height={20} width="60%" />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (error || articles.length === 0) {
    return null; // Hide section if error or no articles
  }

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ mb: 6, textAlign: "center" }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: "linear-gradient(45deg, #663399 30%, #bb86fc 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Insights & Thoughts
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
          >
            Sharing my knowledge and experiences on technology, software
            engineering, and community building.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid
              item
              xs={12}
              md={4}
              key={article.guid}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px -10px rgba(102, 51, 153, 0.3)",
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={getThumbnail(article)}
                    alt={article.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3, width: "100%" }}>
                    <Box sx={{ mb: 2 }}>
                      {article.categories.slice(0, 2).map((tag) => (
                        <Chip
                          key={tag}
                          label={`#${tag}`}
                          size="small"
                          sx={{
                            mr: 1,
                            mb: 1,
                            bgcolor: "rgba(102, 51, 153, 0.1)",
                            color: "secondary.main",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        lineHeight: 1.4,
                        minHeight: 64, // roughly 2 lines
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {truncateDescription(article.description)}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block", mt: "auto" }}
                    >
                      {new Date(article.pubDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            href={`https://medium.com/${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LaunchIcon />}
            size="large"
            sx={{
              borderRadius: 2,
              borderWidth: 2,
              px: 4,
              fontWeight: 600,
              "&:hover": { borderWidth: 2 },
            }}
          >
            Read More on Medium
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Articles;
