import styled from "styled-components";
import { Link } from "react-router-dom";

import { Primitive, Field, Item, useStateReducer } from "../state";
import { Button, ItemInput, Checkbox } from "../elements";

type ItemProps = {
  item: Item;
};

const Row = styled.tr`
  text-align: center;
  background: var(--dark-tint);
  & td {
    border-radius: 0.25rem;
  }
`;

function ItemComponent({ item }: ItemProps) {
  const { id, name, active } = item;
  const [, dispatch] = useStateReducer();

  function update(name: Field, value: Primitive) {
    dispatch({
      type: "update",
      item: { ...item, [name]: value },
    });
  }

  function remove() {
    dispatch({
      type: "remove",
      item,
    });
  }

  return (
    <Row>
      <td>{id}</td>
      <td>
        <Checkbox
          checked={active}
          onChange={(e) => update("active", e.target.checked)}
          color="white"
        />
      </td>
      <td>
        <ItemInput
          type="text"
          placeholder="Name"
          label="Name"
          value={name}
          onChange={(e) => update("name", e.target.value)}
          background="transparent"
          border="white"
          color="white"
        />
      </td>
      <td>
        <Link to={`detail/${id}`}>Detail</Link>
      </td>
      <td>
        <Link to={`edit/${id}`}>
          <Button type="button" background="blue" border="blue">
            Edit
          </Button>
        </Link>
        <Button type="button" onClick={remove} background="red" border="red">
          Remove
        </Button>
      </td>
    </Row>
  );
}

export default ItemComponent;
