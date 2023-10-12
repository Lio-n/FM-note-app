import CONSTANTS from "../../test/constants";
import ListOfNotes from "../../ui/organisms/lists/notes/notes.list";
import { useNotes } from "../../lib/hooks";

const BoxTodo = () => {
  const [data, setData] = useNotes();

  const handleOnRemove = (id: string) => {
    const newNotesState = data.filter((i) => i.id !== id);

    setData([...newNotesState]);
  };

  const handleOnCompleted = (id: string) => {
    const indexNote = data.findIndex((i) => i.id === id);

    const newNotesState = [
      ...data.slice(0, indexNote),
      { ...data[indexNote], isCompleted: !data[indexNote].isCompleted },
      ...data.slice(indexNote + 1),
    ];

    setData([...newNotesState]);
  };

  return (
    <div data-testid={CONSTANTS.COMPONENT.BOX_TODO.TEST_ID_BOX_TODO}>
      <ListOfNotes data={data} onCompleted={handleOnCompleted} onRemove={handleOnRemove} />
    </div>
  );
};

export default BoxTodo;
