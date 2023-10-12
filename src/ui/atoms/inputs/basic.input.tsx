import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputBase = styled.input`
  background-color: transparent;
  font-size: ${({ theme }) => theme.font_size};
  font-family: ${({ theme }) => theme.font_family};
  color: ${({ theme }) => theme.text_color_body};
  width: 100%;
  outline: none;
  border: none;
`;
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ariaLabel?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
}

export const Input = ({ name, ariaLabel = `input ${name}`, type = "text", required = false, ...props }: InputProps) => (
  <InputBase type={type} name={name} aria-label={ariaLabel} required={required} {...props} />
);
