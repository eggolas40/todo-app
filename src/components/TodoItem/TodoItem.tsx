
import React from 'react'
import { observer } from 'mobx-react'
import { Span, Input, List, Button } from './TodoItem.style'

import { TodoItemType } from './TodoItem.types'

const TodoItem: React.FC<TodoItemType> = observer(({ name, complete, handleRemoveTodo }: TodoItemType) => {
  const inputEl = React.useRef<HTMLInputElement>(null);
  const [checked, setChecked] = React.useState<boolean>(complete || false)
  return (
    <Span>
      <Input type='checkbox' checked={checked} onChange={() => { setChecked(!checked) }} />
      <List ref={inputEl}>{name}</List>
      <Button onClick={() => handleRemoveTodo(inputEl)}>Remove</Button>
    </Span>
  )
})

export default TodoItem
