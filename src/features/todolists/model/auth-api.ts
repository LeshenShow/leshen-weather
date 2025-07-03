import { baseTodolistsApi } from "shared/api"
import type { BaseTodolistResponse } from "shared/types"

import { TODOLIST_TAGS } from "shared/constants"
import type { TodolistLoginArgs } from "./types"

export const authTodolistsApi = baseTodolistsApi.injectEndpoints({
  endpoints: build => ({
    me: build.query<BaseTodolistResponse<{ id: number; email: string; login: string }>, void>({
      query: () => "auth/me",
    }),
    login: build.mutation<BaseTodolistResponse<{ userId: string; token: string }>, TodolistLoginArgs>({
      query: body => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [TODOLIST_TAGS.auth],
    }),
    logout: build.mutation<BaseTodolistResponse, void>({
      query: () => ({
        url: "auth/login",
        method: "DELETE",
      }),
      invalidatesTags: [TODOLIST_TAGS.auth],
    }),
  }),
})
export const { useMeQuery, useLoginMutation, useLogoutMutation } = authTodolistsApi
