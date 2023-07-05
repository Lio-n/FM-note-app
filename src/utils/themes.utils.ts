interface InitTheme {
  active_text: string;
  font_size: string;
  font_family: string;
}

interface CustomTheme extends InitTheme {
  layout_color: string;
  background_color: string;
  border_color: string;
  font_color_100: string;
  font_color_200: string;
  font_color_300: string;
}

interface ThemesAvailable {
  dark: CustomTheme;
  light: CustomTheme;
}

const BasicTheme: InitTheme = {
  active_text: "rgb(30, 221, 239)",
  font_size: "16px",
  font_family: "'Josefin Sans', sans-serif",
};

const LightTheme: CustomTheme = {
  ...BasicTheme,
  layout_color: "rgb(239, 239, 239)",
  background_color: "rgb(238, 235, 234)",
  border_color: "rgb(233, 235, 233)",
  font_color_100: "rgb(119, 124, 127)", // Body
  font_color_200: "rgb(238, 235, 234)", // line-through
  font_color_300: "rgb(220, 184, 153)", // filter
};

const DarkTheme: CustomTheme = {
  ...BasicTheme,
  layout_color: "rgb(60, 62, 49)",
  background_color: "rgb(29, 30, 28)",
  border_color: "rgb(88, 84, 80)",
  font_color_100: "rgb(216, 219, 217)", // Body
  font_color_200: "rgb(61, 66, 64)", // line-through
  font_color_300: "rgb(132, 130, 128)", // filter
};

const Themes: ThemesAvailable = {
  dark: DarkTheme,
  light: LightTheme,
};

export default Themes;
