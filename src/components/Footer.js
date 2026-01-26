import React from "react";
import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
} from "@mui/icons-material";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FacebookIcon fontSize="large" />,
      url: "https://web.facebook.com/deelaka.kariyawasam/?locale=ms_MY&_rdc=1&_rdr",
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      url: "https://www.linkedin.com/in/deelaka-wejith-kariyawasam-7a9bb0213/",
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      url: "https://github.com/deelaka99",
    },
    {
      icon: <YouTubeIcon fontSize="large" />,
      url: "https://www.youtube.com/@deelakawejithkariyawasam",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="sm">
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary" align="center">
          {"© "}
          {new Date().getFullYear()}
          {" PDW Kariyawasam. All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
