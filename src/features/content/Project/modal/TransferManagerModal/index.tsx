import Modal from 'components/Modal'
import { ModalContentContainer } from '../index.style'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { FaSave } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { Project } from 'service/http/api/project'
import { userInfoSelector } from 'store/user/selector'
import { useMembersList } from '../hook'
import MemberItem from '../MemberItem'
import { useTransferManagerModal } from './hook'
type Props = {
  modalOptions: ReturnType<typeof useBaseModal>
  project: Project
}

const TransferManagerModal: React.FC<Readonly<Props>> = (props) => {
  const { modalOptions, project } = props
  const userInfo = useSelector(userInfoSelector)
  const { onChange, handleTransferManager } = useTransferManagerModal(
    project.id
  )
  const partners = useMembersList().filter(
    (partner) =>
      partner.userId !== userInfo.id &&
      project.partners.includes(partner.userId)
  )

  return (
    <Modal
      title="转让项目管理权"
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
      onOk={handleTransferManager}
      onCancel={modalOptions.close}
      visible={modalOptions.visible}
      inProp={modalOptions.inProp}
      duration={modalOptions.duration}
    >
      <ModalContentContainer>
        <div className="project-name">
          <label htmlFor="projectName">待转让项目</label>
          <input
            type="text"
            placeholder="请输入项目名称"
            name="projectName"
            id="projectName"
            value={project.name}
            disabled={true}
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
                  type="radio"
                  value={partner.userId}
                  onChange={onChange}
                />
              ))}
            </Scrollbars>
          </div>
        </div>
      </ModalContentContainer>
    </Modal>
  )
}

export default TransferManagerModal
