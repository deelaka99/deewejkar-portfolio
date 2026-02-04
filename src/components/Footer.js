import React from "react";
import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  X as XIcon,
  Article as MediumIcon,
  Terminal as StackOverflowIcon,
} from "@mui/icons-material";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FacebookIcon fontSize="large" />,
      url: "https://web.facebook.com/deelaka.kariyawasam/?locale=ms_MY&_rdc=1&_rdr",
      color: "#1877F3",
    },
    {
      icon: <InstagramIcon fontSize="large" />,
      url: "https://www.instagram.com/deelaka_wk?igsh=NXd5b3UweWRkd2Vh&utm_source=qr",
      color: "#E1306C",
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      url: "https://www.linkedin.com/in/deelaka-kariyawasam-7a9bb0213",
      color: "#0077b5",
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      url: "https://github.com/deelaka99",
      color: "#333",
    },
    {
      icon: <YouTubeIcon fontSize="large" />,
      url: "https://www.youtube.com/@deelakawejithkariyawasam",
      color: "#FF0000",
    },
    {
      icon: <XIcon fontSize="large" />,
      url: "https://x.com/deelakawejith",
      color: "#000000",
    },
    {
      icon: <MediumIcon fontSize="large" />,
      url: "https://medium.com/@123wejith",
      color: "#00ab6c",
    },
    {
      icon: <StackOverflowIcon fontSize="large" />,
      url: "https://stackoverflow.com/users/13145710/deelaka-kariyawasam",
      color: "#f48024",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="sm">
        <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#fff",
                background: "rgba(102,51,153,0.08)",
                borderRadius: 2,
                boxShadow: "0 2px 8px #66339922",
                transition: "all 0.3s",
                p: 1.2,
                "&:hover": {
                  color: link.color,
                  background: "rgba(255,255,255,0.18)",
                  boxShadow: `0 4px 16px ${link.color}44`,
                  transform: "scale(1.15)",
                },
              }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#e0e0e0", letterSpacing: 0.5 }}
        >
          {"© "}
          {new Date().getFullYear()} {" PDW Kariyawasam. All rights reserved."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
