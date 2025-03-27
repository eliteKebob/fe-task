import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const Localization = () => {
  return (
    <React.Fragment>
      <Image
        src={"https://assets.hyperteknoloji.com/images/flags/tr.webp"}
        alt="flag"
        width={18}
        height={18}
        loading="lazy"
      />
      <Typography component="span">Türkçe / TL</Typography>
      <BiSolidDownArrow />
    </React.Fragment>
  );
};

export default Localization;
