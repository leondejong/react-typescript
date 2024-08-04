import styled from "styled-components";

import { useStateReducer } from "../state";
import { Button } from "../elements";
import { List } from "./";

const Overview = styled.section`
  margin: 0 12.5%;
  & button {
    margin: 0.25rem;
  }
`;

const Actions = styled.section`
  display: flex;
  justify-content: right;
  margin: 1rem 0;
`;

const Options = styled.section`
  display: flex;
  justify-content: left;
  margin: 1rem 0;
`;

function OverviewComponent() {
  const [, dispatch] = useStateReducer();

  function clear() {
    if (window.confirm("Are you sure you want to clear all items?")) {
      dispatch({ type: "clear" });
    }
  }

  function example() {
    if (
      window.confirm(
        "Are you sure you want to replace all items by the example?"
      )
    ) {
      dispatch({ type: "default" });
    }
  }

  function add() {
    dispatch({
      type: "add",
      item: {
        id: 0,
        name: "name",
        link: "link",
        content: "content",
        active: false,
      },
    });
  }

  return (
    <Overview>
      <Actions>
        <Button type="button" onClick={example}>
          Example
        </Button>
        <Button type="button" onClick={clear}>
          Clear
        </Button>
      </Actions>
      <List />
      <Options>
        <Button type="button" onClick={add} background="cyan" border="cyan">
          Add
        </Button>
      </Options>
    </Overview>
  );
}

export default OverviewComponent;
