import React from 'react'
import { Container } from './index.style'
import Header from 'layouts/Header'
import Main from 'layouts/Main'
import Footer from 'layouts/Footer'

type Props = {}

const ApiPost: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default ApiPost
