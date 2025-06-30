import { baseTodolistsApi } from "shared/api"
import type { BaseTodolistResponse } from "shared/types"
import type { TodolistLoginArgs } from "./types"
import { TAGS } from "shared/constants"

export const authTodolistsApi = baseTodolistsApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<BaseTodolistResponse<{ id: number; email: string; login: string }>, void>({
      query: () => "auth/me",
    }),
    login: build.mutation<BaseTodolistResponse<{ userId: string; token: string }>, TodolistLoginArgs>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [TAGS.auth],
    }),
    logout: build.mutation<BaseTodolistResponse, void>({
      query: () => ({
        url: "auth/login",
        method: "DELETE",
      }),
      invalidatesTags: [TAGS.auth],
    }),
  }),
})
export const { useMeQuery, useLoginMutation, useLogoutMutation } = authTodolistsApi
