import { Cross1Icon } from "@radix-ui/react-icons"
import { Card, Checkbox, Flex } from "@radix-ui/themes"
import { createUpdateModel } from "features/todolists/lib"
import { useDeleteTaskMutation, useUpdateTaskMutation } from "features/todolists/model/tasks-api"
import type { Task } from "features/todolists/model/types"
import { TaskStatus } from "shared/enums"
import { CustomIconButton } from "shared/ui/custom-icon-button"
import { EditableArea } from "shared/ui/editable-area"

export const TaskItem = (props: Props) => {
  const { todolistId, task } = props
  const [deleteTask] = useDeleteTaskMutation()
  const [updateTask] = useUpdateTaskMutation()
  const deleteTaskHandler = () => deleteTask({ todolistId, taskId: task.id })
  const updateTitleTaskHandler = (title: string) => {
    const updateModel = createUpdateModel(task, { title })
    updateTask({ todolistId, taskId: task.id, updateModel })
  }
  const updateStatusTaskHandler = (checked: string | boolean) => {
    const status = checked ? TaskStatus.Completed : TaskStatus.New
    const updateModel = createUpdateModel(task, { status })
    updateTask({ todolistId, taskId: task.id, updateModel })
  }
  const isTaskCompleted = task.status === TaskStatus.Completed
  return (
    <Card key={task.id}>
      <Flex justify={"between"} className={`${isTaskCompleted && "opacity-50"}`}>
        <Flex align={"center"} gap={"2"}>
          <Checkbox
            size={"3"}
            checked={isTaskCompleted}
            onCheckedChange={checked => updateStatusTaskHandler(checked)}
          />
          <EditableArea onChange={updateTitleTaskHandler} value={task.title} />
        </Flex>
        <CustomIconButton icon={<Cross1Icon />} onClick={deleteTaskHandler} />
      </Flex>
    </Card>
  )
}
type Props = {
  todolistId: string
  task: Task
}
