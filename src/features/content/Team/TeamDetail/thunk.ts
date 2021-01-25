import { Dispatch } from 'redux'
import { teamApis } from 'service/http/api'
import { Team } from 'service/http/api/team'
import { isReportError } from 'service/utils/report-error'
import { loadUserInfoThunk } from 'store/user/thunk'

/**
 * 切换当前团队
 *
 * @param team
 */
export const toggleCurrentTeamThunk = (team: Team) => {
  return async (dispatch: Dispatch) => {
    const result = await teamApis.toggleCurrentTeam(team.id)
    if (isReportError(result)) return
    loadUserInfoThunk()(dispatch)
  }
}
