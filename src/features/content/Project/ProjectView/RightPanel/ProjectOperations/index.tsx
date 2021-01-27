import Button from 'components/Button'
import React from 'react'
import { FaRegClone, FaShare, FaTerminal } from 'react-icons/fa'
import { VscUnlock } from 'react-icons/vsc'
import { GoGear } from 'react-icons/go'
import { BsTrash } from 'react-icons/bs'
import { BiTransfer } from 'react-icons/bi'
import { AiTwotoneLock } from 'react-icons/ai'
import { Container } from './index.style'
import { useSubscribeUpdate, useTargetProjectOperations } from './hook'
import UpdateProjectModal from 'features/content/Project/modal/UpdateProjectModal'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import Confirm from 'components/Confirm'
import { ProjectStatus } from 'service/http/api/project'
import TransferManagerModal from 'features/content/Project/modal/TransferManagerModal'
import { useSelector } from 'react-redux'
import { userInfoSelector } from 'store/user/selector'

type Props = {}

const ProjectOperations: React.FC<Readonly<Props>> = (props) => {
  const {
    projectType,
    goToApiTerminal,
    project,
    deleteConfirmOpretions,
    deleteProject,
    toggleProjectStatus,
    changeStatusConfirmOpretions,
    cloneProject,
    exitProject,
  } = useTargetProjectOperations()
  const userInfo = useSelector(userInfoSelector)
  const updateModalOperations = useBaseModal(false, 300)
  const transferModalOperations = useBaseModal(false, 300)
  useSubscribeUpdate(project, updateModalOperations.open)

  if (!project.id) {
    return <></>
  }
  return (
    <Container>
      <p className="proj-name">{project.name}</p>
      <Button className="operation-item" onClick={goToApiTerminal}>
        <FaTerminal /> 接口/文档控制台
      </Button>
      <Button className="operation-item">
        <FaShare /> 分享项目文档
      </Button>
      {project.managerId === userInfo.id && (
        <Button className="operation-item" onClick={updateModalOperations.open}>
          <GoGear /> 编辑项目
        </Button>
      )}
      {project.managerId === userInfo.id ? (
        <Button
          className="operation-item"
          onClick={deleteConfirmOpretions.open}
        >
          <BsTrash /> 删除项目
        </Button>
      ) : (
        <Button
          className="operation-item"
          onClick={deleteConfirmOpretions.open}
        >
          <BsTrash /> 退出项目
        </Button>
      )}

      <Button
        className="operation-item"
        onClick={changeStatusConfirmOpretions.open}
      >
        {project.status === ProjectStatus.UNLOCKED ? (
          <>
            <VscUnlock /> 锁定项目为只读
          </>
        ) : (
          <>
            <AiTwotoneLock className="locked" /> [已锁定] 解锁项目
          </>
        )}
      </Button>
      <Button className="operation-item" onClick={cloneProject}>
        <FaRegClone /> 克隆项目
      </Button>

      {project.managerId === userInfo.id && (
        <Button
          className="operation-item"
          onClick={transferModalOperations.open}
        >
          <BiTransfer /> 转让项目管理权
        </Button>
      )}

      <UpdateProjectModal
        modalOptions={updateModalOperations}
        project={project}
      />
      <Confirm
        title={projectType === 'managed' ? '删除项目' : '退出项目'}
        visible={deleteConfirmOpretions.visible}
        inProp={deleteConfirmOpretions.inProp}
        duration={deleteConfirmOpretions.duration}
        okText={projectType === 'managed' ? '确定删除' : '确定退出'}
        onOk={projectType === 'managed' ? deleteProject : exitProject}
        onCancel={deleteConfirmOpretions.close}
      >
        您确定要{projectType === 'managed' ? '删除' : '退出'}项目 [{' '}
        {project.name} ] 吗？
      </Confirm>
      <Confirm
        title={
          project.status === ProjectStatus.LOCKED ? '解锁项目' : '锁定项目'
        }
        visible={changeStatusConfirmOpretions.visible}
        inProp={changeStatusConfirmOpretions.inProp}
        duration={changeStatusConfirmOpretions.duration}
        okText={
          project.status === ProjectStatus.LOCKED ? '确定解锁' : '确定锁定'
        }
        onOk={toggleProjectStatus}
        onCancel={changeStatusConfirmOpretions.close}
      >
        {project.status === ProjectStatus.LOCKED
          ? `确定解锁项目 [${project.name}] 吗? 解锁后，接口文档将恢复为可以编辑保存的状态（已锁定的单接口除外）`
          : `确定锁定项目 [${project.name}] 吗? 锁定后，全部接口将处于不可编辑保存的状态`}
      </Confirm>
      <TransferManagerModal
        modalOptions={transferModalOperations}
        project={project}
      />
    </Container>
  )
}

export default ProjectOperations
