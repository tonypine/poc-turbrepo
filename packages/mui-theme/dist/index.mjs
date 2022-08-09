// src/index.ts
import { createTheme } from "@mui/material";
import tokens from "@mact/design-tokens";
var primary = {
  main: tokens.colors.brand.main,
  contrastText: "white"
};
var secondary = {
  main: tokens.colors.brand.dark,
  contrastText: "white"
};
var textColor = {
  primary: tokens.colors.brand.dark,
  secondary: "#666",
  disabled: "#999"
};
var theme = createTheme({
  palette: {
    primary,
    secondary,
    text: textColor
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: textColor.primary,
          fontWeight: "bold",
          "&.Mui-focused": {
            color: textColor.primary
          }
        }
      }
    }
  }
});
var src_default = theme;
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map