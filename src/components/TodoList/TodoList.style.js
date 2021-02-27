import styled from 'styled-components'

const Div = styled.div`
  transform: translateX(10%);
`

const Input = styled.input`
  padding: 4px;
  border: none;
  border-bottom: 1px solid white;
  text-align: center;
  background: #525252;
  color: white;

  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`

const List = styled.ul`
  padding-left: 0;
  margin-top: 24px;
`

const Button = styled.button`
  padding: 6px 8px;
  cursor: pointer;
  margin-left: 8px;
  background: #a0e7a0;
  border: none;
  border-radius: 20px;
  color: #fff;
`

export { Div, Button, Input, List }