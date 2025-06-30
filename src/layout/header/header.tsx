import { Box, Button, Section } from "@radix-ui/themes"
import { useRouter } from "next/router"

export function Header() {
  const router = useRouter()
  const handleLoginClick = () => router.push("/login")

  return (
    <Box className={"bg-fuchsia-400"}>
      HEADER
      <Button onClick={handleLoginClick} variant="solid" color="blue">
        Login
      </Button>
    </Box>
  )
}
