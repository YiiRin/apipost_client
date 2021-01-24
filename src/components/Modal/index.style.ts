import styled from 'styled-components'
import theme from 'styled-theming'
import React from 'react'
import {
  _76797d_e9ecef,
  _7d8287_8e949a,
  _888f95_60676e,
  _e9eaeb_323232,
  _e9ecef_404040,
  _eceef1_3d3d3d,
  _f0867d_c85e55,
  _f7f7f7_303030,
  _fcfcfc_282828,
  _fdfdfd_d6d6d6,
} from 'assets/theme/color'

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
  props.duration ? props.duration + 'ms' : '200ms'

export const ModalContent = styled.div<ModalContentProps>`
  position: relative;
  /* top: 20vh; */
  left: calc(50% - ${leftDistance});
  z-index: ${baseZIndex + 1};
  width: ${({ width }) => width || '500px'};

  background-color: ${_fcfcfc_282828};
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

export const ModalTitle = styled.div`
  padding: 0.75em 1.25em;
  background-color: ${_f7f7f7_303030};
  color: #6c757d;
  font-size: 13px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${_e9eaeb_323232};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  .close-btn {
    font-weight: 900;
    cursor: pointer;

    &:hover {
      color: ${_7d8287_8e949a};
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    }
  }
`

export const ModalBody = styled.div`
  padding: 1.25em 5%;
  background-color: ${_fcfcfc_282828};
`

export const ModalFooterContainer = styled.div<ModalFooterProps>`
  border-top: 1px solid ${_e9eaeb_323232};
  padding: 1.25em 1.25em;

  display: flex;
  justify-content: ${({ footerLeft }) =>
    footerLeft ? 'space-between' : 'flex-end'};
`

export const FooterLeftContainer = styled.div`
  display: flex;
  align-items: center;
`


export const FooterBtnContainer = styled.div`
  font-size: 13px;
  .cancel-btn {
    background-color: ${_e9ecef_404040};
    color: ${_76797d_e9ecef};

    &:hover {
      background-color: ${_eceef1_3d3d3d};
      color: ${_888f95_60676e};
    }
  }

  .ok-btn {
    background-color: #ee6a5e;
    color: #fcfcfc;

    &:hover {
      background-color: ${_f0867d_c85e55};
      color: ${_fdfdfd_d6d6d6};
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
`
