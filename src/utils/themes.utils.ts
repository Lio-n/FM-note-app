interface InitTheme {
  active_text: string;
  font_size: string;
  font_family: string;
  text_color_primary: string;
}

interface CustomTheme extends InitTheme {
  layout_color: string;
  background_color: string;
  border_color: string;
  text_color_body: string;
  text_hover: string;
  text_color_line_through: string;
  text_color_filter: string;
  background_image_mobile: string;
  background_image_desktop: string;
}

interface ThemesAvailable {
  dark: CustomTheme;
  light: CustomTheme;
}

const BasicTheme: InitTheme = {
  active_text: "hsl(220, 98%, 61%)",
  font_size: "1.125rem", // 18px
  font_family: "'Josefin Sans', sans-serif",
  text_color_primary: "#fff", // Body
};

const LightTheme: CustomTheme = {
  ...BasicTheme,
  layout_color: "hsl(0, 0%, 98%)",
  background_color: "hsl(236, 33%, 92%)",
  background_image_mobile: "./background/bg-mobile-light.jpg",
  background_image_desktop: "./background/bg-desktop-light.jpg",
  border_color: "hsl(233, 11%, 84%)",
  text_color_body: "hsl(236, 9%, 61%)", // Body
  text_hover: "hsl(235, 19%, 35%)", // Text-hover
  text_color_line_through: "hsl(233, 11%, 84%)", // line-through
  text_color_filter: "hsl(236, 9%, 61%)", // filter
};

const DarkTheme: CustomTheme = {
  ...BasicTheme,
  layout_color: "hsl(235, 24%, 19%)",
  background_color: "hsl(235, 21%, 11%)",
  background_image_mobile: "./background/bg-mobile-dark.jpg",
  background_image_desktop: "./background/bg-desktop-dark.jpg",
  border_color: "hsl(233, 14%, 35%)",
  text_color_body: "hsl(234, 11%, 52%)", // Body
  text_hover: "hsl(236, 33%, 92%)", // Text-hover
  text_color_line_through: "hsl(233, 14%, 35%)", // line-through
  text_color_filter: "hsl(237, 14%, 26%)", // filter
};

const Themes: ThemesAvailable = {
  dark: DarkTheme,
  light: LightTheme,
};

export default Themes;
