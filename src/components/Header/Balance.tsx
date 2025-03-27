"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import "./header.scss";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { toggleShowBalance } from "@/features/uiSlice";
import Link from "next/link";
import { Typography } from "@mui/material";

const Balance = () => {
  const { showBalance } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleShowBalance());
  };

  return (
    <React.Fragment>
      <Link href={"/"} onClick={(e) => e.preventDefault()}>
        <FaCirclePlus />
      </Link>
      <Typography component="span" className={!showBalance ? "blurred" : ""}>50000 TL</Typography>
      <Typography component="span" onClick={handleEyeClick}>
        {showBalance ? <FaEyeSlash /> : <FaEye />}
      </Typography>
    </React.Fragment>
  );
};

export default Balance;
