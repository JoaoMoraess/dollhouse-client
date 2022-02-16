import { InputHTMLAttributes, useEffect, useState } from 'react'

export type InputFileProps = {
  labelText?: string
  error?: string
  onInputChange?: (value: {buffer: Buffer, mimeType: string}) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputFile: React.FC<InputFileProps> = ({
  labelText,
  name,
  error,
  onInputChange,
  ...args
}) => {
  const [value, setValue] = useState<{buffer: Buffer, mimeType: string}>({ buffer: null, mimeType: '' })
  const [url, setUrl] = useState<string>(null)

  useEffect(() => {
    if (onInputChange) onInputChange(value)
  }, [value])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.currentTarget.files?.[0]
    if (newValue) {
      const reader = new FileReader()
      reader.readAsArrayBuffer(newValue)
      reader.onload = () => {
        setValue({ buffer: Buffer.from(reader.result as ArrayBuffer), mimeType: newValue.type })
        setUrl(URL.createObjectURL(newValue))
      }
    }
  }
  return (
  <div className="w-full flex flex-col gap-1" >
    {!!labelText && (
      <label className={'cursor-pointer text-xs text-gray-800'} data-testid="inputTextLabel" htmlFor={name}>{labelText}</label>
    )}
      <div className={`h-48 shadow-md bg-gray-200 outline-none border-b-2 ${error ? 'border-red-600' : 'border-gray-400'} rounded-sm text-gray-800 font-light`}>

        <label className='cursor-pointer w-full h-full flex items-center justify-center'>
          {(!!value.buffer && !!url) && (
            <div className='h-full w-full bg-no-repeat bg-contain bg-center' style={{ backgroundImage: `url(${url})` }} />
          )}
          {!value.buffer && (
            <span>Enviar Arquivo</span>
          )}
          <input
            className='pointer-events-auto hidden'
            data-testid="inputText"
            onChange={onChange}
            type="file"
            name={name}
            {...(labelText ? { id: name } : {})}
            {...args}
          />
        </label>
      </div>
    {!!error && <div className="text-sm text-red-600" data-testid="inputTextError">{error}</div>}
  </div>
  )
}
