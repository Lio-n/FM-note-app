import type { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { CrossIcon } from "../../atoms/icons/cross.icon";

const Root = styled.button`
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    svg {
      stroke: ${({ theme }) => theme.border_color};
    }
  }
`;

interface CrossButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  arialLabel?: string;
}

export const CrossButton = ({ arialLabel = `cross button`, ...props }: CrossButtonProps) => (
  <Root id="CrossButton" aria-label={arialLabel} {...props}>
    <CrossIcon />
  </Root>
);
