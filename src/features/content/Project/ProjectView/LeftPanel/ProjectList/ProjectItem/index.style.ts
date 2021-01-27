import {
  _545b62_adb5bd,
  _e9eaeb_323232,
  _f7f7f7_303030,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  height: 64px;
  padding: 0.5em 2em;
  border-bottom: 1px solid ${_e9eaeb_323232};
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${_f7f7f7_303030};
  }

  .link-to-api {
    font-size: 12px;
    flex: 0 0 auto;
    visibility: hidden;
    &:hover {
      color: #ee6a5e;
    }
  }

  &:hover .link-to-api {
    visibility: visible;
  }
`

export const Box = styled.div`
  width: 32px;
  height: 32px;
  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ee6a5e;
  border-radius: 4px;

  svg {
    color: #fcfcfc;
  }
`

export const ProjectInfo = styled.div`
  font-size: 12px;
  margin-left: 1.5em;
  flex: 1 1 auto;
  .proj-name {
    display: flex;
    align-items: center;
    height: 20px;
    color: ${_545b62_adb5bd};
    margin-bottom: 4px;
    svg {
      margin-right: 0.5em;
    }

    svg.locked {
      color: #ee6a5e;
    }

    &:hover {
      cursor: pointer;
      color: #ee6a5e;
    }
  }

  .proj-info {
    height: 20px;
    color: #adb5bd;
    .create-time {
      margin-right: 1.5em;
    }
  }
`
