import React, { Dispatch, createContext, useContext, useReducer } from "react";

import { State, Action, Reducer } from "./";

type StateProps = {
  children?: React.ReactNode;
  state: State;
  reducer: Reducer;
};

export const StateContext = createContext<[State, Dispatch<Action>]>([
  { id: 0, list: [] },
  () => {},
]);

export const StateProvider = ({ reducer, state, children }: StateProps) => (
  <StateContext.Provider value={useReducer(reducer, state)}>
    {children}
  </StateContext.Provider>
);

export const useStateReducer = () => useContext(StateContext);
