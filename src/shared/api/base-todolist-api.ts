import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query/react"
import {
  TODOLIST_URL,
  TODOLIST_API_KEY,
  TODOLIST_AUTH_TOKEN,
  TODOLIST_LOCAL_STORAGE_AUTH_TOKEN,
  TODOLIST_TAGS,
} from "shared/constants"
import { getAuthToken } from "shared/utils"

const baseQuery = fetchBaseQuery({
  baseUrl: TODOLIST_URL,
  prepareHeaders: headers => {
    if (!TODOLIST_API_KEY || !TODOLIST_AUTH_TOKEN) {
      throw new Error("Missing environment variables: TODOLIST_API_KEY or TOKEN")
    }
    headers.set("API-KEY", TODOLIST_API_KEY)
    const token = getAuthToken(TODOLIST_LOCAL_STORAGE_AUTH_TOKEN)
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithAuthCheck: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    localStorage.removeItem(TODOLIST_LOCAL_STORAGE_AUTH_TOKEN)
    if (typeof window !== "undefined") {
      window.location.href = "/login"
    }
  }
  return result
}

export const baseTodolistsApi = createApi({
  reducerPath: "todolistsApi",
  tagTypes: [TODOLIST_TAGS.todolist, TODOLIST_TAGS.auth, TODOLIST_TAGS.task],
  baseQuery: baseQueryWithAuthCheck,
  endpoints: () => ({}),
})
