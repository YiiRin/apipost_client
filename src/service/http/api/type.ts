/**
 * 统一的错误响应
 */
export interface ResponseError {
  error: string
  message: string
  status: number
  timestamp: string
  path: string
}

export interface ResponseSuccess<T> {
  status: number
  msg: string
  data?: T
}

/**
 * 响应类型的类型保护
 *
 * @param val 值
 */
export const isResponseError = (val: any): val is ResponseError => {
  return (val as ResponseError).error !== undefined
}
