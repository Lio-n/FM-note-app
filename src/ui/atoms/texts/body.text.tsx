import styled from "styled-components";

const Body = styled.p`
  font-size: ${({ theme }) => theme.font_size};
  color: ${({ theme }) => theme.text_color_body};
  font-weight: 400;
  margin: 0;

  &.--line-through {
    text-decoration-line: line-through;
    color: ${({ theme }) => theme.text_color_line_through};
  }

  &.--body-color {
    color: ${({ theme }) => theme.text_color_body};
  }

  &.--filter-color {
    color: ${({ theme }) => theme.text_color_filter};
  }

  &.--primary-color {
    color: ${({ theme }) => theme.text_color_primary};
  }
`;

export default Body;
