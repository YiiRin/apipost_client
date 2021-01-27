import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { projectApis } from 'service/http/api'
import { Project } from 'service/http/api/project'
import { isResponseError } from 'service/http/api/type'
import { currentTeamSelector } from 'store/user/selector'
import PubSub from 'pubsub-js'
import {
  ADD_PROJECT,
  CLONE_PROJECT,
  DELETE_PROJECT,
  EXIT_PROJECT,
  TOGGLE_PROJECT_STATUS,
  UPDATE_PROJECT,
} from '../../constants'
export type ProjectType = 'managed' | 'joined'

interface RouteMatch {
  projectType: ProjectType
}

export const useSubscribeUpdate = (
  type: ProjectType,
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>
) => {
  useEffect(() => {
    const addProjectToken = PubSub.subscribe(
      ADD_PROJECT,
      (_: string, data: Project) => {
        if (type === 'managed') {
          setProjects((prev) => [...prev, data])
        }
      }
    )

    const updateProjectToken = PubSub.subscribe(
      UPDATE_PROJECT,
      (_: string, data: Project) => {
        if (type === 'managed') {
          setProjects((prev) =>
            prev.map((proj) => (proj.id === data.id ? data : proj))
          )
        }
      }
    )

    const deleteProjectToken = PubSub.subscribe(
      DELETE_PROJECT,
      (_: string, data: string) => {
        if (type === 'managed') {
          setProjects((prev) => prev.filter((proj) => proj.id !== data))
        }
      }
    )

    const exitProjectToken = PubSub.subscribe(
      EXIT_PROJECT,
      (_: string, data: string) => {
        if (type === 'joined') {
          setProjects((prev) => prev.filter((proj) => proj.id !== data))
        }
      }
    )

    const toggleProjectStatusToken = PubSub.subscribe(
      TOGGLE_PROJECT_STATUS,
      (_: string, data: Project) => {
        setProjects((prev) =>
          prev.map((proj) => (proj.id === data.id ? data : proj))
        )
      }
    )

    const cloneProjectToken = PubSub.subscribe(
      CLONE_PROJECT,
      (_: string, data: Project) => {
        if (type === 'managed') {
          setProjects((prev) => [...prev, data])
        }
      }
    )

    return () => {
      PubSub.unsubscribe(addProjectToken)
      PubSub.unsubscribe(updateProjectToken)
      PubSub.unsubscribe(deleteProjectToken)
      PubSub.unsubscribe(toggleProjectStatusToken)
      PubSub.unsubscribe(cloneProjectToken)
    }
  }, [type, setProjects])
}

export const useProjectList = () => {
  const { params } = useRouteMatch<RouteMatch>()
  const { projectType } = params
  const [projects, setProjects] = useState<Project[]>([])
  useSubscribeUpdate(projectType, setProjects)
  const currentTeam = useSelector(currentTeamSelector)

  const loadProjectsByType = useCallback(
    async (type: ProjectType) => {
      const api =
        type === 'managed'
          ? projectApis.getManagedProjects
          : projectApis.getJoinedProjects

      const result = await api(currentTeam.id)
      if (!isResponseError(result)) {
        if (result.data) {
          setProjects(result.data)
        }
      }
    },
    [currentTeam.id]
  )

  useEffect(() => {
    loadProjectsByType(projectType)
  }, [projectType, loadProjectsByType])

  return {
    projects,
    projectType,
  }
}
