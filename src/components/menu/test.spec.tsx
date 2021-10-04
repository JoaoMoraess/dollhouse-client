import { render, screen } from '@testing-library/react'

import { Menu } from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    render(<Menu />)
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })
})
