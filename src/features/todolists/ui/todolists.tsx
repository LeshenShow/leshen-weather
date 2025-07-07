import { Box, Card, Flex, Grid } from "@radix-ui/themes"
import { useCreateTodolistMutation, useGetTodolistsQuery } from "../model/todolist-api"
import { TodolistItem } from "./todolistItem"
import { CreateNewItem } from "./create-new-item/create-new-item"
import { TodolistSkeleton } from "./skeleton"
import React from "react"

export const Todolists = React.memo(() => {
  // console.log("render Todolist")
  const { data, isLoading } = useGetTodolistsQuery(undefined, {
    // pollingInterval: 3000,
    refetchOnFocus: true,
    skipPollingIfUnfocused: true,
  })
  const [createTodolist] = useCreateTodolistMutation()
  return <TodolistSkeleton />
  // if (isLoading) return <TodolistSkeleton />

  // const todolists = data?.map(todolist => <TodolistItem todolist={todolist} key={todolist.id} />)
  // return (
  //   <>
  //     <Box
  //       className="WrapperCreateNewItem bg-[var(--accent-5)] rounded-lg m-1"
  //       children={<CreateNewItem onCreateItem={createTodolist} />}
  //     />
  //     <Box children={todolists} />
  //   </>
  // )
})
