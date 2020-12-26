import Content from 'layouts/Content'
import SideBar from 'layouts/SideBar'
import React from 'react'
import {Container} from './index.style'

type Props = {
}

const Main: React.FC<Readonly<Props>> = (props) => {

    return (
        <Container>
            <SideBar />
            <Content />
        </Container>
    )
}

export default Main