import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
import { GoRocket } from "react-icons/go";
import { BsBasket } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import IconWithIndicator from "../ui/IconWithIndicator";

const MobileLayout = () => {
  return (
    <Box className="mobile-bottom-bar-wrapper">
      <Link href={"/"}>
        <FiHome />
      </Link>
      <Link href={"/"}>
        <GoRocket />
      </Link>
      <Link href={"/"}>
        <IconWithIndicator icon={<BsBasket />} count={2} />
      </Link>
      <Link href={"/"}>
        <FaRegCircleUser />
      </Link>
      <Link href={"/"}>
        <FaHeadset />
      </Link>
    </Box>
  );
};

export default MobileLayout;
