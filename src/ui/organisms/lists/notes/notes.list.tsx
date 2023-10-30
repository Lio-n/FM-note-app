import styled from "styled-components";
import NoteCard, { NoteCardProps, NoteData } from "../../../molecules/cards/note.card";
import CONSTANTS from "../../../../test/constants";
import Body from "../../../atoms/texts/body.text";
import { useMemo } from "react";

const NoTodoItem = ({ text = "No todo items left!" }: { text?: string }) => (
  <div className="noTodoItem">
    <Body children={text} />
  </div>
);

const Root = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;

  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;

  li {
    list-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.border_color};
  }

  .noTodoItem {
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
  }
`;

interface ListOfNotesProps extends Omit<NoteCardProps, "data"> {
  data: NoteData[] | [];
}

const ListOfNotes = ({ data, onCompleted, onRemove }: ListOfNotesProps) => {
  const memorizedNotes = useMemo(
    () => (
      <>
        {data.map((item, i) => (
          <li key={i} id={i.toString()}>
            <NoteCard data={item} onCompleted={onCompleted} onRemove={onRemove} />
          </li>
        ))}
      </>
    ),
    [data]
  );

  return <Root data-testid={CONSTANTS.UI.LIST_OF_NOTES.TEST_ID_LIST_OF_NOTES}>{data?.length ? memorizedNotes : <NoTodoItem />}</Root>;
};

export type { ListOfNotesProps };
export default ListOfNotes;
