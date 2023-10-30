import CONSTANTS from "../../test/constants";
import ListOfNotes from "../../ui/organisms/lists/notes/notes.list";
import useHandleTodos from "../../lib/hooks/useHandleTodos.hook";
import styled from "styled-components";
import CardLayout from "../../ui/atoms/layouts/card.layout";
import { Tags } from "../filterTag/filterTag";
import { NoteData } from "../../ui/molecules/cards/note.card";
import { useEffect, useState } from "react";
import BoxInfoTodo from "../boxInfoTodo/boxInfoTodo";

const Root = styled(CardLayout)`
  padding: 0;
  height: 50vh;
  align-items: flex-start;

  flex-direction: column;
  gap: 0;
`;

const BoxTodo = () => {
  const { data, handleOnRemove, handleOnCompleted, handleOnRemoveCompleted } = useHandleTodos();
  const [localNotes, setLocalNotes] = useState<NoteData[]>([]);
  const [activeTag, setActiveTag] = useState<Tags>(Tags.All);

  useEffect(() => {
    handleOnActiveTag(activeTag);
  }, [data, activeTag]);

  const handleOnActiveTag = (tag: Tags) => {
    let newNotesState = data;

    const ActionsByTag = {
      [Tags.All]: () => newNotesState,
      [Tags.Active]: () => newNotesState.filter((i) => i.isCompleted === false),
      [Tags.Completed]: () => newNotesState.filter((i) => i.isCompleted === true),
    };

    newNotesState = ActionsByTag[tag]();

    setLocalNotes(newNotesState);
  };

  return (
    <Root data-testid={CONSTANTS.COMPONENT.BOX_TODO.TEST_ID_BOX_TODO} className="--box-shadow">
      <ListOfNotes data={localNotes} onCompleted={handleOnCompleted} onRemove={handleOnRemove} />

      <BoxInfoTodo amountNotes={localNotes.length} onActiveTag={setActiveTag} onRemoveCompleted={handleOnRemoveCompleted} />
    </Root>
  );
};

export default BoxTodo;
