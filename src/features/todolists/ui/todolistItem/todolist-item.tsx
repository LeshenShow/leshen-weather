import type { DomainTodolist } from "features/todolists/model/types"

export const TodolistItem = (props: Props) => {
  return (
    <>
      <div>...Hello, I'm export function expression...</div>
    </>
  )
}
type Props = {
  todolist: DomainTodolist
}
