import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  display: none;
  font-size: 12px;
  color: #fefefe;
  background-color: #191919;
  padding: 0 0.5em;
  text-align: center;
  height: 20px;
  line-height: 20px;
  white-space: nowrap;

  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #191919;
  }
`
