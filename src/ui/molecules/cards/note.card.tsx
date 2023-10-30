import CardLayout from "../../atoms/layouts/card.layout";
import Body from "../../atoms/texts/body.text";
import { CheckButton } from "../buttons/check.button";
import { CrossButton } from "../buttons/cross.button";
import styled from "styled-components";

const Root = styled(CardLayout)`
  justify-content: space-between;

  .card_content {
    display: flex;
    gap: 1rem;
  }

  p {
    width: fit-content;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.text_hover};
    }
  }
`;

interface NoteData {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface NoteCardProps {
  data: NoteData;
  onCompleted: (id: string) => void;
  onRemove: (id: string) => void;
}

const NoteCard = ({ data, onCompleted, onRemove }: NoteCardProps) => {
  return (
    <Root>
      <div className="card_content">
        <CheckButton onClick={() => onCompleted(data.id)} isCompleted={data.isCompleted} ariaLabel={"Button : Complete note."} />
        <Body children={data.text} className={`--hover-color ${data.isCompleted ? "--line-through" : "--body-color"}`} />
      </div>
      <CrossButton onClick={() => onRemove(data.id)} />
    </Root>
  );
};

export type { NoteData, NoteCardProps };
export default NoteCard;
