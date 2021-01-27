import Message from 'components/Message'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { projectApis } from 'service/http/api'
import { isResponseError } from 'service/http/api/type'
import { isReportError } from 'service/utils/report-error'

export const useTransferManagerModal = (id: string) => {
  const [newManagerId, setNewManagerId] = useState('')
  const history = useHistory()

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewManagerId(event.target.value)
  }
  const handleTransferManager = useCallback(async () => {
    if (!newManagerId) {
      Message.pop({
        type: 'error',
        message: '请选择一个成员作为新的管理员',
        closable: true,
      })
      return
    }

    const result = await projectApis.changeProjectManager(id, newManagerId)
    if (isReportError(result)) return
    if (!isResponseError(result)) {
      Message.pop({
        type: 'success',
        message: '改变管理员成功',
        closable: true,
      })
      history.push('/project/joined')
    }
  }, [id, newManagerId, history])
  return {
    newManagerId,
    onChange,
    handleTransferManager,
  }
}
