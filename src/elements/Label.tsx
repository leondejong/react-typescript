import styled from "styled-components";

import type { Color } from "../state";

import { variable as v } from "./";

type LabelProps = {
  color?: Color;
};

const Label = styled.label<LabelProps>`
  vertical-align: middle;
  color: ${(props: LabelProps) => v(props.color, "medium")};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${(props: LabelProps) => v(props.color, "medium", "", "-tint")};
  }
`;

export default Label;
