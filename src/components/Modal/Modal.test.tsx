import Button from 'components/Button'
import React, { useState } from 'react'
import Modal from '.'
type Props = {}

const ModalTest: React.FC<Readonly<Props>> = (props) => {
  const [visible, setVisible] = useState<boolean>(true)
  const left = (
    <Button btnType="link">点我一下</Button>
  )
  return (
    <div>
      <button onClick={() => setVisible(true)}>点我一下</button>
      <Modal
        visible={visible}
        // width={'1000px'}
        title="登录 ApiPost"
        onClose={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onOk={() => setVisible(false)}
        // footer={null}
        // maskClosable={true}
        footerLeft={left}
        // isUseDefaultFooter={false}
        // footer={<div>hello world</div>}
      >
        <p>Hello world</p>
        <p>This is my love</p>
      </Modal>
    </div>
  )
}

export default ModalTest
