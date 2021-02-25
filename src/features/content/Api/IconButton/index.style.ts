import { ADOBE_GARAMOND_PRO_FONT_NAME } from 'assets/css/global'
import { _76797d_e9ecef, _e9ecef_404040 } from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  font-size: 16px;
  background-color: ${_e9ecef_404040};
  color: ${_76797d_e9ecef};
  font-family: ${ADOBE_GARAMOND_PRO_FONT_NAME}, serif;
  font-weight: 600;
  line-height: 1;
  user-select: none;
  border-radius: .25em;

  button {
    margin: 0;
    padding: 0.25em 0.5em;
    position: relative;
    &:hover .pop-title {
      display: block;
    }
  }

  &:hover {
    color: #ee6a5e;
  }
`
