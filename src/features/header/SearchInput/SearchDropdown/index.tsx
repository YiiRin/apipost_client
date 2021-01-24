import Button from 'components/Button'
import React, { MouseEventHandler } from 'react'
import { useChangeActive } from './hook'
import { Container, OptionContainer } from './index.style'
type Props = {
  /**
   * visible
   */
  visible: boolean

  /**
   * mouse enter hanndler
   */
  onMouseEnter?: MouseEventHandler

  /**
   * mouse leave handler
   */
  onMouseLeave?: MouseEventHandler
}

const SearchDropdown: React.FC<Readonly<Props>> = (props) => {
  const { containerRef, changeActive } = useChangeActive()
  const { visible, onMouseEnter, onMouseLeave } = props
  return (
    <Container
      visible={visible}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <OptionContainer onClick={changeActive} ref={containerRef}>
        <Button className={'link'}>项目</Button>
        <Button className={'link'}>接口</Button>
        <Button className={'link'}>帮助文档</Button>
        <Button className={'link'}>博客</Button>
      </OptionContainer>
      <div className="list"></div>
    </Container>
  )
}

export default SearchDropdown
