import { RenderResult, fireEvent, render } from "../../utils/test.utils";
import App from "../../App.tsx";
import Themes from "../../utils/themes.utils.ts";
import { RecoilRoot } from "recoil";
import CONSTANTS from "../../test/constants";

const TEST_ID_SWITCH_THEME = CONSTANTS.COMPONENT.SWITCH_THEME.TEST_ID_SWITCH_THEME;
const ID_SUN_ICON = "#sunIcon";
const ID_MOON_ICON = "#moonIcon";

describe("Test SwitchTheme component", () => {
  let appElem: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

  beforeEach(() => {
    appElem = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  });

  it("Should SwitchTheme renders correctly.", () => {
    const switchElem = appElem.getByTestId(TEST_ID_SWITCH_THEME);

    expect(switchElem).toBeInTheDocument();
  });

  describe("Should change the icon based on the theme currently in use.", () => {
    it("Must use the Moon icon", () => {
      const switchElem = appElem.getByTestId(TEST_ID_SWITCH_THEME);
      const sunIconElem = switchElem.querySelector(ID_SUN_ICON);
      const moonIconElem = switchElem.querySelector(ID_MOON_ICON);

      expect(sunIconElem).not.toBeInTheDocument();
      expect(moonIconElem).toBeInTheDocument();
    });

    it("Must use the Sun icon.", () => {
      const switchElem = appElem.getByTestId(TEST_ID_SWITCH_THEME);

      // Simulate click for switch theme to dark.
      fireEvent.click(switchElem);

      const sunIconElem = switchElem.querySelector(ID_SUN_ICON);
      const moonIconElem = switchElem.querySelector(ID_MOON_ICON);

      expect(sunIconElem).toBeInTheDocument();
      expect(moonIconElem).not.toBeInTheDocument();
    });
  });

  describe("Should switch background-color correctly.", () => {
    it("White theme for background-color.", () => {
      expect(appElem.getByTestId("main")).toHaveStyleRule("background-color", `${Themes.light.background_color}`);
    });

    it("Dark theme for background-color.", () => {
      const SwitchElem = appElem.getByTestId(TEST_ID_SWITCH_THEME);

      // Simulate click for switch theme to dark.
      fireEvent.click(SwitchElem);

      expect(appElem.getByTestId("main")).toHaveStyleRule("background-color", `${Themes.dark.background_color}`);
    });
  });
});
