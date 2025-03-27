import { Box } from "@mui/material";
import React from "react";
import "./header.scss";
import Link from "next/link";
import SocialMedias from "./SocialMedias";
import Balance from "./Balance";
import SwitchTheme from "./SwitchTheme";
import Localization from "./Localization";
import Logo from "../ui/Logo";
import SearchBar from "./SearchBar";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import IconWithIndicator from "../ui/IconWithIndicator";
import LinksMenu from "./LinksMenu";

const Header = () => {
  return (
    <Box className="header-wrapper">
      <Box className="top-bar">
        <Box className="navigation internal-links">
          <Link href={"/"}>Siparişlerim</Link>
          <Link href={"/"}>Hesabım</Link>
          <Link href={"/"}>Yayıncılar</Link>
          <Link href={"/"}>İlan Ekle</Link>
          <Link href={"/"} className="add-balance-text">+ Bakiye Yükle</Link>
        </Box>
        <Box className="navigation">
          <Box className="social-media">
            <SocialMedias />
          </Box>
          <Box className="balance">
            <Balance />
          </Box>
          <Box className="localization">
            <Localization />
          </Box>
          <Box className="theme">
            <SwitchTheme />
          </Box>
        </Box>
      </Box>
      <Box className="main">
        <Box className="main-left">
          <Logo width={144} height={48} />
          <SearchBar />
        </Box>
        <Box className="main-right">
          <Box className="nav-main-user">
            DEMO HYPER <IoIosArrowDown />
          </Box>
          <Box className="nav-main-icons">
            <IconWithIndicator icon={<FaRegBell />} count={1} />
            <IconWithIndicator icon={<MdOutlineMailOutline />} count={3} />
            <IconWithIndicator icon={<BsBasket />} count={2} />
          </Box>
        </Box>
      </Box>
      <Box className="main-menu">
        <LinksMenu />
      </Box>
      <Box className="linear"></Box>
    </Box>
  );
};

export default Header;
