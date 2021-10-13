import { render, screen } from '@testing-library/react'

import { CartList } from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    render(<CartList />)
    expect(screen.getByTestId('cartList')).toBeInTheDocument()
  })
})
