import { Flex, Box } from "@radix-ui/themes"
import { STORAGE_KEY } from "layout/main/const"
import { useState, useEffect, type RefObject } from "react"
import { Points } from "./points"

export const MainResizer = (props: Props) => {
  const { leftWidth, setLeftWidth, containerRef, minMaxLength } = props
  const [isDragging, setIsDragging] = useState(false)
  const mouseDownHandler = (e: React.MouseEvent) => {
    e.preventDefault() // отмена выделения текста
    setIsDragging(true)
    const startX = e.clientX
    const container = containerRef.current
    if (!container) return
    const startWidth = container.offsetWidth * (leftWidth / 100)
    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX
      const newLeftWidth = ((startWidth + dx) / container.offsetWidth) * 100
      setLeftWidth(Math.min(minMaxLength.max, Math.max(minMaxLength.min, newLeftWidth)))
    }
    const onMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseup", onMouseUp)
    }
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
  }

  return (
    <Flex
      mx={"1"}
      justify={"center"}
      align={"center"}
      width={"16px"}
      onMouseDown={mouseDownHandler}
      className={` cursor-col-resize select-none transition-colors  duration-200 rounded-lg
         ${isDragging ? "bg-[var(--accent-3)]" : "bg-[var(--accent-2)]"}`}
    >
      <Points isDragging={isDragging} />
    </Flex>
  )
}
type Props = {
  leftWidth: number
  setLeftWidth: (value: number) => void
  containerRef: RefObject<HTMLDivElement | null>
  minMaxLength: { min: number; max: number }
}
