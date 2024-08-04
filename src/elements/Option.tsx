import styled from "styled-components";

import type { Color } from "../state";

import { variable as v } from "./";

type OptionProps = {
  background?: Color;
  color?: Color;
  colorActive?: Color;
};

const Option = styled.option<OptionProps>`
  display: block;
  padding: 0.25rem;
  color: ${(props: OptionProps) => v(props.color, "medium")};

  &:hover,
  &:focus,
  &:active {
    background: ${(props: OptionProps) =>
      v(props.background, "medium", "", "-tint")};
    color: ${(props: OptionProps) => v(props.colorActive, "white")};
    border-radius: 0.25rem;
  }

  &:checked {
    background: ${(props: OptionProps) => v(props.background, "medium")}
      linear-gradient(
        0deg,
        ${(props: OptionProps) => v(props.background, "medium")} 0%,
        ${(props: OptionProps) => v(props.background, "medium")} 100%
      );
    color: ${(props: OptionProps) => v(props.colorActive, "white")};
    border-radius: 0.25rem;
  }
`;

export default Option;
