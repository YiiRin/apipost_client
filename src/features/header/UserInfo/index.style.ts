import styled from 'styled-components'
import theme from 'styled-theming'

const teamTextBg = theme('mode', {
  light: 'linear-gradient(to left, #df404c, #f89b89)',
  dark: 'linear-gradient(to left, #D43441, #8D311F)',
})

export const Container = styled.section`
  width: 270px;
  height: 100%;
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const PortraitContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 14px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const InfoContainer = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: right;
  margin-right: 10px;
  padding: 5px 0;

  button {
    padding: 0 .5em;
    margin: 0;
    border: none;
    color: #fcfcfc;
    background: ${teamTextBg};
  }
  span,
  button {
    height: 20px;
    line-height: 20px;
  }
`