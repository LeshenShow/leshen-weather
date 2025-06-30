export type DomainTodolist = Todolist & {
  filter: FilterValues
  entityStatus: RequestStatus
}
export type Todolist = {
  id: string
  title: string
  addedDate: string
  order: number
}
export type FilterValues = "all" | "active" | "completed"
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"
