import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { SiStarship } from "react-icons/si";
import { SiHeadphonezone } from "react-icons/si";
import { GiStarsStack } from "react-icons/gi";
import { Box, Typography } from "@mui/material";

const titles = [
  {
    label: "Siparişlerin 24 saat otomatik olarak teslim edilir.",
    icon: <IoShieldCheckmarkSharp />,
  },
  {
    label:
      "Stok problemi yaşamadan, Epin kodlarınız saniyeler içinde elinizde.",
    icon: <SiStarship />,
  },
  {
    label: "Birden fazla ödeme yöntemi arasında dilediğin şekilde ödeme yap.",
    icon: <SiHeadphonezone />,
  },
  {
    label: "Alışveriş öncesi ve alışveriş sonrası her türlü destek hizmeti.",
    icon: <GiStarsStack />,
  },
];

const FooterHead = () => {
  return (
    <React.Fragment>
      {titles.map((title, i) => (
        <Box className="order-property" key={i}>
          {title.icon} <Typography component="p">{title.label}</Typography>
        </Box>
      ))}
    </React.Fragment>
  );
};

export default FooterHead;
