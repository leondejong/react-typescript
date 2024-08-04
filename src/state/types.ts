export type Primitive = boolean | number | string;

export type Field = "id" | "name" | "link" | "content" | "active";

export type Item = {
  id?: number;
  name?: string;
  link?: string;
  content?: string;
  active?: boolean;
};

export type List = Item[];

export type State = {
  id: number;
  list: List;
};

export type Type = "add" | "update" | "remove" | "clear" | "default";

export type Action = {
  type: Type;
  item?: Item;
};

export type Reducer = (state: State, action: Action) => State;

export type Color =
  | "transparent"
  | "white"
  | "black"
  | "grey"
  | "light"
  | "dark"
  | "medium"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "cyan"
  | "blue"
  | "indigo"
  | "violet";
