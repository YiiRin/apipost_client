import { ChangeEventHandler, useState } from 'react'
import {
  lengthValidator,
  patternValidator,
  requiredValidator,
} from './validators'

export interface Rule {
  /**
   * 表单内容是否可以为空
   */
  required?: boolean
  /**
   * 表单内容的最小长度
   */
  min?: number
  /**
   * 表单内容的最大长度
   */
  max?: number
  /**
   * 表单内容应该满足的正则表达式
   */
  pattern?: RegExp
  /**
   * 自定义验证规则，如果 resolve,则验证通过，如果 reject,则使用 reject 的消息
   */
  validator?: (value: string) => Promise<string>
  /**
   * 验证失败显示的消息
   */
  message?: string
}

/**
 * 根据验证规则生成对应的验证器
 *
 * @param rules 验证规则
 */
export const useValidator = (rules: Rule[] = []) => {
  /**
   * 验证方法
   *
   * @param value 输入的表单值
   */
  const validator = async (value: string) => {
    const realValue = value.trim().replace(' ', '')
    let errorMsg = ''

    try {
      for (const rule of rules) {
        if (rule.required) {
          await requiredValidator(
            realValue,
            rule.message ?? '输入的内容不允许为空'
          )
        } else if (rule.max || rule.min) {
          await lengthValidator(
            realValue,
            rule.min ?? 0,
            rule.max ?? Number.MAX_SAFE_INTEGER,
            rule.message ?? '您输入的内容长度不符合要求'
          )
        } else if (rule.pattern) {
          await patternValidator(
            realValue,
            rule.pattern,
            rule.message ?? '您输入的内容不满足正则表达式的要求'
          )
        } else if (rule.validator) {
          await rule.validator(realValue)
        }
      }
    } catch (error) {
      errorMsg = error
    }

    return errorMsg
  }

  return validator
}

/**
 * 表单验证
 *
 * @param rules 验证规则
 * @param onChange 值变动的回调
 */
export const useItemValidate = (
  rules: Rule[] = [],
  onChange: ChangeEventHandler<HTMLInputElement> = () => {}
) => {
  const [errorMsg, setErrorMsg] = useState('')
  const validator = useValidator(rules)

  

  const executeValidation = async (value: string) => {
    const msg = await validator(value)
    setErrorMsg(msg)
    return msg.length === 0
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    onChange(event)
    executeValidation(event.target.value)
  }

  const handleFocus = () => {
    setErrorMsg('')
  }

  return {
    errorMsg,
    handleChange,
    handleFocus,
    executeValidation,
  }
}
