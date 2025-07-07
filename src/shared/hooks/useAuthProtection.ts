import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { TODOLIST_AUTH_TOKEN, TODOLIST_LOCAL_STORAGE_AUTH_TOKEN } from "shared/constants/todolist-const"
import { getAuthToken } from "shared/utils/get-auth-token"

export const useAuthProtection = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = TODOLIST_AUTH_TOKEN ? getAuthToken(TODOLIST_LOCAL_STORAGE_AUTH_TOKEN) : null
    if (!token) {
      router.replace("/login")
    } else {
      setLoading(false)
    }
  }, [])

  return { loading }
}
