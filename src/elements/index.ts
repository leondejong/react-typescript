import Input, { input } from './Input'
import Label from './Label'
import Button from './Button'
import TextArea from './TextArea'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Select from './Select'
import Option from './Option'
import NotFound from './NotFound'

type value = string | undefined

function variable (value: value, infix = '', prefix = '', suffix = '') {
  return `var(--${prefix}${value || infix}${suffix})`
}

export {
  input,
  Input,
  Label,
  Button,
  TextArea,
  Checkbox,
  Radio,
  Select,
  Option,
  NotFound,
  variable
}
