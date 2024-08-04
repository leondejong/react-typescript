import styled from "styled-components";

import type { Color } from "../state";

import { variable as v } from "./";

type CheckboxProps = {
  color?: Color;
};

const Checkbox = styled.input.attrs({ type: "checkbox" })<CheckboxProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 1rem;
  height: 1rem;
  margin: 0;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:disabled + label,
  &[disabled] + label {
    pointer-events: none;
    opacity: 0.5;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    display: inline-block;
    top: 0;
    left: 0;
    width: 1rem;
    height: 1rem;
    border: 0.125rem solid ${(props: CheckboxProps) => v(props.color, "medium")};
  }

  &::after {
    display: none;
    top: 0.25rem;
    left: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    background: ${(props: CheckboxProps) => v(props.color, "medium")};
  }

  &:hover::before,
  &:focus::before,
  &:active::before {
    border: 0.125rem solid
      ${(props: CheckboxProps) => v(props.color, "medium", "", "-tint")};
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    background: ${(props: CheckboxProps) =>
      v(props.color, "medium", "", "-tint")};
  }

  &:checked::after {
    display: inline-block;
  }

  &::before,
  &::after {
    border-radius: 10%;
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default Checkbox;
