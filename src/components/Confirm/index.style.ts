import {
  _545b62_adb5bd,
  _76797d_e9ecef,
  _8e969c_5e666c,
  _e9ecef_404040,
  _edeff2_3b3b3b,
  _f1877e_c65d53,
  _fcfcfc_282828,
  _fcfcfc_fce5bf,
  _fdf2f1_d2c0be,
} from 'assets/theme/color'
import styled from 'styled-components'
import theme from 'styled-theming'

interface ContentProps {
  width?: string
  height?: string
  duration: number
}

const baseZIndex = 1001
export const Container = styled.div<{ visible?: boolean }>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  z-index: ${baseZIndex};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

const leftDistance = (props: any) => {
  let width
  if (props.width) {
    width = Number.parseInt(props.width) / 2
  } else {
    width = 176
  }

  return `${width}px`
}

const duration = (props: any) => props.duration + 'ms'

export const ConfirmContent = styled.div<ContentProps>`
  position: relative;
  z-index: ${baseZIndex + 1};
  left: calc(100% - ${({ width }) => parseInt(width!) + 'px'});
  top: 24vh;

  width: ${({ width }) => width};
  height: ${({ height }) => height || 'auto'};
  background-color: ${_fcfcfc_282828};
  background-clip: padding-box;

  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  color: ${_545b62_adb5bd};

  &.confirm,
  &.confirm-exited {
    transform: scale(0);
    top: 5vh;
    left: calc(100% - ${({ width }) => parseInt(width!) + 'px'});
  }

  &.confirm-entering,
  &.confirm-entered {
    transform: scale(1);
    left: calc(50% - ${leftDistance});
    top: 30vh;
    transition: transform ${duration}, left ${duration}, top ${duration};
  }

  &.confirm-exiting {
    transform: scale(0);
    left: calc(50% - ${leftDistance});
    top: 30vh;
    transition: transform ${duration};
  }
`
export const ConfirmTitle = styled.p`
  padding: 0.75em 5% 0.5em;
`

export const ConfirmBody = styled.div`
  padding: 1em 5%;
  font-size: 12px;
`

export const ConfirmFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  .btn-container {
    padding: 1.25em;
    font-size: 12px;
    .ok {
      background-color: #ee6a5e;
      color: ${_fcfcfc_fce5bf};

      &:hover {
        background-color: ${_f1877e_c65d53};
        color: ${_fdf2f1_d2c0be};
      }
    }
    .cancel {
      background-color: ${_e9ecef_404040};
      color: ${_76797d_e9ecef};

      &:hover {
        background-color: ${_edeff2_3b3b3b};
        color: ${_8e969c_5e666c};
      }
    }
  }
`

const maskBg = theme('mode', {
  light: 'rgba(215,215, 215, .1)',
  dark: 'rgba(46, 46,46, .1)',
})
export const Mask = styled.div`
  position: fixed;
  z-index: ${baseZIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${maskBg};
`
