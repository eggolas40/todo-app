
import React  from 'react'
import { observer } from 'mobx-react'
import * as uuid from 'uuid'
import TodoStore from  '../../store/todoStore'

import TodoItem from '../TodoItem'

import { Div, Button } from './TodoList.style'

const todoStore = new TodoStore()

const handleAddNewTodo = (input: any): void => {
  todoStore.addTodo({ name: input.current.value, complete: false })
}

const handleRemoveTodo = (input: any): void => {
  todoStore.removeTodo({ name: input.current.innerText, complete: false })
}

const TodoList: React.FC<{}> = observer(() => {
  const inputEl = React.useRef<HTMLInputElement>(null);
  return (
    <Div>
      <input type='text' ref={inputEl} />
      <Button onClick={() => handleAddNewTodo(inputEl)}>Add</Button>
      <ul>
        {todoStore.todos.map(d => {
          return <TodoItem name={d.name} complete={d.complete} key={uuid.v4()} handleRemoveTodo={handleRemoveTodo} />
        })}
      </ul>
    </Div>
  )
})

export default TodoList