import { useEffect } from "react"

export const useErrorReset = <T>(value: T, reset: () => void, delay = 3000) => {
  useEffect(() => {
    if (!value) return
    const timeout = setTimeout(reset, delay)
    return () => clearTimeout(timeout)
  }, [value, reset, delay])
}
