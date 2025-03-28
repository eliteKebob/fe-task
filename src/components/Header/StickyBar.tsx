"use client";

import Link from "next/link";
import SocialMedias from "./SocialMedias";
import Balance from "./Balance";
import SwitchTheme from "./SwitchTheme";
import Localization from "./Localization";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import Logo from "../ui/Logo";

const StickyBar = () => {
  const [stick, setStick] = useState<boolean>(false);
  const scrollThreshold = 75;

  useEffect(() => {
    const handleScroll = () => {
      const header = document?.getElementById("header-wrapper");
      if (header) {
        const threshold = header.offsetHeight + scrollThreshold;
        setStick(window.scrollY > threshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className={"top-bar " + (stick ? "sticky-header" : "")}>
      {stick && <Logo width={102} height={34} />}
      <Box className="navigation internal-links">
        <Link href={"/"}>Siparişlerim</Link>
        <Link href={"/"}>Hesabım</Link>
        <Link href={"/"}>Yayıncılar</Link>
        <Link href={"/"}>İlan Ekle</Link>
        <Link href={"/"} className="add-balance-text">
          + Bakiye Yükle
        </Link>
        {stick && (
          <Box className="localization">
            <Localization />
          </Box>
        )}
      </Box>
      {!stick && (
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
      )}
      <Box className="balance mobile-balance">
        <Balance />
      </Box>
    </Box>
  );
};

export default StickyBar;
