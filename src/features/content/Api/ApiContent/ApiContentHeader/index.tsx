import Button from 'components/Button'
import Title from 'components/Title'
import { Header } from './index.style'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { FaCode, FaEye } from 'react-icons/fa'
import { VscLibrary } from 'react-icons/vsc'
import IconButton from '../../IconButton'
import ApiStatusTip from './ApiStatusTip'
import GlobalParamModal from './modals/GlobalParamModal'
import { useBaseModal } from 'service/hook/auth/useBaseModal'
type Props = {}

const ApiContentHeader: React.FC<Readonly<Props>> = () => {
  const modalOptions = useBaseModal(false, 250)
  return (
    <Header>
      <ApiStatusTip text="接口/文档状态信息获取中..." width="560px" />
      <div className="icon-btns-container">
        <IconButton
          className="icon-btn"
          text="H"
          tipText="设置/同步全局 Header"
          tipDirection="bottom"
          onClick={modalOptions.open}
        />

        <IconButton
          className="icon-btn"
          text="Q"
          tipText="设置/同步全局 Query"
          tipDirection="bottom"
          onClick={modalOptions.open}
        />

        <IconButton
          className="icon-btn"
          text="B"
          tipText="设置/同步全局 Body"
          tipDirection="bottom"
          onClick={modalOptions.open}
        />
        <IconButton className="icon-btn">
          <Button>
            <FaCode />
            <Title text="全局执行脚本" direction="bottom" />
          </Button>
        </IconButton>
        <IconButton className="icon-btn">
          <Button>
            <VscLibrary />
            <Title text="常用描述库" direction="bottom" />
          </Button>
        </IconButton>
        <IconButton className="icon-btn text">
          <Button>
            <span>dev</span>
            <AiFillCaretDown />
            <Title text="环境设置" direction="bottom" />
          </Button>
        </IconButton>
        <IconButton className="icon-btn">
          <Button>
            <FaEye />
            <Title text="查看当前全局变量" direction="bottom" />
          </Button>
        </IconButton>
      </div>
      <GlobalParamModal modalOptions={modalOptions} />
    </Header>
  )
}

export default ApiContentHeader
