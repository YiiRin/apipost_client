import { RefObject, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { useDataBind } from 'service/hook/common/useDataBind'
import { authApis } from 'service/http/api'
import { isResponseError } from 'service/http/api/type'
import { toggleAuthStatus } from '../action'
import { saveAuthData } from '../auth'
import { FormItemRefObject } from '../FormItem'

/**
 * 注册表单
 */
export const useRegisterForm = () => {
  const account = useDataBind()
  const password = useDataBind()
  const confirmPassword = useDataBind()
  const name = useDataBind()

  const accountRef = useRef<FormItemRefObject>(null)
  const passwordRef = useRef<FormItemRefObject>(null)
  const confirmPasswordRef = useRef<FormItemRefObject>(null)
  const nameRef = useRef<FormItemRefObject>(null)

  const [agreeUserAgreement, setAgreeUserAgreement] = useState(false)

  return {
    account,
    password,
    confirmPassword,
    name,
    accountRef,
    passwordRef,
    confirmPasswordRef,
    nameRef,
    agreeUserAgreement,
    setAgreeUserAgreement,
  }
}

export const useRegisterModal = (
  account: string,
  password: string,
  confirmPassword: string,
  name: string,
  accountRef: RefObject<FormItemRefObject>,
  passwordRef: RefObject<FormItemRefObject>,
  confirmPasswordRef: RefObject<FormItemRefObject>,
  nameRef: RefObject<FormItemRefObject>,
  agreeUserAgreement: boolean
) => {
  const { close, visible, duration, inProp } = useBaseModal(true)
  const history = useHistory()
  const dispatch = useDispatch()

  const goToLogin = async () => {
    await close()
    history.push('/auth/login')
  }

  const handleClose = async () => {
    close()
  }

  const handleRegister = async () => {
    // 1. 检测是否同意协议，如果不同意协议，直接返回
    if (!agreeUserAgreement) {
      // TODO:
      return
    }

    // 2. 校验表单
    if (
      !(
        (await accountRef.current?.executeValidation(account)) &&
        (await passwordRef.current?.executeValidation(password)) &&
        (await confirmPasswordRef.current?.executeValidation(
          confirmPassword
        )) &&
        (await nameRef.current?.executeValidation(name))
      )
    ) {
      return
    }

    // 3. 判断两次输入的密码是否一致
    if (password !== confirmPassword) {
      // TODO:
      return
    }

    // 4. 执行注册请求
    const result = await authApis.register(account, password, name)

    if (isResponseError(result)) {
      // TODO:
      return
    }

    // 5. 注册成功,自动登录
    const loginResult = await authApis.login(account, password)
    if (isResponseError(loginResult)) {
      // 登录失败，弹出提示框
      // TODO:
      console.log('login error')
      return
    }
    // 6. 登录成功，切换登录状态，保存用户数据，然后跳转到应用主页
    dispatch(toggleAuthStatus(true))
    saveAuthData(loginResult.data!)
    await close()
    history.replace('/')
  }
  return {
    handleRegister,
    inProp,
    duration,
    visible,
    goToLogin,
  }
}
