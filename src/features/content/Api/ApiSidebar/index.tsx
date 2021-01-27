import React from 'react'
import { Container } from './index.style'
import { IoMdRefresh, IoMdShareAlt } from 'react-icons/io'
import Title from 'components/Title'

type Props = {}

const ApiSidebar: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <div className="proj-info">
        <span>hello_world</span>
        <div className="icons">
          <span className="icon first">
            <IoMdRefresh />
            <Title text="更新列表数据" />
          </span>
          <span className="icon">
            <IoMdShareAlt />
            <Title text="分享项目" />
          </span>
        </div>
      </div>
    </Container>
  )
}

export default ApiSidebar
