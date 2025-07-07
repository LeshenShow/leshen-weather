import { STORAGE_KEY } from "../const"

export const getUserLeftWidth = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = parseFloat(stored)
      if (!isNaN(parsed)) return parsed
    }
  }
  return 50
}
