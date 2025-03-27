/* eslint-disable @typescript-eslint/no-explicit-any */
import { BoxProps } from '@mui/material/Box';

declare module '@mui/material/styles' {
  interface Components {
    MuiBox?: {
      defaultProps?: BoxProps;
      styleOverrides?: {
        root?: any;
      };
    };
  }
}