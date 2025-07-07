import { Cross1Icon } from "@radix-ui/react-icons"
import { Flex, IconButton, Text } from "@radix-ui/themes"
import { useDeleteTodolistMutation, useUpdateTodolistMutation } from "features/todolists/model"
import type { DomainTodolist } from "features/todolists/model/types"
import { CustomIconButton } from "shared/ui/custom-icon-button"
import { EditableArea } from "shared/ui/editable-area"

export const TodolistTitle = (props: Props) => {
  const { id, title } = props.todolist
  const [deleteTodolist] = useDeleteTodolistMutation()
  const [updateTodolist] = useUpdateTodolistMutation()
  const deleteTodolistHandler = () => deleteTodolist(id)
  const updateTodolistHandler = (title: string) => updateTodolist({ id, title })
  return (
    <Flex justify={"start"} align={"center"} gap={"1"} px={"2"} py={"1"} className="rounded-lg">
      <EditableArea value={title} onChange={updateTodolistHandler} />
      <IconButton children={<Cross1Icon />} onClick={deleteTodolistHandler} size={"1"} />
    </Flex>
  )
}
type Props = {
  todolist: DomainTodolist
}
