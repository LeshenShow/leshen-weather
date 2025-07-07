import { Box, Button, Flex, TextArea } from "@radix-ui/themes"
import { useGetCurrentWeatherQuery, useLazyGetCurrentWeatherQuery } from "../model"
import React, { useState, type ChangeEvent } from "react"

export const Weather = React.memo((props: Props) => {
  console.log("render Weather")
  const [trigger, { data, isFetching, error }] = useLazyGetCurrentWeatherQuery()
  const [city, setCity] = useState("")
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value
    setCity(value)
  }
  const triggerHandler = () => trigger({ city })

  return (
    <Box>
      <TextArea onChange={onChangeHandler} value={city} />
      <Button children="get weather" onClick={triggerHandler} />

      {data && <Flex>{data.current.temp_c}</Flex>}
    </Box>
  )
})
type Props = {}
