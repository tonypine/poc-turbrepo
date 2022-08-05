import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
  PaletteTextChannel,
  TypeText,
} from '@mui/material';
import {} from '@mui/material/colors';

const primary: PaletteColorOptions = {
  main: '#3b82f6',
};

const textColor: TypeText = {
  primary: '#222',
  secondary: '#666',
  disabled: '#999',
};

const theme = createTheme({
  palette: {
    primary,
    text: textColor,
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
