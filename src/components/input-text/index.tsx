import { InputHTMLAttributes, useState } from 'react'

export type InputTextProps = {
  labelText?: string
  initialValue?: string
  error?: string
  onInputChange?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputText: React.FC<InputTextProps> = ({
  labelText,
  name,
  error,
  initialValue = '',
  onInputChange,
  ...args
}) => {
  const [value, setValue] = useState<string>(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }
  return (
  <div data-testid="inputTextWrapp">
    {!!labelText && (
      <label data-testid="inputTextLabel" htmlFor={name}>{labelText}</label>
    )}
    <input
      data-testid="inputText"
      value={value}
      onChange={onChange}
      type="text"
      name={name}
      {...(labelText ? { id: name } : {})}
      {...args}
    />
    {!!error && <div data-testid="inputTextError">{error}</div>}
  </div>
  )
}
