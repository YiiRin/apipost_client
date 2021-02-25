import Button from 'components/Button'
import React from 'react'
import { Container } from './index.style'
import { BsTrash } from 'react-icons/bs'
import { GiRadarSweep } from 'react-icons/gi'
import Line from 'components/Line'

type Props = {}

const SidebarOperations: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <div className="zxkav-1">
        <Button className="first">
          <span className="icon">+</span>新建目录
        </Button>
        <Button>
          <span className="icon">
            <BsTrash />
          </span>
          回收站
        </Button>
      </div>
      <Line
        variant="dropdown"
        width="240px"
        height="1px"
        style={{
          margin: '.5em auto 1.25em',
        }}
      />
      <div className="zxkav-2">
        <Button className="first">
          <span className="icon">
            <GiRadarSweep />
          </span>
          定位到当前接口目录
        </Button>
        <Button>
          <span className="icon">&gt;</span>全部收起
        </Button>
      </div>
    </Container>
  )
}

export default SidebarOperations
