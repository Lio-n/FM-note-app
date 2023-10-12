import styled from "styled-components";

const Root = styled.button`
  border-radius: 50%;
  background: transparent;
  border: solid 2px ${({ theme }) => theme.border_color};
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

interface CircleButtonProps {
  ariaLabel: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (any: unknown) => unknown;
}

export const CircleButton = ({ ariaLabel, ...props }: CircleButtonProps) => <Root aria-label={ariaLabel} {...props} />;
