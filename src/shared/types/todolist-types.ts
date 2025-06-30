export type BaseTodolistResponse<T = {}> = {
  resultCode: number
  messages: string[]
  fieldsErrors: {
    error: string
    field: string
  }
  data: T
}
