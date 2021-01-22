import Button from 'components/Button'
import Modal from 'components/Modal'
import Header from 'layouts/Header'
import React from 'react'
import FormItem from '../FormItem'
import SmallTip from '../../../components/SmallTip'
import { useRegisterForm, useRegisterModal } from './hook'
import { AppContainer, Container, StyledForm } from './index.style'
import LeftFooter from './LeftFooter'

type Props = {}

const Register: React.FC<Readonly<Props>> = (props) => {
  const {
    account,
    agreeUserAgreement,
    confirmPassword,
    name,
    password,
    accountRef,
    confirmPasswordRef,
    nameRef,
    passwordRef,
    setAgreeUserAgreement,
  } = useRegisterForm()
  const {
    duration,
    goToLogin,
    handleRegister,
    inProp,
    visible,
  } = useRegisterModal(
    account.data,
    password.data,
    confirmPassword.data,
    name.data,
    accountRef,
    passwordRef,
    confirmPasswordRef,
    nameRef,
    agreeUserAgreement
  )
  const okText = (
    <>
      <i
        className="fa fa-sign-out"
        aria-hidden="true"
        style={{ marginRight: '4px' }}
      ></i>
      注册
    </>
  )
  return (
    <AppContainer>
      <Header />
      <Modal
        title="注册 ApiPost 账号"
        okText={okText}
        cancelText="已有帐号? 去登录"
        onOk={handleRegister}
        onCancel={goToLogin}
        visible={visible}
        footerLeft={<LeftFooter />}
        inProp={inProp}
        duration={duration}
      >
        <Container>
          <SmallTip
            iconClassName="fa fa-exclamation-triangle"
            text="小提示：登录后，您可以在团队协作里邀请同事们一起维护您的 APIs。"
          />
          <StyledForm>
            <FormItem
              labelText="邮箱"
              itemId="email"
              placeholder="请使用常用的邮箱账号"
              rules={[
                {
                  required: true,
                  message: '抱歉，邮箱账号不能为空',
                },
                {
                  max: 30,
                  message: '抱歉，邮箱账号不能超过30个字符',
                },
                {
                  pattern: /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/,
                  message: '请输入正确的邮箱账号格式',
                },
              ]}
              ref={accountRef}
              value={account.data}
              onChange={account.onChange}
            />
            <FormItem
              labelText="密码"
              itemId="password"
              placeholder="设置登录密码"
              type="password"
              maxLength={16}
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
              ref={passwordRef}
              value={password.data}
              onChange={password.onChange}
            />
            <FormItem
              labelText="确认密码"
              itemId="confirmPassword"
              placeholder="请确认登录密码"
              type="password"
              maxLength={16}
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
              ref={confirmPasswordRef}
              value={confirmPassword.data}
              onChange={confirmPassword.onChange}
            />
            <FormItem
              labelText="昵称"
              itemId="name"
              placeholder="请设置一个账号昵称"
              rules={[
                {
                  required: true,
                  message: '昵称不能为空，请输入您的昵称',
                },
                {
                  max: 30,
                  message: '昵称长度不能大于30个字符',
                },
              ]}
              ref={nameRef}
              value={name.data}
              onChange={name.onChange}
            />
            <div className="agree-policy">
              <input
                type="checkbox"
                name="isAgreePolicy"
                id="isAgreePolicy"
                checked={agreeUserAgreement}
                onChange={(event) =>
                  setAgreeUserAgreement(event.target.checked)
                }
              />
              <label htmlFor="isAgreePolicy">我同意</label>
              <Button
                btnType="link"
                href="https://www.apipost.cn/rules.html"
                target="_blank"
                className="privacy"
              >
                《隐私政策》
              </Button>
            </div>
          </StyledForm>
        </Container>
      </Modal>
    </AppContainer>
  )
}

export default Register
