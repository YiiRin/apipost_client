import {
  _545b62_adb5bd,
  _e9ecef_404040,
  _f7f7f7_303030,
} from 'assets/theme/color'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputContainer = styled.div`
  width: 940px;
  height: 36px;
  position: relative;

  &:hover i {
    color: #ee6a5e;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 18px;
  padding: 0;
  padding-left: 36px;
  padding-bottom: 2px;
  color: ${_545b62_adb5bd};

  background-color: ${_e9ecef_404040};
  &:focus {
    outline: none;
    border-radius: 0;
    background-color: ${_f7f7f7_303030};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  &:focus + i {
    color: #ee6a5e;
  }

  &::placeholder {
    font-size: 13px;
  }
`

export const Icon = styled.i`
  position: absolute;
  color: ${_545b62_adb5bd};
  left: 14px;
  top: 12px;
`
