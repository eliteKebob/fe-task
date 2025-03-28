"use client";

import { useAppSelector } from "@/store";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ILogo {
  width: number;
  height: number;
}

const Logo: React.FC<ILogo> = ({ width, height }) => {
  const { darkMode } = useAppSelector((state) => state.ui);
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", position: "relative", minWidth: width, minHeight: height }}
      width={width}
      height={height}
    >
      <Link href={"/"}>
        <Image
          src={
            darkMode
              ? "https://cdnhyper.s3.eu-central-1.amazonaws.com/hyper%20teknoloji%20logo%201_1685708957_1689886515.webp"
              : "https://cdnhyper.s3.eu-central-1.amazonaws.com/hyper%20teknoloji%20logo%201_1685708957.webp"
          }
          alt="Hyper Teknoloji"
          fill
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </Link>
    </Box>
  );
};

export default Logo;
