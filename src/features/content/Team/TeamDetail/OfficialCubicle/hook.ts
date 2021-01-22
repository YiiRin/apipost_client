import Message from 'components/Message'
import { userInfoSelector } from 'features/header/UserInfo/selector'
import { loadUserInfoThunk } from 'features/header/UserInfo/thunk'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { useBaseConfirm } from 'service/hook/common/useBaseConfirm'
import PubSub from 'pubsub-js'
import { RELOAD_TEAMS } from '../../pubsub-token'
export const useChangeTeamMemberRole = (
  userId: string,
  currentUserId: string,
  teamId: string,
  changeRole: Function
) => {
  const rest = useBaseConfirm(false, 400)
  const history = useHistory()

  const handleChangeRole = async () => {
    const isSuccess = (await changeRole(userId)()) as boolean
    if (isSuccess) {
      if (userId === currentUserId) {
        history.push(`/team/joined/${teamId}`, teamId)
      }
    }
  }

  return {
    ...rest,
    handleChangeRole,
  }
}

/**
 * 退出团队
 *
 * @param teamId
 * @param userId
 * @param exitTeam
 */
export const useExitTeam = (
  teamId: string,
  userId: string,
  exitTeam: Function
) => {
  const rest = useBaseConfirm(false, 400)
  const userInfo = useSelector(userInfoSelector)
  const dispatch = useDispatch()
  // const history = useHistory()

  const handleExitTeam = async () => {
    await exitTeam(userId, teamId)
    if (userId === userInfo.id) {
      if (teamId === userInfo.currentTeamId) {
        dispatch(loadUserInfoThunk())
      }
      PubSub.publish(RELOAD_TEAMS)
    }
  }

  return {
    ...rest,
    handleExitTeam,
  }
}

export const useAddMember = (teamId: string, addTeam: Function) => {
  const rest = useBaseModal(false, 400)
  const emailRef = useRef<HTMLInputElement>(null)
  const confirmEmailRef = useRef<HTMLInputElement>(null)

  const handleAddMember = async () => {
    const email = emailRef.current?.value
    const confirmEmail = confirmEmailRef.current?.value

    if (!email || !confirmEmail || email !== confirmEmail) {
      Message.pop({
        type: 'error',
        message: '请输入一致的邮箱',
        closable: true,
      })
      return
    }

    await addTeam(teamId, email)
    rest.close()
  }

  return {
    emailRef,
    confirmEmailRef,
    handleAddMember,
    ...rest,
  }
}
