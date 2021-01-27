import React from 'react'
import { Container } from './index.style'
import { Scrollbars } from 'react-custom-scrollbars'

import ProjectItem from './ProjectItem'
import { useProjectList } from './hook'

type Props = {}

let lastActiveProjectItem: HTMLDivElement | null = null

const ProjectList: React.FC<Readonly<Props>> = (props) => {
  const { projects, projectType } = useProjectList()

  const handleChangeActiveProjectItem: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    const items = Array.from(document.getElementsByClassName('proj-item'))
    const target = event.target as Element
    const item = items.find((i) => i.contains(target)) as HTMLDivElement
    if (item) {
      if (lastActiveProjectItem) {
        lastActiveProjectItem.classList.remove('active-proj')
      }
      item.classList.add('active-proj')
      lastActiveProjectItem = item
    }
  }
  return (
    <Container
      className="list-container"
      onClick={handleChangeActiveProjectItem}
    >
      <Scrollbars>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            type={projectType}
            project={project}
          />
        ))}
      </Scrollbars>
    </Container>
  )
}

export default ProjectList
