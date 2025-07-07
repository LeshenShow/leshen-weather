import { Box, Flex } from "@radix-ui/themes"
import { Todolists } from "features/todolists/ui"
import { Weather } from "features/weather/ui/weather"
import { useCallback, useRef, useState } from "react"
import { getUserLeftWidth } from "../lib"
import { MainResizer } from "./resizer"
import { useDebouncedEffect } from "../hooks"
import { STORAGE_KEY } from "../const"

export const Main = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [leftWidth, setLeftWidth] = useState(() => getUserLeftWidth())
  const setLeftWidthHandler = (value: number) => setLeftWidth(value)
  useDebouncedEffect(() => localStorage.setItem(STORAGE_KEY, leftWidth.toString()), [leftWidth], 400)
  const minMaxLength = { min: 30, max: 70 }
  return (
    <Flex ref={containerRef} p={"4"} className="bg-[var(--accent-2)] rounded-lg" gap={"1"} width={"100%"}>
      <Flex className="bg-[var(--accent-3)] rounded-lg" width={`${leftWidth}%`} direction={"column"} gap={"3"} p={"1"}>
        <Todolists />
      </Flex>

      <MainResizer
        leftWidth={leftWidth}
        setLeftWidth={setLeftWidthHandler}
        containerRef={containerRef}
        minMaxLength={minMaxLength}
      />

      <Flex className="bg-[var(--accent-3)] rounded-lg" p={"4"}>
        <Weather />
      </Flex>
    </Flex>
  )
}
type Props = {}
