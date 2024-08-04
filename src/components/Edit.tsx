import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

import { Primitive, Field, Item, useStateReducer } from "../state";
import { ItemInput, TextArea, Checkbox, NotFound } from "../elements";

const Edit = styled.section`
  margin: 0 25%;
`;

const Title = styled.h3`
  margin: 1rem;
  text-align: center;
`;

const Id = styled.strong`
  display: block;
  margin: 1rem 0;
`;

const Status = styled.strong`
  display: block;
  margin: 1rem 0;
  & input {
    margin-left: 0.5rem;
  }
`;

const Name = styled(ItemInput)`
  display: block;
  width: 100%;
  margin: 1rem 0;
`;

const Anchor = styled(ItemInput)`
  display: block;
  width: 100%;
  margin: 1rem 0;
`;

const Content = styled(TextArea)`
  display: block;
  width: 100%;
  height: 25rem;
  margin: 1rem 0;
`;

const Navigation = styled(Link)`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  text-align: left;
  z-index: 1;
`;

function EditComponent() {
  const { id } = useParams();
  const [{ list }, dispatch] = useStateReducer();
  const item = list.find((entry: Item) => entry.id === Number(id));

  if (!item) return <NotFound />;

  const { name, link, content, active } = item;

  function update(name: Field, value: Primitive) {
    dispatch({
      type: "update",
      item: { ...item, [name]: value },
    });
  }

  return (
    <Edit>
      <Title>{name}</Title>
      <Id>Id: {id}</Id>
      <Status>
        Active:{" "}
        <Checkbox
          checked={active}
          onChange={(e) => update("active", e.target.checked)}
          color="white"
        />
      </Status>
      <Name
        type="text"
        placeholder="Name"
        label="Name"
        value={name}
        onChange={(e) => update("name", e.target.value)}
      />
      <Anchor
        type="text"
        placeholder="Link"
        label="Link"
        value={link}
        onChange={(e) => update("link", e.target.value)}
      />
      <Content
        placeholder="Content"
        label="Content"
        value={content}
        onChange={(e) => update("content", e.target.value)}
      />
      <Navigation to={`/`}>Overview</Navigation>
    </Edit>
  );
}

export default EditComponent;
