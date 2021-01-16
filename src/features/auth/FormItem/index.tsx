import React, { InputHTMLAttributes, useImperativeHandle } from 'react'
import { Rule, useItemValidate } from './hook'
import { Container } from './index.style'

type Props = {
  /**
   * 标签
   */
  labelText: string

  /**
   * 表单项的 ID
   */
  itemId: string

  /**
   * 验证规则
   */
  rules?: Rule[]
}

type FormItemProps = InputHTMLAttributes<HTMLInputElement> & Props

export type FormItemRefObject = {
  executeValidation: (value: string) => Promise<boolean>
}

const FormItem = React.forwardRef<FormItemRefObject, Readonly<FormItemProps>>(
  (props, ref) => {
    const { labelText, itemId, type = 'text', rules, onChange, ...rest } = props
    const {
      errorMsg,
      handleChange,
      handleFocus,
      executeValidation,
    } = useItemValidate(rules, onChange)
    useImperativeHandle(
      ref,
      () => ({
        executeValidation,
      }),
      [executeValidation]
    )
    return (
      <Container className="form-item">
        <label htmlFor={itemId}>{labelText}</label>
        <input
          type={type}
          id={itemId}
          onChange={handleChange}
          onFocus={handleFocus}
          {...rest}
        />
        <div
          className={'error'}
          style={{
            display: errorMsg.length === 0 ? 'none' : 'block',
          }}
        >
          {errorMsg}
        </div>
      </Container>
    )
  }
)

export default FormItem
