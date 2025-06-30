import { LOCAL_STORAGE_AUTH_TOKEN } from "shared/constants"

export function getTodolistAuthToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
}
