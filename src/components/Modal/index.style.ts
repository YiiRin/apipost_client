import styled from 'styled-components'
import theme from 'styled-theming'
import React from 'react'

interface ContainerProps {
  visible?: boolean
}

interface ModalContentProps {
  width?: string
  height?: string
  duration?: number
}

interface ModalFooterProps {
  isUseDefaultFooter?: boolean
  footerLeft?: React.ReactNode
}

const baseZIndex = 999
const contentBg = theme('mode', {
  light: '#FCFCFC',
  dark: '#282828',
})

export const Container = styled.div<ContainerProps>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  position: fixed;
  z-index: ${baseZIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const leftDistance = (props: any) => {
  let width
  if (props.width) {
    width = Number.parseInt(props.width) / 2
  } else {
    width = 250
  }

  return `${width}px`
}

const duration = (props: any) =>
  props.duration ? props.duration * 1000 + 'ms' : '200ms'
export const ModalContent = styled.div<ModalContentProps>`
  position: relative;
  /* top: 20vh; */
  left: calc(50% - ${leftDistance});
  z-index: ${baseZIndex + 1};
  width: ${({ width }) => width || '500px'};

  background-color: ${contentBg};
  background-clip: padding-box;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &.modal {
    top: 0;
    opacity: 0.1;
    transition: top ${duration}, opacity ${duration};
  }

  &.modal-entering,
  &.modal-entered {
    top: 16vh;
    opacity: 1;
  }

  &.modal-exiting,
  &.modal-exited {
    top: 0;
    opacity: 0.1;
  }
`

const titleColor = theme('mode', {
  light: '#6C757D',
  dark: '#6C757D',
})
const titleBg = theme('mode', {
  light: '#F7F7F7',
  dark: '#303030',
})

const closeBtnHoverColor = theme('mode', {
  light: '#7D8287',
  dark: '#8E949A',
})

const titleBorderColor = theme('mode', {
  light: '#E9EAEB',
  dark: '#323232',
})

export const ModalTitle = styled.div`
  padding: 0.75em 1.25em;
  background-color: ${titleBg};
  color: ${titleColor};
  font-size: 13px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${titleBorderColor};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  .close-btn {
    font-weight: 900;
    cursor: pointer;

    &:hover {
      color: ${closeBtnHoverColor};
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    }
  }
`
const bodyBg = theme('mode', {
  light: '#FCFCFC',
  dark: '#282828',
})

export const ModalBody = styled.div`
  padding: 1.25em 5%;
  background-color: ${bodyBg};
`

const footerBorderColor = theme('mode', {
  light: '#E9EAEB',
  dark: '#323232',
})

export const ModalFooterContainer = styled.div<ModalFooterProps>`
  border-top: 1px solid ${footerBorderColor};
  padding: 1.25em 1.25em;

  display: flex;
  justify-content: ${({ footerLeft }) =>
    footerLeft ? 'space-between' : 'flex-end'};
`

export const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
`

const cancelBtnBg = theme('mode', {
  light: '#E9ECEF',
  dark: '#404040',
})

const cancelBtnColor = theme('mode', {
  light: '#76797D',
  dark: '#E9ECEF',
})
const cancelBtnHoverBg = theme('mode', {
  light: '#ECEEF1',
  dark: '#3D3D3D',
})

const cancelBtnHoverColor = theme('mode', {
  light: '#888F95',
  dark: '#60676E',
})

const okBtnBg = theme('mode', {
  light: '#EE6A5E',
  dark: '#EE6A5E',
})

const okBtnColor = theme('mode', {
  light: '#FCFCFC',
  dark: '#FCFCFC',
})

const okBtnHoverBg = theme('mode', {
  light: '#F0867D',
  dark: '#C85E55',
})

const okBtnHoverColor = theme('mode', {
  light: '#FDFDFD',
  dark: '#D6D6D6',
})

export const FooterBtnContainer = styled.div`
  font-size: 13px;
  .cancel-btn {
    background-color: ${cancelBtnBg};
    color: ${cancelBtnColor};

    &:hover {
      background-color: ${cancelBtnHoverBg};
      color: ${cancelBtnHoverColor};
    }
  }

  .ok-btn {
    background-color: ${okBtnBg};
    color: ${okBtnColor};

    &:hover {
      background-color: ${okBtnHoverBg};
      color: ${okBtnHoverColor};
    }
  }
`

const maskBg = theme('mode', {
  light: 'rgba(126,126, 126, .1)',
  dark: 'rgba(20, 20, 20, .1)',
})

export const ModalMask = styled.div`
  position: fixed;
  z-index: ${baseZIndex};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${maskBg};
  /* opacity: .1; */
`
