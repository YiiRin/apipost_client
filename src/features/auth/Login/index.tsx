import Modal from 'components/Modal'
import Header from 'layouts/Header'
import React from 'react'
import FormItem from '../FormItem'
import SmallTip from '../../../components/SmallTip'
import { useLoginForm, useLoginModal } from './hook'
import { AppContainer, Container, StyledForm } from './index.style'
import LeftFooter from './LeftFooter'

type Props = {}

const Login: React.FC<Readonly<Props>> = () => {
  // const rememberPasswordRef = useRef<HTMLInputElement>(null)
  // 登录的表单数据
  const {
    account,
    password,
    rememberPassword,
    setRememberPassword,
    accountRef,
    passwordRef,
  } = useLoginForm()
  // 表单逻辑
  const {
    duration,
    inProp,
    visible,
    goToRegister,
    handleLogin,
  } = useLoginModal(
    account.data,
    password.data,
    rememberPassword,
    accountRef,
    passwordRef
  )

  const okText = (
    <>
      <i
        className="fa fa-sign-out"
        aria-hidden="true"
        style={{ marginRight: '4px' }}
      ></i>
      登录
    </>
  )
  return (
    <AppContainer>
      <Header />
      <Modal
        title={'登录 ApiPost'}
        okText={okText}
        cancelText={'立即注册'}
        footerLeft={<LeftFooter />}
        visible={visible}
        inProp={inProp}
        duration={duration}
        onCancel={goToRegister}
        onOk={handleLogin}
      >
        <Container>
          <SmallTip
            iconClassName="fa fa-exclamation-triangle"
            text="小提示：登录后，您可以在团队协作里邀请同事们一起维护您的 APIs。"
          />

          <StyledForm>
            <FormItem
              itemId={'account'}
              labelText="账号"
              placeholder="您的注册邮箱"
              value={account.data}
              onChange={account.onChange}
              ref={accountRef}
              rules={[
                {
                  required: true,
                  message: '您输入的账号不能为空',
                },
              ]}
            />
            <FormItem
              itemId={'password'}
              labelText="密码"
              type={'password'}
              placeholder="登录密码"
              maxLength={16}
              value={password.data}
              onChange={password.onChange}
              ref={passwordRef}
              rules={[
                {
                  required: true,
                  message: '密码由字符数字组成，且不能为空',
                },
                {
                  min: 8,
                  message: '密码长度不能小于8个字符',
                },
                {
                  max: 16,
                  message: '密码长度不能大于16个字符',
                },
              ]}
            />
            <div className="remem-pwd">
              <input
                type="checkbox"
                name="rememberPassword"
                id="rememberPassword"
                checked={rememberPassword}
                onChange={(event) => setRememberPassword(event.target.checked)}
              />
              <label htmlFor="rememberPassword">记住密码</label>
            </div>
          </StyledForm>
        </Container>
      </Modal>
    </AppContainer>
  )
}

export default Login
