import { RecoilRoot } from "recoil";
import CONSTANTS from "../../test/constants";
import { RenderResult, fireEvent, render } from "../../utils/test.utils";
import App from "../../App";

const TEST_ID_TODO_FORM = CONSTANTS.COMPONENT.TODO_FORM.TEST_ID_TODO_FORM;

describe("Test TodoForm component", () => {
  let appElem: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let todoFormElem: HTMLElement;

  beforeEach(() => {
    appElem = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    todoFormElem = appElem.getByTestId(TEST_ID_TODO_FORM);
  });

  it("Should FormTodo renders correctly.", () => {
    expect(todoFormElem).toBeInTheDocument();
  });

  describe("Shoud have the basic for a Form", () => {
    it("Should have an form.", () => {
      expect(todoFormElem.nodeName).toBe("FORM");
    });

    const inputInteractive = () => {
      const inputElem = todoFormElem.querySelector("[name='text']") as HTMLInputElement;
      const TODO_MSG = "Need to watch the new movie, called Oppenheimer!";

      expect(inputElem).toBeInTheDocument();

      expect(inputElem.placeholder).toBe("Create a new todo...");
      fireEvent.change(inputElem, { target: { value: TODO_MSG } }); // works perfect

      expect(inputElem.value).toBe(TODO_MSG);
    };

    it("Should have an input and be interactive.", inputInteractive);

    it("Should have an button and reset the input value.", () => {
      const inputElem = todoFormElem.querySelector("[name='text']") as HTMLInputElement;
      const buttonElem = todoFormElem.querySelector("button") as HTMLButtonElement;

      inputInteractive();

      expect(buttonElem.getAttribute("type")).toBe("submit");
      expect(buttonElem).toBeInTheDocument();

      fireEvent.click(buttonElem);

      expect(inputElem.value).toBe("");
    });
  });
});
