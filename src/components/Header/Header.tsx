import { Box } from "@mui/material";
import React from "react";
import "./header.scss";
import SearchBar from "./SearchBar";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import IconWithIndicator from "../ui/IconWithIndicator";
import LinksMenu from "./LinksMenu";
import StickyBar from "./StickyBar";
import BrandContainer from "./BrandContainer";

const Header = () => {
  return (
    <Box className="header-wrapper" id="header-wrapper">
      <StickyBar />
      <Box className="main">
        <Box className="main-left">
          <BrandContainer />
          <Box className="search-container">
            <SearchBar />
          </Box>
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
