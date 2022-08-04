export type Primitive = boolean | number | string

export type Field = 'id' | 'name' | 'link' | 'content' | 'active'

export interface Item {
  id?: number
  name?: string
  link?: string
  content?: string
  active?: boolean
}

export type List = Item[]

export interface State {
  id: number
  list: List
}

export type Type = 'add' | 'update' | 'remove' | 'clear' | 'default'

export interface Action {
  type: Type
  item?: Item
}

export type Reducer = (state: State, action: Action) => State
