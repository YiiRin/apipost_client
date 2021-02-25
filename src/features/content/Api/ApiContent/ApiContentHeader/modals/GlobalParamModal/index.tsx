import Modal from 'components/Modal'
import Tab from 'components/Tab'
import TabControl from 'components/Tab/TabControl'
import React from 'react'
import { FaSave } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
import { Container, ContentContainer } from './index.style'
import Param from './Param'

type Props = {
  modalOptions: ReturnType<typeof useBaseModal>
  currentIndex?: string
}

const renderGloabalHeader = () => {
  return () => (
    <ContentContainer>
      <p className="tip">
        <IoIosWarning
          style={{
            verticalAlign: '-1px',
            marginRight: '.375em',
          }}
        />
        设置全局请求 Header (针对当前项目有效), 支持使用全局/环境变量,
        发送请求时当前项目下接口自动携带 Header
      </p>
      {/* <Param /> */}
    </ContentContainer>
  )
}

const renderGloabalQuery = () => {}

const renderGloabalBody = () => {}

const GlobalParamModal: React.FC<Readonly<Props>> = ({
  modalOptions,
  currentIndex = 'global-header',
}) => {
  return (
    <Modal
      title="设置/同步全局参数"
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
      onOk={modalOptions.close}
      onCancel={modalOptions.close}
      duration={modalOptions.duration}
      visible={modalOptions.visible}
      inProp={modalOptions.inProp}
      width="800px"
      useContentPadding={false}
    >
      <Container>
        <TabControl currentIndex={currentIndex}>
          <Tab index="global-header" render={renderGloabalHeader()}>
            全局 Header
          </Tab>
          <Tab index="global-query">全局 Query</Tab>
          <Tab index="global-body">全局 Body</Tab>
        </TabControl>
      </Container>
    </Modal>
  )
}

export default GlobalParamModal
