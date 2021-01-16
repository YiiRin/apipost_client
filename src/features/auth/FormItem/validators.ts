/**
 * 验证输入是否为空
 *
 * @param {string} value
 */
export const requiredValidator = (value: string, message: string) => {
  return value.length > 0 ? Promise.resolve() : Promise.reject(message)
}

/**
 * 验证输入是否满足一定的长度
 *
 * @param {string} value
 * @param {string} message
 */
export const lengthValidator = (
  value: string,
  min: number,
  max: number,
  message: string
) => {
  return value.length >= min && value.length <= max
    ? Promise.resolve()
    : Promise.reject(message)
}

/**
 * 验证输入是否满足一定的正则表达式
 *
 * @param {string} value
 * @param {RegExp} pattern
 * @param {string} message
 */
export const patternValidator = (
  value: string,
  pattern: RegExp,
  message: string
) => {
  return pattern.test(value) ? Promise.resolve() : Promise.reject(message)
}
