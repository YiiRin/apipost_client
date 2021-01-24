import {
  toggleCurrentTeam,
  updateUserInfo,
} from 'features/header/UserInfo/action'
import { Dispatch } from 'redux'
import { teamApis } from 'service/http/api'
import { Team } from 'service/http/api/team'
import { isResponseError } from 'service/http/api/type'
import { isReportError } from 'service/utils/report-error'

/**
 * 切换当前团队
 *
 * @param team
 */
export const toggleCurrentTeamThunk = (team: Team) => {
  return async (dispatch: Dispatch) => {
    const result = await teamApis.toggleCurrentTeam(team.id)
    if (isReportError(result)) return
    if (!isResponseError(result)) {
      dispatch(toggleCurrentTeam(team))
      dispatch(updateUserInfo(result.data!))
    }
  }
}
