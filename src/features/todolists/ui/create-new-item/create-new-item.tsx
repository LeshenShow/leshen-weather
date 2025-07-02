import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes"
import { useState, type ChangeEvent, type ChangeEventHandler, type KeyboardEvent } from "react"

export const CreateNewItem = (props: Props) => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState<string | null>(null)

  const createItemHandler = () => {
    const checkTitle = title.trim()
    if (checkTitle !== "") {
      props.onCreateItem(title)
      setTitle("")
    } else setError("Поле не должно быть пустым")
  }
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
    setError(null)
  }
  const changeItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) =>
    event.key === "Enter" && createItemHandler()

  return (
    <Flex direction={"column"} m={"1"}>
      <Flex>
        <TextField.Root
          onChange={changeHandler}
          onKeyDown={changeItemOnEnterHandler}
          value={title}
          placeholder="Введите название"
          aria-invalid={!!error}
          style={{ borderColor: error ? "red" : undefined }}
          disabled={props.disabled}
        />
        <IconButton onClick={createItemHandler} disabled={props.disabled}>
          <PlusIcon />
        </IconButton>
      </Flex>
      <Box mt={"1"} height={"20px"} style={{ visibility: error ? "visible" : "hidden" }}>
        <Text color="red" size={"2"}>
          {error || "error place"}
        </Text>
      </Box>
    </Flex>
  )
}
type Props = {
  onCreateItem: (title: string) => void
  disabled?: boolean
}
