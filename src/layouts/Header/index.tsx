import ApiPostIcon from 'features/header/ApiPostIcon'
import SearchInput from 'features/header/SearchInput'
import ToggleTheme from 'features/header/ToggleTheme'
import UserInfo from 'features/header/UserInfo'
import React from 'react'
import { Container } from './index.style'

type Props = {}

const Header: React.FC<Readonly<Props>> = (props) => {
  return (
    <Container>
      <ApiPostIcon />
      <ToggleTheme />
      <SearchInput />
      <UserInfo />
    </Container>
  )
}

export default Header
