import { baseTodolistsApi } from "shared/api"
import type { CreateTaskRequest, DeleteTaskRequest, DomainTask, GetTaskRequest, UpdateTaskRequest } from "./types"
import type { BaseTodolistResponse } from "shared/types"
import { createTaskEndpoint, createTaskTag } from "../lib"

export const tasksApi = baseTodolistsApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<DomainTask, GetTaskRequest>({
      providesTags: (_result, _error, { todolistId }, _meta) => createTaskTag(todolistId),
      query: ({ todolistId, params }) => ({
        url: createTaskEndpoint(todolistId),
        params: { ...params, count: 5, page: 1 },
      }),
    }),

    createTask: build.mutation<BaseTodolistResponse, CreateTaskRequest>({
      invalidatesTags: (_result, _error, { todolistId }, _meta) => createTaskTag(todolistId),
      query: ({ todolistId, title }) => ({
        url: createTaskEndpoint(todolistId),
        method: "POST",
        body: { title },
      }), // проверить нужен ли айтем-типизация BaseTodolistResponse<{ item: DomainTask }>
    }),

    updateTask: build.mutation<BaseTodolistResponse, UpdateTaskRequest>({
      invalidatesTags: (_result, _error, { todolistId }, _meta) => createTaskTag(todolistId),
      query: ({ todolistId, taskId, updateModel }) => ({
        url: createTaskEndpoint(todolistId, taskId),
        method: "PUT",
        body: updateModel,
      }),
    }),

    deleteTask: build.mutation<BaseTodolistResponse, DeleteTaskRequest>({
      invalidatesTags: (_result, _error, { todolistId }, _meta) => createTaskTag(todolistId),
      query: ({ todolistId, taskId }) => ({
        url: createTaskEndpoint(todolistId, taskId),
        method: "DELETE",
      }),
    }),
  }),
})

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi
