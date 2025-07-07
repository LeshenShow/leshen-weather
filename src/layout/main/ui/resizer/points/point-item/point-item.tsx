import { Box } from "@radix-ui/themes"

export const PointItem = (props: Props) => {
  return (
    <Box
      height={"8px"}
      className={`rounded-sm transition-colors duration-200
         ${props.isDragging ? "bg-[var(--accent-9)]" : "bg-[var(--accent-7)]"}`}
    />
  )
}
type Props = {
  isDragging: boolean
}
