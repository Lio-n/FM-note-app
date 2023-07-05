import { RenderResult, fireEvent, render } from "../../utils/test.utils";
import App from "../../App.tsx";
import Themes from "../../utils/themes.utils.ts";
import { RecoilRoot } from "recoil";

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
    const switchElem = appElem.getByTestId("switchTheme");
    expect(switchElem).toBeInTheDocument();
  });

  describe("Should change the icon based on the theme currently in use.", () => {
    it("Must use the Moon icon", () => {
      const switchElem = appElem.getByTestId("switchTheme");
      const sunIconElem = switchElem.querySelector("#sunIcon");
      const moonIconElem = switchElem.querySelector("#moonIcon");

      expect(sunIconElem).not.toBeInTheDocument();
      expect(moonIconElem).toBeInTheDocument();
    });

    it("Must use the Sun icon.", () => {
      const switchElem = appElem.getByTestId("switchTheme");

      // Simulate click for switch theme to dark.
      fireEvent.click(switchElem);

      const sunIconElem = switchElem.querySelector("#sunIcon");
      const moonIconElem = switchElem.querySelector("#moonIcon");

      expect(sunIconElem).toBeInTheDocument();
      expect(moonIconElem).not.toBeInTheDocument();
    });
  });

  describe("Should switch background-color correctly.", () => {
    it("White theme for background-color.", () => {
      expect(appElem.getByTestId("main")).toHaveStyleRule("background-color", `${Themes.light.background_color}`);
    });

    it("Dark theme for background-color.", () => {
      const SwitchElem = appElem.getByTestId("switchTheme");

      // Simulate click for switch theme to dark.
      fireEvent.click(SwitchElem);

      expect(appElem.getByTestId("main")).toHaveStyleRule("background-color", `${Themes.dark.background_color}`);
    });
  });
});
