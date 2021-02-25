import React from 'react'
import classnames from 'classnames'
import TabContent from '../TabContent'
import { useTabControl } from './hook'
import Tab, { TabIProps } from '..'
type Props = {
  className?: string
  currentIndex?: string
}

/**
 * 将 tab 元素数组映射成 props 数组
 *
 * @param children
 */
const mapChildrenToPropsArray = (children: React.ReactNode) => {
  if (!children) {
    return null
  }

  if (Array.isArray(children)) {
    return children.map((node: any) => node.props as TabIProps)
  }
  return (children as any).props as TabIProps
}

/**
 * 将原来的 tab 映射成新的受 TabControl 控制的组件
 *
 * @param node
 * @param changeCurrentIndex
 * @param currentTabIndex
 */
const mapTabToWrappedTabHelper = (
  changeCurrentIndex: Function,
  currentTabIndex: string
) => (props: TabIProps) => {
  const { index, onClick, render, currentIndex, ...rest } = props

  const handleOnClick = (event: any) => {
    changeCurrentIndex(index)
    onClick && onClick(event)
  }

  return (
    <Tab
      onClick={handleOnClick}
      {...rest}
      index={index}
      currentIndex={currentTabIndex}
      key={index}
    >
      {props.children}
    </Tab>
  )
}

/**
 * 将传入的 tab 包装成受控的 tab
 *
 * @param children
 * @param changeCurrentIndex
 * @param currentTabIndex
 */
const mapTabToWrappedTab = (
  props: TabIProps | TabIProps[],
  changeCurrentIndex: Function,
  currentTabIndex: string
) => {
  if (Array.isArray(props)) {
    return props.map(
      mapTabToWrappedTabHelper(changeCurrentIndex, currentTabIndex)
    )
  }
  return mapTabToWrappedTabHelper(changeCurrentIndex, currentTabIndex)(props)
}

/**
 * 将 Tab 的 render 函数转换为实际的 TabContent
 * 并且受 TabControl 控制的辅助函数
 *
 * @param currentTabIndex
 */
const mapTabToWrappedTabContentHelper = (currentTabIndex: string) => (
  props: TabIProps
) => {
  const { render, index } = props
  const content = render && render()
  return (
    <TabContent index={index} currentIndex={currentTabIndex} key={index}>
      {content}
    </TabContent>
  )
}

/**
 * 将 Tab 的 render 函数转换为实际的 TabContent
 * 并且受 TabControl 控制
 *
 * @param children
 * @param currentTabIndex
 */
const mapTabToWrappedTabContent = (
  props: TabIProps | TabIProps[],
  currentTabIndex: string
) => {
  if (Array.isArray(props)) {
    return props.map(mapTabToWrappedTabContentHelper(currentTabIndex))
  }

  return mapTabToWrappedTabContentHelper(currentTabIndex)(props)
}

const TabControl: React.FC<Readonly<Props>> = ({
  className,
  children,
  currentIndex = '',
}) => {
  const propsArray = mapChildrenToPropsArray(children)

  const { changeCurrentIndex, currentTabIndex } = useTabControl(
    [],
    currentIndex
  )
  if (!propsArray) {
    return null
  }
  return (
    <div className={classnames('tab-control', className)}>
      <div className="title-container">
        {mapTabToWrappedTab(propsArray, changeCurrentIndex, currentTabIndex)}
      </div>
      <div className="content-container">
        {mapTabToWrappedTabContent(propsArray, currentTabIndex)}
      </div>
    </div>
  )
}

export default TabControl
