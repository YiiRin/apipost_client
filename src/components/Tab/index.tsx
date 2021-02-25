import React, { HTMLAttributes } from 'react'
import classnames from 'classnames'
type Props = {
  className?: string
  index: string
  currentIndex?: string
  render?: (...args: any[]) => React.ReactNode
}

export type TabIProps = Readonly<Props & HTMLAttributes<HTMLDivElement>>

export const ACTIVE_TAB_CLASSNAME = 'active-tab'

const Tab: React.FC<TabIProps> = ({
  className = '',
  index,
  currentIndex,
  children,
  ...rest
}) => {
  return (
    <div
      className={classnames('tab-title', className, {
        [ACTIVE_TAB_CLASSNAME]: index === currentIndex,
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Tab
