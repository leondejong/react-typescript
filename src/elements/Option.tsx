import styled from 'styled-components'

import { variable as v } from './'

interface Props {
  background?: string
  color?: string
  colorActive?: string
}

const Option = styled.option`
  display: block;
  padding: 0.25rem;
  color: ${(props: Props) => v(props.color, 'medium')};

  &:hover,
  &:focus,
  &:active {
    background: ${(props: Props) => v(props.background, 'medium', '', '-tint')};
    color: ${(props: Props) => v(props.colorActive, 'white')};
    border-radius: 0.25rem;
  }

  &:checked {
    background: ${(props: Props) => v(props.background, 'medium')}
      linear-gradient(
        0deg,
        ${(props: Props) => v(props.background, 'medium')} 0%,
        ${(props: Props) => v(props.background, 'medium')} 100%
      );
    color: ${(props: Props) => v(props.colorActive, 'white')};
    border-radius: 0.25rem;
  }
`

export default Option
