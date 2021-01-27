import Modal from 'components/Modal'
import { ModalContentContainer } from '../index.style'
import { userInfoSelector } from 'store/user/selector'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { FaSave } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useAddProjectModal } from './hook'
import MemberItem from '../MemberItem'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { useAddProjectForm, useMembersList } from '../hook'

type Props = {
  modalOptions: ReturnType<typeof useBaseModal>
}

const AddProjectModal: React.FC<Readonly<Props>> = ({modalOptions}) => {
  const partners = useMembersList()
  const userInfo = useSelector(userInfoSelector)
  const { memberIds, projectName } = useAddProjectForm()
  const {
    close,
    visible,
    duration,
    inProp,
    handleAddProject,
  } = useAddProjectModal(projectName.data, memberIds.memberIds, modalOptions)
  return (
    <Modal
      title="新建项目"
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
      onOk={handleAddProject}
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
                  defaultChecked={userInfo.id === partner.userId}
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

export default AddProjectModal
