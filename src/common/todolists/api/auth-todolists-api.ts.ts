import { baseTodolistsApi } from "./base-todolists-api"

export const authTodolistsApi = baseTodolistsApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<BaseTodolistResponse<{ id: number; email: string; login: string }>, void>({
      query: () => "auth/me",
    }),
    login: build.mutation<BaseTodolistResponse<{ userId: string }>, TodolistLoginArgs>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    logout: build.mutation<BaseTodolistResponse, void>({
      query: () => ({
        url: "auth/login",
        method: "DELETE",
      }),
    }),
  }),
})

export type BaseTodolistResponse<T = {}> = {
  resultCode: number
  messages: string[]
  fieldsErrors: {
    error: string
    field: string
  }
  data: T
}

export type TodolistLoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}
