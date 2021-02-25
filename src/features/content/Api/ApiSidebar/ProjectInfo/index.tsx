import Title from 'components/Title'
import React from 'react'
import { IoMdRefresh, IoMdShareAlt } from 'react-icons/io'
import {Container} from './index.style'

type Props = {}

const ProjectInfo: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
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
    </Container>
  )
}

export default ProjectInfo
