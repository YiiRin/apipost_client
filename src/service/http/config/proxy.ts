import axios from 'axios'
import * as proxyConstants from '../constants/proxy'

const proxyInstance = axios.create({
  baseURL: proxyConstants.PROXY_SERVER_URL,
  headers: {
    ...proxyConstants.PROXY_BASE_HEADERS,
  },
  
})
