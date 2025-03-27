import { Box, Chip } from "@mui/material";
import React from "react";

interface IIconWithIndicator {
  icon: React.ReactNode;
  count: number;
}

const IconWithIndicator: React.FC<IIconWithIndicator> = ({ icon, count }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        cursor: "pointer"
      }}
    >
      {icon}
      <Chip
        label={count}
        size="small"
        className="icon-indicator"
        sx={{ position: "absolute", top: "-20px", right: "-20px", minWidth: "24px" }}
      ></Chip>
    </Box>
  );
};

export default IconWithIndicator;
