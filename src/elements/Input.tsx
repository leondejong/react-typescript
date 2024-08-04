import styled, { css } from "styled-components";

import type { Color } from "../state";

import { variable as v } from "./";

type InputProps = {
  background?: Color;
  border?: Color;
  color?: Color;
  label?: string;
};

export const input = css<InputProps>`
  min-width: 16rem;
  padding: 0.4375rem 0.9375rem;
  border: 0.0625rem solid ${(props: InputProps) => v(props.border, "medium")};
  outline: none;
  border-radius: 0.25rem;
  text-decoration: none;
  background: ${(props: InputProps) => v(props.background, "white")};
  color: ${(props: InputProps) => v(props.color, "dark")};
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus,
  &:active {
    background: ${(props: InputProps) =>
      v(props.background, "white", "", "-tint")};
    border-color: ${(props: InputProps) =>
      v(props.border, "medium", "", "-tint")};
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  &::placeholder {
    color: ${(props: InputProps) => v(props.label, "medium", "", "-tint")};
  }
`;

const Input = styled.input<InputProps>`
  ${input}
`;

const ItemInput = styled(Input)`
  &::placeholder {
    color: var(--medium);
  }
`;

export { ItemInput };

export default Input;
