import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Paper } from "@mui/material";
import { fetchSkills } from "../store/actions/skillsActions";

const Languages = () => {
  const dispatch = useDispatch();
  const { skillList, skillLoading, error } = useSelector(
    (state) => state.skillsReducer,
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1100);
  const carouselRef = React.useRef(null);

  // Fetch skills from API
  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  useEffect(() => {
    if (skillList?.data?.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillList?.data?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skillList?.data?.length]);

  // Measure container width on client only
  useEffect(() => {
    function updateWidth() {
      if (carouselRef.current) {
        setContainerWidth(carouselRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        overflow: "hidden",
        background: { md: "linear-gradient(120deg, #232526 0%, #663399 100%)" },
        borderRadius: 0,
        boxShadow: { md: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" },
        mx: 0,
        width: { xs: "100%", md: "100vw" },
        position: { md: "relative" },
        left: { md: "50%" },
        right: { md: "50%" },
        marginLeft: { md: "-50vw" },
        marginRight: { md: "-50vw" },
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#fff",
          letterSpacing: 1.5,
        }}
      >
        <Box component="span" sx={{ borderBottom: "4px solid #bb86fc", pb: 1 }}>
          My Tech Stack
        </Box>
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#e0e0e0",
          mb: 6,
          fontWeight: 400,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        A curated selection of technologies, frameworks, and tools I use to
        build modern, scalable, and beautiful digital products.
      </Typography>

      {skillLoading && (
        <Typography sx={{ color: "#e0e0e0", mb: 4 }}>
          Loading skills...
        </Typography>
      )}
      {error && (
        <Typography sx={{ color: "#ff6b6b", mb: 4 }}>
          Error loading skills: {error}
        </Typography>
      )}

      <Box
        sx={{
          width: "100%",
          maxWidth: 1100,
          mx: "auto",
          position: "relative",
          height: { xs: 180, md: 200 },
          overflow: "hidden",
        }}
      >
        <Box
          ref={carouselRef}
          sx={{
            display: "flex",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(${-currentIndex * 140 + (containerWidth / 2 - 70)}px)`,
            alignItems: "center",
            height: "100%",
          }}
        >
          {skillList?.data?.map((item, index) => (
            <Paper
              key={item.id || index}
              sx={{
                minWidth: 120,
                height: 150,
                mx: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: index === currentIndex ? 1 : 0.35,
                transform:
                  index === currentIndex ? "scale(1.18)" : "scale(0.92)",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                bgcolor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(14px)",
                border: "1.5px solid rgba(255, 255, 255, 0.13)",
                borderRadius: 4,
                boxShadow:
                  index === currentIndex
                    ? "0 8px 24px rgba(102,51,153,0.18)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Box
                component="img"
                src={`${process.env.GATSBY_BACKEND_URL}${item?.icon?.url}`}
                alt={item?.name}
                loading="lazy"
                sx={{
                  width: 64,
                  height: 64,
                  objectFit: "contain",
                  mb: 2,
                  filter:
                    index === currentIndex
                      ? "none"
                      : "grayscale(100%) blur(1px)",
                  transition: "filter 0.4s",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  color: index === currentIndex ? "#bb86fc" : "#bdbdbd",
                  letterSpacing: 0.5,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  textShadow:
                    index === currentIndex ? "0 2px 8px #66339922" : "none",
                }}
              >
                {item?.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Languages;
