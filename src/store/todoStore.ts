import { makeObservable, action, observable } from "mobx"
import { TodoType } from '../types/types'

class TodoStore {

  todos: TodoType[] = []

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
    })
  }

  addTodo = (todo: TodoType) => {
    const todos = this.todos.slice()
    todos.push(todo)
    this.todos = todos
  }

  removeTodo = (id: TodoType['id']) => {
    const todos = this.todos.slice().filter(t => t.id !== id)
    this.todos = todos
  }
}
export default TodoStore
export const todoStore = new TodoStore()