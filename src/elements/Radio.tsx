import styled from 'styled-components'

import { Checkbox } from './'

const Radio = styled(Checkbox).attrs({ type: 'radio' })`
  &::before,
  &::after {
    border-radius: 50%;
  }
`

export default Radio
