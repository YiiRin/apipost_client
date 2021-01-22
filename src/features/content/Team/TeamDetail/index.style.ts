import styled from 'styled-components'
import theme from 'styled-theming'

export const Container = styled.div`
  padding: 2em;

  .detail-item {
    margin-bottom: 1.5em;
  }

  .no-team-text {
    color: #adb5bd;
    font-size: 13px;
    text-indent: 1em;
    margin-bottom: 0.75em;
  }
`

const toggleBtnBg = theme('mode', {
  light: '#58B882',
  dark: '#58B882',
})

const toggleBtnHoverBg = theme('mode', {
  light: '#79C69A',
  dark: '#4E9B70',
})

const toggleBtnColor = theme('mode', {
  light: '#FCFCFC',
  dark: '#FCFCFC',
})

const toggleBtnHoverColor = theme('mode', {
  light: '#FEFEFE',
  dark: '#D4D4D4',
})

const helpdocHoverColor = theme('mode', {
  light: '#F2968E',
  dark: '#B2564E',
})

const toggleBtnDisabledBg = theme('mode', {
  light: '#92d0ad',
  dark: '#478562',
})

export const DetailHeader = styled.div`
  font-size: 12px;

  .toggle-current-team-btn {
    background-color: ${toggleBtnBg};
    color: ${toggleBtnColor};
    padding: 0.75em 1em;
    margin-right: 0;
    &:hover {
      background-color: ${toggleBtnHoverBg};
      color: ${toggleBtnHoverColor};
    }

    &[disabled] {
      background-color: ${toggleBtnDisabledBg};
    }
  }

  .help-doc {
    color: #ee6a5e;
    margin-left: 0;

    &:hover {
      color: ${helpdocHoverColor};
    }
  }
`

export const OfficialCubicleContainer = styled.div`
  display: flex;
`
