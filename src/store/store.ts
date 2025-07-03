import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { baseTodolistsApi } from "shared/api/base-todolist-api"
import { useDispatch, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    [baseWeatherApi.reducerPath]: baseWeatherApi.reducer,
    [baseTodolistsApi.reducerPath]: baseTodolistsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseWeatherApi.middleware, baseTodolistsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()