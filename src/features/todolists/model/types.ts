import type { TaskPriority, TaskStatus } from "shared/enums"
export type TodolistLoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
  captcha?: string
}
export type Todolist = {
  id: string
  title: string
  addedDate: string
  order: number
}
export type FilterValues = "all" | "active" | "completed"
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"
export type DomainTodolist = Todolist & {
  filter: FilterValues
  entityStatus: RequestStatus
}

export type DomainTask = {
  error: string | null
  totalCount: number
  items: Task[]
}
export type Task = {
  description: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}

export type UpdateTaskModel = {
  description: string | null
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string | null
  deadline: string | null
}
export type GetTaskRequest = { todolistId: string; params: { page: number; count: number } }
export type CreateTaskRequest = { todolistId: string; title: string }
export type UpdateTaskRequest = { todolistId: string; taskId: string; updateModel: UpdateTaskModel }
export type DeleteTaskRequest = { todolistId: string; taskId: string }
