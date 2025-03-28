import { Box, Typography } from "@mui/material";
import React from "react";
import "./footer.scss";
import FooterHead from "./FooterHead";
import SocialMedias from "./SocialMedias";
import Logo from "../ui/Logo";
import FooterLinks from "./FooterLinks";
import PaymentMethods from "./PaymentMethods";
import Localization from "../Header/Localization";
import MobileLayout from "./MobileLayout";

const Footer = () => {
  return (
    <React.Fragment>
      <Box className="footer-wrapper">
        <Box className="head">
          <FooterHead />
        </Box>
        <Box className="social-media">
          <SocialMedias />
        </Box>
        <Box className="footer-bottom">
          <Box className="fb-left">
            <Logo width={168} height={56} />
            <Typography component="p">
              Türkiyenin En Büyük Oyuncu Pazarı: Sevdiğiniz oyunlar için epin,
              goldbar, ve item&apos;ları en uygun fiyatlarla satın alın veya
              hesaplarınızı güvenle satışa çıkartın.
            </Typography>
          </Box>
          <Box className="fb-right">
            <Box className="fb-links">
              <FooterLinks />
            </Box>
            <Box className="fb-payment-methods">
              <Typography component="p">Ödeme Yöntemleri</Typography>
              <PaymentMethods />
            </Box>
          </Box>
        </Box>
        <Box className="footer-copyright">
          <Box className="copyright-text">
            <Typography component="p">
              Copyright © 2025{" "}
              <Typography component="span">Hyper Teknoloji</Typography>.|
              Sitemizdeki yazı, resim ve içeriklerin her hakkı saklıdır, izinsiz
              kullanılamaz.
            </Typography>
            <Typography component="p">
              Bir{" "}
              <Typography component="span">
                Hyper Teknoloji Ltd. Şti.
              </Typography>{" "}
              İştirakidir.
            </Typography>
          </Box>
          <Box className="language-selector">
            <Localization />
          </Box>
        </Box>
      </Box>
      <MobileLayout />
    </React.Fragment>
  );
};

export default Footer;
