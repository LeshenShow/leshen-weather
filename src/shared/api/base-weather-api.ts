import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { WEATHER_TAGS, WEATHER_URL } from "shared/constants"

export const baseWeatherApi = createApi({
  reducerPath: "weatherApi",
  tagTypes: [WEATHER_TAGS.current],
  baseQuery: fetchBaseQuery({
    baseUrl: WEATHER_URL,
  }),
  endpoints: () => ({}),
})
