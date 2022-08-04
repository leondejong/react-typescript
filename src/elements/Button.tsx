import styled from 'styled-components'

import { variable as v } from './'

interface Props {
  background?: string
  border?: string
  color?: string
}

const Button = styled.button`
  padding: 0.4375rem 0.9375rem;
  border: 0.0625rem solid ${(props: Props) => v(props.border, 'medium')};
  border-radius: 0.25rem;
  background: ${(props: Props) => v(props.background, 'medium')};
  color: ${(props: Props) => v(props.color, 'white')};
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: ${(props: Props) => v(props.background, 'medium', '', '-tint')};
    border-color: ${(props: Props) => v(props.border, 'medium', '', '-tint')};
  }

  &:disabled,
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`

export default Button
