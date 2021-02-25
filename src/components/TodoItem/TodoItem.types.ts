import { TodoType } from '../../types/types'

export interface TodoItemType extends TodoType {
  handleRemoveTodo<HTMLInputElement>(inputEl: HTMLInputElement) : void
}
