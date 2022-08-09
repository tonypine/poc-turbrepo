"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_material = require("@mui/material");
var import_design_tokens = __toESM(require("@mact/design-tokens"));
var primary = {
  main: import_design_tokens.default.colors.brand.main,
  contrastText: "white"
};
var secondary = {
  main: import_design_tokens.default.colors.brand.dark,
  contrastText: "white"
};
var textColor = {
  primary: import_design_tokens.default.colors.brand.dark,
  secondary: "#666",
  disabled: "#999"
};
var theme = (0, import_material.createTheme)({
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map