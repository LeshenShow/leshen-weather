import { Card, Flex } from "@radix-ui/themes"
import { useCreateTaskMutation, useGetTasksQuery } from "features/todolists/model/tasks-api"
import { useState } from "react"
import { CreateNewItem } from "../../create-new-item/create-new-item"
import { TaskItem } from "./task-item/task-item"

export const Tasks = (props: Props) => {
  const { todolistId } = props
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(5)
  const { data } = useGetTasksQuery({ todolistId, params: { page, count } })
  const [createTask] = useCreateTaskMutation()

  const createTaskHandler = (title: string) => createTask({ todolistId, title })
  const tasks = data?.items.map((t) => <TaskItem task={t} todolistId={todolistId} key={t.id} />)

  return (
    <Flex direction={"column"}>
      <CreateNewItem onCreateItem={createTaskHandler} />
      <>{tasks}</>
    </Flex>
  )
}
type Props = {
  todolistId: string
}
