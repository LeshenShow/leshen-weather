import type { DomainTodolist, Todolist } from "./types"
import type { BaseTodolistResponse } from "shared/types"
import { baseTodolistsApi } from "shared/api"
import { TAGS } from "shared/constants"
import { createTodolistEndpoint } from "../lib"

export const todolistsApi = baseTodolistsApi.injectEndpoints({
  endpoints: (build) => ({
    getTodolists: build.query<DomainTodolist[], void>({
      query: () => createTodolistEndpoint(),
      transformResponse: (todolists: Todolist[]): DomainTodolist[] =>
        todolists.map((todolist) => ({ ...todolist, filter: "all", entityStatus: "idle" })),
      providesTags: [TAGS.todolist],
    }),
    createTodolist: build.mutation<BaseTodolistResponse<{ item: Todolist }>, string>({
      query: (body) => ({
        url: createTodolistEndpoint(),
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.todolist],
    }),
    updateTodolist: build.mutation<BaseTodolistResponse, { id: string; title: string }>({
      query: ({ id, title }) => ({
        url: createTodolistEndpoint(id),
        method: "PUT",
        body: title,
      }),
      invalidatesTags: [TAGS.todolist],
    }),
    deleteTodolist: build.mutation<BaseTodolistResponse, string>({
      query: (id) => ({
        url: createTodolistEndpoint(id),
        method: "DELETE",
      }),
      invalidatesTags: [TAGS.todolist],
    }),
  }),
})

export const { useGetTodolistsQuery, useCreateTodolistMutation, useDeleteTodolistMutation, useUpdateTodolistMutation } =
  todolistsApi
