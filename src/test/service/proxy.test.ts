import axios  from 'service/http/config/request'
import {RAWURL_PARAM_NAME, TOKEN_HEADER_NAME} from 'service/http/constants'
import md5 from 'blueimp-md5'

async function main() {
  const url = 'http://www.taobao.com'
  const result = await axios.get('/proxy', {
    params: {
      [RAWURL_PARAM_NAME]: url,
      [TOKEN_HEADER_NAME]: md5(url),
    },
    headers: {},
  })
  console.log(result)
  
}

main()