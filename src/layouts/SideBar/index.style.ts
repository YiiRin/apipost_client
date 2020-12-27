import styled from 'styled-components'
import theme from 'styled-theming'

const backgroundColor = theme('mode', {
  light: '#f7f7f7',
  dark: '#303030',
})

const borderRight = theme('mode', {
  light: '1px solid #e9eaeb',
  dark: '1px solid #323232',
})

export const Container = styled.div`
  width: 71px;
  background-color: ${backgroundColor};
  border-right: ${borderRight};

  display: flex;
  flex-direction: column;
  align-items: center;

  .nav-list {
    .nav-item {
      margin-top: 1em;
    }
  }

  .business {
    margin-bottom: 1em;
  }
  .business,
  .friends-links {
    flex: 0 0 auto;
  }
  .application {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 2em;
  }
`
