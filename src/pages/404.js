import React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import Seo from "../components/SEO";

const NotFoundPage = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{
            textAlign: "center",
            py: { xs: 8, md: 12 },
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "6rem", md: "10rem" },
              fontWeight: "bold",
              background: "linear-gradient(45deg, #663399 30%, #bb86fc 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "text.primary",
            }}
          >
            Page Not Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: "text.secondary",
              maxWidth: 500,
            }}
          >
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#663399",
              color: "white",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              textTransform: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              "&:hover": {
                bgcolor: "#bb86fc",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(102, 51, 153, 0.3)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Go Back Home
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => (
  <Seo
    title="404 - Page Not Found | Deelaka Kariyawasam"
    description="The page you're looking for doesn't exist."
    noindex={true}
  />
);
