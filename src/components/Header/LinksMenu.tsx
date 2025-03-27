import { Chip } from "@mui/material";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    label: "KATEGORİLER",
    icon: <GiHamburgerMenu />,
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

const LinksMenu = () => {
  return (
    <React.Fragment>
      {links.map((link, i) => (
        <Chip
          label={link.label}
          key={i}
          sx={{ borderRadius: "0" }}
          icon={link?.icon ? link.icon : undefined}
          component="a"
          href="/"
          clickable
        ></Chip>
      ))}
    </React.Fragment>
  );
};

export default LinksMenu;
