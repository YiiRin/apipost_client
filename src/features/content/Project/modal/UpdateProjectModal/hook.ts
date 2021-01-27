import Message from 'components/Message'
import { useDispatch } from 'react-redux'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { projectApis } from 'service/http/api'
import { isResponseError } from 'service/http/api/type'
import { isReportError } from 'service/utils/report-error'
import { loadUserInfoThunk } from 'store/user/thunk'
import { UPDATE_PROJECT } from '../../ProjectView/constants'

export const useUpdateProjectModal = (
  projectId: string,
  projectName: string,
  selectedPartners: string[],
  modalOptions: ReturnType<typeof useBaseModal>
) => {
  const dispatch = useDispatch()

  const handleUpdateProject = async () => {
    //1 . 验证表单
    if (!projectName.trim().length) {
      Message.pop({
        type: 'error',
        message: '项目名不能为空',
        closable: true,
      })
      return
    }

    // 2. 发送请求
    const result = await projectApis.updateProject(
      projectId,
      projectName,
      selectedPartners
    )

    if (isReportError(result)) return
    if (!isResponseError(result)) {
      dispatch(loadUserInfoThunk())
      PubSub.publish(UPDATE_PROJECT, result.data)
      modalOptions.close()
      Message.pop({
        type: 'success',
        message: '编辑项目信息成功',
        closable: true,
      })
    }
  }

  return {
    ...modalOptions,
    handleUpdateProject,
  }
}
