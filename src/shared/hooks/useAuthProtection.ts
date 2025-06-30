import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { TODOLIST_AUTH_TOKEN } from "shared/constants/todolist-const"
import { getTodolistAuthToken } from "shared/utils/auth"
export const useAuthProtection = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const token = TODOLIST_AUTH_TOKEN ? getTodolistAuthToken() : null
    if (!token) {
      router.replace("/login")
    } else {
      setLoading(false)
    }
  }, [])

  return { loading }
}
