import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Localization from "./Localization";
import { MdArrowForwardIos } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const links = [
  {
    label: "KATEGORİLER",
  },
  {
    label: "İLAN PAZARI",
  },
  {
    label: "KNIGHT ONLINE",
  },
  {
    label: "RISE ONLINE",
  },
  {
    label: "METIN2 PVP",
  },
  {
    label: "VALORANT VP",
  },
  {
    label: "LOL RP",
  },
  {
    label: "PUBG MOBILE",
  },
  {
    label: "HEDİYE KARTLARI",
  },
];

interface IHamburger {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<IHamburger> = ({ show, setShow }) => {
  return (
    <Box className={"hamburger-menu-wrapper " + (show ? "active" : "")}>
      <Box className="close-hamburger">
        <RxCross2 onClick={() => setShow(false)} className="rx-cross-2" />
      </Box>
      {links.map((link, i) => (
        <Link href={"/"} key={i}>
          <Typography component="span">{link.label}</Typography>
          <MdArrowForwardIos />
        </Link>
      ))}
      <Link href={"/"}>
        <Typography component="span" className="support-streamer-text">
          Yayıncı Destekle
        </Typography>
        <MdArrowForwardIos />
      </Link>
      <Box className="localization">
        <Localization />
      </Box>
    </Box>
  );
};

export default HamburgerMenu;
