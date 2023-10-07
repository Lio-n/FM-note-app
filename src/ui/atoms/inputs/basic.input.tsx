import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ariaLabel?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
}

export const Input = ({ name, ariaLabel = `input ${name}`, type = "text", required = false, ...props }: InputProps) => (
  <input type={type} name={name} aria-label={ariaLabel} required={required} {...props} />
);
