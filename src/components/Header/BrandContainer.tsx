"use client";

import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../ui/Logo";
import HamburgerMenu from "./HamburgerMenu";

const BrandContainer = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (menuRef?.current && !(menuRef.current as Node).contains(target)) {
      if (
        !target?.classList.contains("rx-cross-2") &&
        !target?.parentElement?.classList.contains("rx-cross-2")
      ) {
        setShowMenu(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box className="brand-container">
      <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
      <Logo width={144} height={48} />
      <Box ref={menuRef}>
        <HamburgerMenu show={showMenu} setShow={setShowMenu} />
      </Box>
    </Box>
  );
};

export default BrandContainer;
