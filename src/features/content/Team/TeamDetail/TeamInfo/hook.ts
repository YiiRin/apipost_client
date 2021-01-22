import Message from 'components/Message'
import { toggleCurrentTeam } from 'features/header/UserInfo/action'
import { currentTeamSelector } from 'features/header/UserInfo/selector'
import { Dispatch, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { teamApis } from 'service/http/api'
import { Team } from 'service/http/api/team'
import { isReportError } from 'service/utils/report-error'
import PubSub from 'pubsub-js'
import { UPDATE_TEAM_NAME } from '../../pubsub-token'

export const useUpdateTeamName = (teamId: string, setTeam: Dispatch<Team>) => {
  const { visible, inProp, duration, close, open } = useBaseModal(false, 400)
  const teamNameRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const currentTeam = useSelector(currentTeamSelector)

  const handleUpdateTeamName = async () => {
    const teamName = teamNameRef.current?.value

    if (!teamName || !teamName.trim()) {
      Message.pop({
        type: 'warning',
        message: '请输入团队名称，建议输入公司名/项目组名称等',
        closable: true,
      })
      return
    }

    const result = await teamApis.updateTeamName(teamId, teamName)
    if (isReportError(result)) return

    if (result.data) {
      setTeam(result.data)
      PubSub.publish(UPDATE_TEAM_NAME, result.data)
      if (currentTeam && currentTeam.id === result.data.id) {
        dispatch(toggleCurrentTeam(result.data))
      }
      close()
    }
  }

  return {
    visible,
    inProp,
    duration,
    open,
    close,
    handleUpdateTeamName,
    teamNameRef,
  }
}
