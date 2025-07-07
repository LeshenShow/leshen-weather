import { Box, Flex } from "@radix-ui/themes"
import { PointItem } from "./point-item"

export const Points = (props: Props) => {
  const points = [...Array(3)].map(i => <PointItem key={i} isDragging={props.isDragging} />)
  return (
    <Flex direction={"column"} justify={"between"} height={"40px"} width={"8px"}>
      {points}
    </Flex>
  )
}
type Props = {
  isDragging: boolean
}
