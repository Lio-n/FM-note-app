import styled from "styled-components";
import CardLayout from "../../../atoms/layouts/card.layout";
import NoteCard, { NoteCardProps, NoteData } from "../../../molecules/cards/note.card";
import CONSTANTS from "../../../../test/constants";

const Root = styled(CardLayout)`
  display: initial;
  padding: 0;

  li {
    list-style: none;
  }
`;

interface ListOfNotesProps extends Omit<NoteCardProps, "data"> {
  data: NoteData[];
}

const ListOfNotes = ({ data, onCompleted, onRemove }: ListOfNotesProps) => {
  return (
    <Root data-testid={CONSTANTS.UI.LIST_OF_NOTES.TEST_ID_LIST_OF_NOTES}>
      {data?.length && (
        <>
          {data.map((item, i) => (
            <li key={i} id={i.toString()}>
              <NoteCard data={item} onCompleted={onCompleted} onRemove={onRemove} />
            </li>
          ))}
        </>
      )}
    </Root>
  );
};

export type { ListOfNotesProps };
export default ListOfNotes;
