import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import {
  StateProvider,
  persistedState,
  persistedReducer,
  state as defaultState,
} from "./state";
import { Layout } from "./components";

// Check if Object, excludes: Array, Date, Null, Set, String, Undefined
export function isObject(v: unknown): boolean {
  return Object.prototype.toString.call(v) === "[object Object]";
}

const Application = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const App = () => (
  <StateProvider
    state={isObject(persistedState) ? persistedState : defaultState}
    reducer={persistedReducer}
  >
    <BrowserRouter>
      <Application>
        <Layout />
      </Application>
    </BrowserRouter>
  </StateProvider>
);

export default App;
