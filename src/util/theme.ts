export type Fonts = {
  body: string;
  heading: string;
  mono: string;
};

export type Colors = Record<string, string | Record<string, string>>;

export default interface Theme {
  fonts: Fonts;
  colors: Colors;
}
