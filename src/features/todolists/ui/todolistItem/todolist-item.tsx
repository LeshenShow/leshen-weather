import { Flex } from "@radix-ui/themes";
import type { DomainTodolist } from "features/todolists/model/types";
import { TodolistTitle } from "./todolist-title/todolist-title";
import { Tasks } from "./tasks/tasks";

export const TodolistItem = (props: Props) => {
  const { id: todolistId, filter } = props.todolist;

  return (
    <Flex key={todolistId} mb={"1"} p={"1"} direction={"column"} className="rounded-lg">
      <TodolistTitle todolist={props.todolist} />
      <Tasks todolistId={todolistId} />
    </Flex>
  );
};
type Props = {
  todolist: DomainTodolist;
};
