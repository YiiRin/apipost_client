import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: none;
  }

  25% {
    transform: rotateY(90deg) ;
  }

  50% {
    transform: rotateY(180deg);
  }

  75% {
    transform: rotateX(90deg);
  }

  100% {
    transform: rotateX(180deg);
  }
`

export const Container = styled.div`
  background-color: #f7f7f7;
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;

  .box {
    width: 50px;
    height: 50px;
    background-color: #ee6a5e;
    animation: ${rotate} 1.2s infinite;
  }
`
