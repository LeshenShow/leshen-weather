import { PlusIcon } from "@radix-ui/react-icons"
import { Badge, Flex, IconButton, TextField } from "@radix-ui/themes"
import { useState, type ChangeEvent, type KeyboardEvent } from "react"
import { useErrorReset } from "./hooks"

export const CreateNewItem = (props: Props) => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState<string | null>(null)
  useErrorReset(error, () => setError(null))

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
    <Flex direction={"row"} m={"1"} mb={"2"} align={"center"} gap={"1"}>
      <TextField.Root
        onChange={changeHandler}
        onKeyDown={changeItemOnEnterHandler}
        value={title}
        placeholder={"Введите название"}
        aria-invalid={!!error}
        disabled={props.disabled}
      />
      {error ? (
        <Badge size={"3"} children={"Поле не должно быть пустым"} color="red"></Badge>
      ) : (
        <IconButton
          onClick={createItemHandler}
          children={<PlusIcon />}
          disabled={props.disabled}
          size={"2"}
          variant="outline"
        />
      )}
    </Flex>
  )
}
type Props = {
  onCreateItem: (title: string) => void
  disabled?: boolean
}
