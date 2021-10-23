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
  <div className="w-full flex flex-col gap-1" data-testid="inputTextWrapp">
    {!!labelText && (
      <label className={'cursor-pointer text-xs text-gray-800'} data-testid="inputTextLabel" htmlFor={name}>{labelText}</label>
    )}
    <input
      className={`shadow-md bg-gray-200 outline-none border-b-2 ${error ? 'border-red-600' : 'border-pink-600'} rounded-md pl-2 text-gray-800 font-light`}
      data-testid="inputText"
      value={value}
      onChange={onChange}
      type="text"
      name={name}
      {...(labelText ? { id: name } : {})}
      {...args}
    />
    {!!error && <div className="text-sm text-red-600" data-testid="inputTextError">{error}</div>}
  </div>
  )
}
