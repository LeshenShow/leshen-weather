import { Text, TextField } from "@radix-ui/themes"
import { useState, type ChangeEvent, type KeyboardEvent } from "react"

export const EditableArea = (props: Props) => {
  const [title, setTitle] = useState(props.value)
  const [isEditMode, setIsEditMode] = useState(false)

  const turnOnEditMode = () => {
    if (props.disabled) return
    setIsEditMode(true)
  }

  const turnOffEditMode = () => {
    setIsEditMode(false)
    props.onChange(title)
  }
  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  return (
    <>
      {isEditMode ? (
        <TextField.Root
          onChange={changeTitle}
          value={title}
          disabled={props.disabled}
          onBlur={turnOffEditMode}
          autoFocus
          //   aria-invalid={!!error}
        />
      ) : (
        <Text onDoubleClick={turnOnEditMode}>{props.value}</Text>
      )}
    </>
  )
}

type Props = {
  disabled?: boolean
  value: string
  onChange: (title: string) => void
}
