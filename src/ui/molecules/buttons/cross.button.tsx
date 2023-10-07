import type { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { CrossIcon } from "../../atoms/icons/cross.icon";

const Root = styled.button`
  border-radius: 50%;
`;

interface CrossButtonProps {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export const CrossButton = ({ props }: CrossButtonProps) => (
  <Root aria-label={`cross button`} {...props}>
    <CrossIcon />
  </Root>
);
