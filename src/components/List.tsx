import styled from "styled-components";

import { Item, useStateReducer } from "../state";
import { Item as ListItem } from "./";

const Table = styled.table`
  width: 100%;
  border-spacing: 0.1875rem;
  & input[type="text"] {
    width: calc(100% - 0.5rem);
    margin: 0.25rem;
  }
`;

function ListComponent() {
  const [{ list }] = useStateReducer();

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Active</th>
          <th>Name</th>
          <th>Detail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item: Item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  );
}

export default ListComponent;
