import { Cross1Icon } from "@radix-ui/react-icons"
import { Card, Flex, IconButton, Text } from "@radix-ui/themes"
import type { DomainTodolist } from "features/todolists/model/types"

export const TodolistTitle = (props: Props) => {
  return (
    <Flex>
      <Text>{props.todolist.title}</Text>
      <IconButton>
        <Cross1Icon />
      </IconButton>
    </Flex>
  )
}
type Props = {
  todolist: DomainTodolist
}
