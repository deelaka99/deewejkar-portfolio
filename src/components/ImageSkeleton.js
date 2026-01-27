import React from "react";
import { Skeleton, Box } from "@mui/material";

const ImageSkeleton = ({
  height = 200,
  width = "100%",
  variant = "rectangular",
}) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        position: "relative",
        overflow: "hidden",
        bgcolor: "rgba(102, 51, 153, 0.1)",
        borderRadius: 1,
      }}
    >
      <Skeleton
        variant={variant}
        animation="wave"
        width="100%"
        height="100%"
        sx={{
          bgcolor: "rgba(187, 134, 252, 0.1)",
          "&::after": {
            background:
              "linear-gradient(90deg, transparent, rgba(187, 134, 252, 0.2), transparent)",
          },
        }}
      />
    </Box>
  );
};

export default ImageSkeleton;
