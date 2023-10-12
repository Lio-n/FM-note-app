import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.text_color_primary};
  letter-spacing: 1rem;
`;

export default Title;
