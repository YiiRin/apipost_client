import * as Fa from 'react-icons/fa'
import { CSSProperties } from 'styled-components'


type Props = {
  /**
   * 图标类型
   */
  type?: keyof typeof Fa

  /**
   * icon 的大小
   */
  size?: string | number

  /**
   * 旋转角度
   */
  rotate?: number

  /**
   * 图标样式
   */
  style?: CSSProperties
}

const Icon: React.FC<Readonly<Props>> = (props) => {
  const { rotate: rotation, size, style, type = 'FaClock' } = props
  const IconComponent = Fa[type]

  return (
    <IconComponent size={size} rotate={rotation} style={style}/>
  )
}

export default Icon
