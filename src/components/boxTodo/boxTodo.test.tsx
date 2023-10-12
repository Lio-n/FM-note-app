import { RecoilRoot } from "recoil";
import CONSTANTS from "../../test/constants";
import { RenderResult, fireEvent, render } from "../../utils/test.utils";
import App from "../../App";

const TEST_ID_BOX_TODO = CONSTANTS.COMPONENT.BOX_TODO.TEST_ID_BOX_TODO;
const TEST_ID_TODO_FORM = CONSTANTS.COMPONENT.TODO_FORM.TEST_ID_TODO_FORM;
const TEST_ID_LIST_OF_NOTES = CONSTANTS.UI.LIST_OF_NOTES.TEST_ID_LIST_OF_NOTES;

export default describe("Test BoxTodo component", () => {
  let appElem: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let boxElem: HTMLElement;
  let todoFormElem: HTMLElement;

  beforeEach(() => {
    appElem = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
    boxElem = appElem.getByTestId(TEST_ID_BOX_TODO);
    todoFormElem = appElem.getByTestId(TEST_ID_TODO_FORM);
  });

  it("Should BoxTodo renders correctly.", () => {
    expect(boxElem).toBeInTheDocument();
  });

  it("Should FormTodo renders correctly.", () => {
    expect(todoFormElem).toBeInTheDocument();
  });

  describe("Should Create a Note.", () => {
    it("Should be submited by the FormTodo Component.", () => {
      const inputElem = todoFormElem.querySelector("[name='text']") as HTMLInputElement;
      const TODO_MSG = "Need to watch the new movie, called Oppenheimer!";

      expect(inputElem).toBeInTheDocument();

      fireEvent.change(inputElem, { target: { value: TODO_MSG } });

      expect(inputElem.value).toBe(TODO_MSG);

      const buttonElem = todoFormElem.querySelector("button") as HTMLButtonElement;

      expect(buttonElem.getAttribute("type")).toBe("submit");
      expect(buttonElem).toBeInTheDocument();

      fireEvent.click(buttonElem);
    });

    it("Should ListOfNodes renders correctly.", () => {
      const listOfNotesElem = boxElem.querySelector(`[data-testid=${TEST_ID_LIST_OF_NOTES}]`);
      expect(listOfNotesElem).toBeInTheDocument();
    });

    it("Should have the item submited inside the ListOfNodes Component.", () => {
      const listOfNotesElem = boxElem.querySelector(`[data-testid=${TEST_ID_LIST_OF_NOTES}]`);

      expect(listOfNotesElem).toBeInTheDocument();
    });
  });
});
