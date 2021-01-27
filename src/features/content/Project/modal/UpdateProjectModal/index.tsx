import Modal from 'components/Modal'
import { ModalContentContainer } from '../index.style'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { FaSave } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { Project } from 'service/http/api/project'
import { userInfoSelector } from 'store/user/selector'
import { useAddProjectForm, useMembersList } from '../hook'
import MemberItem from '../MemberItem'
import { useUpdateProjectModal } from './hook'
import { useEffect } from 'react'
type Props = {
  modalOptions: ReturnType<typeof useBaseModal>
  project: Project
}

const UpdateProjectModal: React.FC<Readonly<Props>> = (props) => {
  const userInfo = useSelector(userInfoSelector)
  const { modalOptions, project } = props
  const { memberIds, projectName } = useAddProjectForm(
    project.name,
    ...project.partners
  )
  const partners = useMembersList()
  const {
    close,
    visible,
    inProp,
    duration,
    handleUpdateProject,
  } = useUpdateProjectModal(
    project.id,
    projectName.data,
    memberIds.memberIds,
    modalOptions
  )
  const { setData } = projectName
  const { name } = project
  useEffect(() => {
    setData(name)
  }, [setData, name])
  return (
    <Modal
      title="编辑项目"
      okText={
        <>
          <FaSave
            style={{
              marginRight: '.375em',
            }}
          />
          保存
        </>
      }
      cancelText="关闭"
      onOk={handleUpdateProject}
      onCancel={close}
      visible={visible}
      inProp={inProp}
      duration={duration}
    >
      <ModalContentContainer>
        <div className="project-name">
          <label htmlFor="projectName">项目名称</label>
          <input
            type="text"
            placeholder="请输入项目名称"
            name="projectName"
            id="projectName"
            value={projectName.data}
            onChange={projectName.onChange}
          />
        </div>
        <div className="partners">
          <span className="partners-text">协作人员</span>
          <div className="member-container">
            <Scrollbars>
              {partners.map((partner) => (
                <MemberItem
                  key={partner.teamMemberId}
                  text={`${partner.name} ${partner.email}`}
                  id={partner.teamMemberId}
                  disabled={userInfo.id === partner.userId}
                  defaultChecked={project.partners.includes(partner.userId)}
                  value={partner.userId}
                  onChange={memberIds.onChange}
                />
              ))}
            </Scrollbars>
          </div>
        </div>
      </ModalContentContainer>
    </Modal>
  )
}

export default UpdateProjectModal
