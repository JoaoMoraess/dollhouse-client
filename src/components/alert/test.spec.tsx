import { render, screen } from '@testing-library/react'

import { Alert } from '.'
import { mock } from './mock'

describe('<Alert />', () => {
  it('should render the heading', () => {
    render(<Alert {...mock} />)
    expect(screen.getByTestId('alertComponent')).toBeInTheDocument()
  })
})
