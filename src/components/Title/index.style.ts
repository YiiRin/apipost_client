import styled from 'styled-components'

interface Props {
  top?: string
  left?: string
  right?: string
  bottom?: string
  visible: boolean
}


export const Container = styled.div<Props>`
  position: absolute;
  ${({top}) => top && `top: ${top};`}
  ${({left}) => left && `left: ${left};`}
  ${({right}) => right && `right: ${right};`}
  ${({bottom}) => bottom && `bottom: ${bottom};`}
  display: ${({visible}) => visible? 'block' : 'none'};
`

export const Text = styled.div`
  position: absolute;
  width: 60px;
  text-align: center;
  padding: .1em;
  font-size: 12px;
  border-radius: 4px;
  background-color: #191919;
  color: #fefefe;;
`

export const Triangle = styled.div`
  position: absolute;
  top: 19px;
  left: 24px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-top-color: #191919;
`