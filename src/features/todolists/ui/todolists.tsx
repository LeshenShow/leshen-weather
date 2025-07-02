import { Box, Card, Flex, Grid } from "@radix-ui/themes"
import { useCreateTodolistMutation, useGetTodolistsQuery } from "../model/todolist-api"
import { TodolistItem } from "./todolistItem"
import { CreateNewItem } from "./create-new-item/create-new-item"

export const Todolists = () => {
  const { data } = useGetTodolistsQuery(undefined, {
    // pollingInterval: 3000,
    // refetchOnFocus: true,
    // skipPollingIfUnfocused: true,
  })
  const [createTodolist] = useCreateTodolistMutation()
  // if (isLoading) {
  //   return (
  //     <Box sx={containerSx} style={{ gap: "32px" }}>
  //       {Array(3)
  //         .fill(null)
  //         .map((_, id) => (
  //           <TodolistSkeleton key={id} />
  //         ))}
  //     </Box>
  //   )
  // }
  const todolists = data?.map((todolist) => <TodolistItem todolist={todolist} key={todolist.id} />)
  return (
    <Flex direction={"column"}>
      {/* <CreateNewItem onCreateItem={createTodolist} /> */}
      <Box> {todolists}</Box>
    </Flex>
  )
}
