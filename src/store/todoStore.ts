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

  removeTodo = (todo: TodoType) => {
  console.log('# ~ find this todo', todo)
  console.log('# ~ before ', this.todos)
    const todos = this.todos.slice().filter(t => t.name !== todo.name)
    this.todos = todos
    console.log('# ~ after ', this.todos)
  }
}
export default TodoStore
export const todoStore = new TodoStore()