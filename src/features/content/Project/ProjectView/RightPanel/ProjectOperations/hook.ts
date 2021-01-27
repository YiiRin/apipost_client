import Message from 'components/Message'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import { useBaseConfirm } from 'service/hook/common/useBaseConfirm'
import { projectApis } from 'service/http/api'
import { Project, ProjectStatus } from 'service/http/api/project'
import { isResponseError } from 'service/http/api/type'
import { isReportError } from 'service/utils/report-error'
import { updateUserInfo } from 'store/user/action'
import { loadUserInfoThunk } from 'store/user/thunk'
import {
  CLONE_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT,
  EXIT_PROJECT,
  TOGGLE_PROJECT_STATUS,
  UPDATE_PROJECT,
} from '../../constants'
import { ProjectType } from '../../LeftPanel/ProjectList/hook'

export const useTargetProject = () => {
  const { state } = useLocation<Project>()

  return { project: state }
}

export const useSubscribeUpdate = (
  project: Project,
  openUpdateModal: Function
) => {
  const [refreshToken, setRefreshToken] = useState(false)
  const refresh = useCallback(() => {
    setRefreshToken((prev) => !prev)
  }, [])
  useEffect(() => {
    const updateProjectToken = PubSub.subscribe(
      UPDATE_PROJECT,
      (_: string, data: Project) => {
        project.name = data.name
      }
    )

    const deleteProjectToken = PubSub.subscribe(
      DELETE_PROJECT,
      (_: string, data: Project) => {
        project.id = (null as unknown) as string
      }
    )

    const exitProjectToken = PubSub.subscribe(
      EXIT_PROJECT,
      (_: string, data: Project) => {
        project.id = (null as unknown) as string
      }
    )

    const editProjectToken = PubSub.subscribe(
      EDIT_PROJECT,
      (_: string, data: ProjectType) => {
        if (data === 'managed') {
          openUpdateModal()
        }
      }
    )

    const toggleProjectStatusToken = PubSub.subscribe(
      TOGGLE_PROJECT_STATUS,
      (_: string, data: Project) => {
        project.status = data.status
        refresh()
      }
    )

    return () => {
      PubSub.unsubscribe(updateProjectToken)
      PubSub.unsubscribe(deleteProjectToken)
      PubSub.unsubscribe(exitProjectToken)
      PubSub.unsubscribe(editProjectToken)
      PubSub.unsubscribe(toggleProjectStatusToken)
    }
  }, [project, openUpdateModal, refresh])
}

interface RouteParams {
  projectType: ProjectType
  id: string
}

export const useTargetProjectOperations = () => {
  const { project } = useTargetProject()
  const {
    params: { projectType },
  } = useRouteMatch<RouteParams>()
  const dispatch = useDispatch()
  const history = useHistory()
  const deleteConfirmOpretions = useBaseConfirm(false, 300)
  const changeStatusConfirmOpretions = useBaseConfirm(false, 300)

  const goToApiTerminal = useCallback(async () => {
    const result = await projectApis.changeEditedProject(project.id)
    if (!isResponseError(result)) {
      result.data && dispatch(updateUserInfo(result.data))
      history.push(`/apis`, project)
    }
  }, [dispatch, history, project])

  const { id } = project
  const { close } = deleteConfirmOpretions
  const deleteProject = useCallback(async () => {
    const result = await projectApis.deleteProject(id)
    if (isReportError(result)) return
    close()
    PubSub.publish(DELETE_PROJECT, id)
    dispatch(loadUserInfoThunk())
    Message.pop({
      type: 'success',
      message: '删除项目成功',
      closable: true,
    })
  }, [id, dispatch, close])

  const exitProject = useCallback(async () => {
    const result = await projectApis.exitProject(id)
    if (isReportError(result)) return
    close()
    PubSub.publish(EXIT_PROJECT, id)
    dispatch(loadUserInfoThunk())
    Message.pop({
      type: 'success',
      message: '退出项目成功',
      closable: true,
    })
  }, [id, dispatch, close])

  const { status } = project
  const { close: iClose } = changeStatusConfirmOpretions
  const toggleProjectStatus = useCallback(async () => {
    const updatedStatus =
      status === ProjectStatus.LOCKED
        ? ProjectStatus.UNLOCKED
        : ProjectStatus.LOCKED

    const result = await projectApis.toggleProjectStatus(id, updatedStatus)
    if (isReportError(result)) return
    if (!isResponseError(result)) {
      PubSub.publish(TOGGLE_PROJECT_STATUS, result.data)
      iClose()
      Message.pop({
        type: 'success',
        message: '操作成功',
        closable: true,
      })
    }
  }, [id, status, iClose])

  const cloneProject = useCallback(async () => {
    const result = await projectApis.cloneProject(id)

    if (isReportError(result)) return
    if (!isResponseError(result)) {
      Message.pop({
        type: 'success',
        message: '克隆项目成功',
        closable: true,
      })
      PubSub.publish(CLONE_PROJECT, result.data)
    }
  }, [id])

  return {
    projectType,
    project,
    goToApiTerminal,
    deleteProject,
    deleteConfirmOpretions,
    toggleProjectStatus,
    changeStatusConfirmOpretions,
    cloneProject,
    exitProject,
  }
}
