import {
  _76797d_e9ecef,
  _e9ecef_404040,
  _fcfcfc_282828,
} from 'assets/theme/color'
import styled from 'styled-components'
import theme from 'styled-theming'

const placeholderHoverColor = theme('mode', {
  light: '#899096',
  dark: '#A9ABAD',
})

export const Container = styled.div`
  font-size: 12px;
  color: ${_76797d_e9ecef};
  /* height: 36px; */
  display: flex;
  flex-wrap: wrap;

  label {
    background-color: ${_e9ecef_404040};
    height: 36px;
    padding-right: 1.5em;
    margin: 0;
    width: 20%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  input {
    height: 36px;
    color: inherit;
    border: none;
    outline: none;
    width: 80%;
    border: 1px solid ${_e9ecef_404040};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${_fcfcfc_282828};

    padding-left: 1em;

    &:focus::placeholder {
      color: ${placeholderHoverColor};
    }
  }

  .error {
    width: 100%;
    font-size: 12px;
    padding-left: calc(20% + 1em);
    line-height: 1.5;
    color: #ee6a5e;
  }
`
