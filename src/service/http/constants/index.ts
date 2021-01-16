// 基础请求路径
export const baseURL =
  process.env.NODE_ENV === 'development'
    ? '//localhost:7343/v1/api/client'
    : '//www.iliya.org.cn:7343/v1/api/client'

// 超时时间
export const timeout = 10000

// 所有的请求错误都抛给业务
export const validateStatus = () => true

// 刷新请求的接口
export const refreshPath = '/v1/api/client/auth/refresh'
