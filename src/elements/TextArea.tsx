import styled from 'styled-components'

import { input } from './'

const TextArea = styled.textarea`
  ${input}
  resize: none;
  min-height: 8rem;
`

export default TextArea
