import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

// Import images
import HTML from "../images/langauges/html.png";
import CSS from "../images/langauges/css.png";
import JS from "../images/langauges/js.png";
import PHP from "../images/langauges/php.png";
import BS from "../images/langauges/bootstrap.png";
import TWCSS from "../images/langauges/tailwind.png";
import RJS from "../images/langauges/reactjs.png";
import Laraval from "../images/langauges/laraval.png";
import Node from "../images/langauges/nodejs.png";
import MSQL from "../images/langauges/mysql.png";
import Mongo from "../images/langauges/mongodb.png";
import Java from "../images/langauges/java.png";
import Python from "../images/langauges/python.png";
import Csharp from "../images/langauges/c sharp.png";
import C from "../images/langauges/c.png";
import Android from "../images/langauges/android.png";
import RN from "../images/langauges/rn.png";
import Figma from "../images/langauges/figma.png";
import Firebase from "../images/langauges/firebase.png";

const Languages = () => {
  const imageData = [
    { ImageName: "HTML", ImageSrc: HTML },
    { ImageName: "CSS", ImageSrc: CSS },
    { ImageName: "JavaScript", ImageSrc: JS },
    { ImageName: "ReactJS", ImageSrc: RJS },
    { ImageName: "Typescript", ImageSrc: JS }, // Placeholder if needed
    { ImageName: "NodesJS", ImageSrc: Node },
    { ImageName: "PHP", ImageSrc: PHP },
    { ImageName: "Laravel", ImageSrc: Laraval },
    { ImageName: "Java", ImageSrc: Java },
    { ImageName: "Python", ImageSrc: Python },
    { ImageName: "C#", ImageSrc: Csharp },
    { ImageName: "MySQL", ImageSrc: MSQL },
    { ImageName: "MongoDB", ImageSrc: Mongo },
    { ImageName: "Firebase", ImageSrc: Firebase },
    { ImageName: "Android", ImageSrc: Android },
    { ImageName: "React Native", ImageSrc: RN },
    { ImageName: "Figma", ImageSrc: Figma },
    { ImageName: "Tailwind", ImageSrc: TWCSS },
    { ImageName: "Bootstrap", ImageSrc: BS },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageData.length]);

  return (
    <Box sx={{ py: 8, textAlign: "center", overflow: "hidden" }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        <Box component="span" sx={{ borderBottom: "3px solid #663399", pb: 1 }}>
          Tech Stack
        </Box>
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: 1000,
          mx: "auto",
          position: "relative",
          height: 180,
          overflow: "hidden",
        }}
      >
        {/* Gradient Masks */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 100,
            zIndex: 2,
            background:
              "linear-gradient(to right, #121212 0%, transparent 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 100,
            zIndex: 2,
            background:
              "linear-gradient(to left, #121212 0%, transparent 100%)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(${-currentIndex * 140 + 400}px)`,
            alignItems: "center",
            height: "100%",
          }}
        >
          {imageData.map((item, index) => (
            <Paper
              key={index}
              elevation={index === currentIndex ? 8 : 1}
              sx={{
                minWidth: 120,
                height: 140,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: index === currentIndex ? 1 : 0.4,
                transform:
                  index === currentIndex ? "scale(1.15)" : "scale(0.9)",
                transition: "all 0.5s ease",
                bgcolor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: 3,
              }}
            >
              <Box
                component="img"
                src={item.ImageSrc}
                alt={item.ImageName}
                sx={{
                  width: 60,
                  height: 60,
                  objectFit: "contain",
                  mb: 1.5,
                  filter: index === currentIndex ? "none" : "grayscale(100%)",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "bold",
                  color:
                    index === currentIndex
                      ? "secondary.light"
                      : "text.disabled",
                }}
              >
                {item.ImageName}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Languages;
