import React from 'react'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}

const Header = styled.header`
  display: flex;
  justify-content: center;
`

const Heading = styled.h1`
  margin: 1rem;
  font-size: 5rem;
`

const HeaderComponent = ({ children }: Props) => (
  <Header>
    <Heading>{children}</Heading>
  </Header>
)

export default HeaderComponent
