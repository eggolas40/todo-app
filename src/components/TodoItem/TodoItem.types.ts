import { TodoType } from '../../types/types'

export interface TodoItemType extends TodoType {
  handleRemoveTodo(id: TodoType['id']) : void,
}
