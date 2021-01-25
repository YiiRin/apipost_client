import Modal from 'components/Modal'
import { ModalContentContainer } from './index.style'
import { userInfoSelector } from 'store/user/selector'
import React from 'react'
import Scrollbars from 'react-custom-scrollbars'
import { FaSave } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useMembersList } from '../NoProject/hook'
import MemberItem from './MemberItem'
type Props = {}

const AddProjectModal: React.FC<Readonly<Props>> = (props) => {
  const partners = useMembersList()
  const userInfo = useSelector(userInfoSelector)
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
    >
      <ModalContentContainer>
        <div className="project-name">
          <label htmlFor="projectName">项目名称</label>
          <input
            type="text"
            placeholder="请输入项目名称"
            name="projectName"
            id="projectName"
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
