
import React  from 'react'
import { observer } from 'mobx-react'
import * as uuid from 'uuid'
import TodoStore from  '../../store/todoStore'

import TodoItem from '../TodoItem'

import { Div, Button, Input, List } from './TodoList.style'

const todoStore = new TodoStore()

const handleAddNewTodo = (input: any, e?: any, ): void => {
  if ((!e || e.key === 'Enter') && input?.current?.value) {
    todoStore.addTodo({ name: input.current.value, complete: false, id: uuid.v4() })
    input.current.value = ''
  }
}

const handleRemoveTodo = (id: any): void => {
  todoStore.removeTodo(id)
}

const TodoList: React.FC<{}> = observer(() => {
  const inputEl = React.useRef<HTMLInputElement>(null);
  return (
    <Div>
      <Input type='text' ref={inputEl} onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleAddNewTodo(inputEl, e)} />
      <Button onClick={() => handleAddNewTodo(inputEl)}>Add</Button>
      <List>
        {todoStore?.todos.map(d => {
          return <TodoItem name={d.name} complete={d.complete} id={d.id} handleRemoveTodo={handleRemoveTodo} />
        })}
      </List>
    </Div>
  )
})

export default TodoList