import styled from "styled-components";
import Body from "../texts/body.text";

const Root = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  p {
    font-weight: 500;
    &:hover {
      color: ${({ theme }) => theme.text_hover};
    }
  }
  &.--active-text {
    p {
      color: ${({ theme }) => theme.active_text};
    }
  }
`;

interface TagButtonProps {
  ariaLabel: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (any: unknown) => unknown;
  text?: string;
  activeText?: boolean;
}

const TagButton = ({ ariaLabel, text = "Button", activeText = false, ...props }: TagButtonProps) => (
  <Root aria-label={ariaLabel} {...props} className={`${activeText ? "--active-text" : ""}`} children={<Body children={text} />} />
);

export default TagButton;
