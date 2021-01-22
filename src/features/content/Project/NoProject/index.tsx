import Button from 'components/Button'
import Modal from 'components/Modal'
import React from 'react'
import { FaSave } from 'react-icons/fa'
import { Container, ModalContentContainer } from './index.style'
import MemberItem from './MemberItem'
import { Scrollbars } from 'react-custom-scrollbars'

type Props = {}

const NoProject: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <h3 className="title">ApiPost</h3>
      <p className="text">
        请先创建一个项目。
        <Button className="btn">创建项目</Button>
      </p>

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
                <MemberItem
                  text="天海 1849964931@qq.com"
                  id="123"
                  disabled
                  defaultChecked={true}
                />
                <MemberItem text="天海 1849964931@qq.com" id="345" />
                <MemberItem text="天海 1849964931@qq.com" id="341" />
                <MemberItem text="天海 1849964931@qq.com" id="342" />
                <MemberItem text="天海 1849964931@qq.com" id="343" />
                <MemberItem text="天海 1849964931@qq.com" id="344" />
                <MemberItem text="天海 1849964931@qq.com" id="345" />
                <MemberItem text="天海 1849964931@qq.com" id="346" />
                <MemberItem text="天海 1849964931@qq.com" id="347" />
                <MemberItem text="天海 1849964931@qq.com" id="348" />
                <MemberItem text="天海 1849964931@qq.com" id="349" />
                <MemberItem text="天海 1849964931@qq.com" id="340" />
                <MemberItem text="天海 1849964931@qq.com" id="331" />
                <MemberItem text="天海 1849964931@qq.com" id="332" />
                <MemberItem text="天海 1849964931@qq.com" id="333" />
                <MemberItem text="天海 1849964931@qq.com" id="3334" />
                <MemberItem text="天海 1849964931@qq.com" id="3411" />
                <MemberItem text="天海 1849964931@qq.com" id="321" />
                <MemberItem text="天海 1849964931@qq.com" id="322" />
                <MemberItem text="天海 1849964931@qq.com" id="323" />
              </Scrollbars>
            </div>
          </div>
        </ModalContentContainer>
      </Modal>
    </Container>
  )
}

export default NoProject
