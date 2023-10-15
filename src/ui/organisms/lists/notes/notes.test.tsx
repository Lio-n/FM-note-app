import ListOfNotes from "./notes.list";
import { RenderResult, fireEvent, render } from "../../../../utils/test.utils";
import { NoteData } from "../../../molecules/cards/note.card";
import CONSTANTS from "../../../../test/constants";

const TEST_ID_LIST_OF_NOTES = CONSTANTS.UI.LIST_OF_NOTES.TEST_ID_LIST_OF_NOTES;

export default describe("Test BoxTodo component", () => {
  let appElem: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let listOfNotesElem: HTMLElement;
  const notesMock: NoteData[] = [
    {
      id: "0",
      text: "Test note One!",
      isCompleted: false,
    },
  ];

  const onCompleted = vi.fn((id:string)=>id);
  const onRemove = vi.fn((id:string)=>id)

  beforeEach(() => {
    appElem = render(<ListOfNotes data={notesMock} onCompleted={onCompleted} onRemove={onRemove} />);
    listOfNotesElem = appElem.getByTestId(TEST_ID_LIST_OF_NOTES);
  });

  it("Should ListOfNotes renders correctly.", () => {
    expect(listOfNotesElem).toBeInTheDocument();
  });

  it("New note should be deployed inside ListOfNotes.", () => {
    const newNote = {
      id: "1",
      text: "Test note Two!",
      isCompleted: false,
    }

    const newNotesMockState = [...notesMock, newNote];
    
    appElem.rerender(<ListOfNotes data={newNotesMockState} onCompleted={onCompleted} onRemove={onRemove}/>);
    listOfNotesElem = appElem.getByTestId(TEST_ID_LIST_OF_NOTES);

    const cardNoteElem = listOfNotesElem.querySelector(`li[id="${newNotesMockState[1].id}"]`)?.querySelector("div");
    expect(cardNoteElem?.textContent).toBe(newNotesMockState[1].text);
  });

  it("Should check note as completed.", () => {
    const cardNoteElem = listOfNotesElem.querySelector(`li[id="${notesMock[0].id}"]`)?.querySelector("div");
    expect(cardNoteElem).toBeInTheDocument();

    const buttonLayoutElem = cardNoteElem?.querySelector("#CheckButton") as HTMLDivElement;
    const buttonElem = buttonLayoutElem.querySelector("button") as HTMLButtonElement;
    fireEvent.click(buttonElem);

    expect(onCompleted).toHaveBeenCalledWith(notesMock[0].id);
 
    let newNotesMockState=[...notesMock];
    newNotesMockState[0].isCompleted = !newNotesMockState[0].isCompleted;
    
    appElem.rerender(<ListOfNotes data={newNotesMockState} onCompleted={onCompleted} onRemove={onRemove}/>);

    expect(buttonLayoutElem.className.includes("completed")).toBe(true);

    const bodyElem = cardNoteElem?.querySelector("p") as HTMLParagraphElement;

    expect(bodyElem.className.includes("--line-through")).toBe(true);

    expect(notesMock[0].isCompleted).toBe(true);
  });

  it("Should remove note from notesMock.", () => {
    const cardNoteElem = listOfNotesElem.querySelector(`li[id="${notesMock[0].id}"]`)?.querySelector("div");
    expect(cardNoteElem).toBeInTheDocument();

    const buttonElem = cardNoteElem?.querySelector("#CrossButton") as HTMLButtonElement;
    fireEvent.click(buttonElem);

    expect(onRemove).toHaveBeenCalledWith(notesMock[0].id);

    const newNotesMockState = notesMock.filter(i=>i.id!==notesMock[0].id);

    appElem.rerender(<ListOfNotes data={newNotesMockState} onCompleted={onCompleted} onRemove={onRemove}/>);

    expect(newNotesMockState.length).toBe(0);
  }); 
});
