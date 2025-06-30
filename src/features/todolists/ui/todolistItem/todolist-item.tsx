import { Button } from "@radix-ui/themes"
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "features/todolists/model/tasks-api"
import type { DomainTodolist } from "features/todolists/model/types"
import { useState } from "react"

export const TodolistItem = (props: Props) => {
  const { id: todolistId, filter } = props.todolist
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(5)
  const { data } = useGetTasksQuery({ todolistId, params: { page, count } })
  const [createTask] = useCreateTaskMutation()
  const [deleteTask] = useDeleteTaskMutation()
  const [updateTask] = useUpdateTaskMutation()
  const createTaskHandler = () => createTask({ todolistId, title: "qwe" })
  const deleteTaskHandler = (taskId: string) => deleteTask({ todolistId, taskId })
  // const updateTaskHandler = (taskId: string) =>updateTask( {todolistId, taskId, updateModel})
  const tasks = data?.items.map((t) => (
    <ul key={t.id}>
      <div>{t.title}</div>
      <Button
        onClick={() => {
          deleteTaskHandler(t.id)
        }}
      >
        X
      </Button>
    </ul>
  ))
  return (
    <>
      <Button onClick={createTaskHandler}>NEW</Button>
      <div>{tasks}</div>
    </>
  )
}
type Props = {
  todolist: DomainTodolist
}
