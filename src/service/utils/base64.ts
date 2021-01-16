/**
 * base64 编码
 *
 * @param value 待加密字符串
 */
export const encrypt = (value: string) => window.btoa(value)

/**
 * base64 解码
 *
 * @param encryptStr 待解密字符串
 */
export const decrypt = (encryptStr: string) => window.atob(encryptStr)
