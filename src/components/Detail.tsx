import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'

import { Item, useStateReducer } from '../state'
import { NotFound } from '../elements'

const Detail = styled.section`
  margin: 0 25%;
`

const Title = styled.h3`
  margin: 1rem;
  text-align: center;
`

const Id = styled.strong`
  display: block;
  margin: 1rem 0;
`

const Status = styled.strong`
  display: block;
  margin: 1rem 0;
`

const Anchor = styled.a`
  display: block;
  margin: 1rem 0;
`

const Content = styled.p`
  white-space: pre-wrap;
  margin: 1rem 0 4rem 0;
`

const Navigation = styled(Link)`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 1rem 1rem 2rem;
  text-align: left;
  z-index: 1;
`

function DetailComponent () {
  const { id } = useParams()
  const [{ list }] = useStateReducer()
  const item = list.find((entry: Item) => entry.id === Number(id))

  if (!item) return <NotFound />

  const { name, link, content, active } = item

  return (
    <Detail>
      <Title>{name}</Title>
      <Id>Id: {id}</Id>
      <Status>Active: {String(active)}</Status>
      <Anchor href={link} target='_blank'>
        {link}
      </Anchor>
      <Content>{content}</Content>
      <Navigation to={`/`}>Overview</Navigation>
    </Detail>
  )
}

export default DetailComponent
