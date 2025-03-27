import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "16px",
            fontSize: "12px",
            "&::placeholder": {
              opacity: 1,
            },
          },
          "& .MuiInputBase-input": {
            padding: "8px 14px",
            "&::placeholder": {
              opacity: 1,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&::after": {
            borderBottom: "none !important",
          },
          "&::before": {
            borderBottom: "none !important",
          },
          "&:hover::before": {
            borderBottom: "none !important",
          },
          "&.Mui-focused::before": {
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ".header-wrapper": {
          backgroundColor: theme.palette.mode === "dark" ? "#212630" : "#fff",
        },
        ".header-wrapper .main": {
          borderTop:
            theme.palette.mode === "dark"
              ? "1px solid #353e4f;"
              : "1px solid #e4e4e4",
        },
        ".footer-wrapper .head": {
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(0deg, #2c333f, #1f242d)"
              : "#fff",
          borderTop:
            theme.palette.mode === "dark"
              ? " 2px solid #323948"
              : " 2px solid #ffffff",
        },
        ".footer-wrapper .head .order-property": {
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(45deg, #3e495b, #475060)"
              : "#fff",
        },
        ".footer-wrapper .social-media": {
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(45deg, #3e495b, #475060)"
              : "#3d7dc8",
        },
        ".footer-wrapper .footer-bottom, .footer-wrapper .footer-copyright": {
          backgroundColor: theme.palette.mode === "dark" ? "#2A323E" : "#fff",
        },
        ".top-bar .internal-links a:hover": {
          color: theme.palette.mode === "dark" ? "#3d7dc8" : "#fff",
        },
        ".top-bar .internal-links a.add-balance-text": {
          color: theme.palette.mode === "dark" ? "#fff" : "#00d409",
        },
        ".icon-indicator": {
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#00000061 !important"
              : "#3d7dc8 !important",
          color: "#fff !important",
        },
      }),
    },
  },
};

export const lightTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: "light",
    background: {
      default: "rgb(239,239,239)",
    },
  },
});

export const darkTheme = createTheme({
  ...themeOptions,
  palette: {
    mode: "dark",
    background: {
      default: "rgb(23,26,33)",
    },
  },
});
