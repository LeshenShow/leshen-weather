import type { Task, UpdateTaskModel } from "../model"

export const createUpdateModel = (task: Task, domainModel: Partial<UpdateTaskModel>): UpdateTaskModel => ({
  status: task.status,
  title: task.title,
  deadline: task.deadline,
  description: task.description,
  priority: task.priority,
  startDate: task.startDate,
  ...domainModel,
})
