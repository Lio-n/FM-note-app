import styled from "styled-components";
import FilterTag, { Tags } from "../filterTag/filterTag";
import Body from "../../ui/atoms/texts/body.text";
import TagButton from "../../ui/atoms/buttons/tag.button";

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  padding: 1rem 1.5rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.border_color};

  width: 100%;

  p {
    font-size: 13px;
  }
`;

interface BoxInfoTodoProps {
  amountNotes: number;
  onActiveTag: (tag: Tags) => void;
  onRemoveCompleted: () => void;
}

const BoxInfoTodo = ({ amountNotes, onActiveTag, onRemoveCompleted }: BoxInfoTodoProps) => {
  return (
    <Root>
      <Body>{amountNotes} items left</Body>
      <FilterTag onActiveTag={onActiveTag} />
      <TagButton onClick={onRemoveCompleted} text="Clear Completed" ariaLabel={"Tag button : Show Clear Completed notes"} />
    </Root>
  );
};

export default BoxInfoTodo;
