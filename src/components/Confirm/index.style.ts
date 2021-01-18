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

const contentBg = theme('mode', {
  light: '#FCFCFC',
  dark: '#282828',
})

const leftDistance = (props: any) => {
  let width
  if (props.width) {
    width = Number.parseInt(props.width) / 2
  } else {
    width = 176
  }

  return `${width}px`
}

const contentColor = theme('mode', {
  light: '#545B62',
  dark: '#ADB5BD',
})

const duration = (props: any) => props.duration + 'ms'

export const ConfirmContent = styled.div<ContentProps>`
  position: relative;
  z-index: ${baseZIndex + 1};
  left: calc(100% - ${({ width }) => parseInt(width!) + 'px'});
  top: 24vh;

  width: ${({ width }) => width};
  height: ${({ height }) => height || 'auto'};
  background-color: ${contentBg};
  background-clip: padding-box;

  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  color: ${contentColor};

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

const okBtnBg = theme('mode', {
  light: '#EE6A5E',
  dark: '#EE6A5E',
})

const okBtnColor = theme('mode', {
  light: '#FCFCFC',
  dark: '#FCE5BF',
})

const okBtnHoverBg = theme('mode', {
  light: '#F1877E',
  dark: '#C65D53',
})

const okBtnHoverColor = theme('mode', {
  light: '#FDF2F1',
  dark: '#D2C0BE',
})

const cancelBtnBg = theme('mode', {
  light: '#E9ECEF',
  dark: '#404040',
})

const cancelBtnColor = theme('mode', {
  light: '#76797D',
  dark: '#E9ECEF',
})

const cancelBtnHoverBg = theme('mode', {
  light: '#EDEFF2',
  dark: '#3B3B3B',
})

const cancelBtnHoverColor = theme('mode', {
  light: '#8E969C',
  dark: '#5E666C',
})

export const ConfirmFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  .btn-container {
    padding: 1.25em;
    font-size: 12px;
    .ok {
      background-color: ${okBtnBg};
      color: ${okBtnColor};

      &:hover {
        background-color: ${okBtnHoverBg};
        color: ${okBtnHoverColor};
      }
    }
    .cancel {
      background-color: ${cancelBtnBg};
      color: ${cancelBtnColor};

      &:hover {
        background-color: ${cancelBtnHoverBg};
        color: ${cancelBtnHoverColor};
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
