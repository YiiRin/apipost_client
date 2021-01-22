import Message from 'components/Message'
import { isResponseError } from 'service/http/api/type'

export const isReportError = (result: any) => {
  let flag = false
  if (isResponseError(result)) {
    Message.pop({
      type: 'error',
      message: result.message,
      closable: true,
      duration: 3,
    })
    flag = true
  }

  return flag
}
