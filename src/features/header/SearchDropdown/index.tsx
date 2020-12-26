import Button from 'components/Button'
import React, { CSSProperties, MouseEventHandler } from 'react'
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

const btnStyle = {
  padding: '0 1em',
  margin: '0',
  marginLeft: '8px',
  height: '100%',
} as CSSProperties

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
        <Button style={btnStyle}>项目</Button>
        <Button style={btnStyle}>接口</Button>
        <Button style={btnStyle}>帮助文档</Button>
        <Button style={btnStyle}>博客</Button>
      </OptionContainer>
      <div className="list"></div>
    </Container>
  )
}

export default SearchDropdown
