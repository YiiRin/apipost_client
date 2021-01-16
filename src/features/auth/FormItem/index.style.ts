import styled from 'styled-components'
import theme from 'styled-theming'

const color = theme('mode', {
  light: '#76797D',
  dark: '#E9ECEF',
})

const labelBg = theme('mode', {
  light: '#E9ECEF',
  dark: '#404040',
})

const inputBg = theme('mode', {
  light: '#FCFCFC',
  dark: '#282828',
})

const placeholderHoverColor = theme('mode', {
  light: '#899096',
  dark: '#A9ABAD',
})
export const Container = styled.div`
  font-size: 12px;
  color: ${color};
  /* height: 36px; */
  display: flex;
  flex-wrap: wrap;

  label {
    background-color: ${labelBg};
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
    border: 1px solid ${labelBg};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${inputBg};

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
