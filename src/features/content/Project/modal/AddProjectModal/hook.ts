import {
  currentTeamSelector,
} from 'store/user/selector'
import { useDispatch, useSelector } from 'react-redux'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import Message from 'components/Message'
import { projectApis } from 'service/http/api'
import { isReportError } from 'service/utils/report-error'
import { isResponseError } from 'service/http/api/type'
import { sleep } from 'service/utils/sleep'
import { loadUserInfoThunk } from 'store/user/thunk'
import { ADD_PROJECT } from '../../ProjectView/constants'

export const useAddProjectModal = (
  projectName: string,
  selectedPartners: string[],
  modalOptions: ReturnType<typeof useBaseModal>
) => {
  const currentTeam = useSelector(currentTeamSelector)
  const dispatch = useDispatch()

  const handleAddProject = async () => {
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
    const result = await projectApis.addProject(
      currentTeam.id,
      projectName,
      selectedPartners
    )

    if (isReportError(result)) return
    if (!isResponseError(result)) {
      dispatch(loadUserInfoThunk())
      PubSub.publish(ADD_PROJECT, result.data)
      modalOptions.close()
      await sleep(modalOptions.duration)
    }
  }

  return {
    ...modalOptions,
    handleAddProject,
  }
}
