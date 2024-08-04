import styled from "styled-components";

import type { Color } from "../state";

import { input } from "./";

type TextAreaProps = {
  background?: Color;
  border?: Color;
  color?: Color;
  label?: string;
};

const TextArea = styled.textarea<TextAreaProps>`
  ${input}
  resize: none;
  min-height: 8rem;
`;

export default TextArea;
