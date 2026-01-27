import React, { useState } from "react";
import { Box } from "@mui/material";
import ImageSkeleton from "./ImageSkeleton";

const LazyImage = ({
  src,
  alt,
  height = 200,
  width = "100%",
  objectFit = "cover",
  borderRadius = 0,
  sx = {},
  skeletonSx = {},
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: width,
        height: height,
        overflow: "hidden",
        borderRadius: borderRadius,
        ...sx,
      }}
    >
      {/* Skeleton Loader - shown while loading */}
      {!loaded && !error && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            ...skeletonSx,
          }}
        >
          <ImageSkeleton height={height} width="100%" />
        </Box>
      )}

      {/* Actual Image */}
      {!error && (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: objectFit,
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            display: "block",
          }}
        />
      )}

      {/* Error State - optional fallback */}
      {error && (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(102, 51, 153, 0.1)",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          Failed to load image
        </Box>
      )}
    </Box>
  );
};

export default LazyImage;
