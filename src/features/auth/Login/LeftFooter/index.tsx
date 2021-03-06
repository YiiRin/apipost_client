import Button from 'components/Button'
import React from 'react'
import { Container } from './index.style'

type Props = {}

const LeftFooter: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <Button
        className="find-pwd"
        btnType="link"
        target="_blank"
        href="http://www.iliya.org.cn:7340/user/forget"
      >
        找回密码?
      </Button>
      <Button
        btnType="link"
        target="_blank"
        className="privacy"
        href="https://www.apipost.cn/rules.html"
      >
        《隐私政策》
      </Button>
    </Container>
  )
}

export default LeftFooter
