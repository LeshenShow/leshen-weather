import { IconButton, type IconButtonProps } from "@radix-ui/themes"
import type { ReactElement } from "react"

export const CustomIconButton = (props: Props) => <IconButton {...props}>{props.children ?? props.icon}</IconButton>

type Props = IconButtonProps & {
  icon: ReactElement
  children?: React.ReactNode
}
