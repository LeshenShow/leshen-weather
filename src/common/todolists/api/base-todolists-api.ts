import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseTodolistsApi = createApi({
  reducerPath: "todolistApi",
  tagTypes: ["Todolist", "Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.TODOLIST_URL,
    prepareHeaders: (headers) => {
      const apiKey = process.env.TODOLIST_API_KEY
      const token = process.env.NEXT_PUBLIC_TODOLIST_AUTH_TOKEN
      if (!apiKey || !token) {
        throw new Error("Missing environment variables: TODOLIST_API_KEY or TOKEN")
      }
      headers.set("API-KEY", apiKey)
      headers.set("Authorization", `Bearer ${localStorage.getItem(token)}`)
    },
  }),
  endpoints: () => ({}),
})
