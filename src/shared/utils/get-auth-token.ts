export function getAuthToken(localToken: string): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem(localToken)
}
