import {
  _e9ecef_404040,
  _ebebeb_323232,
  _f7f7f7_303030,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  z-index: 10;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 100%;
  height: 280px;
  border: 1px solid ${_ebebeb_323232};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  .list {
    background-color: ${_f7f7f7_303030};
  }
`

export const OptionContainer = styled.div`
  height: 28px;
  padding-top: 2px;
  background-color: ${_e9ecef_404040};

  .link {
    padding: 0 1em;
    margin: 0;
    margin-left: 8px;
    height: 100%;
  }

  button.active {
    background-color: ${_f7f7f7_303030};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`
