import { TODOLIST_TAGS } from "shared/constants"

export const createTodolistEndpoint = (todolistId?: string) =>
  todolistId ? `/todo-lists/${todolistId}` : "/todo-lists"

export const createTaskEndpoint = (todolistId: string, taskId?: string) =>
  taskId ? `/todo-lists/${todolistId}/tasks/${taskId}` : `/todo-lists/${todolistId}/tasks`
export const createTaskTag = (id: string) => [{ type: TODOLIST_TAGS.task, id }]
