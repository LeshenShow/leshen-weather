import { Box, Flex } from "@radix-ui/themes"
import { Header } from "layout/header"
import { Weather } from "features/weather/ui/weather"
import { Todolists } from "features/todolists/ui"
import { useAuthProtection } from "shared/hooks"

const MainPage = () => {
  const { loading } = useAuthProtection()

  if (loading) return null

  return (
    <Box>
      <Header />
      <Flex justify={"between"} className={"bg-fuchsia-800"} p={"2"}>
        <Todolists />
        <Weather />
      </Flex>
    </Box>
  )
}
export default MainPage
