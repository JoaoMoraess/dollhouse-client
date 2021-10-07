import { render, screen } from '@testing-library/react'

import { CartIcon } from '.'

describe('<CartIcon />', () => {
  it('should render the heading', () => {
    render(<CartIcon />)
    expect(screen.getByTestId('cartIcon')).toBeInTheDocument()
  })
})
