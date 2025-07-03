import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_WEATHER_URL }),
  endpoints: (builder) => ({
    // getWeather: builder.query(),
  }),
})
