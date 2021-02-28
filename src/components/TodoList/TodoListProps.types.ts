import React from 'react'
export interface TodoListProps {
  name: string, 
  complete: boolean, 
}
export interface AddTodo {
  evt: React.KeyboardEvent<HTMLDivElement>,
}
export interface State {
  checked: Boolean
}