/**
 * the base headers used to proxy server
 */
export const PROXY_BASE_HEADERS = {
  'User-Agent': 'ApiPostRuntime/V0.0.1',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    Accept: '*/*',
    'Cache-Control': 'no-cache',
}

/**
 * the token header name used to each request for proxy server
 */
export const TOKEN_HEADER_NAME = 'ApiPost-Token'

/**
 * Proxy server address
 */
export const PROXY_SERVER_URL = '//'