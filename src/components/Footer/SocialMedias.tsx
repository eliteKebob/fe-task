import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const SocialMedias = () => {
  return (
    <React.Fragment>
      <Typography component="p">TAKİP ET</Typography>
      <Typography component="h1">En İyi Tekliflere Şimdi Ulaş!</Typography>
      <Box className="footer-sm-links">
        <Link href={"/"}>
          <FaInstagram />
        </Link>
        <Link href={"/"}>
          <FaYoutube />
        </Link>
        <Link href={"/"}>
          <FaDiscord />
        </Link>
      </Box>
    </React.Fragment>
  );
};

export default SocialMedias;
