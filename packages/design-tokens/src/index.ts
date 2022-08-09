type Color = {
  dark: string;
  main: string;
  light: string;
};

type Colors = {
  brand: Color;
  secondary: string;
};

const colors: Colors = {
  brand: {
    dark: '#011531',
    main: '#207dc6',
    light: '#b9e3f6',
  },
  secondary: '#f9cb7c',
};
const tokens = {
  colors,
};

export default tokens;
