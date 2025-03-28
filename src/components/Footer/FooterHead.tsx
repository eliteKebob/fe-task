import React from "react";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { SiStarship } from "react-icons/si";
import { SiHeadphonezone } from "react-icons/si";
import { GiStarsStack } from "react-icons/gi";
import { Box, Chip, Typography } from "@mui/material";
import { IoLogoWhatsapp } from "react-icons/io";

const titles = [
  {
    description: "Siparişlerin 24 saat otomatik olarak teslim edilir.",
    label: "Güvenli Alışveriş",
    icon: <IoShieldCheckmarkSharp />,
  },
  {
    description:
      "Stok problemi yaşamadan, Epin kodlarınız saniyeler içinde elinizde.",
    label: "Tek Tıkla Alışveriş",
    icon: <SiStarship />,
  },
  {
    description:
      "Birden fazla ödeme yöntemi arasında dilediğin şekilde ödeme yap.",
    label: "7/24 Destek",
    icon: <SiHeadphonezone />,
  },
  {
    description:
      "Alışveriş öncesi ve alışveriş sonrası her türlü destek hizmeti.",
    label: "Memnun Müşteriler",
    icon: <GiStarsStack />,
  },
];

const FooterHead = () => {
  return (
    <React.Fragment>
      {titles.map((title, i) => (
        <Box className="order-property" key={i}>
          {title.icon}{" "}
          <Typography component="p">{title.description}</Typography>
          <Typography component="span">{title.label}</Typography>
        </Box>
      ))}
      <Box className="footer-solution-center">
        <Box className="footer-help">
          <Chip label="Siparişlerim" className="single-help-item"></Chip>
          <Chip label="Çözüm Merkezi" className="single-help-item"></Chip>
        </Box>
        <Box className="footer-sc-content">
          <Typography component="h2">
            Aklınıza takılan bir soru mu var?
          </Typography>
          <Chip variant="outlined" label="Çözüm Merkezine bağlanın" className="footer-solution-link"></Chip>
          <Box className="sc-content-divider">
            veya
            <Typography component="span"></Typography>
          </Box>
          <Typography component="h3">Çağrı Merkezimizi arayın</Typography>
          <Typography component="a" href="tel:+90(850) 305 5164" className="footer-solution-phone">
            +90(850) 305 5164
          </Typography>
          <Typography component="h4">
            <IoLogoWhatsapp /> WhatsApp Destek
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default FooterHead;
