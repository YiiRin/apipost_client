import styled from 'styled-components'

interface StyledButtonProps {
  block?: boolean
  disabled?: boolean
}

/**
 * reset the base style of link and button
 */
const ResetButton = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
`

/**
 * The base style of button and link
 */
const BaseButton = styled(ResetButton)<StyledButtonProps>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  // box
  padding: 0.5em 1.25em;
  margin: 2px 4px;
  border: 1px solid transparent;
  border-radius: 0.25em;

  text-align: center;
  line-height: 1;
`

export const StyledButton = styled(BaseButton)`
  &[disabled] {
    background-color: rgba(0, 0, 0, 0.3);
    color: #545b62;
  }
`

export const StyledAnchor = styled(BaseButton)`

`
export const LinkContainer = styled.a`
  display: inline-block;
`