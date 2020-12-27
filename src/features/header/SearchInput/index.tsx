import React from 'react'
import SearchDropdown from './SearchDropdown'
import { useDropdown } from './hook'
import { Container, Icon, Input, InputContainer } from './index.style'
type Props = {}

const SearchInput: React.FC<Readonly<Props>> = (props) => {
  const dropdown = useDropdown()

  return (
    <Container>
      <InputContainer
        ref={dropdown.inputContainerRef}
        onMouseLeave={dropdown.removeFocusState}
      >
        <Input
          type="text"
          placeholder="搜索当前团队下的项目/接口/以及帮助文档、技术博客等"
          onFocus={dropdown.showDropdown}
          onBlur={dropdown.hideDropdown}
          ref={dropdown.inputRef}
        />
        <Icon className="fa fa-search" aria-hidden="true"></Icon>
        <SearchDropdown visible={dropdown.isDropdownVisible} />
      </InputContainer>
    </Container>
  )
}

export default SearchInput
