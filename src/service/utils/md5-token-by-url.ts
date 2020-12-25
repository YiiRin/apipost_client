import md5 from 'blueimp-md5'

/**
 * generate the md5 token by url
 * 
 * @param url url string
 */
export const md5TokenByUrl = (url: string) => md5(url)

