import styled from 'styled-components'
import theme from 'styled-theming'

const bgColor = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})

const borderColor = theme('mode', {
  light: '#E9EAEB',
  dark: '#323232',
})

const usernameColor = theme('mode', {
  light: '#545b62',
  dark: '#ADB5BD',
})

const emailColor = theme('mode', {
  light: '#ADB5BD',
  dark: '#ADB5BD',
})

const linkHoverBgColor = theme('mode', {
  light: '#E9EAEB',
  dark: '#404040',
})

export const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  right: 14px;
  top: 45px;
  width: 220px;
  background-color: ${bgColor};
  border: 1px solid ${borderColor};
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

  .line {
    margin: 14px 0 14px 20px;
  }
`

export const UserInfoContainer = styled.div`
  padding-left: 20px;
  margin-top: 1em;
  display: flex;
`

export const PortraitContainter = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
const BaseSpan = styled.span`
  height: 25px;
  line-height: 25px;
  font-size: 12px;
`
export const Email = styled(BaseSpan)`
  color: ${emailColor};
`

export const Username = styled(BaseSpan)`
  color: ${usernameColor};
`

export const Nav = styled.nav`
  div:hover {
    background-color: ${linkHoverBgColor};
  }

  .link {
    font-size: 12px;
    text-align: left;
    padding: 0.75em 0 0.75em 20px;
    margin: 0;
  }
`
