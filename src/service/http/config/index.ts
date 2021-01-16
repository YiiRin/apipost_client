import { getRequest } from './request'

export const get = async (url: string, params = {}, withToken = true) => {
  return getRequest(withToken)(url, {
    params,
  })
}

export const post = async (
  url: string,
  data = {},
  params = {},
  withToken = true
) => {
  return getRequest(withToken)(url, {
    method: 'post',
    data,
    params,
  })
}

export const put = async (
  url: string,
  data = {},
  params = {},
  withToken = true
) => {
  return getRequest(withToken)(url, {
    method: 'put',
    data,
    params,
  })
}

export const patch = async (
  url: string,
  data = {},
  params = {},
  withToken = true
) => {
  return getRequest(withToken)(url, {
    method: 'patch',
    data,
    params,
  })
}

export const remove = async (url: string, withToken = true) => {
  return getRequest(withToken)(url, {
    method: 'delete',
  })
}
