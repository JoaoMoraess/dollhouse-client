import { render, screen, waitFor } from '@testing-library/react'
import useEvent from '@testing-library/user-event'

import { InputText } from '.'

describe('<InputText />', () => {
  it('should render the heading', () => {
    render(<InputText />)
    expect(screen.getByTestId('inputTextWrapp')).toBeInTheDocument()
  })

  it('should show error', () => {
    render(<InputText name='anyName' labelText="Label" error="Email invalido" />)
    const error = screen.getByTestId('inputTextError')

    expect(error).toBeTruthy()
    expect(error.textContent).toBe('Email invalido')
  })

  it('should show the initial value in input', () => {
    render(<InputText name='anyName' initialValue="valor inicial" labelText="Label" />)

    const input = screen.getByTestId('inputText')
    expect(input).toHaveValue('valor inicial')
  })

  it('should change value on typing', async () => {
    const onInputChange = jest.fn()
    render(<InputText onInputChange={onInputChange} name='anyName' labelText="Label" />)
    const input = screen.getByTestId('inputText')

    const text = 'texto para input'

    useEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })
})
