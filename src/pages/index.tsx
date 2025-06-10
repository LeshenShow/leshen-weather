import "@radix-ui/themes/styles.css"
import { Header } from "../common/layout/header"
import { Todolist } from "../common/todolists/ui/todolist"
import { Weather } from "../common/weather/ui/weather"
import { Box, Flex } from "@radix-ui/themes"

export default function HomePage() {
  return (
    <Box>
      <Header />

      <Flex justify={"between"} className={"bg-fuchsia-200"} p={"4"}>
        <Todolist />
        <Weather />
      </Flex>
    </Box>
  )
}
