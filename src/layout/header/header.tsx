import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Badge, Button, Flex, IconButton } from "@radix-ui/themes"
import { useLogoutMutation } from "features/todolists/model/auth-api"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { baseTodolistsApi } from "shared/api"
import { LOCAL_STORAGE_AUTH_TOKEN, TAGS } from "shared/constants"
import { ResultCode } from "shared/enums"
import { useAppDispatch } from "store/store"

export function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()
  const loginRouter = () => router.push("/login")
  const toggleThemeHandler = () => setTheme(theme === "dark" ? "light" : "dark")
  const logoutHandler = () => {
    logout()
      .then(res => {
        if (res.data?.resultCode === ResultCode.Success) {
          localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN)
        }
      })
      .then(() => {
        dispatch(baseTodolistsApi.util.invalidateTags([TAGS.auth]))
      })
    loginRouter()
  }
  return (
    <Flex
      position={"sticky"}
      top={"0"}
      height={"50px"}
      gap={"2"}
      mx={"2"}
      align={"center"}
      justify={"center"}
      className="bg-[var(--accent-2)]"
    >
      <Badge size={"3"} variant="solid" children={":)__HEADER__(:"} />
      <IconButton onClick={toggleThemeHandler} children={theme === "dark" ? <MoonIcon /> : <SunIcon />} />
      <Button children={"Logout"} onClick={logoutHandler} variant="solid" color="plum" />
      {/* <CustomIconButton onClick={toggleThemeHandler} icon={theme === "dark" ? <MoonIcon /> : <SunIcon />} /> */}
      {/* <CustomButton children={"Logout"} onClick={logoutHandler} variant="solid" color="plum" /> */}
    </Flex>
  )
}
