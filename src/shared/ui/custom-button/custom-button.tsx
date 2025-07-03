// import { Button, type ButtonProps } from "@radix-ui/themes"
// import React from "react"

// export const CustomButton = React.forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
//   return (
//     <Button onClick={props.onClick} ref={ref} {...props}>
//       {props.value}
//     </Button>
//   )
// })
// type Props = ButtonProps & {
//   value?: string
// }

import { Button, type ButtonProps } from "@radix-ui/themes"

export const CustomButton = (props: Props) => <Button {...props}>{props.children ?? props.value}</Button>

type Props = ButtonProps & {
  children?: React.ReactNode
  title?: string
}
