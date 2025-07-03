import { Box, Flex } from "@radix-ui/themes"
import { Header } from "layout/header"
import { Weather } from "features/weather/ui/weather"
import { Todolists } from "features/todolists/ui"
import { useAuthProtection } from "shared/hooks"

const MainPage = () => {
  const { loading } = useAuthProtection()

  if (loading) return null

  return (
    <Box className="min-h-screen bg-[var(--accent-1)]">
      <Header />
      <Flex justify={"start"} p={"2"} className="">
        <Todolists />
        <Weather />
      </Flex>
    </Box>
  )
}
export default MainPage
