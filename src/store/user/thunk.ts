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

    if (teamId) {
      try {
        const result = await teamApis.getTeamById(teamId)
        result.data && dispatch(loadCurrentTeam.success(result.data))
      } catch (error) {
        dispatch(loadCurrentTeam.failure())
      }
    } else {
      dispatch(
        loadCurrentTeam.success({
          team: {} as Team,
          members: [],
        })
      )
    }
  }
}

/**
 * 加载用户信息
 *
 * @param isLoadCurrentTeam 是否加载当前团队，默认为 true
 */
export const loadUserInfoThunk = (isLoadCurrentTeam = true) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadUserInfo.request())

    try {
      const result = await userApis.getUserInfo()
      if (result.data) {
        dispatch(loadUserInfo.success(result.data))
        if (isLoadCurrentTeam) {
          if (!result.data.currentTeamId) {
            dispatch(
              toggleCurrentTeam({
                team: {} as Team,
                members: [],
              })
            )
          } else {
            loadCurrentTeamThunk(result.data.currentTeamId)(dispatch)
          }
        }
      }
    } catch (error) {
      dispatch(loadUserInfo.failure())
    }
  }
}
