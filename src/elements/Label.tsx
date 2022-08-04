import styled from 'styled-components'

import { variable as v } from './'

interface Props {
  color?: string
}

const Label = styled.label`
  vertical-align: middle;
  color: ${(props: Props) => v(props.color, 'medium')};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${(props: Props) => v(props.color, 'medium', '', '-tint')};
  }
`

export default Label
