import { footerLinks } from "@/shared/constants";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <React.Fragment>
      {footerLinks.map((link, i) => (
        <Box className="single-fb-link" key={i}>
          <Typography component="h2">{link.label}</Typography>
          <Box className="fb-sublinks">
            {link.links.map((sublink, p) => (
              <Link href={"/"} key={p}>
                {sublink}
              </Link>
            ))}
          </Box>
        </Box>
      ))}
    </React.Fragment>
  );
};

export default FooterLinks;
