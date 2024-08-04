import styled from "styled-components";

import type { Color } from "../state";

import { variable as v } from "./";

type ButtonProps = {
  background?: Color;
  border?: Color;
  color?: Color;
};

const Button = styled.button<ButtonProps>`
  padding: 0.4375rem 0.9375rem;
  border: 0.0625rem solid ${(props: ButtonProps) => v(props.border, "medium")};
  border-radius: 0.25rem;
  background: ${(props: ButtonProps) => v(props.background, "medium")};
  color: ${(props: ButtonProps) => v(props.color, "white")};
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: ${(props: ButtonProps) =>
      v(props.background, "medium", "", "-tint")};
    border-color: ${(props: ButtonProps) =>
      v(props.border, "medium", "", "-tint")};
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default Button;
