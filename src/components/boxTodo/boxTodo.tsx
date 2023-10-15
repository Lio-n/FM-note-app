import CONSTANTS from "../../test/constants";
import ListOfNotes from "../../ui/organisms/lists/notes/notes.list";
import useHandleTodos from "../../lib/hooks/useHandleTodos.hook";
import styled from "styled-components";
import CardLayout from "../../ui/atoms/layouts/card.layout";


const Root = styled(CardLayout)`
  padding: 0;
  height:50vh;
  align-items: flex-start;
`;

const BoxTodo = () => {
  const {data, handleOnRemove, handleOnCompleted} = useHandleTodos();

  return (
    <Root data-testid={CONSTANTS.COMPONENT.BOX_TODO.TEST_ID_BOX_TODO}>
      <ListOfNotes data={data} onCompleted={handleOnCompleted} onRemove={handleOnRemove} />
    </Root>
  );
};

export default BoxTodo;
