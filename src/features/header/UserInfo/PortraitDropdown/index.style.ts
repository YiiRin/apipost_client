import {
  _545b62_adb5bd,
  _e9eaeb_323232,
  _e9eaeb_404040,
  _f7f7f7_303030,
} from 'assets/theme/color'
import styled from 'styled-components'

const baseZIndex = 800
export const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: ${baseZIndex};
  right: 14px;
  top: 45px;
  width: 220px;
  background-color: ${_f7f7f7_303030};
  border: 1px solid ${_e9eaeb_323232};
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
  color: #adb5bd;
`

export const Username = styled(BaseSpan)`
  color: ${_545b62_adb5bd};
`

export const Nav = styled.nav`
  div:hover {
    background-color: ${_e9eaeb_404040};
  }

  .link {
    font-size: 12px;
    text-align: left;
    padding: 0.75em 0 0.75em 20px;
    margin: 0;
  }
`
