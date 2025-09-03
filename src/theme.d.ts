import type { PaletteColor } from "@mui/material/styles";
import { ThemeOptions, type PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral? : PaletteColor
  }
  
  interface PaletteOptions {
    neutral? : PaletteColorOptions
  }
}
