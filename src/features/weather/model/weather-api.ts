import { baseWeatherApi } from "shared/api"
import { WEATHER_API_KEY, WEATHER_TAGS } from "shared/constants"
import type { WeatherResponse } from "./types"

export const weatherCurrentApi = baseWeatherApi.injectEndpoints({
  endpoints: build => ({
    getCurrentWeather: build.query<WeatherResponse, { city: string }>({
      providesTags: [WEATHER_TAGS.current],
      query: ({ city }) => ({ url: `/current.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(city)}` }),
    }),
  }),
})
export const { useGetCurrentWeatherQuery, useLazyGetCurrentWeatherQuery } = weatherCurrentApi
