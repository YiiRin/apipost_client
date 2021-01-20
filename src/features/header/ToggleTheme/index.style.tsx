import styled from 'styled-components'

export const Container = styled.section`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  width: 150px;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    
    .text {
      font-size: 12px
    }
    section {
      margin-right: 6px;
    }
  }
`