import { Box, Chip } from "@mui/material";
import React from "react";

interface IIconWithIndicator {
  icon: React.ReactNode;
  count: number;
}

const IconWithIndicator: React.FC<IIconWithIndicator> = ({ icon, count }) => {
  return (
    <Box className="icon-indicator-wrapper">
      {icon}
      <Chip label={count} size="small" className="icon-indicator"></Chip>
    </Box>
  );
};

export default IconWithIndicator;
