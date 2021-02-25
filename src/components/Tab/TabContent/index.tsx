import React from 'react'
import classnames from 'classnames'
type Props = {
  className?: string
  index: string
  currentIndex: string
}

const TabContent: React.FC<Readonly<Props>> = ({
  className,
  children,
  index,
  currentIndex,
}) => {
  return (
    <div
      className={classnames('tab-content', className, {
        show: index === currentIndex,
      })}
    >
      {children}
    </div>
  )
}

export default TabContent
