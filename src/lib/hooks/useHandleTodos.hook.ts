import { useCallback } from "react";
import { useNotes } from ".";
import { NoteData } from "../../ui/molecules/cards/note.card";

interface useHandleTodosReturn {
  data: NoteData[];
  handleOnCompleted: (id: string) => void;
  handleOnRemove: (id: string) => void;
  handleOnRemoveCompleted: () => void;
}

const useHandleTodos = (): useHandleTodosReturn => {
  const [data, setData] = useNotes();

  const handleOnRemove = useCallback(
    (id: string) => {
      const newNotesState = data.filter((i) => i.id !== id);
      setData([...newNotesState]);
    },
    [data, setData]
  );

  const handleOnRemoveCompleted = useCallback(() => {
    const newNotesState = data.filter((i) => i.isCompleted === false);
    setData([...newNotesState]);
  }, [data, setData]);

  const handleOnCompleted = useCallback(
    (id: string) => {
      const indexNote = data.findIndex((i) => i.id === id);

      const newNotesState = [
        ...data.slice(0, indexNote),
        { ...data[indexNote], isCompleted: !data[indexNote].isCompleted },
        ...data.slice(indexNote + 1),
      ];

      setData([...newNotesState]);
    },
    [data, setData]
  );

  return { data, handleOnRemove, handleOnCompleted, handleOnRemoveCompleted };
};

export default useHandleTodos;
