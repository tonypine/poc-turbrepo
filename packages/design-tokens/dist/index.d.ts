declare type Color = {
    dark: string;
    main: string;
    light: string;
};
declare type Colors = {
    brand: Color;
    secondary: string;
};
declare const tokens: {
    colors: Colors;
};

export { tokens as default };
