import { RefObject, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { useDataBind } from 'service/hook/common/useDataBind'
import { FormItemRefObject } from '../FormItem'
import { authApis } from 'service/http/api'
import { isResponseError } from 'service/http/api/type'
import { useDispatch } from 'react-redux'
import { toggleAuthStatus } from '../action'
import { saveAuthData } from '../auth'
import { localStore } from 'service/utils/localStore'
import { encrypt, decrypt } from 'service/utils/base64'
import keys from 'service/local/localsotrage-key'
import Message from 'components/Message'
import { sleep } from 'service/utils/sleep'

/**
 * 登录表单
 */
export const useLoginForm = () => {
  const account = useDataBind()
  const password = useDataBind()
  const [rememberPassword, setRememberPassword] = useState(false)
  const accountRef = useRef<FormItemRefObject>(null)
  const passwordRef = useRef<FormItemRefObject>(null)
  const { setData: accountSetData } = account
  const { setData: pwdSetData } = password

  // 自动填充账号与密码 以及自动记住密码
  useEffect(() => {
    const { ACCOUNT, PASSWORD, AUTO_REMEMBER } = keys.account
    const acc = localStore.get(ACCOUNT) as string
    const pwd = localStore.get(PASSWORD) as string
    const autoRemember = localStore.get(AUTO_REMEMBER) as boolean

    if (acc && pwd) {
      accountSetData(decrypt(acc))
      pwdSetData(decrypt(pwd))
      setRememberPassword(autoRemember)
    }
  }, [accountSetData, pwdSetData])

  return {
    account,
    password,
    rememberPassword,
    setRememberPassword,
    accountRef,
    passwordRef,
  }
}

/**
 * 登录相关
 *
 * @param account 账号
 * @param password 密码
 */
export const useLoginModal = (
  account: string,
  password: string,
  rememberPassword: boolean,
  accountRef: RefObject<FormItemRefObject>,
  passwordRef: RefObject<FormItemRefObject>
) => {
  const { close, visible, inProp, duration, open } = useBaseModal(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const goToRegister = async () => {
    close()
    history.push('/auth/register')
  }

  /**
   * 自动保存账号密码
   */
  const autoSavePassword = () => {
    const { ACCOUNT, PASSWORD, AUTO_REMEMBER } = keys.account
    if (rememberPassword) {
      localStore.set(ACCOUNT, encrypt(account))
      localStore.set(PASSWORD, encrypt(password))
    } else {
      // 清除掉保存的账号和密码
      const { ACCOUNT, PASSWORD } = keys.account
      localStore.removeMany(ACCOUNT, PASSWORD)
    }
    localStore.set(AUTO_REMEMBER, rememberPassword)
  }

  const handleLogin = async () => {
    // 1. 对表单数据进行验证
    if (
      !(
        (await accountRef.current?.executeValidation(account)) &&
        (await passwordRef.current?.executeValidation(password))
      )
    ) {
      return
    }

    // 2. 执行登录接口
    const result = await authApis.login(account, password)

    if (isResponseError(result)) {
      Message.pop({
        type: 'error',
        message: result.message,
        closable: true,
      })
      return
    }
    // 3. 登录成功，切换登录状态，保存用户数据，然后跳转到应用主页
    dispatch(toggleAuthStatus(true))
    saveAuthData(result.data!)

    // 保存账号密码功能
    autoSavePassword()
    close()
    history.replace('/')
  }

  /**
   * 打开模态框
   */
  useEffect(() => {
    open()
  }, [open])

  return {
    inProp,
    duration,
    visible,
    goToRegister,
    handleLogin,
  }
}
