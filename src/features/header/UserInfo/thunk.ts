import { Dispatch } from 'redux'
import { teamApis, userApis } from 'service/http/api'
import { Team } from 'service/http/api/team'
import { loadCurrentTeam, loadUserInfo, toggleCurrentTeam } from './action'

/**
 * 加载当前团队
 *
 * @param teamId 团队 id
 */
export const loadCurrentTeamThunk = (teamId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadCurrentTeam.request())

    try {
      const result = await teamApis.getTeamById(teamId)
      dispatch(loadCurrentTeam.success(result.data!.team))
    } catch (error) {
      dispatch(loadCurrentTeam.failure())
    }
  }
}

/**
 * 加载用户信息
 *
 */
export const loadUserInfoThunk = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadUserInfo.request())

    try {
      const result = await userApis.getUserInfo()
      dispatch(loadUserInfo.success(result.data!))
      if (!result.data?.currentTeamId) {
        dispatch(toggleCurrentTeam({} as Team))
      }
    } catch (error) {
      dispatch(loadUserInfo.failure())
    }
  }
}
