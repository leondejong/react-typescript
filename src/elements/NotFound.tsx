import styled from 'styled-components'

const NotFound = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
`

function NotFoundComponent () {
  return <NotFound>404: Not Found</NotFound>
}

export default NotFoundComponent
