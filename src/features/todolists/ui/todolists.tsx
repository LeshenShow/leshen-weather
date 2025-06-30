import { Box, Card, Grid } from "@radix-ui/themes"
import { useGetTodolistsQuery } from "../model/query-api"
import { TodolistItem } from "./todolistItem"

export const Todolists = () => {
  const { data } = useGetTodolistsQuery(undefined, {
    // pollingInterval: 3000,
    refetchOnFocus: true,
    skipPollingIfUnfocused: true,
  })
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
  const todolists = data?.map((todolist) => (
    <Grid key={todolist.id}>
      <Card>
        <TodolistItem todolist={todolist} />
      </Card>
    </Grid>
  ))

  return <>{todolists}</>
}
