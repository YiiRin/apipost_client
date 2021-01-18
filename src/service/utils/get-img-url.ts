const baseUrl =
  process.env.NODE_ENV === 'development'
    ? '//localhost:8000/static'
    : '//www.iliya.org.cn:7342/static'

/**
 *
 * 根据基础路径获取拼接后的路径
 *
 * @param path 基础路径
 */
export const getImgUrl = (path: string) => {
  const directoryPath = path.substring(0, 10)
  return `${baseUrl}/${directoryPath}/${path}`
}
