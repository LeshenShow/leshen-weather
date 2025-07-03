import { Box, Button, Checkbox, Grid, TextField } from "@radix-ui/themes"
import { type TodolistLoginArgs } from "features/todolists/model"
import { useRouter } from "next/router"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { useLoginMutation } from "features/todolists/model/auth-api"
import { LOCAL_STORAGE_AUTH_TOKEN } from "shared/constants/todolist-const"
import { ResultCode } from "shared/enums/todolist-enums"
import { useEffect, useState } from "react"
import { getTodolistAuthToken } from "shared/utils/auth"
const Login = (props: Props) => {
  const router = useRouter()
  const [login] = useLoginMutation()
  const [checking, setChecking] = useState(true)
  useEffect(() => {
    const token = getTodolistAuthToken()
    token ? router.replace("/main") : setChecking(false)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<TodolistLoginArgs>({
    defaultValues: { email: "", password: "", rememberMe: false },
  })
  const onSubmit: SubmitHandler<TodolistLoginArgs> = (data) => {
    login(data).then((res) => {
      console.log("data", res)
      if (res.data?.resultCode === ResultCode.Success) {
        localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, res.data.data.token)
        router.replace("/main")
        reset()
      }
    })
  }
  if (checking) {
    return <div>Загрузка...</div> // или спиннер
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <p>
            To login get registered
            <a href="https://social-network.samuraijs.com" target="_blank" rel="noreferrer">
              here
            </a>
          </p>
          <p>or use common test account credentials:</p>
          <p>
            <b>Email:</b> free@samuraijs.com
          </p>
          <p>
            <b>Password:</b> free
          </p>

          <Box>
            <TextField.Root
              placeholder="Email"
              type="email"
              {...register("email", { required: "Email обязателен" })}
            ></TextField.Root>
            {errors.email && <span>{errors.email.message}</span>}
            <TextField.Root
              type="password"
              placeholder="password"
              {...register("password", { required: "password обязателен" })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <div>
              <Box>
                <Checkbox {...register("rememberMe")} />
                <TextField.Root>Remember me</TextField.Root>
              </Box>
            </div>
            <Button type="submit">Login</Button>
          </Box>
        </Box>
      </form>
    </>
  )
}
type Props = {}
export default Login
