import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import { Header, Footer, Overview, Detail, Edit } from './'
import { NotFound } from '../elements'

const Layout = styled.div`
  flex: 1;
`

function LayoutComponent () {
  const copy = `©${new Date().getFullYear()}`

  return (
    <Layout>
      <Header>Physicists</Header>
      <main>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='detail/:id' element={<Detail />} />
          <Route path='edit/:id' element={<Edit />} />
          <Route element={<NotFound />} />
        </Routes>
      </main>
      <Footer>{copy}</Footer>
    </Layout>
  )
}

export default LayoutComponent
