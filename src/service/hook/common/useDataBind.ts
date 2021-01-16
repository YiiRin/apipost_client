import { ChangeEventHandler, useState } from 'react'

/**
 * 表单数据双向绑定
 *
 * @param initialValue 初始值
 */
export const useDataBind = (initialValue = '') => {
  const [data, setData] = useState(initialValue)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setData(event.target.value)
  }

  return {
    data,
    setData,
    onChange,
  }
}
