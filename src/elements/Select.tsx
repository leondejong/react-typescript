import styled from "styled-components";

import type { Color } from "../state";

import { variable as v } from "./";

type SelectProps = {
  background?: Color;
  border?: Color;
  color?: Color;
};

const Select = styled.select<SelectProps>`
  margin: 0;
  padding: 0.4375rem 0.9375rem;
  border: 0.0625rem solid ${(props: SelectProps) => v(props.border, "medium")};
  border-radius: 0.25rem;
  background: ${(props: SelectProps) => v(props.background, "white")};
  color: ${(props: SelectProps) => v(props.color, "medium")};
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.25);
  outline: none;
  cursor: pointer;
  overflow: auto;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus,
  &:active {
    border-color: ${(props: SelectProps) =>
      v(props.border, "medium", "", "-tint")};
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default Select;
