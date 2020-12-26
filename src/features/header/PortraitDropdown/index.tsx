import Button from 'components/Button'
import React from 'react'
import { Container } from './index.style'

type Props = {}

const PortraitDropdown: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <span>rin</span>
          <span>430252495@qq.com</span>
        </div>
      </div>
      <div className="line"></div>
      <nav>
        <Button btnType="link" block={true}>完善个人资料</Button>
        <Button btnType="link" block={true}>修改密码</Button>
        <Button btnType="link" block={true}>退出登录</Button>
      </nav>
    </Container>
  )
}

export default PortraitDropdown
