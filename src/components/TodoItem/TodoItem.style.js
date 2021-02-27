import styled from 'styled-components'

const Span = styled.span`
  display: flex;
  align-items: center;
  margin: 8px 0;
`

const Input = styled.input`
  flex: 0;
  cursor: pointer;
`

const List = styled.li`
  list-style: none;
  padding-left: 8px;
  color: #fff;
`

const Button = styled.button`
  padding: 6px 8px;
  cursor: pointer;
  margin-left: 8px;
  background: #ff3333;
  border: none;
  border-radius: 20px;
  color: #fff;
`

export { Span, Input, List, Button }