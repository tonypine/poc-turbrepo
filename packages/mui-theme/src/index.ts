import { createTheme, PaletteColorOptions, TypeText } from '@mui/material';
import tokens from '@mact/design-tokens';

const primary: PaletteColorOptions = {
  main: tokens.colors.brand.main,
  // dark: tokens.colors.brand.dark,
  // light: tokens.colors.brand.light,
  contrastText: 'white',
};

const secondary: PaletteColorOptions = {
  main: tokens.colors.brand.dark,
  // dark: tokens.colors.secondary.dark,
  // light: tokens.colors.secondary.light,
  contrastText: 'white',
};

const textColor: TypeText = {
  primary: tokens.colors.brand.dark,
  secondary: '#666',
  disabled: '#999',
};

const theme = createTheme({
  palette: {
    primary,
    secondary,
    text: textColor,
  },
  typography: {
    fontSize: 14,
    htmlFontSize: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: textColor.primary,
          fontWeight: 'bold',
          '&.Mui-focused': {
            color: textColor.primary,
          },
        },
      },
    },
  },
});

export default theme;
