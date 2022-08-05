// src/index.ts
import {
  createTheme
} from "@mui/material";
var primary = {
  main: "#3b82f6"
};
var textColor = {
  primary: "#222",
  secondary: "#666",
  disabled: "#999"
};
var theme = createTheme({
  palette: {
    primary,
    text: textColor
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