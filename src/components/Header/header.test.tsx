import { RenderResult, render } from "../../utils/test.utils";
import { RecoilRoot } from "recoil";
import Header from "./index.tsx";
import CONSTANTS from "../../test/constants.test.ts";

const TEST_ID_HEADER = CONSTANTS.COMPONENT.HEADER.TEST_ID_HEADER;
const TEST_ID_SWITCH_THEME = CONSTANTS.COMPONENT.SWITCH_THEME.TEST_ID_SWITCH_THEME;
const TEST_ID_TODO_FORM = CONSTANTS.COMPONENT.TODO_FORM.TEST_ID_TODO_FORM;

describe("Test Header component", () => {
  let appElem: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

  beforeEach(() => {
    appElem = render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );
  });

  it("Should Header renders correctly.", () => {
    const headerElem = appElem.getByTestId(TEST_ID_HEADER);
    expect(headerElem).toBeInTheDocument();
  });

  it("should contains the SwitchTheme component", () => {
    const switchElem = appElem.getByTestId(TEST_ID_SWITCH_THEME);
    expect(switchElem).toBeInTheDocument();
  });

  it("should contains the ToDoForm component", () => {
    const todoFormElem = appElem.getByTestId(TEST_ID_TODO_FORM);
    expect(todoFormElem).toBeInTheDocument();
  });
});
