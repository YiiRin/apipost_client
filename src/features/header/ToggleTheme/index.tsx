import ToggleButton from 'components/ToggleButton'
import React from 'react'
import { Container } from './index.style'
import { useToggleTheme } from './hook'

type Props = {}

const ToggleTheme: React.FC<Readonly<Props>> = (props) => {
  const theme = useToggleTheme()
  return (
    <Container>
      <div>
        <ToggleButton
          onClick={theme.handleToggleTheme}
          width={22}
          height={12}
        />
        <span className="text">皮肤/{theme.mode}</span>
      </div>
    </Container>
  )
}

export default ToggleTheme
