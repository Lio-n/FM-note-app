import styled from "styled-components";

const CardLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem 1.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.layout_color};

  &.--box-shadow {
    box-shadow: 2px 0px 20px 0px rgba(0, 0, 0, 0.2);
  }

  &.--top-border {
    border-radius: 5px 5px 0 0;
  }

  &.--bottom-border {
    border-radius: 0 0 5px 5px;
  }

  &.--none-border {
    border-radius: 0;
  }
`;

export default CardLayout;
