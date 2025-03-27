"use client";

import React from "react";
import { ThemeProvider as MuiTP } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../themes";
import { useAppSelector } from "@/store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useAppSelector((state) => state.ui);
  return (
    <MuiTP theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </MuiTP>
  );
};

export default ThemeProvider;
